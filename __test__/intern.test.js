const Employe = require('../lib/Employe');
const Intern = require('../lib/intern') 

describe('Test Employe Class',() =>{
    it('should create a new emoloye object',() => {
      const me = new Employe(1 , 'Roberto17@gmail.com','Roberto','UCLA');

      expect(typeof me).toBe('object')

    })

    it('can set a name via constructor',() =>{
        const me = new Intern(1 , 'Roberto17@gmail.com','Roberto','UCLA');

        expect(me.name).toEqual('Roberto')
    })
    it('can set a id via constructor',() =>{
        const me = new Intern(1 , 'Roberto17@gmail.com','Roberto','UCLA');

        expect(me.id).toEqual(1)
    })
    it('can set a email via constructor',() =>{
        const me = new Intern(1 , 'Roberto17@gmail.com','Roberto','UCLA');

        expect(me.email).toEqual('Roberto17@gmail.com')
    })
    it('can set a schools name via constructor',() =>{
        const me = new Intern(1 , 'Roberto17@gmail.com','Roberto','UCLA');

        expect(me.school).toEqual('UCLA')
    })
    it('can get email via getEmail() method',() =>{
        const me = new Intern(1 , 'Roberto17@gmail.com','Roberto','UCLA');

        expect(me.getEmail()).toEqual('Roberto17@gmail.com')
    })
    it('can get name via getName() method',() =>{
        const me = new Intern(1 , 'Roberto17@gmail.com','Roberto','UCLA');

        expect(me.getName()).toEqual('Roberto')
    })
    it('can get Id via getId() method',() =>{
        const me = new Intern(1 , 'Roberto17@gmail.com','Roberto','UCLA');

        expect(me.getId()).toEqual(1)
    })
    it('can get schools name via getSchool() method',() =>{
        const me = new Intern(1 , 'Roberto17@gmail.com','Roberto','UCLA');

        expect(me.getSchool()).toEqual('UCLA')
    })
    it('can get role via getRole() method',() =>{
        const me = new Intern(1 , 'Roberto17@gmail.com','Roberto','UCLA');

        expect(me.getRole()).toEqual('Intern')
    })
})

