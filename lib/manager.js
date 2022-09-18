const Employe = require('./Employe');

class Manager extends Employe {
    constructor(id , email ,name , officeNumber){
        super(id, email,name);
        this.officeNumber = officeNumber;


    }
    getOfficeNumber(){
        return this.officeNumber;
    }
    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getName(){
        return this.name;
    }

    getRole(){
        return 'Manager';
    }

}

module.exports = Manager;
