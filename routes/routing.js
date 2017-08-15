var express = require('express');
var emp = require('../emp/employee');
var router = express.Router();


router.get('/',function(req,res){
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ mesage: "welcome to Node Server" }));
});


router.get('/allEmployees',function(req,res){
    res.setHeader('Content-Type', 'application/json');
    emp.getAllEmployees(function(data){
        res.statusCode=200;
        res.end(JSON.stringify(data));
    });
});

router.post('/employee',function(req,res){
    res.setHeader('Content-Type', 'application/json');
    emp.addEmployee(req.body,function(msg){
        res.end(msg);
    });
});



module.exports = router;