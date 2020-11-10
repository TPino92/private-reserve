const router = require("express").Router();
const withAuth = require("../../utils/auth");
const got = require('got');
const { Search } = require('../../models/Search');


// searchTerm is the parameter
router.get("/:searchTerm", withAuth, (req, res) => {
    (async () => {
        const {body} = await got.get(`http://strainapi.evanbusse.com/70pPDSS/strains/search/name/${req.params.searchTerm}`);
        
        // console.dir(body);
        // res.json(JSON.parse(body))
        
        req.session.data = JSON.parse(body);

        res.render("results", {
            layout: "dashboard",
           results: JSON.parse(body)
          });
    })();
});

module.exports = router;