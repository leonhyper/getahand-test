process.env.NODE_ENV = 'test';

let users = require('../../models/user');
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../bin/www');
let expect = chai.expect;

var mongoose = require("mongoose");


chai.use(chaiHttp);
chai.use(require('chai-things'));
let _ = require('lodash' );

describe('Users', function () {
    before(function (done) {
        users.collection.drop();
        done();
    })
    beforeEach(function (done) {
        var user1 = new users({
            name: "leon",
            pass: "1013702057",
        })
        user1.save(function(){
            done();
        });
    })

    describe('POST/user/register', ()=> {
        it('should return a message when an user is successfully added', function(done) {
            let user = {
                name: "Han",
                pass: "111111",
            };
            chai.request(server)
                .post('/user/register')
                .send(user)
                .end(function (err,res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.have.property('message', 'Registration succeed!');
                    done();
                })
            after(function (done) {
               users.find().then((res)=>{
                   expect(res.body.length).to.equal(2);
                   done();
               })
            })
        })
    })
}
