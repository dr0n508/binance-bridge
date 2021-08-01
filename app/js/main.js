$(document).ready(function() {

    // $(".selectBox").on("click", function(e) {
    //     $(this).toggleClass("show");
    //     var dropdownItem = e.target;
    //     var container = $(this).find(".selectBox__value");
    //     container.text(dropdownItem.text);
    //     $(dropdownItem)
    //         .addClass("active")
    //         .siblings()
    //         .removeClass("active");
    // });


    $(".btn-dropdown").on("click", function(e) {
        $(this).closest('.selectBox').toggleClass("show");
        var dropdownItem = $(this).closest('.selectBox');
        var container = $(this).find(".selectBox__value");
        container.text(dropdownItem.text);
        $(dropdownItem)
            .addClass("active")
            .siblings()
            .removeClass("active");
    });




});