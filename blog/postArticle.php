<?php
session_start();

if ($_SESSION['id']) {

    require('models/database.php');
    $message = '';


    if (isset($_POST["title"]) && isset($_POST["img_article"]) && isset($_POST["content"])) {
        // var_dump($_POST["title"], $_POST["img_article"], $_POST["content"]);

        $author = $_SESSION['id'];
        $title = htmlspecialchars($_POST["title"]);
        $img_article = htmlspecialchars($_POST["img_article"]);
        $content = htmlspecialchars($_POST["content"]);

        if (isset($_POST["submit"])) {

            if (empty($title) || empty($img_article) || empty($content)) {
                $message = 'Un des champs est vide';

            } else if (strlen($title) >= 40) {
                $message = "Le titre fait plus de 40 caractères";
            } else if (strlen($content) <= 200) {
                $message = "L'article fait moins de 200 caractères";

            } else {
                $query = $pdo->prepare('INSERT INTO articles SET title = :title, img_article = :img_article, content = :content, date_article = NOW(), author = :author');
                $query->execute(compact('title', 'img_article', 'content', 'author'));
                //On renvoie l'utilisateur vers la page de remerciement
                echo "Article ajouté";
            }
        }
    }
}



$pageTitle = "Poster un article";
ob_start();
require('templates/articles/postArticle.html.php');
$pageContent = ob_get_clean();



require('templates/layout.html.php');



?>