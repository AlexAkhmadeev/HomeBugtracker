<?php
setcookie("authorized", "false");
?>
<html>
<head>
    <title>Авторизация</title>
    <script src="script/jquery-3.1.0.js"></script>
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">

    <!-- Optional theme -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap-theme.min.css" integrity="sha384-rHyoN1iRsVXV4nD0JutlnGaslCJuC7uwjduW9SVrLvRYooPp2bWYgmgJQIXwl/Sp" crossorigin="anonymous">

    <!-- Latest compiled and minified JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js" integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa" crossorigin="anonymous"></script>
    <meta charset="utf-8">
    <script src="script/main.js"></script>
    <link href="css/list.css" type="text/css" rel="stylesheet">
<style>
    body {
        background: -webkit-linear-gradient(bottom, #504bcf 0%, #a2c9fa 50%, #deffd9 100%);
    }
</style>
</head>
<body>
<div class="row">
    <div class="col-md-5"></div>
    <div class="col-md-2">
        <h1 style="font-family: fantasy ; font-size: 60px; text-shadow: 0px -2px 1px black;color: red; margin-top: 85%; text-align: center;">Authorization</h1>
        <form action="index.php" method="POST">
            <div class="form-group">
                <label for="exampleInputPassword1">Enter password</label>
                <p><?=$_SERVER["REMOTE_ADDR"]?></p>
                <input name="accesskey" type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>
            <button type="submit" class="btn btn-success">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Try&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>
        </form>
    </div>
    <div class="col-md-5"></div>
</div>

</body>
</html>