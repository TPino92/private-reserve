const router = require("express").Router();
const withAuth = require("../../utils/auth");
const got = require('got');
const { Search } = require('../../models/Search');


router.post("/", withAuth, (req, res) => {
    (async () => {
        try {
            const response = await got('http://strainapi.evanbusse.com/70pPDSS/strains/search/name/Alaska');
            console.log(response.body);
        } catch (error) {
            console.log(error.response.body);
        }
    })();
});

module.exports = router;