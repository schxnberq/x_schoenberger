<?php

session_start();

define("APP_ROOT", "https://xschoenberger.com/");
//header('Cache-Control: max-age=86400');

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

$page_pri = null;
if(count($page) <= 1) {
    $page_pri = "home";
} else {
    $page_pri = $page[1];
}
/*if(isset($page[0])) {
    $page_pri = $page[0];
}*/
if(isset($page[2])) {
    $page_sec = $page[2];
}

if(isset($page[3])) {
    $page_ter = $page[3];
}

if ($page_pri == "work" && !isset($page_sec)) {
    header("Location:" . APP_ROOT . 'work/photography');
    exit();
}
if ($_SESSION['login'] == 1 && $page_pri == "login") {
    header("Location:" . APP_ROOT . "backend/?page=dashboard");
    exit();
}
if ($page_pri == "backend") {
    if (isset($_SESSION['login']) && $_SESSION['login'] == 1) {
        header("Location:" . APP_ROOT . "backend/?page=dashboard");
        exit();
    }
}

$content .= "$page_pri.php";



if (isset($page_pri) && !file_exists("content/$page_pri.php")) {
    $content = "content/error.php";
}


include "header.php";


include $content;


include "footer.php";

?>