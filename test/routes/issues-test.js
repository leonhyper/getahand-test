process.env.NODE_ENV = 'test';

let issues = require('../../models/issues');
let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../../bin/www');
let expect = chai.expect;

var mongoose = require("mongoose");


chai.use(chaiHttp);
chai.use(require('chai-things'));
let _ = require('lodash' );

describe('Issues', function () {
    before(function (done) {
        issues.collection.drop();
        done();
    })
    beforeEach(function (done) {
        var issue1 = new issues({
            status: false,
            solutions: [],
            _id: "5bcf4dbd1e8bb84d200597fc",
            category: "Art",
        })
        issue1.save(function(){
            done();
        });
    })
    beforeEach(function (done) {
        var issue2 = new issues({
            status: false,
            solutions: [],
            _id: "5bcf4dbf1e8bb84d200597fd",
            category: "Art",
        })
        issue2.save(function(){
            done();
        });
    })
    beforeEach(function (done) {
        var issue3 = new issues({
            status: false,
            solutions: [
                "5bcf4def1e8bb84d20059800",
                "5bcf4df21e8bb84d20059802"
            ],
            _id: "5bcf4dc71e8bb84d200597fe",
            category: "Business",
        })
        issue3.save(function(){
            done();
        });
    })
    describe('GET /issues', () => {
        it('should return all the issues in an array', function (done) {
            chai.request(server)
                .get('/issues')
                .end(function (err, res) {
                    expect(res).to.have.status(200);
                    expect(res.body).to.be.a('array');
                    expect(res.body.length).to.equal(3);
                    let result = _.map(res.body, (issue) => {
                        return {
                            id: issue._id,
                            category: issue.category
                        }
                    });
                    expect(result).to.include({id: "5bcf4dbd1e8bb84d200597fc", category: 'Art'});
                    expect(result).to.include({id: "5bcf4dbf1e8bb84d200597fd", category: 'Art'});
                    expect(result).to.include({id: "5bcf4dc71e8bb84d200597fe", category: 'Business'});
                    done();
                });
        });
    });

    describe('GET /issues/:id', () => {

        it('should return one issue with certain id', function (done) {
            chai.request(server)
                .get('/issues/5bcf4dbd1e8bb84d200597fc')
                .end(function (err, res) {
                    expect(res).to.have.status(200);
                    let result = _.map(res.body, (issue) => {
                        return {_id: issue._id}
                    });
                    expect(result).to.include({_id: "5bcf4dbd1e8bb84d200597fc"});
                    done();
                })
        })
       
    })


})
