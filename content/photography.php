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

            $grid_count = [];

            $grid_key = 0;
            $grid_prevkey = count($categories);
            foreach ($categories as $key => $images) {
                $grid_key++;
                $grid_count[$grid_key] = $images;

            }


            $calc_grid = [];
            for($i = 1; $i < count($grid_count)+1; $i++) {


                if($i == 1){
                    $calc_grid[$i] = $grid_count[$i];
                } else {
                    $calc_grid[$i] = $grid_count[$i] - $grid_count[$i - 1];
                }
            }

            //var_dump($calc_grid);



            foreach ($categories as $categ => $idx) {
                $count__++;


                //var_dump($img_count);
                ?>
                <div class="content__photo__keyword gallery__cnt">
                    <h2 class="title"><em><?php echo substr($categ, 0, 4); ?></em><span><?php echo $categ; ?></span>
                    </h2>
                    <?php
                    $xx = 0;

                    foreach ($rows as $key => $row):


                        $file = getimagesize($row['path']);
                        $format = "";

                        if ($file[0] > $file[1]) {
                            $format = "landscape";
                        }
                        if ($file[1] > $file[0]) {
                            $format = "portrait";
                        }




                        if ($row['keywords'] == $categ) {
                            $xx++;
                            $unxx = 0;
                            var_dump($format);

                            $check_lines = explode(".jpg", $row['path']);
                            $path = APP_ROOT . $check_lines[0] . '_lines.png';
                            $link = str_replace("photo/", "photo/big/", $row['path']);
                            $link = APP_ROOT . $link;
                            if($xx % 2 == 0) {
                                $unxx = $xx - 1;
                                echo "<div class='img gallery__cnt__thmb {$format} col-{$unxx}'>";
                            } else {
                                echo "<div class='img gallery__cnt__thmb {$format} col-{$xx}'>";
                            }
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



