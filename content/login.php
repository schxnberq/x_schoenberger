<section class="content__login">
    <form method="post" class="form">
        <?php $token = uniqid(); $_SESSION['form-token'] = $token; ?>
        <div class="user form__group">
            <label for="username">Username</label>
            <input type="text" name="username">
            <span class="input-cursor"></span>
        </div>
        <div class="password form__group">
            <label for="password">Password</label>
            <input type="password" name="password">
            <span class="input-cursor"></span>
        </div>
        <div class="form__group submit">
            <button type="submit" name="do-login" class="login-btn">Login</button>
        </div>
    </form>


</section>
