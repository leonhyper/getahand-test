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

## Data storage.
Data is stored in MongoDB using mlab.
The structure for collection 'issues' is as followed:
{
        category: String,
        status: {type: Boolean , default: false},
        solutions: []
 },
    { collection: 'Issues' });

## Sample Test execution.
. . . . . In this section include a listing of the output from running your tests, e.g.

        $ npm test

        > get-a-hand@0.0.0 test H:\Agile SP\GET_A_HAND
        > mocha test/routes/issues-test.js



        (node:32720) DeprecationWarning: current URL string parser is deprecated, and will be removed in a future version. To use the new parser, pass option { useNewUrlParser: true } to MongoClient.connect.
          Issues
            GET /issues
        Successfully Connected to [ issues-test ]
              √ should return all the issues in an array (167ms)
            GET /issues/:id
              √ should return one issue with certain id (151ms)
              √ should return err when request id is invalid
            GET/issues/category/:category
              √ should return all issues in certain category in array (177ms)
              √ should return err when request category is invalid (210ms)
            GET/issues/solved/status
              √ should return all issues with certain status in array (76ms)
              √ should return 404 when request status is illegal
            PUT/issues/:id/:status
              √ should update the status and display the modified issue (202ms)
              √ should return an error message when id is invalid
              √ should return an error message when status is illegal (101ms)
            DELETE/issues/:id
              √ should return an error message when id is invalid
        (node:32720) DeprecationWarning: collection.findAndModify is deprecated. Use findOneAndUpdate, findOneAndReplace or findOneAndDelete instead.
              √ should return a message when a issue is deleted (70ms)
            POST/issues
              √ should return a message when an issue is successfully added (122ms)


          13 passing (6s)

        $

[ Markdown Tip: By indenting the above listing, GitHub will display it in a 'box' and preserve any formatting.]

## Extra features.
In test I used test isolation and before(),beforeEach() and after() hook.

github link : https://github.com/leonhyper/getahand-test
