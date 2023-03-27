<div class="container-fluid">
    <form action="editArticle.php" method="POST" class="register-form">
        <div class="row">
            <h2 style="color:coral;">Editer un article</h2>
            <div class="col-md-4 col-sm-4 col-lg-4">

                <label for="title">TITRE</label>
                <input name="title" class="form-control" type="text" value="<?= $article['title'] ?>">
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 col-sm-4 col-lg-4">
                <label for="img_article">IMAGE</label>
                <input name="img_article" class="form-control" type="text" value="<?= $article['img_article'] ?>">
            </div>
        </div>
        <div class="row">
            <div class="col-md-4 col-sm-4 col-lg-4">
                <label for="articleId">ID</label>
                <input name="articleId" class="form-control" type="text" value="<?= $article['id_article'] ?>">
            </div>
        </div>
        <div class="row">
            <div class="col-md-12 col-sm-12 col-lg-12">
                <label for="content">CONTENU</label>
                <textarea name="content" class="form-control" rows="5" cols="50"><?= $article['content'] ?></textarea>
            </div>
        </div>
        <hr>
        <div class="row">
        <div class="col-md-6 col-sm-6 col-xs-6 col-lg-6">
            <button class="btn btn-danger " type="submit" name="submit2"><a href="editArticle.php?supprime=<?= $article['id_article'] ?>"></a> Supprimer</button>
        </div>
        <div class="col-md-6 col-sm-6 col-xs-6 col-lg-6">
            <button class="btn btn-primary " type="submit" name="submit">Publier</button>
        </div>
        </div>
        </form>
</div>



   
