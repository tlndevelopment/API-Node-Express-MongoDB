module.exports = (app) => {
    const tests = require('../controllers/testControllers.js');

    app.post('/tests', tests.post);

    app.get('/tests', tests.findAll);

    app.put('/tests/:testId', tests.updateById)

    app.delete('/tests/:testId', tests.deleteById)

}