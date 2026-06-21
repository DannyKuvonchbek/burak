"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Errors_1 = __importStar(require("../libs/types/Errors"));
const Member_service_1 = __importDefault(require("../models/Member.service"));
const member_enum_1 = require("../libs/enums/member.enum");
const Errors_2 = require("../libs/types/Errors");
const memberService = new Member_service_1.default();
const restaurantController = {};
restaurantController.goHome = (req, res) => {
    try {
        console.log("goHome");
        res.render("home");
        // responce turlari
        // send | json | redirect | end | render
    }
    catch (err) {
        console.log("Error, goHome: ", err);
        res.redirect("/admin");
    }
};
restaurantController.getSignup = (req, res) => {
    try {
        console.log("getSignup");
        res.render("signup");
    }
    catch (err) {
        console.log("Error, getSignup: ", err);
        res.redirect("/admin");
    }
};
restaurantController.getLogin = (req, res) => {
    try {
        res.render("login");
    }
    catch (err) {
        console.log("Error, getLogin: ", err);
        res.redirect("/admin");
    }
};
restaurantController.processSignup = async (req, res) => {
    try {
        console.log("processSignup");
        console.log("req.body:", req.body);
        const file = req.file;
        if (!file)
            throw new Errors_1.default(Errors_1.HttpCode.BAD_REQUEST, Errors_2.Message.SOMETHING_WENT_WRONG);
        const newMember = req.body;
        newMember.memberImage = file?.path;
        newMember.memberType = member_enum_1.MemberType.RESTAURANT;
        const result = await memberService.processSignup(newMember);
        req.session.member = result;
        req.session.save(function () {
            res.redirect("/admin/product/all");
        });
    }
    catch (err) {
        console.log("Error, processSignup: ", err);
        const message = err instanceof Error ? err.message : Errors_2.Message.SOMETHING_WENT_WRONG;
        res.send(`<script> alert ("${message}"); window.location.replace('/admin/signup')</script>`);
    }
};
restaurantController.processLogin = async (req, res) => {
    try {
        console.log("processLogin");
        const input = req.body;
        const result = await memberService.processLogin(input);
        req.session.member = result;
        req.session.save(function () {
            res.redirect("/admin/product/all");
        });
    }
    catch (err) {
        console.log("Error, processLogin: ", err);
        const message = err instanceof Error ? err.message : Errors_2.Message.SOMETHING_WENT_WRONG;
        res.send(`<script> alert ("${message}"); window.location.replace('/admin/login')</script>`);
    }
};
restaurantController.logout = async (req, res) => {
    try {
        console.log("logout");
        req.session.destroy(function () {
            res.redirect("/admin");
        });
    }
    catch (err) {
        console.log("Error, logout: ", err);
        res.redirect("/admin");
    }
};
restaurantController.getUsers = async (req, res) => {
    try {
        console.log("getUsers");
        const result = await memberService.getUsers(); //call
        console.log("result:", result);
        res.render("users", { users: result });
    }
    catch (err) {
        console.log("Error, getUsers:", err);
        res.redirect("/admin/login");
    }
};
restaurantController.updateChosenUser = async (req, res) => {
    try {
        console.log("updateChosenUser");
        const result = await memberService.updateChosenUser(req.body);
        res.status(Errors_1.HttpCode.OK).json({ data: result });
    }
    catch (err) {
        console.log("Error, updateChosenUser:", err);
        if (err instanceof Errors_1.default)
            res.status(err.code).json(err);
        else
            res.status(Errors_1.default.standart.code).json(Errors_1.default.standart);
    }
};
restaurantController.checkAuthSession = async (req, res) => {
    try {
        console.log("checkAuthSession");
        if (req.session?.member)
            res.send(`<script> alert ("${req.session.member.memberNick}")</script>`);
        else
            res.send(`<script> alert("${Errors_2.Message.NOT_AUTHENTICATED}")</script>`);
    }
    catch (err) {
        console.log("Error, checkAuthSession: ", err);
        res.send(err);
    }
};
restaurantController.verifyRestaurant = (req, res, next) => {
    if (req.session?.member?.memberType === member_enum_1.MemberType.RESTAURANT) {
        req.member = req.session.member;
        next();
    }
    else {
        const message = Errors_2.Message.NOT_AUTHENTICATED;
        res.send(`<script> alert("${message}"); window.location.replace('/admin/login'); </script>`);
    }
};
exports.default = restaurantController;
