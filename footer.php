</main>
<footer>
    <span>© 2017 | Niklas Schoenberger</span>
</footer>

<?php if ($page_pri === "home" || !isset($page)) { ?>
    <script src="<?php echo APP_ROOT ?>assets/js/TweenMax.min.js"></script>
    <script src="<?php echo APP_ROOT ?>assets/js/main.js"></script>
    <script src="<?php echo APP_ROOT ?>assets/js/home.js"></script>
<?php } elseif ($page_pri == "slider") { ?>
    <script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>;
    <script src="<?php echo APP_ROOT ?>assets/js/TweenMax.min.js"></script>
    <script src="<?php echo APP_ROOT ?>assets/js/slider.js"></script>
<?php } elseif ($page_sec == "photography" && isset($page_ter)) { ?>
    <script src="<?php echo APP_ROOT ?>assets/js/TweenMax.min.js"></script>
    <script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>;
    <script src="<?php echo APP_ROOT ?>assets/js/slider.js"></script>
    <script src="<?php echo APP_ROOT ?>assets/js/main.js"></script>
<?php } else { ?>
    <script src="<?php echo APP_ROOT ?>assets/js/TweenMax.min.js"></script>
    <script src="<?php echo APP_ROOT ?>assets/js/main.js"></script>
<?php } ?>

</body>
</html>
