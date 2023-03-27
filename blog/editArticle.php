<?php

require('models/database.php');


$article_id = null;

// Mais si il y'en a un et que c'est un nombre entier, alors c'est cool
if (!empty($_GET['article_id']) && ctype_digit($_GET['article_id'])) {
    $article_id = $_GET['article_id'];
}

//recuperer l'article à éditer
$resultats = $pdo->prepare("SELECT * from articles JOIN users ON users.id = articles.author WHERE id_article = :article_id");
$resultats->execute(['article_id' => $article_id]);
$article = $resultats->fetch();

//update l'article 
if (isset($_POST["title"]) && isset($_POST["img_article"]) && isset($_POST["content"])) {
  

    $title = htmlspecialchars($_POST["title"]);
    $img_article = htmlspecialchars($_POST["img_article"]);
    $content = htmlspecialchars($_POST["content"]);
    $article_id = $_POST["articleId"];

    if (isset($_POST["submit"])) {
            $query = $pdo->prepare('UPDATE articles SET title = :title, img_article = :img_article, content = :content, date_article = NOW(), valid = 1 WHERE id_article = :article_id ');
            $query->execute(compact('title', 'img_article', 'content', 'article_id'));
            //On renvoie l'utilisateur vers la page de remerciement
            header("Location:index.php");
        }
    }

    if (isset($_POST["submit2"])) {
    $supprime = (int) $_POST['articleId'];

if(isset($supprime) AND !empty($supprime)) {
      $supp = $pdo->prepare('DELETE FROM articles WHERE id_article =?');
      $supp->execute([$supprime]);
      header("Location: index.php");
   }

}


$pageTitle = "Publier un Article";
ob_start();
require('templates/articles/editArticle.html.php');
$pageContent = ob_get_clean();



require('templates/layout.html.php');

?>