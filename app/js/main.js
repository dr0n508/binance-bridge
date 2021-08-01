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


    // $(".btn-dropdown").on("click", function(e) {
    //     $(this).closest('.selectBox').toggleClass("show");
    //
    //     var dropdownItem = e.target;
    //     console.log(dropdownItem);
    //     // var dropdownItem = $(this).closest('.selectBox');
    //     // var container = $(this).closest('.selectBox__value');
    //
    //
    //
    //     // container.text(dropdownItem.text);
    //     // $(dropdownItem)
    //     //     .addClass("active")
    //     //     .siblings()
    //     //     .removeClass("active");
    // });

    $(".selectBox").on("click", function(e) {
        $(this).toggleClass("show");

        var dropdownItem = e.target;



        console.log(dropdownItem.closest('.network-box'));
        // var dropdownItem = $(this).closest('.selectBox');
        var container = $(this).closest('.selectBox').find('.selectBox__value');

        console.log(container);


        // container.text(dropdownItem.text);
        $(dropdownItem)
            .addClass("active")
            .siblings()
            .removeClass("active");
    });



    //filter






});