<section class="content">
    <h2 class="content__title">Catalog</h2>
    <form method="post" class="content__catalog form">
        <?php
        $sql = "SELECT * FROM work";
        $res = mysqli_query($dblink, $sql);
        $row = mysqli_fetch_all($res, MYSQLI_ASSOC);

        foreach ($row as $key => $item) {
            $keywords = explode("::", $item['keywords']);

            ?>
            <div class="content__catalog__cnt">
                <input type="hidden" name="item-key" value="<?php echo $key; ?>">
                <input type="hidden" name="item-id" value="<?php echo $item['id']; ?>">
                <div class="form__group image">
                    <img src="<?php echo APP_ROOT . $item['path']; ?>" alt="">
                    <div class="remove-img"></div>
                </div>
                <div class="form__group category">
                    <div class="form__group__cnt">
                        <input <?php echo ($item['category'] == 'web') ? 'checked' : '' ?> type="radio" id="web-<?php echo $key; ?>" value="web" name="category-<?php echo $key; ?>">
                        <label for="web-<?php echo $key; ?>">Web</label>
                    </div>
                    <div class="form__group__cnt">
                        <input <?php echo ($item['category'] == 'photography') ? 'checked' : '' ?> type="radio" id="photography-<?php echo $key; ?>" value="photography" name="category-<?php echo $key; ?>">
                        <label for="photography-<?php echo $key; ?>">Photography</label>
                    </div>
                </div>
                <div class="form__group status">
                    <select name="status" id="status-<?php echo $key; ?>">
                        <option <?php echo ($item['status'] == "pending") ? 'selected data-select=\'1\'' : '' ?>
                                value="pending">
                            Pending
                        </option>
                        <option <?php echo ($item['status'] == "live") ? 'selected data-select=\'1\'' : '' ?>
                                value="live">Live
                        </option>
                    </select>
                </div>
                <div class="form__group album">
                    <ul class="album-cnt">
                        <li contenteditable="true" spellcheck="false" class="edit"><?php echo (strlen($item['album']) > 0) ? $item['album'] : '' ?></li>
                    </ul>
                    <span class="focus-line"></span>
                </div>
                <div class="form__group keywords">
                    <ul class="keyword-cnt">
                        <?php
                        if (strlen($keywords[0]) > 1) {
                            foreach ($keywords as $keyword) : ?>
                                <li contenteditable="false" spellcheck="true" class="set"><?php echo $keyword; ?> <i class="remove"></i></li>
                            <?php endforeach;
                        } ?>
                        <li contenteditable="true" spellcheck="false" class="edit">add keyword</li>
                    </ul>
                    <span class="focus-line"></span>
                </div>
            </div>
        <?php } ?>
    </form>

</section>
