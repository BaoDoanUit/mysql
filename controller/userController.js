//import { SL_OP_ALLOW_UNSAFE_LEGACY_RENEGOTIATION } from "constants";

var userModel = require("../model/userModel");

var controllers = {
    getAll: function(req, res) {
        userModel.getAll()
            .then(function(values) {
                console.log(values);
                res.json(values);
            })
            .catch(function(err) {
                console.log(err);
            });
    },
    getById: function(req, res) {
        userModel.getByID(req.params.id)
            .then(function(values) {
                console.log(values);
                res.json(values);
            })
            .catch(function(err) {
                console.log(err);
            });
    },
    checkUser: function(req, res) {
        console.log(req.body.user);
        console.log(req.body.pass);
        var username = req.body.user.toString(),
            password = req.body.pass.toString();

        userModel.checkUser()
        .then(function(values) {
            values.forEach(function(user){
                console.log("User" + user);
                if (username == user.role_id.toString() && password == user.pass.toString())
                {
                    userModel.getByID(req.body.user)
                        .then(function(userData){
                            console.log(userData);
                            res.json({
                                data: userData[0]
                            });
                        })
                        .catch(function(err) {
                            console.log(err);
                            res.status(404).json({
                                data: 'no data'
                            });
                        });

                } else{
                    res.json({
                        data: 'no data'
                    })
                }
            })
        })
        .catch(function(err) {
            console.log(err);
            res.status(404).json(err);
        });

    }
}

module.exports = controllers;