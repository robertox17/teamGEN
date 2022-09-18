const Employe = require('../lib/Employe');
const Enginer = require('../lib/enginer') 

describe('Test Employe Class',() =>{
    it('should create a new emoloye object',() => {
      const me = new Employe(1 , 'Roberto17@gmail.com','Roberto','robertox17');

      expect(typeof me).toBe('object')

    })

    it('can set a name via constructor',() =>{
        const me = new Enginer(1 , 'Roberto17@gmail.com','Roberto','robertox17');

        expect(me.name).toEqual('Roberto')
    })
    it('can set a id via constructor',() =>{
        const me = new Enginer(1 , 'Roberto17@gmail.com','Roberto','robertox17');

        expect(me.id).toEqual(1)
    })
    it('can set a email via constructor',() =>{
        const me = new Enginer(1 , 'Roberto17@gmail.com','Roberto','robertox17');

        expect(me.email).toEqual('Roberto17@gmail.com')
    })
    it('can set a github name via constructor',() =>{
        const me = new Enginer(1 , 'Roberto17@gmail.com','Roberto','robertox17');

        expect(me.github).toEqual('robertox17')
    })
    it('can get email via getEmail() method',() =>{
        const me = new Enginer(1 , 'Roberto17@gmail.com','Roberto','robertox17');

        expect(me.getEmail()).toEqual('Roberto17@gmail.com')
    })
    it('can get name via getName() method',() =>{
        const me = new Enginer(1 , 'Roberto17@gmail.com','Roberto','robertox17');

        expect(me.getName()).toEqual('Roberto')
    })
    it('can get Id via getId() method',() =>{
        const me = new Enginer(1 , 'Roberto17@gmail.com','Roberto','robertox17');

        expect(me.getId()).toEqual(1)
    })
    it('can get github username via getGithub() method',() =>{
        const me = new Enginer(1 , 'Roberto17@gmail.com','Roberto','robertox17');

        expect(me.getGithub()).toEqual('robertox17')
    })
    it('can get role via getRole() method',() =>{
        const me = new Enginer(1 , 'Roberto17@gmail.com','Roberto','robertox17');

        expect(me.getRole()).toEqual('Enginer')
    })
})

