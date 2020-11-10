const router = require("express").Router();
const { Post } = require("../models/");
const withAuth = require("../utils/auth");

router.get("/", withAuth, (req, res) => {
    Post.findAll({
      where: {
        userId: req.session.userId
      }
    })
      .then(dbPostData => {
        const posts = dbPostData.map((post) => post.get({ plain: true }));
       
        res.render("all-posts", {
          layout: "dashboard",
          posts
        });
      })
      .catch(err => {
        console.log(err);
        res.redirect("login");
      });
  });

router.get("/logout", withAuth, (req, res) => {
  
})

router.get("/new", withAuth, (req, res) => {
  res.render("new-post", {
    layout: "dashboard",
  });
});

router.get("/new/:id", withAuth, (req, res) => {
  if (!req.params.id){
    res.render("new-post", {
      layout: "dashboard"
    })
  } else {
    var array = req.session.data
    var strain = getDataById(req.params.id, array);
  
    console.log(strain)
    console.log("XxXxXxX")
    console.log(req.params.id)
  
    res.render("new-post", {
      layout: "dashboard",
      name: strain.name,
      race: strain.race
    });}
  
});



var getDataById = function (id, array) {
  
  for (let index = 0; index < array.length; index++) {
    if (array[index].id == id) {
      return array[index]
    }
  }
}
  
router.get("/edit/:id", withAuth, (req, res) => {
    Post.findByPk(req.params.id)
      .then(dbPostData => {
        if (dbPostData) {
          const post = dbPostData.get({ plain: true });
          
          res.render("edit-post", {
            layout: "dashboard",
            post
          });
        } else {
          res.status(404).end();
        }
      })
      .catch(err => {
        res.status(500).json(err);
      });
  });

module.exports = router;
