<?php
session_start();

require('models/database.php');

$resultats = $pdo->query("SELECT * from articles JOIN users ON users.id = articles.author WHERE valid = 1 ORDER BY date_article DESC");
$articles = $resultats->fetchAll();
$pageTitle = "Accueil";

ob_start();
require('templates/index.html.php');
$pageContent = ob_get_clean();

require('templates/layout.html.php');


?>