<?php
session_start();
   
    require('models/database.php');

    $resultats = $pdo->query("SELECT * from articles JOIN users ON users.id = articles.author WHERE valid = 3");
    
    $articles = $resultats->fetchAll();
    
    if(($articles)){
    $pageTitle = "Validation";
     
    ob_start();
    require('templates/articles/validateArticle.html.php');
    $pageContent = ob_get_clean();
  
    require('templates/layout.html.php');

    }
    else {
        require('templates/articles/validateArticle.html.php');
        $pageContent = "<h1>Aucun articles à valider</h1>";
        require('templates/layout.html.php');
    }

?>
