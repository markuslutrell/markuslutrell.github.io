<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    if (isset($_POST['Name'])) {$Name = $_POST['Name'];}

    if (isset($_POST['tel'])) {$tel = $_POST['tel'];}

    if (isset($_POST['formData'])) {$formData = $_POST['formData'];}

    $to = "astana@iclimat.kz"; /*Укажите адрес, га который должно приходить письмо*/

    $sendfrom   = "robot@сайт.kz"; /*Укажите адрес, с которого будет приходить письмо, можно не настоящий, нужно для формирования заголовка письма*/

    $headers  = "From: " . strip_tags($sendfrom) . "\r\n";

    $headers .= "Reply-To: ". strip_tags($sendfrom) . "\r\n";

    $headers .= "MIME-Version: 1.0\r\n";

    $headers .= "Content-Type: text/html;charset=utf-8 \r\n";

    $subject = 'Новая заявка с сайта ..........';

    $message = "$formData

    <html>

<head>

<title>Заявка с сайта</title>

</head>

<body>

    

    <br> Клиент оставил вам заявку в форме <b>скачивания каталога</b>:<br><br><b>Имя пославшего:</b> $Name <br><b>Номер телефона:</b> $tel<br>

    </body>

    </html>" ;

    $send = mail ($to, $subject, $message, $headers);

    if ($send == 'true')

    {

    echo '<p class="success">Спасибо за заявку, ваши данные успешно отправлены.</p>';    

    }

    else 

    {

    echo '<p class="fail"><b>Ошибка. Данные не отправлены!</b></p>';

    }

} else {

    http_response_code(403);

    echo "Попробуйте еще раз";

}

?>