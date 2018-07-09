<?php
$host="localhost";
$user="root";
$password="";
$database="info";

$connec=mysqli_connect($host,$user,$password,$database);
mysqli_query($connec,"set names utf8;");