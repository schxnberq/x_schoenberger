</main>
<footer>
    <span>© 2017 | Niklas Schoenberger</span>
</footer>

<?php
if ($page_pri === "home") {
    echo "<script src='" . APP_ROOT . "assets/js/TweenMax.min.js'></script>";
    echo "<script src='" . APP_ROOT . "assets/js/min/main.js'></script>";
    echo "<script src='" . APP_ROOT . "assets/js/min/home.js'></script>";
} elseif ($page_pri == "slider") {
    echo "<script src=\"https://code.jquery.com/jquery-2.2.4.min.js\" integrity=\"sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=\" crossorigin=\"anonymous\"></script>";
    echo "<script src='" . APP_ROOT . "assets/js/TweenMax.min.js'></script>";
    echo "<script src='" . APP_ROOT . "assets/js/min/slider.js'></script>";
} elseif ($page_sec == "photography" && isset($page_ter)) {
    echo "<script src='" . APP_ROOT . "assets/js/TweenMax.min.js'></script>";
    echo "<script src=\"https://code.jquery.com/jquery-2.2.4.min.js\" integrity=\"sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=\" crossorigin=\"anonymous\"></script>";
    echo "<script src='" . APP_ROOT . "assets/js/min/slider.js'></script>";
    echo "<script src='" . APP_ROOT . "assets/js/min/main.js'></script>";
} else {
    echo "<script src='" . APP_ROOT . "assets/js/TweenMax.min.js'></script>";
    echo "<script src='" . APP_ROOT . "assets/js/min/main.js'></script>";
}
?>

</body>
</html>
