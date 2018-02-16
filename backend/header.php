<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Backend</title>
    <link rel="stylesheet" href="css/main.css">
</head>
<body>
<header>
    <div class="title">
        <h1>Admin</h1>
    </div>
    <div class="frontend">
        <a target="_blank" href="<?php echo APP_ROOT ?>home">Frontend</a>
    </div>
    <nav class="nav">
        <ul class="nav__list">
            <li class="nav__list__item <?php echo ($page == 'dashboard') ? 'active' : '' ?>"><a href="<?php echo APP_ROOT ?>backend/?page=dashboard">Upload</a></li>
            <li class="nav__list__item <?php echo ($page == 'catalog') ? 'active' : '' ?>"><a href="<?php echo APP_ROOT ?>backend/?page=catalog">Catalog</a></li>
            <li class="nav__list__item"><a href="<?php echo APP_ROOT ?>backend/?page=logout">Logout</a></li>
        </ul>
    </nav>
</header>
<div class="html-border"></div>
<main class="backend">


