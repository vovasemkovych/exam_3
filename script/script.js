'use strict';
function menuOnClick() {
    document.querySelector("#menu-bar").classList.toggle("change");
    document.querySelector("#nav").classList.toggle("change");
    document.querySelector("#menu-bg").classList.toggle("change-bg");
}
document.querySelector('#menu-bar').addEventListener('click', menuOnClick())

let smoothScroll = new scrollToSmooth('a', {
    targetAttribute: 'href',
    duration: 400,
    durationRelative: false,
    durationMin: false,
    durationMax: false,
    easing: 'easeOutCubic',
    // onScrollStart: (data) => { console.log(data); },
    // onScrollUpdate: (data) => { console.log(data); },
    // onScrollEnd: (data) => { console.log(data); },
    fixedHeader: null
})
smoothScroll.init();

$(document).ready(function () {
    $('#spotify').attr('src', 'https://open.spotify.com/embed/album/2ITVvrNiINKRiW7wA3w6w6?utm_source=generator');
});

$(document).ready(function () {
    $('#menu-bar').click();
});



$('.search').click(() => {
    $('.smenu').addClass('active_flex');
})
$('.smenu__close').click(() => {
    $('.smenu').removeClass('active_flex');
})

$(document).ready(function () {
    $('.start_slide2').fadeOut();
});

$('.point1').click(() => {
    $('.start_slide1').fadeIn(500, () => {
        $('.start_slide2').fadeOut(500);
    });

})
$('.point2').click(() => {
    $('.start_slide2').fadeIn(500, () => {
        $('.start_slide1').fadeOut(500);
    });
})

$(document).ready(function () {
    $('.europe').fadeOut();
});

$('.usa').click(() => {
    $('.america').fadeIn(500, () => {
        $('.europe').fadeOut(500);
    });

})
$('.eur').click(() => {
    $('.europe').fadeIn(500, () => {
        $('.america').fadeOut(500);
    });
})


document.querySelector(".fas").addEventListener('click', () => {
    window.open("https://www.youtube.com/watch?v=OS8taasZl8k&ab_channel=RedHotChiliPeppers", '_blank')
})
document.querySelector(".tickets").addEventListener('click', () => {
    window.open("https://www.ticketmaster.com/event/1E005B3E463F5483", '_blank')
})


$(document).scroll(function () {
    let y = $(this).scrollTop();
    (y > 700) ? $('.header').css('background-color', 'rgba(19, 24, 29, 1)') : $('.header').css('background-color', 'rgba(19, 24, 29, 0.5)');
});

ScrollReveal().reveal('.ts', { duration: 1000 }, { delay: 600 }, { origin: 'right' });
ScrollReveal().reveal('.disk', { duration: 1000 }, { delay: 600 }, { origin: 'left' });
ScrollReveal().reveal('.time', { duration: 1000 }, { delay: 600 }, { origin: 'right' });
ScrollReveal().reveal('.band', { duration: 1000 }, { delay: 600 }, { origin: 'left' });
ScrollReveal().reveal('.tours', { duration: 1000 }, { delay: 600 }, { origin: 'right' });
ScrollReveal().reveal('.contacts', { duration: 1000 }, { delay: 600 }, { origin: 'left' });

let countDownDate = new Date("Jul 14, 2022 16:00:00").getTime();
let renew = setInterval(function () {
    let now = new Date().getTime();
    let timeleft = countDownDate - now;
    let days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    document.querySelector(".days").innerHTML = `${days}`
    document.querySelector(".hours").innerHTML = `${hours}`
    document.querySelector(".mins").innerHTML = `${minutes}`
    document.querySelector(".secs").innerHTML = `${seconds}`

    if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById("days").innerHTML = ""
        document.getElementById("hours").innerHTML = ""
        document.getElementById("mins").innerHTML = ""
        document.getElementById("secs").innerHTML = ""
        document.getElementById("end").innerHTML = "TIME UP!!";
    }
}, 1000)


// const maxTilt = 30; // Max card tilt (deg).

// $(".b-game-card")
//     .mousemove(function(evt) {
//         let bounding = mouseOverBoundingElem(evt);

//         let posX = bounding.width / 2 - bounding.x;
//         let posY = bounding.height / 2 - bounding.y;
//         let hypotenuseCursor = Math.sqrt(Math.pow(posX, 2) + Math.pow(posY, 2));
//         let hypotenuseMax = Math.sqrt(Math.pow(bounding.width / 2, 2) + Math.pow(bounding.height / 2, 2));
//         let ratio = hypotenuseCursor / hypotenuseMax;

//         $(".cover", this).css({
//             transform: `rotate3d(${posY / hypotenuseCursor}, ${-posX / hypotenuseCursor}, 0, ${ratio * maxTilt}deg)`,
//             filter: `brightness(${1.6 - bounding.y / bounding.height})` // 0.6 = offset, brightness will be from 0.6 to 1.6
//         });
//         $(".gloss", this).css({
//             transform: `translateX(${posX * ratio * 0.75}px) translateY(${posY * ratio}px)` // 0.75 = offset
//         });
//     })
//     .mouseleave(function() {
//         let css = {
//             transform: "",
//             filter: ""
//         };
//         $(".cover, .gloss", this).css(css);
//     });

// function mouseOverBoundingElem(evt) {
//     let bounding = evt.target.getBoundingClientRect();
//     let x = evt.originalEvent.pageX - Math.round(bounding.left);
//     let y = evt.originalEvent.pageY - Math.round(bounding.top);

//     return {
//         x: Math.max(0, x),
//         y: Math.max(0, y),
//         width: Math.round(bounding.width),
//         height: Math.round(bounding.height)
//     };
// }



