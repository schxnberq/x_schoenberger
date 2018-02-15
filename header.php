<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Niklas Schoenberger - Digital Artist</title>
    <meta name="description"
          content="Niklas Schoenberger - Digital Artist, Photography, Webdesign & Webdevelopment, Photomanipulation, Music">
    <link rel="stylesheet" href="<?php echo APP_ROOT ?>assets/css/main.css">
    <link rel="icon" href="<?php echo APP_ROOT ?>assets/imgs/logo-smoke.png">
    
</head>
<body id="body">

<header class="header">
    <nav class="nav">
        <div class="nav__logo fadeNav">
            <h1><span class="visually-hidden">Niklas Schoenberger - Digital Artist</span><a tabindex="1" data-goto
                                                                                            href="<?php echo APP_ROOT ?>home">
                    <img src="<?php echo APP_ROOT ?>assets/imgs/logo-w.png" alt=""></a>
            </h1>
        </div>
        <div class="nav__icon fadeNav">
            <div class="nav__icon__breadcr">
                <h2 tabindex="2"><span
                            class="pseudo-active"><?php echo (!isset($_GET['page'])) ? "home" : $page[0]; ?></span></h2>
            </div>
            <div class="nav__icon__cnt" tabindex="3">
                <svg id="deck_menu" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 197.92 160.32">
                    <title>deck_menu</title>
                    <polygon class="top_deck deck_menu_points"
                             points="8.03 44.27 100.03 0 190.03 44.27 100.03 92.99 8.03 44.27"
                             fill="none"
                             stroke="#231f20" stroke-miterlimit="10" stroke-width="7"/>
                    <polyline class="middle_deck deck_menu_points"
                              points="164.79 67.28 190.03 82.02 100.03 133.75 8.03 82.02 33.28 67.28" fill="none"
                              stroke="#231f20" stroke-miterlimit="10" stroke-width="7"/>
                    <polyline class="bottom_deck deck_menu_points"
                              points="164.75 105.83 190.03 120.84 97.25 172.29 8.03 120.76 30.5 105.83" fill="none"
                              stroke="#231f20" stroke-miterlimit="10" stroke-width="7"/>
                </svg>
            </div>
        </div>


        <div class="nav__menu">
            <div class="nav__menu__exit" tabindex="4">
                <span></span>
                <span></span>
            </div>

            <ul class="nav__menu__list">
                <li class="nav__menu__list__item">
                    <a href="<?php echo APP_ROOT ?>home"><span
                                class="<?php echo (!isset($page) || $page === 'home') ? ' pseudo-active' : ''; ?>">home</span></a>
                </li>
                <li class="nav__menu__list__item">
                    <span class="work-link">
                        <span class="<?php echo (!isset($page) || $page === 'work') ? ' pseudo-active' : ''; ?>">work</span>
                        <a href="<?php echo APP_ROOT ?>work/web">web</a>
                        <a href="<?php echo APP_ROOT ?>work/photography">photography</a>
                    </span>
                </li>
                <li class="nav__menu__list__item"><a href="<?php echo APP_ROOT ?>about"><span
                                class="<?php echo ($page === 'about') ? ' pseudo-active' : ''; ?>">about</span></a>
                </li>
                <li class="nav__menu__list__item"><a href="<?php echo APP_ROOT ?>contact"><span
                                class="<?php echo ($page === 'contact') ? ' pseudo-active' : ''; ?>">contact</span></a>
                </li>
            </ul>
            <ul class="nav__menu__social fadeNav">
                <li class="nav__menu__social__item"><a target="_blank" href="https://www.500px.com/x_schoenberger"><span
                                class="icon-500px"></span></a></li>
                <li class="nav__menu__social__item"><a target="_blank"
                                                       href="https://www.behance.net/x_schoenberger"><span
                                class="icon-behance"></span></a></li>
                <li class="nav__menu__social__item"><a target="_blank"
                                                       href="https://www.instagram.com/x_schoenberger"><span
                                class="icon-instagram"></span></a></li>
                <li class="nav__menu__social__item"><a target="_blank" href="https://www.soundcloud.com/by_eurus"><span
                                class="icon-soundcloud"></span></a></li>

            </ul>
        </div>


    </nav>

    <div class="html-border"></div>
    <div class="loading"></div>

</header>
<script>
    document.body.style.opacity = "0";
    setTimeout(function () {
        document.body.style.opacity = "1";
    }, 100)
</script>
<body>
<main class="main <?php echo (!isset($page[0]) || $page[0] == "home") ? 'home' : '' ?>">


