<?php
session_start();

define("APP_ROOT", "https://x-schoenberger.herokuapp.com/");


if (isset($_SESSION['login']) && $_SESSION['login'] !== 1 || !isset($_SESSION['login'])) {
    header('Location:' . APP_ROOT . 'login');
    exit();
}



include '../includes/dbconnect.php';
include "../includes/functions.php";


$page = (!isset($_GET['page'])) ? "dashboard" : $_GET['page'];


$content = "content/";
$title = "";



if ($page == "dashboard") {
    $content .= "dashboard.php";
    $title = "Dashboard";
} elseif ($page == 'catalog') {
    $content .= "catalog.php";
    $title = "Catalog";
} elseif($page == "update_catalog") {
    $content .= "update_catalog.php";
    $title = "Update Catalog";
} elseif ($page == 'logout') {
    session_destroy();
    header('Location:' . APP_ROOT . 'login');
    exit();
}




include "header.php";
include $content;
include "footer.php";