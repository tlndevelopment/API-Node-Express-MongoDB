const TEST = require('../models/testModels.js');

exports.post = (req, res) => {
    
}

exports.findAll = (req, res) => {
    TEST.find()
    .then(tests => {
        res.send(tests);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "deu ruim"
        })
    })
};
