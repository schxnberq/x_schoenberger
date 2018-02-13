<?php
$dblink = mysqli_connect("localhost", "root", "root", "portfolio", "8889");

/*$dblink = mysqli_connect("e49145-ftp.services.easyname.eu", "u58111db4", "supercalifragilistic", "u58111db4");*/

/*$url = getenv('mysql://th6e1pgmqak5lbbo:mr3cz7pw0aczz21w@gzp0u91edhmxszwf.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/s05aoadkktjhmriz');
$dbparts = parse_url($url);

$hostname = $dbparts['host'];
$username = $dbparts['user'];
$password = $dbparts['pass'];
$database = ltrim($dbparts['path'],'/');

// Create connection
$dblink = mysqli_connect($hostname, $username, $password, $database);

// Check connection
if (!$dblink) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connection was successfully established!";*/