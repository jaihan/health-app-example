const Employee = require('../models/employee.model.js');

// Create and Save a new Employee
exports.create = (req, res) => {
    // Validate request
    if(!req.body.name) {
        return res.status(400).send({
            message: "Employee name can not be empty"
        });
    }

    // Create a Employee
    const employee = new Employee({
        name: req.body.name ,
        company: req.body.company || "default",
        memberId: req.body.memberId || "default",
        memberShipPlan: req.body.memberShipPlan || "default",
        validayDate: req.body.validayDate || "default",
    });

    // Save Employee in the database
    employee.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Employee."
        });
    });
};

// Update a employee identified by the employeeId in the request
exports.update = (req, res) => {
    // Validate Request
    if(!req.body.name) {
        return res.status(400).send({
            message: "Employee name can not be empty"
        });
    }

    // Find employee and update it with the request body
    Employee.findByIdAndUpdate(req.params.employeeId, {
        name: req.body.name ,
        company: req.body.company || "default",
        memberId: req.body.memberId || "default",
        memberShipPlan: req.body.memberShipPlan || "default",
        validayDate: req.body.validayDate || "default",
    }, {new: true})
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Employee not found with id " + req.params.employeeId
            });
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Employee not found with id " + req.params.employeeId
            });                
        }
        return res.status(500).send({
            message: "Error updating employee with id " + req.params.employeeId
        });
    });
};


