<?php
/*$dblink = mysqli_connect("hngomrlb3vfq3jcr.cbetxkdyhwsb.us-east-1.rds.amazonaws.com", "vjd9z83aeiqoxnk0", "inwnxa3w4t9vnwp0", "svgpzj9gojkbakj7");*/

$url = getenv('JAWSDB_URL');
$dbparts = parse_url($url);

$hostname = $dbparts['host'];
$username = $dbparts['user'];
$password = $dbparts['pass'];
$database = ltrim($dbparts['path'],'/');

// Create connection
$dblink = mysqli_connect($hostname, $username, $password, $database);

// Check connection
/*if (!$dblink) {
    die("Connection failed: " . mysqli_connect_error());
}
echo "Connection was successfully established!";*/