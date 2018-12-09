# Assignment 1 - API testing and Source Control.

Name: Sheng Zhu

## Overview.

This API is aimed at enabling users to release their issues on the web application.

## API endpoints.

+GET/issues-- get all issues in database;

+GET/issues/:id-- search for one issue by its _id;

+GET/issues/category/:category-- get all issues with certain category(fuzzy search adopted);

+GET/issues/solved/:status-- get all issues with one status solved(1 or True) or unsolved(0 or False);

+POST/issues-- add a new issue to database;

+PUT/issues/:id/:status-- update one issue's status,set it to true or false;

+DELETE/issues/:id-- delete one issue by its _id;

+POST/user/register-- add a new user to database

+POST/user/validate/:name/:pass-- find if a user exists in database with right name and password, used for authenticating when login

+POST/user/validateName/:name-- find if a username already exists in database during signing up
## Data storage.
Data is stored in local MongoDB.
The structure for collection 'issues' is as followed:
{
        category: String,
        status: {type: Boolean , default: false},
        text: String
        solutions: []
 },
    { collection: 'Issues' });

The structure for collection 'user' is as followed:
{
        name: {type:String,unique:true},
        pass: String
    },
    { collection: 'Users' });

## Sample Test execution.
. . . . . In this section include a listing of the output from running your tests, e.g.

        $ npm test

        > get-a-hand@0.0.0 test H:\AgileSP\GET_A_HAND
        > cross-env NODE_ENV=test mocha --compilers js:babel-core/register test/routes/issues-test.js



        (node:15680) DeprecationWarning: current URL string parser is deprecated, and will be removed in a future version. To use the new parser, pass option { useNewUrlParser: true } to MongoClient.connect.
          Issues
            GET /issues
        Successfully Connected to [ issues-test ]
        Successfully Connected to [ issues-test ]
        (node:15680) DeprecationWarning: collection.ensureIndex is deprecated. Use createIndexes instead.
              √ should return all the issues in an array (163ms)
            GET /issues/:id
              √ should return one issue with certain id (70ms)
              √ should return err when request id is invalid
            GET/issues/category/:category
              √ should return all issues in certain category in array (62ms)
              √ should return err when request category is invalid (61ms)
            GET/issues/solved/status
              √ should return all issues with certain status in array (58ms)
              √ should return 404 when request status is illegal
            PUT/issues/:id/:status
              √ should update the status and display the modified issue (107ms)
              √ should return an error message when id is invalid
              √ should return an error message when status is illegal (89ms)
            DELETE/issues/:id
              √ should return an error message when id is invalid
        (node:15680) DeprecationWarning: collection.findAndModify is deprecated. Use findOneAndUpdate, findOneAndReplace or findOneAndDelete instead.
              √ should return a message when a issue is deleted (122ms)
            POST/issues
              √ should return a message when an issue is successfully added (92ms)

          Users
            POST/user/register
              √ should return a message when an user is successfully added (60ms)
            POST/user/validate/:name/:pass
              √ should return the found user when name and pass are valid (70ms)
              √ should return null if name is invalid (79ms)
              √ should return null if pass is invalid (68ms)
            POST/user/validateName/:name
              √ should return the found user if the name exists (56ms)
              √ should return null if name dose not exist


          19 passing (8s)

        $

[ Markdown Tip: By indenting the above listing, GitHub will display it in a 'box' and preserve any formatting.]

## Extra features.
In Api, fuzzy search applied, user authenticating implemented.

In test I used test isolation and before(),beforeEach() and after() hook.

Eslint applied, npm script including linting, watching, multiple scripts, Pre and Post hooks applied.

github link : https://github.com/leonhyper/getahand-test
