<?php
		/* Здесь проверяется существование переменных */
		 if (isset($_POST['phone'])) {$phone = $_POST['phone'];}
		if (isset($_POST['name'])) {$name = $_POST['name'];}
			if (isset($_POST['forma'])) {$forma = $_POST['forma'];}
	  
	 /* Сюда впишите свою эл. почту */
		$address = "focusonkids81@gmail.com";
	  
	 /* А здесь прописывается текст сообщения, \n - перенос строки */
		$mes = "Тема: Заказ с сайта!\nТелефон: $phone\nИмя: $name\nФорма: $forma";
	     $ch = curl_init();
curl_setopt(
    $ch,
    CURLOPT_URL,
    'https://v9kykids.s20.online/api/1/lead/create?token=c4ca4238a0b923820dcc509a6f75849b'
);
curl_setopt($ch, CURLOPT_POST, true);
curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query([
    'name'      => $name.'(English)',
    'phone'     => $phone,
    
]));

    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 
$data=curl_exec($ch);
curl_close($ch);

	 /* А эта функция как раз занимается отправкой письма на указанный вами email */
	 $sub='Обратная связь с сайта'; //сабж
	 $email='test@focusonkids.com.ua/'; // от кого
		$send = mail ($address,$sub,$mes,"Content-type:text/plain; charset = utf-8\r\nFrom:$email");
	  
	 ini_set('short_open_tag', 'On');
	 header('Refresh: 1; URL=spasibo_za_zakaz.html');
	 ?>
	 <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
	 <html>
	 <head>
	 <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	 <meta http-equiv="refresh" content="1; url=spasibo_za_zakaz.html">
	 <title>Отправка данных....</title>
	 <meta name="generator">
	 <style type="text/css">
	 body
	 {
	  
				background: #fff url(success1.png) top -70% center no-repeat;
	 width: 100%;
	  
	 }
	  
	 <script type="text/javascript">
	 setTimeout('location.replace("/spasibo_za_zakaz.html")', 1000);
	 /*Изменить текущий адрес страницы через 3 секунды (3000 миллисекунд)*/
	 </script> 
	 </head>
	 </body>
	 </html>