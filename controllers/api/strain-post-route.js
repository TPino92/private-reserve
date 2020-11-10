const router = require("express").Router();
// const { Post, Comment, User } = require("../../models/");
const withAuth = require("../../utils/auth");

router.get("/:searchTerm", withAuth, (req, res) => {
    (async () => {
        const {body} = await got.get(`http://strainapi.evanbusse.com/70pPDSS/strains/search/name/${req.params.searchTerm}`);
        
        // console.dir(body);
        // res.json(JSON.parse(body))
        
        sess = req.session; 
        sess.data = JSON.parse(body);

        res.render("results", {
            layout: "dashboard",
           results: JSON.parse(body)
          });
    })();
});

module.exports = router;