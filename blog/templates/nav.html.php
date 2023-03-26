<!-- Navigation-->
<nav class="navbar navbar-expand-lg navbar-light" id="mainNav">
    <div class="container px-4 px-lg-5">
        <a class="navbar-brand" href="index.html"> MANGAZ</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive"
            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            Menu
            <i class="fas fa-bars"></i>
        </button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <?php if (session_id()) { ?>
                <ul class="navbar-nav ms-auto py-4 py-lg-0">
                    <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="index.php">Accueil</a></li>
                    <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="postArticle.php">Nouvelle
                            Article</a>
                    </li>
                    <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="profil.php">
                            <?php echo $_SESSION['pseudo']; ?>
                        </a></li>
                    <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="logout.php">Se déconnecter</a>
                    </li>
                    <?php if ($_SESSION['role'] == "admin") { ?>
                        <li class="nav-item"><a class="nav-link px-lg-3 py-3 py-lg-4" href="admin.php">Admin</a></li>
                    <?php } ?>
                </ul>
            <?php } ?>
        </div>
    </div>
</nav>