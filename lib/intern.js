const Employe = require('./Employe');

class Intern extends Employe {
    constructor(id , email ,name , school){
        super(id, email,name );
        this.school = school;


    }
    getId(){
        return this.id
    }

    getEmail(){
        return this.email;
    }

    getName(){
        return this.name;
    }

    getSchool(){
        return this.school;
    }

    getRole(){
        return 'Intern';
    }

}

module.exports = Intern;
