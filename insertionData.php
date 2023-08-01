<?php

  // Insertion into the database
  include 'dbConnect.php';

  // Accessing form names by POST super global variable
  $name = $_POST['name'];
  $message = $_POST['message'];

  // Query
  $sql="INSERT INTO article (author, passage) VALUES (?,?) ";
  $stmt = mysqli_stmt_init($connect);
  if(! mysqli_stmt_prepare($stmt, $sql)){
    die(mysqli_error($connect));
  }
  
  // Avoid SQL injection
  mysqli_stmt_bind_param($stmt, "ss", $name, $message);
  mysqli_stmt_execute($stmt);
  mysqli_close($connect);
  header("Location: publications.php");
  ?>