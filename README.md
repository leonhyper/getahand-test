# Assignment 2 - Web API - Automated development process.

Name: Sheng Zhu

## Overview.

This API is aimed at enabling users to release their issues on the web application.It has issues model and user model
to implement basic functions and user login and sign up

## API endpoints.
+GET/issues-- get all issues in database;

+GET/issues/:id-- search for one issue by its _id;

+GET/issues/category/:category-- get all issues with certain category(fuzzy search adopted);

+GET/issues/solved/:status-- get all issues with one status solved(1 or True) or unsolved(0 or False);

+POST/issues-- add a new issue to database;

+PUT/issues/:id/:status-- update one issue's status,set it to true or false;

+DELETE/issues/:id-- delete one issue by its _id;

(the following 3 are newly added)
+POST/user/register-- add a new user to database

+POST/user/validate/:name/:pass-- find if a user exists in database with right name and password, used for authenticating when login

+POST/user/validateName/:name-- find if a username already exists in database during signing up


## Continuous Integration and Test results.

. . . URL of the Travis build page for web API, e.g.

travis link : https://travis-ci.org/leonhyper/getahand-test

. . . URL of published test coverage results on Coveralls, e.g.

coveralls link : https://coveralls.io/github/leonhyper/getahand-test

## Extra features.
In Api, fuzzy search applied, user authenticating implemented. A new model 'user' has
been added in to implement user login and sign up.

In test I used test isolation and before(),beforeEach() and after() hook. Original database has been isolated
from testing and dedicated test_database is adopted.

Eslint applied, npm script including linting, watching, multiple scripts, Pre and Post hooks, istanbul cover applied.

Test results and coverage data are published on COVERALLS.

github link : https://github.com/leonhyper/getahand-test

