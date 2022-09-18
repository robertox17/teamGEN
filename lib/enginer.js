const Employe = require('./Employe');

class Enginer extends Employe {
    constructor(id , email ,name , github){
        super(id, email,name );
        this.github = github;
    }22
    getId(){
        return this.id
    }

    getEmail(){
        return this.email;
    }

    getName(){
        return this.name;
    }

    getGithub(){
        return this.github;
    }

    getRole(){
        return 'Enginer';
    }


}

module.exports = Enginer;
