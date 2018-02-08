<section class="content">
    <h2 class="content__title">Upload</h2>
    <div class="content__dash">
        <form class="form" method="post" enctype="multipart/form-data">
            <div class="form__group">
                <input type="file" multiple name="images[]" id="images">
                <label class="btn" for="images">Upload</label>
            </div>
            <div class="form__group category">
                <div class="form__group__cnt">
                    <input type="radio" id="web" value="web" name="category">
                    <label for="web">Web</label>
                </div>
                <div class="form__group__cnt">
                    <input type="radio" id="photography" value="photography" name="category">
                    <label for="photography">Photography</label>
                </div>
            </div>

            <div class="form__group">
                <button class="btn" id="do-upload" type="submit" name="do-upload">Submit</button>
            </div>
        </form>
        <div class="upload-prev">

        </div>
    </div>
</section>