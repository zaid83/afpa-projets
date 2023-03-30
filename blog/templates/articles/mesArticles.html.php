 <?php if (isset($_SESSION['id'])) { ?>
    <header class="masthead">
        <div class="container position-relative px-4 px-lg-5">
            <div class="row gx-4 gx-lg-5 justify-content-center">
                <div class="col-md-10 col-lg-8 col-xl-7">
                    <div class="site-heading">
                        <h1>MES ARTICLES</h1>
                        <span class="subheading">Liste des articles</span>
                    </div>
                </div>
            </div>
        </div>
    </header>

    <h2 align="center">Liste de mes articles</h2>
    <br>
<table class="table">
  <thead class="thead-dark">
    <tr>
      <th scope="col">Articles ID</th>
      <th scope="col">Titre</th>
      <th scope="col">Date</th>
      <th scope="col">Editer</th>
      <th scope="col">Supprimer</th>
      <th scope="col">Etat</th>
    </tr>
  </thead>
  <tbody>
    <?php foreach ($listarticles as $listarticle): ?> 
    <tr>
      <th scope="row"> <?= $listarticle['id_article'] ?></th>
      <td><?= $listarticle['title'] ?></td>
      <td><?= $listarticle['date_article'] ?></td>
      <td><a href="editArticle.php?article_id=<?= $listarticle['id_article'] ?>" class="btn btn-primary">Editer</a></td>
      <td><a href="deleteArticle.php?supprime=<?= $listarticle['id_article'] ?>" class="btn btn-danger">Supprimer</a></td>
      <td><?= $listarticle['etat'] ?></td>

    </tr>
    <?php endforeach ?>
  </tbody>
</table>

 <?php }
?>