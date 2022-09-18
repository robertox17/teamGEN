const Employe = require('../lib/Employe');

describe('Test Employe Class',() =>{
    it('should create a new emoloye object',() => {
      const me = new Employe(1 , 'Roberto17@gmail.com','Roberto');

      expect(typeof me).toBe('object')

    })

    it('can set a name via constructor',() =>{
        const me = new Employe(1, 'Roberto17@gmail.com','Roberto');

        expect(me.name).toEqual('Roberto')
    })
    it('can set a id via constructor',() =>{
        const me = new Employe(1, 'Roberto17@gmail.com','Roberto');

        expect(me.id).toEqual(1)
    })
    it('can set a name email constructor',() =>{
        const me = new Employe(1, 'Roberto17@gmail.com','Roberto');

        expect(me.email).toEqual('Roberto17@gmail.com')
    })
    it('can get email via getEmail() method',() =>{
        const me = new Employe(1, 'Roberto17@gmail.com','Roberto');

        expect(me.getEmail()).toEqual('Roberto17@gmail.com')
    })
    it('can get name via getName() method',() =>{
        const me = new Employe(1, 'Roberto17@gmail.com','Roberto');

        expect(me.getName()).toEqual('Roberto')
    })
    it('can get Id via getId() method',() =>{
        const me = new Employe(1, 'Roberto17@gmail.com','Roberto');

        expect(me.getId()).toEqual(1)
    })
    it('can get role via getRole() method',() =>{
        const me = new Employe(1, 'Roberto17@gmail.com','Roberto');

        expect(me.getRole()).toEqual('Employe')
    })
})

