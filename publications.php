<?php
 include 'dbConnect.php';
 ?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>publications</title>
    <link rel="icon" type="image/gif" href="imgs/giphy_s.gif"/>
    <script type="text/javascript" src="https://cdn.jsdelivr.net/npm/emailjs-com@3/dist/email.min.js"></script>
    <link href="https://unpkg.com/tailwindcss@^2/dist/tailwind.min.css" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-gradient-to-r from-cyan-500 to-blue-500">
  <div class="rounded-full w-16 h-16 bg-lime-500 fixed top-1 right-1 z-50 ">
    <a href="index.html"><img src="imgs/house.png" class="absolute top-4 left-4 w-8 h-8 rounded-full"/></a>
  </div>


    <div class='flex flex-col justify-center items-center mt-8 font-sans'>
     <?php
        $query = "SELECT * FROM article";
        $result = mysqli_query($connect, $query);
        while($row = mysqli_fetch_assoc($result)) {
            echo "<div class='bg-white shadow-xl rounded px-8 pt-6 pb-8 m-4 w-5/6 md:w-2/4 relative'>
            
              <img src='imgs/giphy_s.gif' class='w-16 h-16 absolute right-0 top-0'/>   
                <div class='flex'>
                  <p class='text-slate-500 font-medium p-4 pt-8 italic'>Author:</p>
                  <p class='pt-8 pr-5 pb-5 font-mono italic'>  ". $row["author"] ."</p>
                </div>
              
            
              <p class='pl-4 pb-4 text-slate-500 italic'>" . $row["passage"] . "</p>
              <img src='imgs/m.png' class='absolute left-0 bottom-1 w-28 h-28'/>
            </div>";
            
        }
        mysqli_close($connect);
        ?>
    </div>
    <img src='imgs/giphy2.gif' class='absolute bottom-8 w-44 md:w-80'/>
</body>
</html>