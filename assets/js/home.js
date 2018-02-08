document.addEventListener("DOMContentLoaded", function () {


    var nav = document.querySelector(".nav");


    var handsvg_paths = document.querySelector(".hand-svg path");

    var hero_cnt = document.querySelector(".hero");
    var hero_img = document.querySelector(".hero__cnt__img");
    var hero_title = document.querySelector(".hero__cnt__title");
    var intro_links = document.querySelectorAll(".skills a");
    var handsvg = document.querySelector(".hand-svg");

    var home_tl = new TimelineMax();

    home_tl.delay(0.5);
    home_tl.duration(1.4);

    home_tl.from([document.querySelector(".hero__cnt__title h2"), document.querySelector(".hero__cnt__title h2 span")], 0.45, {
        delay: 0.2,
        y: -25,
        opacity: 0,
        ease: Power3.easeOut
    })
        .from(document.querySelector(".skills .skillsA"), 0.35, {
            x: -25,
            opacity: 0,
            ease: Power3.easeOut
        }, "-=0.25")
        .staggerFrom(document.querySelectorAll(".skills a"), 0.35, {
            y: 25,
            opacity: 0,
            ease: Power3.easeOut
        }, 0.1)
        /*.from(hero_img, 0.65, {

            y: 10,
            opacity: 0,
            ease: Power2.easeOut
        }, "-=0.7")*/


    /*handsvg_paths.classList.add("draw");*/

    var goto_links = document.querySelectorAll("[data-goto]");
    var get_url = window.location.href;


    var home_tl_dur = home_tl.duration();

    goto_links.forEach(function (t) {

        var goto = t.getAttribute("href");


        t.addEventListener("click", function (e) {
            e.preventDefault();

            home_tl.reverse();

            document.querySelector(".loading").style.transform = "scaleX(1)";
            document.querySelector(".loading").style.webkitTransform = "scaleX(1)";

            setTimeout(function () {
                if (get_url.substring(get_url.indexOf("?") + 1)) {
                    console.log("fin");
                    var del_url = get_url.substring(get_url.indexOf("?") + 0);
                    window.location = get_url.replace(del_url, goto);
                } else {
                    window.location = get_url + goto;
                }
            }, 1650);

        });

    });


    /*window.addEventListener("scroll", function (e) {

        hero_title.style.transform = "translateY(" + 0 + window.pageYOffset / 10 + "%)";


        /!*handsvg.style.opacity = 1 - window.pageYOffset / 150;*!/

        var main = document.querySelector("main");
        var mainOff = main.offsetTop;

        if (window.pageYOffset >= mainOff - 10) {
            nav.classList.remove("hideNav");
        } else {
            nav.classList.add("hideNav");
        }


    });*/


    /*hero_img.querySelector("img").addEventListener('mousemove', function (e) {
        var rect = hero_img.querySelector("img").getBoundingClientRect();
        var x = 0.5 - ((e.clientX - rect.left) / rect.width);
        var y = 0.5 - ((e.clientY - rect.top) / rect.height);


        /!*hero_img.style.transform = "translate(-55px, 25px)";
        hero_img.style.width = "calc(75% - 55px)";*!/


        hero_img.querySelector("img").style.webkitTransform = "rotateX(" + y * 7.5 + "deg) rotateY(" + x * -7.5 + "deg)";
        hero_img.querySelector("img").style.transform = "rotateX(" + y * 7.5 + "deg) rotateY(" + x * -7.5 + "deg)";


    });*/

/*    hero_img.querySelector("img") .addEventListener('mouseleave', function (e) {
        e.preventDefault();

        /!*hero_img.style.transform = "translate(0px, 0px)";
        hero_img.style.width = "calc(65% - 55px)";*!/

        hero_img.querySelector("img").style.webkitTransform = "rotateX(0deg) rotateY(0deg)";
        hero_img.querySelector("img").style.transform = "rotateX(0deg) rotateY(0deg)";
    });*/


});