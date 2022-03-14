<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$message = $_POST['message'];
$email = $_POST['email'];
$nameModal = $_POST['nameModal'];
$phoneModal = $_POST['phoneModal'];
$emailModal = $_POST['emailModal'];

$subscribeBtn = $_POST['subscribeBtn'];
$modalBtn = $_POST['modalBtn'];


if (isset($modalBtn)) {
    $title = "Обратная связь";
    $body = "
    <b>Имя:</b> $nameModal<br>
    <b>Телефон:</b> $phoneModal<br>
    <b>E-mail:</b> $emailModal<br>
    <b>Сообщение:</b><br>$message
    ";
} else {
    $title = "Новый Email";
    $body = "
    <b>E-mail:</b> $email<br>
    ";
};


// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.gmail.com'; // SMTP сервера вашей почты
    $mail->Username   = 'kseniaserbakova02@gmail.com'; // Логин на почте
    $mail->Password   = 'oks160595+'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('oksy1695161@gmail.com', 'Оксана Щербакова'); // Адрес самой почты и имя отправителя


    // Получатель письма
    $mail->addAddress('oksy169516@gmail.com');  

// Отправка сообщения
$mail->isHTML(true);
$mail->Subject = $title; 
$mail->Body = $body; 

// Проверяем отравленность сообщения
if ($mail->send()) {$result = "success";} 
else {$result = "error";}

} catch (Exception $e) {
    $result = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: {$mail->ErrorInfo}";
}

// Отображение результата
// header('location: thankyou.html');