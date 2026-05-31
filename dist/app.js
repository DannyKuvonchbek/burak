"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const router_1 = __importDefault(require("./router"));
const router_admin_1 = __importDefault(require("./router-admin"));
const morgan_1 = __importDefault(require("morgan"));
const config_1 = require("./libs/config");
/** 1-ENTRANCE **/
const app = (0, express_1.default)();
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use((0, morgan_1.default)(config_1.MORGAN_FORMAT));
/** 2-SESSION **/
/** 3-VIEWS **/
app.set("views", path_1.default.join(__dirname, "views"));
app.set("view engine", "ejs");
/** 4-ROUTERS **/
app.use("/admin", router_admin_1.default); // EJS
app.use("/", router_1.default); // REACT
exports.default = app;
