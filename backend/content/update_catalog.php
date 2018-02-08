<?php

if (isset($_POST['update_catalog'])) {

    if ($_POST['category'] !== "") {
        mysqli_query($dblink, "UPDATE work SET category = '{$_POST['category']}' WHERE id = '{$_POST['item_id']}'");
    }
    if ($_POST['keywords'] !== "") {
        mysqli_query($dblink, "UPDATE work SET keywords = '{$_POST['keywords']}' WHERE id = '{$_POST['item_id']}'");
    }
    if ($_POST['status'] !== "") {
        mysqli_query($dblink, "UPDATE work SET status = '{$_POST['status']}' WHERE id = '{$_POST['item_id']}'");
    }
    if ($_POST['album'] !== "") {
        mysqli_query($dblink, "UPDATE work SET album = '{$_POST['album']}' WHERE id = '{$_POST['item_id']}'");
    }
    header("Location:" . APP_ROOT . "backend/catalog");
    exit();
}