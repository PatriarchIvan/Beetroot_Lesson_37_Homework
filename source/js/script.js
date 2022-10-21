// Declare some global variables for later use:
let container = $("#rating-container");
let index = -1;
// 1.  Capture the hover event over the div (circle)
$(".rating__star").hover(
    // When the mouse hover over any circle. All the circles to the left change color to yellow
    function () {
        $(this).removeClass("rating-chosen").addClass("rating-hover");
        $(this).prevAll().removeClass("rating-chosen").addClass("rating-hover");
        $(this).nextAll().removeClass("rating-chosen");
    },
    //When the mouse move away, the color yellow disappears:	
    function () {
        $(this).removeClass("rating-hover");
        $(this).prevAll().removeClass("rating-hover");

        if (index >= 0) {
            //Return the previously chosen choice (if any) back in green
            // Recall the choice using its index
            // "get" returns a DOM element, NOT a jQuery object
            let chosenCircle = container.children().get(index);
            //Convert to jQuery object
            let $rating = $(chosenCircle);
            //Make them green again
            $rating.addClass("rating-chosen");
            $rating.prevAll().addClass("rating-chosen");
        }
    }
);
// 2. Capture the click event when the user click on a circle.
// All the circles to the left change color to green 
// The color stays green as the mouse move away
$(".rating__star").click(
    function () {
        $(this).addClass("rating-chosen");
        $(this).prevAll().addClass("rating-chosen");
        // Remember the position of the click so it can be retrieved later
        index = $(this).index();
        console.log(index);
    }
);


(function ($) {
	$.fn.loading = function () {
		var DEFAULTS = {
			backgroundColor: '#D9D9D9',
			progressColor: 'linear-gradient(196.37deg, #00D4BE 6.95%, #1AE780 21.96%, #1AE780 73.66%, #00D4BE 87%)',
			percent: 87,
			duration: 2000
		};	
		
		$(this).each(function () {
			var $target  = $(this);

			var opts = {
			backgroundColor: $target.data('color') ? $target.data('color').split(',')[0] : DEFAULTS.backgroundColor,
			progressColor: $target.data('color') ? $target.data('color').split(',')[1] : DEFAULTS.progressColor,
			percent: $target.data('percent') ? $target.data('percent') : DEFAULTS.percent,
			duration: $target.data('duration') ? $target.data('duration') : DEFAULTS.duration
			};
	
			$target.append('<div class="background"></div><div class="rotate"></div><div class="left"></div><div class="right"></div><div class=""><span>' + opts.percent + '%</span></div>');
	
			$target.find('.background').css('background-color', opts.backgroundColor);
			$target.find('.left').css('background-color', opts.backgroundColor);
			$target.find('.rotate').css('background-color', opts.progressColor);
			$target.find('.right').css('background-color', opts.progressColor);
	
			var $rotate = $target.find('.rotate');
			setTimeout(function () {	
				$rotate.css({
					'transition': 'transform ' + opts.duration + 'ms linear',
					'transform': 'rotate(' + opts.percent * 3.6 + 'deg)'
				});
			},1);		

			if (opts.percent > 50) {
				var animationRight = 'toggle ' + (opts.duration / opts.percent * 50) + 'ms step-end';
				var animationLeft = 'toggle ' + (opts.duration / opts.percent * 50) + 'ms step-start';  
				$target.find('.right').css({
					animation: animationRight,
					opacity: 1
				});
				$target.find('.left').css({
					animation: animationLeft,
					opacity: 0
				});
			} 
		});
	};
})(jQuery);

$(".progress-bar").loading({
    backgroundColor: '#D9D9D9',
	progressColor: 'linear-gradient(196.37deg, #00D4BE 6.95%, #1AE780 21.96%, #1AE780 73.66%, #00D4BE 87%)',
	percent: 87,
	duration: 2000
});

$(document).ready(
	$('.card__buy').toggle(),
	$('.card__info').toggle()
);

$('#body').click(() => {
	$('.card__body').show('slow');
	$('.card__buy').hide('slow');
	$('.card__info').hide('slow');
});

$('#buy').click(() => {
	$('.card__buy').show('slow');
	$('.card__info').hide('slow');
	$('.card__body').hide('slow');
});

$('#info').click(() => {
	$('.card__info').show('slow');
	$('.card__buy').hide('slow');
	$('.card__body').hide('slow');
});