<?php
      
      $connect=mysqli_connect("localhost","root","","publictions");

      if(mysqli_connect_errno()){
        die("Database Connection Failed".mysqli_connect_error());
      }
      

?>