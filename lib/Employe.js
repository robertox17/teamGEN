class Employe{
    constructor(id,email,name){
        this.id=id;
        this.email=email;
        this.name=name;
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

    getRole(){
        return 'Employe';
    }

}

module.exports = Employe;