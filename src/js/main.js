"use strict";
$(document).ready(function () {
    $(".box").hover(function () {
        $(this).addClass("active");
    }, function () {
        $(this).removeClass("active");
    });
});
