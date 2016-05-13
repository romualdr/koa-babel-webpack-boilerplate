/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	var _koa = __webpack_require__(2);

	var _koa2 = _interopRequireDefault(_koa);

	var _koaRouter = __webpack_require__(3);

	var _koaRouter2 = _interopRequireDefault(_koaRouter);

	var _koaBodyparser = __webpack_require__(4);

	var _koaBodyparser2 = _interopRequireDefault(_koaBodyparser);

	var _exceptions = __webpack_require__(5);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { return step("next", value); }, function (err) { return step("throw", err); }); } } return step("next"); }); }; }

	var app = new _koa2.default();
	var router = (0, _koaRouter2.default)();

	/**
	  Middlewares
	**/

	app
	// Counting time
	.use(function () {
	  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee(ctx, next) {
	    var start;
	    return regeneratorRuntime.wrap(function _callee$(_context) {
	      while (1) {
	        switch (_context.prev = _context.next) {
	          case 0:
	            start = Date.now();
	            _context.next = 3;
	            return next();

	          case 3:
	            console.log('[' + ctx.request.method + '][' + ctx.request.url + '] ' + (Date.now() - start) + ' ms.');

	          case 4:
	          case 'end':
	            return _context.stop();
	        }
	      }
	    }, _callee, undefined);
	  }));

	  return function (_x, _x2) {
	    return ref.apply(this, arguments);
	  };
	}()).use(function () {
	  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee2(ctx, next) {
	    return regeneratorRuntime.wrap(function _callee2$(_context2) {
	      while (1) {
	        switch (_context2.prev = _context2.next) {
	          case 0:
	            _context2.prev = 0;
	            _context2.next = 3;
	            return next();

	          case 3:
	            if (ctx.body) {
	              _context2.next = 5;
	              break;
	            }

	            throw new _exceptions.Exceptions.NotFound('Endpoint [' + ctx.request.url + '] not found.');

	          case 5:
	            ctx.body = {
	              ok: true,
	              content: ctx.body
	            };
	            _context2.next = 11;
	            break;

	          case 8:
	            _context2.prev = 8;
	            _context2.t0 = _context2['catch'](0);

	            ctx.body = (0, _exceptions.ExceptionHandler)(_context2.t0);

	          case 11:
	          case 'end':
	            return _context2.stop();
	        }
	      }
	    }, _callee2, undefined, [[0, 8]]);
	  }));

	  return function (_x3, _x4) {
	    return ref.apply(this, arguments);
	  };
	}())
	// Body parser
	.use((0, _koaBodyparser2.default)()).use(function () {
	  var ref = _asyncToGenerator(regeneratorRuntime.mark(function _callee3(ctx, next) {
	    return regeneratorRuntime.wrap(function _callee3$(_context3) {
	      while (1) {
	        switch (_context3.prev = _context3.next) {
	          case 0:
	            ctx.state = {};
	            ctx.state.query = ctx.request.query;
	            ctx.state.body = ctx.request.body;
	            _context3.next = 5;
	            return next();

	          case 5:
	          case 'end':
	            return _context3.stop();
	        }
	      }
	    }, _callee3, undefined);
	  }));

	  return function (_x5, _x6) {
	    return ref.apply(this, arguments);
	  };
	}())
	// routes
	.use(router.routes())
	// Allowed methods
	.use(router.allowedMethods());

	/**
	  Routes
	**/

	router.get('/', function (ctx, next) {
	  ctx.body = { hello: "world" };
	});

	/**

	You can use ES7 async/await syntax
	router.get('/:name', async (ctx, next) => {

	  ctx.body = await somethingReturningAPromise();

	});

	**/

	/**
	 launch
	**/

	app.listen(3000, function () {
	  console.log('Listening on port 3000');
	});

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("babel-polyfill");

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = require("koa");

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = require("koa-router");

/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = require("koa-bodyparser");

/***/ },
/* 5 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	exports.ExceptionHandler = ExceptionHandler;

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var HTTPException = function () {
	  function HTTPException(type) {
	    _classCallCheck(this, HTTPException);

	    this.error = true;
	  }

	  _createClass(HTTPException, [{
	    key: "status",
	    get: function get() {
	      return this._status;
	    },
	    set: function set(status) {
	      this._status = status;
	    }
	  }, {
	    key: "message",
	    get: function get() {
	      return this._message;
	    },
	    set: function set(message) {
	      this._message = message;
	    }
	  }]);

	  return HTTPException;
	}();

	var BadRequest = function (_HTTPException) {
	  _inherits(BadRequest, _HTTPException);

	  function BadRequest(message) {
	    _classCallCheck(this, BadRequest);

	    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(BadRequest).call(this));

	    _this.type = "Bad Request";
	    _this.message = message;
	    _this.status = 400;
	    return _this;
	  }

	  return BadRequest;
	}(HTTPException);

	var DatabaseError = function (_HTTPException2) {
	  _inherits(DatabaseError, _HTTPException2);

	  function DatabaseError(message) {
	    _classCallCheck(this, DatabaseError);

	    var _this2 = _possibleConstructorReturn(this, Object.getPrototypeOf(DatabaseError).call(this));

	    _this2.type = "Internal Server Error";
	    _this2.message = message;
	    _this2.status = 500;
	    return _this2;
	  }

	  return DatabaseError;
	}(HTTPException);

	var NotFound = function (_HTTPException3) {
	  _inherits(NotFound, _HTTPException3);

	  function NotFound(message) {
	    _classCallCheck(this, NotFound);

	    var _this3 = _possibleConstructorReturn(this, Object.getPrototypeOf(NotFound).call(this));

	    _this3.type = "Not found";
	    _this3.message = message;
	    _this3.status = 404;
	    return _this3;
	  }

	  return NotFound;
	}(HTTPException);

	var Exceptions = exports.Exceptions = {
	  BadRequest: BadRequest,
	  DatabaseError: DatabaseError,
	  NotFound: NotFound
	};

	function ExceptionHandler(exception) {
	  if (exception instanceof HTTPException) return { ok: false, error: true, message: exception.message, status: exception.status, type: exception.type };
	  throw exception;
	}

/***/ }
/******/ ]);