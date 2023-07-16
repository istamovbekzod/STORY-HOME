<?php
	use PHPMailer\PHPMailer\PHPMailer;
	use PHPMailer\PHPMailer\Exception;

	require 'phpmailer/src/Exception.php';
	require 'phpmailer/src/PHPMailer.php';

	$mail = new PHPMailer(true);
	$mail->CharSet = 'UTF-8';
	$mail->setLanguage('ru', 'phpmailer/language/');
	$mail->IsHTML(true);

	//От кого письмо, почтовый ящий
	$mail->setFrom('***', '***');
	//Кому отправить письмо
	$mail->addAddress('***');
	//Тема письма
	$mail->Subject = '***';

	//Тело письма 
	$body = '<h1>Заявка с сайта ***:</h1>';

	if(trim(!empty($_POST['name']))) {
		$body.='<p><strong>Имя:</strong> '.$_POST['name'].'</p>';
	}
	if(trim(!empty($_POST['tel']))) {
		$body.='<p><strong>Номер:</strong> '.$_POST['tel'].'</p>';
	}
	if(trim(!empty($_POST['message']))) {
		$body.='<p><strong>Сообщение:</strong> '.$_POST['message'].'</p>';
	}

	$mail->Body = $body;

	//Отправляем
	if (!$mail->send()) {
		$message = 'Ошибка';
	} else {
		$message = 'Данные отправлены';
	}

	$response = ['message' => $message];

	header('Content-type: application/json');
	echo json_encode($response);
?>	
