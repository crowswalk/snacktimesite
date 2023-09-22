$(document).ready(function() {

    $('.growImage').mouseover(function() {
        //moving the div left a bit is completely optional
        //but should have the effect of growing the image from the middle.
        $(this).stop().animate({ "width": "80%" }, 400, 'swing');
    }).mouseout(function() {
        $(this).stop().animate({ "width": "100%" }, 200, 'swing');
    });;
});