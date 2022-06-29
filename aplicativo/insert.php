<?php 
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Method: POST, GET, PUT, PATCH, DELETE,OPTION');
header('Access-Control-Allow-Headers: token, Content-Type');
header('Access-Control-Max-Age: 1728000'); 
header('Access-Length: 0');
header('Content-Type: text/plain');

	$pdo = new PDO("mysql:host=localhost;dbname=aula", "root", ""); 

    $nome = $_GET["nome"];
    $login = $_GET["login"];
    $senha = md5($_GET["senha"]);
    $sql = $pdo->query("insert into aluno(`id`, `nome`, `login`, `senha`) VALUES  (NULL,\"$nome\",\"$login\",\"$senha\") ");
    echo json_encode("tudo certo");
?>