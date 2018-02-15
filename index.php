<?php

session_start();

define("APP_ROOT", "http://xschoenberger.com/");

include 'includes/dbconnect.php';
include 'includes/functions.php';

$content = "content/";
$title = null;

if (!isset($_SESSION['form-token'])) {
    $_SESSION['form-token'] = "";
}
if (!isset($_SESSION['login'])) {
    $_SESSION['login'] = 0;
}

$page = (isset($_GET['page'])) ? $_GET['page'] : "home";

$page = rtrim($page, "/");
$page = explode("/", $page);

var_dump($page);


if ($page[1] == "work" && !isset($page[2])) {
    header("Location:" . APP_ROOT . 'work/photography');
    exit();
}
if ($_SESSION['login'] == 1 && $page[1] == "login") {
    header("Location:" . APP_ROOT . "backend/dashboard");
    exit();
}
if ($page[1] == "backend") {
    if (isset($_SESSION['login']) && $_SESSION['login'] == 1) {
        header("Location:" . APP_ROOT . "backend/dashboard");
        exit();
    }
}

$content .= "$page[1].php";

if (isset($page[1]) && !file_exists("content/$page[1].php")) {
    $content = "content/error.php";
}


include "header.php";


include $content;


include "footer.php";

?>