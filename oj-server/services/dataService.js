const problemModel = require('../model/problem');

const getProblems = function() {
    return new Promise((resolve, reject) => {
        problemModel.find({}, function(error, problems) {
            resolve(problems);
        });
    });
}

const getProblem = function(id) {
    return new Promise((resolve, reject) => {
        problemModel.findOne({id:id}, (error, problem) => {
            if(error) reject("Cannot get certain problem.");
            else resolve(problem);
        })
    });
}

const addProblem = function(newProblem) {
    return new Promise((resolve, reject) => {
        console.log("DataService:  addProblem " + newProblem.name);
        problemModel.findOne({name:newProblem.name}, (error,problem) => {
            if(problem) {
                reject("The problem already exists.");
            } else {
                console.log("DataService:  Ready to add problem");
                problemModel.count({}, (error, count) => {
                    newProblem.id = count + 1;
                    const newProblemInstance = new problemModel(newProblem);
                    newProblemInstance.save();
                    resolve(newProblem);
                });
                
            }
        });
    })
}



module.exports = {
    getProblems,
    getProblem,
    addProblem
}