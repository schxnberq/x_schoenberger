<div class="content__categ content__photo <?php echo (!isset($page_ter)) ? 'main-cnt' : 'sub-cnt' ?> fadeItem">

    <?php

    $sql = "SELECT album FROM work WHERE category = 'photography' AND status = 'live' AND deleted = 0";
    $res = mysqli_query($dblink, $sql);
    $row = mysqli_fetch_all($res, MYSQLI_ASSOC);

    $keys = array();
    $albums = array();
    foreach ($row as $key => $item) {

        $keys[$item['album']] = str_replace(" ", "-", $item['album']);


        $href = str_replace(" ", "-", $item['album']);
        $fin_href = strtolower(str_replace(".", "_", $href));

        $albums[$fin_href] = "1";
    }


    foreach ($keys as $keyword => $none) :

        $key_sql = "SELECT * FROM work WHERE album = '{$keyword}' AND status = 'live'";
        $key_res = mysqli_query($dblink, $key_sql);
        $key_row = mysqli_fetch_all($key_res, MYSQLI_ASSOC);

        $href = str_replace(" ", "_", $keyword);
        $fin_href = strtolower(str_replace(".", "-", $href));

        $albums[$fin_href] = "1";

        if (!isset($page_ter) && $page_pri == "work") {
            ?>
            <div class="content__photo__cnt">
                <h2 class="key-title"><?php echo $keyword; ?></h2>
                <a href="<?php echo APP_ROOT . 'work/photography/' . strtolower($fin_href); ?>"></a>
                <?php
                foreach ($key_row as $key => $item) :
                    if ($key == 0) { ?>
                        <img src="<?php echo APP_ROOT . $item['path'] ?>" alt="">
                    <?php } endforeach; ?>
            </div>
        <?php } elseif (isset($page_sec) && array_key_exists($page_ter, $albums)) {
            $categories = array();
            $rows = array();
            $count = 0;
            foreach ($key_row as $key => $img) {
                $count++;
                if ($page_ter == str_replace(" ", "_", strtolower(str_replace(".", "-", $img['album'])))) {
                    $categories[$img['keywords']] = $count;
                    array_push($rows, $img);
                }
            };

            $count__ = 0;
            foreach ($categories as $categ => $idx) {
                $count__++;
                ?>
                <div class="content__photo__keyword gallery__cnt">
                    <h2 class="title"><em><?php echo substr($categ, 0, 4); ?></em><span><?php echo $categ; ?></span>
                    </h2>
                    <?php
                    foreach ($rows as $key => $row):
                        if ($row['keywords'] == $categ) {
                            $check_lines = explode(".jpg", $row['path']);
                            $path = APP_ROOT . $check_lines[0] . '_lines.png';
                            $link = str_replace("photo/", "photo/big/", $row['path']);
                            $link = APP_ROOT . $link;
                            echo "<div class='img gallery__cnt__thmb'>";
                            echo "<a data-idx='{$key}' href=\"$link\">";
                            echo "<img src='" . APP_ROOT . $row['path'] . "'>";
                            if (file_exists($check_lines[0] . "_lines.png")) {
                                echo "<img class='line-hover' src=\"$path\" alt=''>";
                            }
                            ?>

                            <?php echo "</a></div>";
                        } endforeach; ?>
                </div>
            <?php }
        } endforeach; ?>

</div>
</div>



