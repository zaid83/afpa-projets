<?php
require('models/database.php');
session_start();

$user_id = null;
// Mais si il y'en a un et que c'est un nombre entier, alors c'est cool
if (!empty($_GET['user_id']) && ctype_digit($_GET['user_id'])) {
    $user_id = $_SESSION['id'];
}

//recuperer l'article à éditer
$resultats = $pdo->prepare("SELECT * from users  WHERE id = :user_id");
$resultats->execute(['user_id' => $user_id]);
$user = $resultats->fetch();

//update l'article 
if (isset($_POST["pseudo"]) && isset($_POST["email"]) && isset($_POST["password"])) {
    
    $pseudo = htmlspecialchars($_POST["pseudo"]);
    $email = htmlspecialchars($_POST["email"]);
    $password = htmlspecialchars($_POST["password"]);
    $avatar = $_POST["avatar"];

    if (isset($_POST["submit"])) {
            $query = $pdo->prepare('UPDATE users SET pseudo = :pseudo, email = :email, password = :passwordHash, avatar = :avatar  WHERE id = :user_id ');
            $query->execute(compact('pseudo', 'email', 'password', 'user_id', 'avatar'));
            //On renvoie l'utilisateur vers la page de remerciement
            header("Location:index.php");
        }
    }

$pageTitle = "Profil";
ob_start();
require('templates/login/profil.html.php');
$pageContent = ob_get_clean();



require('templates/layout.html.php');