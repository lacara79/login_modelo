<?php 
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Method: POST, GET, PUT, PATCH, DELETE,OPTION');
    header('Access-Control-Allow-Headers: token, Content-Type');
    header('Access-Control-Max-Age: 1728000'); 
    header('Access-Length: 0');
    header('Content-Type: text/plain');

    $pdo = new PDO("mysql:host=localhost;dbname=aula", "root", ""); 

    $login = $_GET["login"];
    $senha = md5($_GET["senha"]);

    $sql = $pdo->query("select * from aluno where login=\"$login\" and senha=\"$senha\"");
    $total = $sql->rowCount();

    if($total == 1){
        //Para Leitura
        while($row = $sql->fetch()){
            $alunos[] = array(
                "id" => $row['id'],	
                "nome"=> $row['nome'],
                "login"=> $row['login']
            );           
        }

        echo json_encode($alunos);
    }
    else
    {
        echo json_encode("ops");
    }

?>