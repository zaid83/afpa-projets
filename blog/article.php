<?php

session_start();

require('models/database.php');

$article_id = null;

// Mais si il y'en a un et que c'est un nombre entier, alors c'est cool
if (!empty($_GET['article_id']) && ctype_digit($_GET['article_id'])) {
    $article_id = $_GET['article_id'];
}


$resultats = $pdo->prepare("SELECT * from articles JOIN users ON users.id = articles.author WHERE id_article = :article_id");
$resultats->execute(['article_id' => $article_id]);
$article = $resultats->fetch();
$pageTitle = $article['title'];
ob_start();
require('templates/articles/article.html.php');
require('comments.php');
$pageContent = ob_get_clean();



require('templates/layout.html.php');

?>