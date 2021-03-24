/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/server/config/index.ts":
/*!************************************!*\
  !*** ./src/server/config/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.default = {\n    mysql: {\n        host: process.env.HOST,\n        port: Number(process.env.DBPORT),\n        user: process.env.USER,\n        password: process.env.PASSWORD,\n        database: process.env.DATABASE,\n    }\n};\n\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/config/index.ts?");

/***/ }),

/***/ "./src/server/db/authors.ts":
/*!**********************************!*\
  !*** ./src/server/db/authors.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar index_1 = __webpack_require__(/*! ./index */ \"./src/server/db/index.ts\");\nvar insert = function (name, email) { return index_1.Query(\"\\ninsert into authors (name, email)\\nvalues(?, ?)\", [name, email]); };\nexports.default = {\n    insert: insert\n};\n\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/db/authors.ts?");

/***/ }),

/***/ "./src/server/db/blogs.ts":
/*!********************************!*\
  !*** ./src/server/db/blogs.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar index_1 = __webpack_require__(/*! ./index */ \"./src/server/db/index.ts\");\nvar all = function () { return index_1.Query(\"\\nselect blogs.title, blogs.content, authors.name from Blogs\\njoin Authors\\non blogs.authorid = authors.id\\n\"); };\nvar one = function (id) { return index_1.Query(\"\\nselect blogs.title, blogs.content, authors.name from Blogs\\njoin Authors\\non blogs.authorid = authors.id\\nwhere blog.id = ?\\n\", [id]); };\nvar insert = function (title, content, authorid) { return index_1.Query(\"insert into blogs (title, content, authorid)\\n    values(?, ?, ?)\", [title, content, authorid]); };\nvar update = function (content, id) { return index_1.Query(\"\\nUPDATE blogs\\nSET content = ?\\nWHERE blogs.id = ?;\\n\", [content, id]); };\nvar deleteBlog = function (id) { return index_1.Query(\"\\ndelete from blogs\\nwhere blogs.id = ? \", [id]); };\nexports.default = {\n    all: all,\n    one: one,\n    insert: insert,\n    update: update,\n    deleteBlog: deleteBlog\n};\n\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/db/blogs.ts?");

/***/ }),

/***/ "./src/server/db/index.ts":
/*!********************************!*\
  !*** ./src/server/db/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nexports.Query = exports.Connection = void 0;\nvar mysql = __webpack_require__(/*! mysql */ \"mysql\");\nvar config_1 = __webpack_require__(/*! ../config */ \"./src/server/config/index.ts\");\nvar blogs_1 = __webpack_require__(/*! ./blogs */ \"./src/server/db/blogs.ts\");\nvar authors_1 = __webpack_require__(/*! ./authors */ \"./src/server/db/authors.ts\");\nexports.Connection = mysql.createConnection(config_1.default.mysql);\nvar Query = function (query, values) {\n    return new Promise(function (resolve, reject) {\n        exports.Connection.query(query, values, function (err, results) {\n            if (err)\n                return reject(err);\n            resolve(results);\n        });\n    });\n};\nexports.Query = Query;\nexports.default = {\n    Blogs: blogs_1.default,\n    Authors: authors_1.default\n};\n\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/db/index.ts?");

/***/ }),

/***/ "./src/server/routes/blogs.ts":
/*!************************************!*\
  !*** ./src/server/routes/blogs.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

eval("\nvar __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (this && this.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (_) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express = __webpack_require__(/*! express */ \"express\");\nvar db_1 = __webpack_require__(/*! ../db */ \"./src/server/db/index.ts\");\nvar router = express.Router();\nrouter.get(\"/\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var blogs, error_1;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 2, , 3]);\n                return [4 /*yield*/, db_1.default.Blogs.all()];\n            case 1:\n                blogs = _a.sent();\n                res.json(blogs);\n                return [3 /*break*/, 3];\n            case 2:\n                error_1 = _a.sent();\n                console.error(error_1);\n                res.status(500).send(error_1);\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); });\nrouter.get(\"/:id\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var id, blog, error_2;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 2, , 3]);\n                id = Number(req.params.id);\n                return [4 /*yield*/, db_1.default.Blogs.one(id)];\n            case 1:\n                blog = _a.sent();\n                res.json(blog[0]);\n                return [3 /*break*/, 3];\n            case 2:\n                error_2 = _a.sent();\n                console.error(error_2);\n                res.status(500).send(error_2);\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); });\nrouter.post(\"/\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var author, blog, newAuthor, newBlog, error_3;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 3, , 4]);\n                author = req.body.author, blog = req.body.blog;\n                return [4 /*yield*/, db_1.default.Authors.insert(author.name, author.email)];\n            case 1:\n                newAuthor = _a.sent();\n                return [4 /*yield*/, db_1.default.Blogs.insert(blog.title, blog.content, newAuthor.insertId)];\n            case 2:\n                newBlog = _a.sent();\n                res.status(200).send(\"\\n      author created with id: \" + newAuthor.insertId + \"\\n      blog created with id: \" + newBlog.insertId);\n                return [3 /*break*/, 4];\n            case 3:\n                error_3 = _a.sent();\n                console.error(error_3);\n                res.status(500).send(error_3);\n                return [3 /*break*/, 4];\n            case 4: return [2 /*return*/];\n        }\n    });\n}); });\nrouter.put(\"/:id\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var content, error_4;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 2, , 3]);\n                content = req.body.content;\n                return [4 /*yield*/, db_1.default.Blogs.update()];\n            case 1:\n                _a.sent();\n                return [3 /*break*/, 3];\n            case 2:\n                error_4 = _a.sent();\n                console.error(error_4);\n                res.status(500).send(error_4);\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); });\nrouter.delete(\"/:id\", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {\n    var id, error_5;\n    return __generator(this, function (_a) {\n        switch (_a.label) {\n            case 0:\n                _a.trys.push([0, 2, , 3]);\n                id = Number(req.params.id);\n                return [4 /*yield*/, db_1.default.Blogs.deleteBlog(id)];\n            case 1:\n                _a.sent();\n                res.status(200).send(\"blog deleted at id: \" + id);\n                return [3 /*break*/, 3];\n            case 2:\n                error_5 = _a.sent();\n                console.error(error_5);\n                res.status(500).send(error_5);\n                return [3 /*break*/, 3];\n            case 3: return [2 /*return*/];\n        }\n    });\n}); });\nexports.default = router;\n\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/routes/blogs.ts?");

/***/ }),

/***/ "./src/server/routes/index.ts":
/*!************************************!*\
  !*** ./src/server/routes/index.ts ***!
  \************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\nvar express = __webpack_require__(/*! express */ \"express\");\nvar blogs_1 = __webpack_require__(/*! ./blogs */ \"./src/server/routes/blogs.ts\");\nvar router = express.Router();\nrouter.use('/blogs', blogs_1.default);\nexports.default = router;\n\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/routes/index.ts?");

/***/ }),

/***/ "./src/server/server.ts":
/*!******************************!*\
  !*** ./src/server/server.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

eval("\nObject.defineProperty(exports, \"__esModule\", ({ value: true }));\n__webpack_require__(/*! dotenv */ \"dotenv\").config();\nvar express = __webpack_require__(/*! express */ \"express\");\nvar routes_1 = __webpack_require__(/*! ./routes */ \"./src/server/routes/index.ts\");\nvar app = express();\napp.use(express.static('public'));\napp.use(\"/api\", routes_1.default);\napp.use(express.json());\nvar port = process.env.PORT || 3000;\napp.listen(port, function () { return console.log(\"Server listening on port: \" + port); });\n\n\n//# sourceURL=webpack://barebones-react-typescript-express/./src/server/server.ts?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("dotenv");;

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");;

/***/ }),

/***/ "mysql":
/*!************************!*\
  !*** external "mysql" ***!
  \************************/
/***/ ((module) => {

module.exports = require("mysql");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/server/server.ts");
/******/ 	
/******/ })()
;