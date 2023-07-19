<?php 
session_start();
ob_start();
$servername = "Your Server Adreess";
$database = "Your Database Name";
$username = "Your Username";
$password = "Your Password";


$conn = mysqli_connect($servername, $username, $password, $database);
$query = "select * from login";
$query_run=mysqli_query($conn,$query); 
while($row=mysqli_fetch_array($query_run))
{
       ?>        
           <?php  
           $adminid=$row['LoginMail'];   
           $adminsif=$row['LoginPassword'];       
           ?>
       <?php
}

if($_SESSION["kullaniciadi"]==$adminid && $_SESSION["sifre"]==$adminsif){
}
else{
 echo "geri göndermeye çalıştı ama başaramadı";
 try {
     header('Location: login.php');
     exit;
 } catch (Exception $e) {
     echo $e;
 }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="admin.css">
    <link rel="shortcut icon" href="img/logo-favicon.ico" type="image/x-icon" />
    <title>Admin Panel</title>
</head>
<body>

<div class="admin-main">
<div class="admin-content-container">
<div class="admin-title-bg"><span class="admin-title">ADMINISTER</span></div>
<div class="admin-form-content">
<form action="" method="POST">
    <div class="input-container">
        <select class="selecet-box" name="input-article-category">
            <option value="Tümü">Tümü</option>
            <option value="Doğal Afet">Doğal Afet</option>
            <option value="Hava Kirliliği">Hava Kirliliği</option>
            <option value="Su Kirliliği">Su Kirliliği</option>
            <option value="Küresel Isınma">Küresel Isınma</option>
          </select>
        <div class="icon-bg">
            <svg width="48" height="48" class="social-media-icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="m7.41 8.295 4.59 4.58 4.59-4.58L18 9.705l-6 6-6-6 1.41-1.41Z"></path>
               </svg>
        </div>
    </div>
   <div class="input-container"><input class="textbox" type="text" name="input-article-title" placeholder="Makale Başlığı" required>
    <div class="icon-bg">
        <svg width="48" height="48" class="social-media-icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.828 21.754H2.25v-2.579L16.788 4.602l2.614 2.614L4.828 21.754Z"></path>
            <path d="m19.956 6.656-2.612-2.612 1.484-1.437c.229-.23.58-.357.906-.357a1.214 1.214 0 0 1 .864.357l.797.797a1.213 1.213 0 0 1 .355.862c0 .328-.127.677-.357.907l-1.437 1.483Z"></path>
           </svg>
    </div>
</div>

<div class="input-container">
    <textarea class="textbox" style="resize:vertical; min-height: 60px;" placeholder="Makale Açıklaması" name="input-article-desc"></textarea>
    <div class="icon-bg">
        <svg width="48" height="48" class="social-media-icon" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="1" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 4.5A1.5 1.5 0 0 1 4.5 3h12.64L21 6.603V19.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 3 19.5v-15Z"></path>
            <path d="M12.004 3 12 6.692c0 .17-.224.308-.5.308h-4c-.276 0-.5-.138-.5-.308V3h5.004Z"></path>
            <path d="M4.5 3h12.64"></path>
            <path d="M7 13h10"></path>
            <path d="M7 17h5.004"></path>
           </svg>
    </div>
</div>
<div class="input-container">
    <input class="choose-file" type="file" id="img-selector" name="input-article-image" accept="image/*" required>
    <div class="icon-bg">
        <svg width="48" height="48" class="social-media-icon" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm5 11h-4v4h-2v-4H7v-2h4V7h2v4h4v2Z"></path>
           </svg>
    </div>
</div>
<div class="btn-bg"><input class="send-btn" type="submit" name="btn-insert" id=""></div>
</form>

<?php 
$servername = "Your Server Adreess";
$database = "Your Database Name";
$username = "Your Username";
$password = "Your Password";
$conn = mysqli_connect($servername, $username, $password, $database);

if(isset($_POST['btn-insert'])){
$articleTitle=$_POST["input-article-title"];
$articleDesc=$_POST["input-article-desc"];
$articleImage=$_POST["input-article-image"];
$articleCategory=$_POST["input-article-category"];
$articleCategoryIndexNo=0;
$imagePath="article/".$articleImage;
switch ($articleCategory) {
    case "Tümü":
        $articleCategoryIndexNo=0;
        break;
    case "Doğal Afet":
        $articleCategoryIndexNo=1;
        break;
    case "Hava Kirliliği":
        $articleCategoryIndexNo=2;
        break;
    case "Su Kirliliği":
        $articleCategoryIndexNo=3;
        break;
    case "Küresel Isınma":
        $articleCategoryIndexNo=4;
        break;
}

$query = "Insert Into article (ArticleTitle,ArticleDesc,ArticleImage,CategoryID) values ('$articleTitle','$articleDesc','$imagePath','$articleCategoryIndexNo')";
$result = $conn->query($query);

}

?>

</div>
</div>


</div><!--admin main div end-->
</body>
</html>
