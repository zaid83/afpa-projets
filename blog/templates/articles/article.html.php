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
                    Posted by
                    <a href="#!" class="post-user">
                        <?= $article['pseudo'] ?>
                    </a>
                    on
                    <?= $article['date_article'] ?>
                </span><br>
                <span class="meta">
                    <a href=""><i class="fa fa-heart" aria-hidden="true"> J'aime</i>
                    </a>
                    <a href=""><i class="fa fa-thumbs-o-down" aria-hidden="true">
                            J'aime pas</i>
                    </a>
                    <a href=""><i class="fa fa-plus" aria-hidden="true"> Ajouter aux favoris</i>
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


<!-- comments -->

<section class="content-item" id="comments">
    <div class="container px-4 px-lg-5">
        <div class="row gx-4 gx-lg-5 justify-content-center">
            <div class="col-sm-8">
                <form>
                    <h3 class="pull-left">Poster un commentaire</h3>
                    <button type="submit" class="btn btn-sm btn-primary pull-right">Envoyer</button>
                    <fieldset>
                        <div class="row">
                            <div class="col-sm-3 col-lg-2 hidden-xs">
                                <img class="img-responsive" src="https://bootdey.com/img/Content/avatar/avatar1.png"
                                    alt="">
                            </div>
                            <div class="form-group col-xs-12 col-sm-9 col-lg-10">
                                <textarea class="form-control" id="message" placeholder="Your message"
                                    required=""></textarea>
                            </div>
                        </div>
                    </fieldset>
                </form>

                <h3>4 Commentaires</h3>

                <!-- COMMENT 1 - START -->
                <div class="media">
                    <a class="pull-left" href="#"><img class="media-object"
                            src="https://bootdey.com/img/Content/avatar/avatar1.png" alt=""></a>
                    <div class="media-body">
                        <h4 class="media-heading">John Doe</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <ul class="list-unstyled list-inline media-detail pull-left">
                            <li><i class="fa fa-calendar"></i>27/02/2014</li>
                            <li><i class="fa fa-thumbs-up"></i>13</li>
                        </ul>
                        <ul class="list-unstyled list-inline media-detail pull-right">
                            <li class=""><a href="">J'aime</a></li>
                            <li class=""><a href="">Répondre</a></li>
                        </ul>
                    </div>
                </div>
                <!-- COMMENT 1 - END -->

                <!-- COMMENT 2 - START -->
                <div class="media">
                    <a class="pull-left" href="#"><img class="media-object"
                            src="https://bootdey.com/img/Content/avatar/avatar2.png" alt=""></a>
                    <div class="media-body">
                        <h4 class="media-heading">John Doe</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
                            consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </p>
                        <ul class="list-unstyled list-inline media-detail pull-left">
                            <li><i class="fa fa-calendar"></i>27/02/2014</li>
                            <li><i class="fa fa-thumbs-up"></i>13</li>
                        </ul>
                        <ul class="list-unstyled list-inline media-detail pull-right">
                            <li class=""><a href="">Like</a></li>
                            <li class=""><a href="">Reply</a></li>
                        </ul>
                    </div>
                </div>
                <!-- COMMENT 2 - END -->

            </div>
        </div>
    </div>
</section>