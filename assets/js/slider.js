document.addEventListener("DOMContentLoaded", function () {

    var thmbs = document.querySelectorAll(".gallery__cnt__thmb a");

    thmbs.forEach(function (t) {

        t.addEventListener("click", function (ev) {
            ev.preventDefault();
            ev.target.getAttribute("href");

            var slide_overlay = document.createElement("div");
            slide_overlay.setAttribute("class", "overlay");

            var slide_cnt = document.createElement("div");
            slide_cnt.setAttribute("class", "overlay__cnt");

            slide_overlay.appendChild(slide_cnt);


            var curr_img = document.createElement("img");
            curr_img.setAttribute("data-idx", ev.target.getAttribute("data-idx"));
            curr_img.setAttribute("src", ev.target.getAttribute("href"));

            var curr_img_cnt = document.createElement("div");
            curr_img_cnt.setAttribute("class", "overlay__slide");

            curr_img_cnt.appendChild(curr_img);

            // NAVIGATION //
            var prev_cnt = document.createElement("div");
            prev_cnt.innerHTML = "<span></span>";
            prev_cnt.setAttribute("class", "overlay__prev");

            var next_cnt = document.createElement("div");
            next_cnt.innerHTML = "<span></span>";
            next_cnt.setAttribute("class", "overlay__next");
            // NAVIGATION //

            var exit_cnt = document.createElement("div");
            exit_cnt.setAttribute("class", "exit");

            slide_overlay.appendChild(exit_cnt);

            slide_cnt.appendChild(curr_img_cnt);

            // PREV NEXT INDEXES AND IMAGES //
            var prev_idx = parseInt(curr_img.getAttribute("data-idx")) - 1;


            if (prev_idx == -1) {
                prev_idx = thmbs.length - 1;
            }

            var prev_src = document.querySelector(".gallery__cnt__thmb a[data-idx='" + prev_idx + "'");


            var prev_img = document.createElement("img");
            prev_img.setAttribute("data-idx", prev_src.getAttribute("data-idx"));
            prev_img.setAttribute("src", prev_src);

            var prev_img_cnt = document.createElement("div");
            prev_img_cnt.setAttribute("class", "overlay__slide");
            prev_img_cnt.appendChild(prev_img);


            var next_idx = parseInt(curr_img.getAttribute("data-idx")) + 1;

            if (next_idx == thmbs.length) {
                next_idx = 0;
            }

            var next_src = document.querySelector(".gallery__cnt__thmb a[data-idx='" + next_idx + "'");


            var next_img = document.createElement("img");
            next_img.setAttribute("data-idx", next_src.getAttribute("data-idx"));
            next_img.setAttribute("src", next_src);

            var next_img_cnt = document.createElement("div");
            next_img_cnt.setAttribute("class", "overlay__slide scale");
            next_img_cnt.appendChild(next_img);

            var last_idx = next_idx + 1;
            var last_src = document.querySelector(".gallery__cnt__thmb a[data-idx='" + last_idx + "'");


            // PREV NEXT INDEXES AND IMAGES //


            slide_cnt.prepend(prev_img_cnt);
            slide_cnt.append(next_img_cnt);
            //slide_cnt.append(last_img_cnt);


            slide_overlay.append(prev_cnt);
            slide_overlay.append(next_cnt);


            ev.target.parentNode.parentNode.parentNode.append(slide_overlay);


            (function ($, undefined) {

                    $.easing.jswing = $.easing.swing;

                    $.extend($.easing,
                        {
                            def: 'easeOutQuad',
                            swing: function (x, t, b, c, d) {
                                //alert($.easing.default);
                                return $.easing[$.easing.def](x, t, b, c, d);
                            },
                            easeInQuad: function (x, t, b, c, d) {
                                return c * (t /= d) * t + b;
                            },
                            easeOutQuad: function (x, t, b, c, d) {
                                return -c * (t /= d) * (t - 2) + b;
                            },
                            easeInOutQuad: function (x, t, b, c, d) {
                                if ((t /= d / 2) < 1) return c / 2 * t * t + b;
                                return -c / 2 * ((--t) * (t - 2) - 1) + b;
                            },
                            easeInCubic: function (x, t, b, c, d) {
                                return c * (t /= d) * t * t + b;
                            },
                            easeOutCubic: function (x, t, b, c, d) {
                                return c * ((t = t / d - 1) * t * t + 1) + b;
                            },
                            easeInOutCubic: function (x, t, b, c, d) {
                                if ((t /= d / 2) < 1) return c / 2 * t * t * t + b;
                                return c / 2 * ((t -= 2) * t * t + 2) + b;
                            },
                            easeInQuart: function (x, t, b, c, d) {
                                return c * (t /= d) * t * t * t + b;
                            },
                            ease: function (x, t, b, c, d) {
                                return -c * ((t = t / d - 1) * t * t * t - 1) + b;
                            },
                            easeInOutQuart: function (x, t, b, c, d) {
                                if ((t /= d / 2) < 1) return c / 2 * t * t * t * t + b;
                                return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
                            },
                            easeInQuint: function (x, t, b, c, d) {
                                return c * (t /= d) * t * t * t * t + b;
                            },
                            easeOutQuint: function (x, t, b, c, d) {
                                return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
                            },
                            easeInOutQuint: function (x, t, b, c, d) {
                                if ((t /= d / 2) < 1) return c / 2 * t * t * t * t * t + b;
                                return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
                            },
                            easeInSine: function (x, t, b, c, d) {
                                return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
                            },
                            easeOutSine: function (x, t, b, c, d) {
                                return c * Math.sin(t / d * (Math.PI / 2)) + b;
                            },
                            easeInOutSine: function (x, t, b, c, d) {
                                return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
                            },
                            easeInExpo: function (x, t, b, c, d) {
                                return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
                            },
                            easeOutExpo: function (x, t, b, c, d) {
                                return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
                            },
                            easeInOutExpo: function (x, t, b, c, d) {
                                if (t == 0) return b;
                                if (t == d) return b + c;
                                if ((t /= d / 2) < 1) return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
                                return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
                            },
                            easeInCirc: function (x, t, b, c, d) {
                                return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
                            },
                            easeOutCirc: function (x, t, b, c, d) {
                                return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
                            },
                            easeInOutCirc: function (x, t, b, c, d) {
                                if ((t /= d / 2) < 1) return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
                                return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
                            },
                            easeInElastic: function (x, t, b, c, d) {
                                var s = 1.70158;
                                var p = 0;
                                var a = c;
                                if (t == 0) return b;
                                if ((t /= d) == 1) return b + c;
                                if (!p) p = d * .3;
                                if (a < Math.abs(c)) {
                                    a = c;
                                    var s = p / 4;
                                }
                                else var s = p / (2 * Math.PI) * Math.asin(c / a);
                                return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
                            },
                            easeOutElastic: function (x, t, b, c, d) {
                                var s = 1.70158;
                                var p = 0;
                                var a = c;
                                if (t == 0) return b;
                                if ((t /= d) == 1) return b + c;
                                if (!p) p = d * .3;
                                if (a < Math.abs(c)) {
                                    a = c;
                                    var s = p / 4;
                                }
                                else var s = p / (2 * Math.PI) * Math.asin(c / a);
                                return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
                            },
                            easeInOutElastic: function (x, t, b, c, d) {
                                var s = 1.70158;
                                var p = 0;
                                var a = c;
                                if (t == 0) return b;
                                if ((t /= d / 2) == 2) return b + c;
                                if (!p) p = d * (.3 * 1.5);
                                if (a < Math.abs(c)) {
                                    a = c;
                                    var s = p / 4;
                                }
                                else var s = p / (2 * Math.PI) * Math.asin(c / a);
                                if (t < 1) return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
                                return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
                            },
                            easeInBack: function (x, t, b, c, d, s) {
                                if (s == undefined) s = 1.70158;
                                return c * (t /= d) * t * ((s + 1) * t - s) + b;
                            },
                            easeOutBack: function (x, t, b, c, d, s) {
                                if (s == undefined) s = 1.70158;
                                return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
                            },
                            easeInOutBack: function (x, t, b, c, d, s) {
                                if (s == undefined) s = 1.70158;
                                if ((t /= d / 2) < 1) return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
                                return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
                            },
                            easeInBounce: function (x, t, b, c, d) {
                                return c - $.easing.easeOutBounce(x, d - t, 0, c, d) + b;
                            },
                            easeOutBounce: function (x, t, b, c, d) {
                                if ((t /= d) < (1 / 2.75)) {
                                    return c * (7.5625 * t * t) + b;
                                } else if (t < (2 / 2.75)) {
                                    return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
                                } else if (t < (2.5 / 2.75)) {
                                    return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
                                } else {
                                    return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
                                }
                            },
                            easeInOutBounce: function (x, t, b, c, d) {
                                if (t < d / 2) return $.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
                                return $.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
                            }
                        });


                    var slide_width = $('.overlay__cnt > .overlay__slide').first().width();
                    var n_slides = $('.overlay__cnt > .overlay__slide').length;

                    /*$('.slide_box').width(slide_width).css('overflow', 'hidden');
                    $('.slide_list').css('display', 'flex').width(slide_width * n_slides);*/

                    function nextImage() {
                        $(function () {
                            var $images = $(".overlay__cnt .overlay__slide img");
                            var $images_H = $images.parent().height();

                            $images.css({height: $images_H + "px", width: $images_H * 1.5 + "px"});

                            if ($images.width() + 40 >= window.innerWidth) {
                                $images.css({height: "auto", width: "100%"})
                            }

                        });
                        $('.overlay__cnt').animate({
                            'margin-left': (-1) * slide_width
                        }, 375, "ease", function () {
                            $('.overlay__cnt > .overlay__slide').first().remove();

                            var $last_idx = $(".overlay__cnt div:nth-child(2)")[0].childNodes[0].getAttribute("data-idx");


                            $last_idx = parseInt($last_idx) + 1;
                            var $last_src = $(".gallery__cnt__thmb a[data-idx='" + $last_idx + "']").attr("href");

                            var last_img = document.createElement("img");
                            last_img.setAttribute("src", $last_src);
                            last_img.setAttribute("data-idx", $last_idx);
                            var last_img_cnt = document.createElement("div");
                            last_img_cnt.setAttribute("class", "overlay__slide");

                            last_img_cnt.appendChild(last_img);


                            $('.overlay__cnt > .overlay__slide').last().after(last_img_cnt);
                            $('.overlay__cnt').css('margin-left', 0);
                        });

                    };

                    function prevImage() {
                        $(function () {
                            var $images = $(".overlay__cnt .overlay__slide img");
                            var $images_H = $images.parent().height();

                            $images.css({height: $images_H + "px", width: $images_H * 1.5 + "px"});

                            if ($images.width() + 40 >= window.innerWidth) {
                                $images.css({height: "auto", width: "100%"})
                            }

                        });
                        $('.overlay__cnt > .overlay__slide').last().remove();

                        var $first_idx = $(".overlay__cnt div:nth-child(2)")[0].childNodes[0].getAttribute("data-idx");


                        $first_idx = parseInt($first_idx) - 2;
                        var $first_src = $(".gallery__cnt__thmb a[data-idx='" + $first_idx + "']").attr("href");

                        var first_img = document.createElement("img");
                        first_img.setAttribute("src", $first_src);
                        first_img.setAttribute("data-idx", $first_idx);
                        var first_img_cnt = document.createElement("div");
                        first_img_cnt.setAttribute("class", "overlay__slide");

                        first_img_cnt.appendChild(first_img);


                        $('.overlay__cnt > .overlay__slide').first().before(first_img_cnt);
                        $('.overlay__cnt').css('margin-left', (-1) * slide_width);

                        $('.overlay__cnt').animate({
                            'margin-left': 0
                        }, 375, "ease");

                    }

                    $(".overlay__next").on('click', nextImage);
                    document.addEventListener("keydown", function (ev2) {
                        if (ev2.keyCode == 39) {
                            nextImage();
                        }
                    });

                    $(".overlay__prev").on('click', prevImage);

                    document.addEventListener("keydown", function (ev2) {
                        if (ev2.keyCode == 37) {
                            prevImage();
                        }
                    })


                    document.addEventListener('touchstart', handleTouchStart, false);
                    document.addEventListener('touchmove', handleTouchMove, false);

                    var xDown = null;
                    var yDown = null;

                    function handleTouchStart(evt) {
                        xDown = evt.touches[0].clientX;
                        yDown = evt.touches[0].clientY;
                    };

                    function handleTouchMove(evt) {
                        if (!xDown || !yDown) {
                            return;
                        }

                        var xUp = evt.touches[0].clientX;
                        var yUp = evt.touches[0].clientY;

                        var xDiff = xDown - xUp;
                        var yDiff = yDown - yUp;

                        if (Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
                            if (xDiff > 0) {
                                nextImage();
                            } else {
                                prevImage();
                            }
                        } else {
                            if (yDiff > 0) {
                                /* up swipe */
                            } else {
                                /* down swipe */
                            }
                        }
                        /* reset values */
                        xDown = null;
                        yDown = null;
                    };

                }

            )(jQuery);

            ///// IMAGE SIZING /////


            function doImageSize() {
                var $images = $(".overlay__cnt .overlay__slide img");

                $(function () {
                    var $images_H = $images.parent().height();

                    $images.css({height: $images_H + "px", width: $images_H * 1.5 + "px"});

                    if ($images.width() + 40 >= window.innerWidth) {
                        $images.css({height: "auto", width: "100%"})
                    }

                });
            }

            doImageSize();
            window.addEventListener("resize", doImageSize);

            ///// IMAGE SIZING /////

            document.addEventListener("keydown", function (ev2) {
                if (ev2.keyCode == 27) {
                    slide_overlay.remove();
                }
            })

        })

    })


})