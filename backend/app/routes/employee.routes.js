module.exports = (app) => {
    const employees = require('../controllers/employee.controller.js');

    app.post('/api/claim/submit', employees.create);

    app.put('/api/employee/:employeeId', employees.update);

}