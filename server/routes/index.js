var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get("/:route", (req, res) => {
    res.status(404).send("This is not the webpage you are looking for");
});

module.exports = router;
