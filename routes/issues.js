let issues = require('../models/issues');
let express = require('express');
var app = express();
let router = express.Router();
let mongoose = require('mongoose');
let db = mongoose.connection;


if (process.env.NODE_ENV == 'test') {
    var mongodbUri ='mongodb://issuesdb:1013702057zs@ds139883.mlab.com:39883/issues-test';
}
else{
    // var mongodbUri ='mongodb://issuesdb:1013702057zs@ds139193.mlab.com:39193/issuesdb';
    var mongodbUri ='mongodb://localhost:27017/issuesdb';
}

mongoose.connect(mongodbUri);
// mongoose.connect('mongodb://localhost:27017/issuesdb');

var ObjectId = require('mongodb').ObjectId;

db.on('error', function (err) {
    console.log('Unable to Connect to [ ' + db.name + ' ]', err);
});

db.once('open', function () {
    console.log('Successfully Connected to [ ' + db.name + ' ]');
});


router.findAllIssues = (req, res) => {
    // Return a JSON representation of our list
    res.setHeader('Content-Type', 'application/json');

    issues.find(function(err, issues) {
        if (err)
            res.send(err);

        res.send(JSON.stringify(issues,null,5));
    });
}

router.findById = (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    issues.find({ _id :req.params.id },function(err, issue) {
        if (err){
            res.status(404);
            res.json({message:'Issue Not Found!',errmsg:err});
            // return a suitable error message
        }
        else
            res.send(JSON.stringify(issue,null,5));
        // return the donation
    });
}

router.findByCate = (req, res) => {

    res.setHeader('Content-Type', 'application/json');

    var whereStr = {'category':{$regex:req.params.category,$options:'i'}};

    issues.find(whereStr ,function(err, issue) {
        if (err){
            res.status(404);
            res.json({message:'Issues Not Found!',errmsg:err});
        }
        // return a suitable error message
        else
            res.send(JSON.stringify(issue,null,5));
        // return the donation
    });

}

router.findByStatus = (req, res) => {
    res.setHeader('Content-Type', 'application/json');

    issues.find({ status :req.params.status },function(err, issue) {
        if (err){
            res.status(404);
            res.send(err);
            // return a suitable error message
        }
        else
            res.send(JSON.stringify(issue, null, 5));
    })

}
router.addIssue = (req, res) => {
    //Add a new donation to our list
    res.setHeader('Content-Type', 'application/json');

    var issue = new issues();

    issue.category = req.body.category;
    issue.text = req.body.text;

    issue.save(function(err) {
        if (err)
            res.json({ message: 'Issue NOT Added!', errmsg : err } );
        else
            res.json({ message: 'Issue Successfully Added!', data: issue });
    });
}

router.updateStatus = (req, res) =>{
    //find a certain issue by id and update 'unsolved'(false) status to 'solved'(true) status
    // var issue = getByValue(issues, req.params.id);
    //
    // if(issue != null){
    //     issue.status = true;
    //     res.json({ message : 'Update Successful.Issue set solved' , issue : issue });
    // }else
    //     res.send('Issue NOT Found - Update NOT Successful!!');
    res.setHeader('Content-Type', 'application/json');
    issues.findById(req.params.id, function(err,issue){
        if (err)
            res.json({ message: 'Donation NOT Found!', errmsg : err } );
        else{
            issue.status = req.params.status;
            issue.save(function (err) {
                if (err)
                    res.json({ message: 'Issue NOT Updated to Solved!', errmsg : err } );
                else
                    res.json({ message: 'Issue Successfully Set Solved!', data: issue });
            });
        }
    })
}

router.deleteIssue = (req, res) =>{
    issues.findByIdAndRemove(req.params.id, function(err) {
        if (err) {
            res.status(404);
            res.json({message: 'Issue NOT DELETED!', errmsg: err});
        }
        else
            res.json({ message: 'Issue Successfully Deleted!'});
    });
}

module.exports = router;
