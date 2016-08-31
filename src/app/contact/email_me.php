<?php 
    
    if($_POST['submit']) {
   
    $name = $_POST['whole_name'];
    $email =$_POST['email'];
    $subject = "Form submission";
    
    $message = $name . " (" . $email . ")" . " " . "wrote the following:" . "\n\n" . $_POST['questions'];

    $headers = array("From: user@adamcronan.com",
    "Reply-To: adamcronan10@gmail.com",
    "X-Mailer: PHP/" . PHP_VERSION);
    $headers = implode("\r\n", $headers);

    mail("adamcronan10@gmail.com",$subject,$message,$headers); 

    }
    // You can also use header('Location: thank_you.php'); to redirect to another page.
?>