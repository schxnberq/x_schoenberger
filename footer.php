</main>
<footer>
    <span>© 2017 | Niklas Schoenberger</span>
</footer>

<?php


if ($page[0] === "home" || !isset($page)) {
    echo '<script src=' . APP_ROOT . 'assets/js/TweenMax.min.js' . "></script>";
    echo '<script src=' . APP_ROOT . 'assets/js/main.js' . "></script>";
    echo '<script src=' . APP_ROOT . 'assets/js/home.js' . "></script>";


} elseif ($page[0] == "slider") {
    echo "<script
  src=\"https://code.jquery.com/jquery-2.2.4.min.js\"
  integrity=\"sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=\"
  crossorigin=\"anonymous\"></script>";
    echo '<script src=' . APP_ROOT . 'assets/js/image-scale.min.js' . "></script>";
    echo '<script src=' . APP_ROOT . 'assets/js/TweenMax.min.js' . "></script>";
    echo '<script src=' . APP_ROOT . 'assets/js/slider.js' . "></script>";
} elseif ($page[1] == "photography" && isset($page[2])) {
    echo '<script src=' . APP_ROOT . 'assets/js/TweenMax.min.js' . "></script>";
    echo "<script
  src=\"https://code.jquery.com/jquery-2.2.4.min.js\"
  integrity=\"sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=\"
  crossorigin=\"anonymous\"></script>";
    echo '<script src=' . APP_ROOT . 'assets/js/image-scale.min.js' . "></script>";
    echo '<script src=' . APP_ROOT . 'assets/js/slider.js' . "></script>";
    echo '<script src=' . APP_ROOT . 'assets/js/main.js' . "></script>";
} else {
    echo '<script src=' . APP_ROOT . 'assets/js/TweenMax.min.js' . "></script>";
    echo '<script src=' . APP_ROOT . 'assets/js/main.js' . "></script>";
}
?>

</body>
</html>