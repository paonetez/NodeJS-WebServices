var fs = require('fs');

module.exports.getAllEmployees = function(func){
    
    fs.readFile('emp/emp-list.json','utf8',(err,data) => {
        if(err) throw err;
        if(data) {
            func(JSON.parse(data));
        }
    });
    
};

module.exports.addEmployee = function(newEmployee,func){

    this.empList = [];
    fs.readFile('emp/emp-list.json','utf8',(err,data) => {
        if(err) throw err;
        if(data) {
            this.empList=JSON.parse(data);
            console.log(this.empList);
            this.empList.push(newEmployee);
            console.log(this.empList);
            fs.writeFile('emp/emp-list.json',JSON.stringify(this.empList),function(err){
                if(err){
                    throw err;
                }else{
                    func("Added Successfuly!");
                }
            });
        }
    });
};



