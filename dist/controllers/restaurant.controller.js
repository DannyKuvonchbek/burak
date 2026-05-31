"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const restaurantController = {};
restaurantController.goHome = (req, res) => {
    try {
        console.log("goHome");
        res.send("Home Page");
        // responce turlari
        // send | json | redirect | end | render
    }
    catch (err) {
        console.log("Error, goHome: ", err);
    }
};
restaurantController.getLogin = (req, res) => {
    try {
        console.log("getLogin");
        res.send("Login Page");
    }
    catch (err) {
        console.log("Error, getLogin: ", err);
    }
};
restaurantController.getSignup = (req, res) => {
    try {
        console.log("getSignup");
        res.send("Signup Page");
    }
    catch (err) {
        console.log("Error, getSignup: ", err);
    }
};
restaurantController.processLogin = (req, res) => {
    try {
        console.log("processLogin");
        res.send("DONE");
    }
    catch (err) {
        console.log("Error, processLogin: ", err);
    }
};
restaurantController.processSignup = (req, res) => {
    try {
        console.log("processSignup");
        res.send("DONE");
    }
    catch (err) {
        console.log("Error, processSignup: ", err);
    }
};
exports.default = restaurantController;
