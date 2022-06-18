<?php
/**
 * https://www.php.net/manual/en/curl.examples-basic.php
 */
$ini = parse_ini_file('app.ini'); //calling the app.ini file
$ch = curl_init();   
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);   
curl_setopt($ch, CURLOPT_URL, $ini['url']); //get data from app.ini
echo $res = curl_exec($ch);