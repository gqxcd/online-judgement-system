const express = require('express');
const router = express.Router();
const dataService = require('../services/dataService');
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();


router.get('/problems', function(req, res){
    dataService.getProblems().then(problems=>res.json(problems));
    
})

router.get('/problems/:id', function(req, res) {
    dataService.getProblem(+req.params.id).then(problem => res.json(problem))
})

router.post('/problems', jsonParser, function(req, res) {
    dataService.addProblem(req.body).then(
        problem => res.json(problem),
        error => res.status(404).send('REST Server: The problem exists.')
    );
})



module.exports = router;