<?php
if(isset($_POST["submit"])){
  // Checking for blank fields
  if($_POST["name"]=="" || $_POST["message"]==""){
    echo "You forgot a field";
  }
    // Sanitize and validate the email address
    
    if (!$name || !$message){
      echo "Please enter your name";
      echo "Please enter your message";
    } else {
      $to = "saharsaba.amiri123@gmail.com";
      $subject = $_POST['name'];
      $message = $_POST['message'];
      $headers = 'From:'. $name . "\r\n";

      // Send the email
      mail($to, $subject, $message, $headers);
      
      print_r("Thank you for your message, I'll try to respond as soon as possible!");
    }
  }
?>

<?php
 echo "wgy";
 ?>
