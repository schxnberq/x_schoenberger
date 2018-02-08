<?php

if (isset($_POST['do-login'])) {


    $sql = "SELECT id, username, password FROM users WHERE username = '{$_POST['username']}'";

    $res = mysqli_query($dblink, $sql);


    if (mysqli_num_rows($res) == 0) {
        $error = true;
        $error_msg['no-user'] = "User does not exist!";
    }


    if (mysqli_num_rows($res) == 1) {

        $user = mysqli_fetch_assoc($res);


        $pw_hash = explode(":", $user['password']);


        if ($pw_hash[0] == sha1($_POST['password'] . $pw_hash[1])) {

            $_SESSION['login'] = 1;
            $_SESSION['uname'] = $user['username'];
            $_SESSION['user_id'] = $user['id'];


            header('Location:' . APP_ROOT . 'backend/dashboard');
            exit();

        } else {
            $error = true;
            $error_msg['pw'] = "Password wrong";
        }

    }

}

$check_formats = array("jpg" => "", "jpeg" => '', "png" => '', "gif" => '', "bmp" => '');
//$max_file_size = 1024 * 1000; // 1000 kb - 1MB

$error = false;
$error_msg = array();
if (isset($_POST['do-upload'])) {

    $format = array();

    $category = $_POST['category'];

    foreach ($_FILES['images']['name'] as $key => $img) {

        $imgDimen = getimagesize($_FILES['images']['tmp_name'][$key]);


        if ($imgDimen[0] > $imgDimen[1]) {
            $format[$key] = "landscape";
        }
        if ($imgDimen[0] < $imgDimen[1]) {
            $format[$key] = "portrait";
        }

        $path = "";
        if ($_POST['category'] == "photography") {
            $path = "../assets/imgs/work/photo/" . $_FILES['images']['name'][$key];
        } else {
            $path = "../assets/imgs/work/web/" . $_FILES['images']['name'][$key];
        }

        move_uploaded_file($_FILES['images']['tmp_name'][$key], $path);


        $sql = "INSERT INTO work (category, path, format, status) VALUES ('$category', '$path', '$format[$key]', 'pending')";
        mysqli_query($dblink, $sql);

    }


}

if (isset($_POST['image-submit'])) {


}