//TESTES DA API DOS PROFISSIONAIS DE SAÚDE
// UTILIZANDO MOCHA E CHAI

const chai = require('chai')
const chaiHttp = require('chai-http')
const expect = chai.expect
const usuarioCompleto = require('./jsonRequests/profissionaisCompleto.json')
const usuarioIncompleto = require('./jsonRequests/profissionaisIncompleto.json')

const apiProfissionais = require('https://hemovigiliancia--api.herokuapp.com/api/professionals')

chai.use(chaiHttp)
chai.should()



describe('API_PROFISSIONAIS', () =>{
    describe('GET', () => {
        it('DEVE RETORNAR STATUS 200', done =>{
            chai.request(apiProfissionais)
            .get('/')
            .end((err,res)=>{
                chai.assert.isNull(err)
                chai.assert.isNotEmpty(res.body)
                res.should.have.status(200)
                res.body.should.have.property('error').equal(0)
                res.body.payload.comments.should.have.property('_id')
                res.body.payload.comments.should.have.property('name').isNotNull()
                res.body.payload.comments.should.have.property('email').isNotNull()
                res.body.payload.comments.should.have.property('operation').isNotNull()
                done()
            })
        })
    })
})

describe('API_PROFISSIONAIS', () =>{
    describe('POST', () => {
        it('DEVE RETORNAR STATUS 200', done =>{
            chai.request(apiProfissionais)
            .post('/')
            .send(usuarioCompleto)
            .end((err, res) =>{
                chai.assert.isNull(err)
                res.should.have.status(200)
            })
        })

        it ('DEVE RETORNAR STATUS 404', done => {
            chai.request(apiProfissionais)
            .post('/')
            .send(usuarioIncompleto)
            .end((err, res) => {
                chai.assert.isNotNull(err)
                res.should.have.status(400)
            })
        })
    })
})
