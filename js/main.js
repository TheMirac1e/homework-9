let burger = document.getElementById('burger');
function addBurger() {
    burger.classList.toggle('is-active');
}
$(document).ready(function () {
    $('.js-slick').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        mobileFirst: true,
        prevArrow: $('.slick-prev'),
        nextArrow: $('.slick-next'),
        dots: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});
let plusButton = document.getElementById('js-input-plus');
let minusButton = document.getElementById('js-input-minus');
let input = document.getElementById('js-input');
plusButton.addEventListener('click', function () {
    if (input.value == '') {
        input.value = 1
    } else {
        input.value = parseInt(input.value) + 1
    }
});
minusButton.addEventListener('click', function () {
    if (input.value <= 1) {
        return
    } else {
        input.value = input.value - 1
    }
});

input.addEventListener('input', function () {
    if (input.value <= 1) {
        input.value = 1
    }
});
$(function(){
    $('.js-form').validate();
});
document.querySelectorAll(".tabs").forEach((tab) => {
    const tabHeading = tab.querySelectorAll(".tabs__heading");
    const tabContent = tab.querySelectorAll(".tabs__content");
    let tabName;
    tabHeading.forEach((element) => {
        element.addEventListener("click", () => {
            tabHeading.forEach((item) => {
                item.classList.remove("tab-active");
            });
            element.classList.add("tab-active");
            tabName = element.getAttribute("data-tab-index");
            tabContent.forEach((item) => {
                item.classList.contains(tabName)
                    ? item.classList.add("tab-active")
                    : item.classList.remove("tab-active");
            });
        });
    });
});


