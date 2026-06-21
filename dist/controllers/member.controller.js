"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Member_service_1 = __importDefault(require("../models/Member.service"));
const Errors_1 = __importDefault(require("../libs/types/Errors"));
const memberService = new Member_service_1.default();
// REACT
const memberController = {};
memberController.signup = async (req, res) => {
    try {
        console.log("signup");
        const input = req.body, result = await memberService.signup(input);
        // TODO: TOKENS AUTHENTICATION
        res.json({ member: result });
    }
    catch (err) {
        console.log("Error, signup:", err);
        if (err instanceof Errors_1.default)
            res.status(err.code).json(err);
        else
            res.status(Errors_1.default.standart.code).json(Errors_1.default.standart);
    }
};
memberController.login = async (req, res) => {
    try {
        console.log("login");
        const input = req.body, result = await memberService.login(input);
        // TODO: TOKENS AUTHENTICATION
        res.json({ member: result });
    }
    catch (err) {
        console.log("Error, login: ", err);
        if (err instanceof Errors_1.default)
            res.status(err.code).json(err);
        else
            res.status(Errors_1.default.standart.code).json(Errors_1.default.standart);
    }
};
exports.default = memberController;
