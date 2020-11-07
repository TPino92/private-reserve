const router = require("express").Router();
const withAuth = require("../../utils/auth");
const got = require('got');

router.post("/", withAuth, (req, res) => {
    (async () => {
        const {body} = await got.get('http://strainapi.evanbusse.com/70pPDSS/strains/search/name/Alaska');
        
        console.dir(body);

        res.json({data: body})
    })();
});

module.exports = router;