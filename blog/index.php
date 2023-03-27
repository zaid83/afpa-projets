<?php
session_start();
if ($_SESSION['id']) {


    require('models/database.php');

    $resultats = $pdo->query("SELECT * from articles JOIN users ON users.id = articles.author");
    $articles = $resultats->fetchAll();
    $pageTitle = "Accueil";

    ob_start();
    require('templates/index.html.php');
    $pageContent = ob_get_clean();

    require('templates/layout.html.php');
} else {
    header("Location:login.php");
}

?>