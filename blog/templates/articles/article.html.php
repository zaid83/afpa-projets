<header class="masthead" style="background-image: url('<?= $article['img_article'] ?>')">

</header>

<div class="container position-relative px-4 px-lg-5">
    <div class="row gx-4 gx-lg-5 justify-content-center">
        <div class="col-md-10 col-lg-8 col-xl-7">
            <div class="post-heading">
                <h1>
                    <?= $article['title'] ?>
                </h1>
                <span class="meta2">
                    Posté par
                    <a href="#!" class="post-user">
                        <?= $article['pseudo'] ?>
                    </a>
                    le
                    <?= $article['date_article'] ?>
                </span><br>
                <span class="meta">
                    <a href=""><i class="fa fa-heart" aria-hidden="true"></i> J'aime
                    </a>
                    <a href=""><i class="fa fa-thumbs-o-down" aria-hidden="true">
                        </i> J'aime pas
                    </a>
                    <a href=""><i class="fa fa-plus" aria-hidden="true"></i> Ajouter aux favoris
                    </a>
                </span>
            </div>
        </div>
    </div>
</div>
<!-- Post Content-->
<article class="mb-4">
    <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-md-10 col-lg-8 col-xl-7">
                <p>
                    <?= $article['content'] ?>
                </p>
            </div>
        </div>
    </div>
</article>