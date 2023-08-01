<?php 
  
  // Accessing the Database server, username, password and database name
  $connect=mysqli_connect("localhost","root","","publictions");

  // If connection fail it will show the error
    if(mysqli_connect_errno()){
      die("Database Connection Failed".mysqli_connect_error());
    }
?>