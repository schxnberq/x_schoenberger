<section
        class="content <?php echo (!isset($_GET['categ'])) ? ' no_content' : ($_GET['categ'] === "photo") ? 'content-photo' : '' ?>">
    <div class="content__head">
        <div class="content__head__img fadeIMG">
            <?php if (isset($page_sec) && $page_sec == "web") { ?>

            <?php }
            if (isset($page_sec) && $page_sec == "photography") { ?>

            <?php } ?>
        </div>
        <div class="content__head__title scroll-item">
            <div class="cnt-breadcr">
                <?php echo (isset($page_ter)) ? "<a href='" . APP_ROOT . "work/photography'><em>to</em> photography</a>" : "<a href='" . APP_ROOT . "home'><em>to</em> home</a>" ?>
            </div>
            <h2 class="fadeItem <?php echo (isset($_GET['categ']) && $_GET['categ'] === 'web') ? 'web' : 'photo' ?>">
                <?php if (isset($page_ter)) :
                    $page_title = str_replace("_", " ", str_replace("-", ".", $page_ter));
                    $expl_title = explode(" ", $page_title);
                    $fin_title = "";
                    if (strpos($page_ter, "xx") !== false) {
                        $fin_title = $expl_title[0] . "<em>$expl_title[1]</em>";
                    } else {
                        $fin_title = $page_ter;
                    }

                endif;
                ?>
                <span class="fadeItem <?php echo (isset($page_ter)) ? 'sub-title' : '' ?>"><?php echo (isset($page_ter)) ? $fin_title : (isset($page_sec) ? $page_sec : $page_pri) ?></span>
            </h2>
        </div>
        <div class="content__head__descr fadeItem scroll-item">
            <p><?php echo (isset($page_sec) && $page_sec == "web") ? "if (client == happy) { mission = accomplished <i>!</i> }" : "" ?></p>
        </div>
        <?php if (isset($page_ter)) { ?>
            <div class="content__head__scroll fadeItem">
                <a class="link" href="#">
                    <!--<span class="link-box"></span>-->
                    <span class="link-arrow"></span>
                    <span class="link-line"></span>
                </a>
            </div>
        <?php } ?>
    </div>

    <?php if (!isset($page_sec)) { ?>
        <div class="content__categ content__work fadeNav">
            <figure class="content__categ__item">
                <a href="work/web"></a>
                <figcaption class="content__categ__item__txt">Web</figcaption>
                <img src="<?php echo APP_ROOT ?>assets/imgs/work/web/bittersuess.jpg" alt="">
            </figure>
            <figure class="content__categ__item">
                <a href="work/photography"></a>
                <figcaption class="content__categ__item__txt">Photography</figcaption>
                <img src="<?php echo APP_ROOT ?>assets/imgs/work/photo/MOODY-faded-building2.JPG" alt="">
            </figure>
        </div>
    <?php } else {
        include "$page_sec.php";
    } ?>


</section>


</main>