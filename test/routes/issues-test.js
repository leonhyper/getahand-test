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


})
