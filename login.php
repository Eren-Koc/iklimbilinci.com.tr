<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="login.css">
    <link rel="shortcut icon" href="img/logo-favicon.ico" type="image/x-icon" />
    <title>Giriş Yap</title>
</head>
<body>
<div class="login-page-main">
<div class="login-container">
<div class="login-content-title-bg">
    <span class="login-content-title">Login</span>
    <img src="img/logo-icon-black.png" width="48px" height="auto" alt="">
</div>
<div class="login-form-container">
<form action="" method="POST" autocomplete="off">    
<div class="label-cont">
    <p class="input-titles">E-Mail</p>
    <input class="textbox" placeholder="admin@iklimbilinci.com.tr" type="text" name="email" id="" required>
    </div>
    <br>
    <div class="label-cont">
    <p class="input-titles">Password</p>
    <input class="textbox" placeholder="administer" type="password" name="password" id="" required>
    </div>
    <div class="label-cont">
    <input class="login-btn" type="submit" name="btn-insert" value="Login">
</div>
</form>

<?php
$servername = "Your Server Adreess";
$database = "Your Database Name";
$username = "Your Username";
$password = "Your Password";
$conn = new mysqli($servername, $username, $password,$database);

$sql = "SELECT * From login";
$result = $conn->query($sql);



if(isset($_POST['btn-insert'])){
$didenter=false;
$userID=$_POST["email"];
$userPASSWORD=$_POST["password"];
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $DBid=$row["LoginMail"];
        $DBpassword=$row["LoginPassword"];

        if($userID==$DBid && $userPASSWORD==$DBpassword){
            $didenter=true;
            session_start();
            session_regenerate_id();									
            $_SESSION["kullaniciadi"]=$userID;
            $_SESSION["sifre"]=$userPASSWORD;
            header('Location: admin');
        }
            
    }
}
if($didenter==false){
    echo "Kullanıcı adı veya şifre yanlış";
}        
}


?>
</div>
</div>
</div><!--login-page main div end-->
</body>
</html>