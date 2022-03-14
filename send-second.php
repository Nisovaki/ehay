<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$email = $_POST['email'];
$subscribeBtn = $_POST['subscribeBtn'];

$title = "Новый Email";
$body = "
<b>E-mail:</b> $email<br>
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();   
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    $mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str, $level) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'ssl://smtp.yandex.ru'; // SMTP сервера вашей почты
    $mail->Username   = 'Ksushcherbakova0602@yandex.ru'; // Логин на почте
    $mail->Password   = 'oks160595+'; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('Ksushcherbakova0602@yandex.ru', 'Оксана Щербакова'); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('oksy169516@yandex.ru');  

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
header('location: thankyou.html');