<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    $to = "claudia.alvarez.spu@gmail.com";
    $subject = "Nuevo mensaje del formulario de contacto";
    $body = "Nombre: $name\n";
    $body .= "Correo electrónico: $email\n";
    $body .= "Mensaje:\n$message";
    $headers = "From: $email\r\n";
    $headers .= "Reply-To: $email\r\n";
    $success = mail($to, $subject, $body, $headers);

    if ($success) {
        echo json_encode(array("status" => "success"));
    } else {
        echo json_encode(array("status" => "error"));
    }
} else {

    echo json_encode(array("status" => "error", "message" => "Método de solicitud no válido"));
}
?>