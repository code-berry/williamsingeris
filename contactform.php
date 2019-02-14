<?php

if (isset($_POST['submit'])) {
	$name = $_POST['name'];
	$mailFrom = $_POST['email'];
	$subject = 'New Website Inquiry';
	$msgBody = $_POST['body'];

	$headers = "From: ".$mailFrom;
	$mailto = 'matt@codeberry.ca';

	mail($mailto, $subject, $msgBody, $headers);
	header('Location: index.php?mailsent');
}