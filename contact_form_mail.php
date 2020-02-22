<?php
if(isset($_POST["submit"])){
// Checking For Blank Fields..
if($_POST["name"]==""||$_POST["email"]==""||$_POST["sub"]==""||$_POST["message"]==""){
echo "All * fields are required";
}else{
// Check if the "Sender's Email" input field is filled out
$email=$_POST['email'];
// Sanitize E-mail Address
$email =filter_var($email, FILTER_SANITIZE_EMAIL);
// Validate E-mail Address
$email= filter_var($email, FILTER_VALIDATE_EMAIL);
if (!$email){
echo "Invalid Email Address";
}
else{
 $mobile =  $_POST['mobile'];
$email2 = "tsc.thesuperchurch@gmail.com";    
$name = $_POST['name'];
$subject = $_POST['sub'];
$message = "A new mail from \nName: ".$name."\nMobile: ".$mobile."\nMessage: ". $_POST['message'];
$headers .= 'From:'. $email . "\r\n"; // Sender's Email
$headers .= 'Cc:' .$email2 . "\r\n"; // Carbon copy to Sender
// Message lines should not exceed 70 characters (PHP rule), so wrap it
$message = wordwrap($message, 70);
// Send Mail By PHP Mail Function
mail("office@thesuperchurch.org", $subject, $message, $headers);
//echo 'http://thesuperchurch.org/contact-form-thank-you.html';
header("Location: http://www.thesuperchurch.org/thankyou.html");
}
}
}
?>
