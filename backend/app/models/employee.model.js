const mongoose = require('mongoose');

const EmployeeSchema = mongoose.Schema({
    name: String,
    company: String,
    memberId: String,
    memberShipPlan: String,
    validayDate: String
});

module.exports = mongoose.model('Employee', EmployeeSchema);