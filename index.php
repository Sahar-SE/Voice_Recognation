if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if(
        !empty($_POST['name'])
        && !empty($_POST['message'])
    ){
        $name = $_POST["name"];
        $message = $_POST["message"];


        $to = "saharsaba.amiri123@gmail.com";
        $subject = "From your app by: {$name}";
        $body = "Name: {$name}\nMessage: {$message}";
        $headers = "From: {$name}";


        if (mail($to, $subject, $body, $headers)) {
            echo "Message sent successfully!";
        } else {
            echo "Failed to send message.";
        }
    }
}