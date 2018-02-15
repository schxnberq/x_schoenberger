</main>
<footer>
    <span>© 2017 | Niklas Schoenberger</span>
</footer>

<?php
if ($page[0] === "home" || !isset($page)) { ?>
    <script src="<?php echo APP_ROOT ?>assets/js/Tweenmax.min.js"></script>
    <script src="<?php echo APP_ROOT ?>assets/js/main.js"></script>
    <script src="<?php echo APP_ROOT ?>assets/js/home.js"></script>
<?php } elseif ($page[0] == "slider") { ?>
    <script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>;
    <script src="<?php echo APP_ROOT ?>assets/js/Tweenmax.min.js"></script>
    <script src="<?php echo APP_ROOT ?>assets/js/slider.js"></script>
<?php } elseif ($page[1] == "photography" && isset($page[2])) { ?>
    <script src="<?php echo APP_ROOT ?>assets/js/Tweenmax.min.js"></script>
    <script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>;
    <script src="<?php echo APP_ROOT ?>assets/js/slider.js"></script>
    <script src="<?php echo APP_ROOT ?>assets/js/main.js"></script>
<?php } else { ?>
    <script src="<?php echo APP_ROOT ?>assets/js/Tweenmax.min.js"></script>
    <script src="<?php echo APP_ROOT ?>assets/js/main.js"></script>
<?php } ?>

</body>
</html>
