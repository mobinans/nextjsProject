module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Header/index.js":
/*!************************************!*\
  !*** ./components/Header/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\mobin\\Desktop\\ReactApp\\next\\components\\Header\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const countries = [{
  label: 'us',
  name: 'United State'
}, {
  label: 'in',
  name: 'India'
}, {
  label: 'gb',
  name: 'Great Britain'
}];

const Header = () => {
  const router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  const {
    0: selectedCountry,
    1: setSelectedCountry
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(router.query.country);

  const onChangeHandler = e => {
    setSelectedCountry(e.target.value);
    router.push(`/[country]`, `/${e.target.value}`);
  };

  const renderCountries = () => {
    return countries.map(country => {
      return __jsx("option", {
        key: country.label,
        value: country.label,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: undefined
      }, country.name);
    });
  };

  return __jsx("div", {
    className: "jsx-162329060" + " " + "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, __jsx("select", {
    value: selectedCountry,
    onChange: onChangeHandler,
    className: "jsx-162329060" + " " + "grp__option",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, renderCountries()), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: "162329060",
    __self: undefined
  }, ".header.jsx-162329060{padding:20px;background-color:#333;color:#fff;text-align:center;cursor:pointer;}.grp__option.jsx-162329060{font-size:20px;padding:5px 5px;}.grp__option.jsx-162329060>option{font-size:15px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcbW9iaW5cXERlc2t0b3BcXFJlYWN0QXBwXFxuZXh0XFxjb21wb25lbnRzXFxIZWFkZXJcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9Db0IsQUFHMEIsQUFPRSxBQUlBLGFBVk8sRUFPTixBQUlwQixnQkFIQSxJQVBlLFdBQ08sa0JBQ0gsZUFDbkIiLCJmaWxlIjoiQzpcXFVzZXJzXFxtb2JpblxcRGVza3RvcFxcUmVhY3RBcHBcXG5leHRcXGNvbXBvbmVudHNcXEhlYWRlclxcaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge3VzZVN0YXRlfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7dXNlUm91dGVyfSBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jb25zdCBjb3VudHJpZXMgPSBbe1xyXG4gICAgbGFiZWw6ICd1cycsXHJcbiAgICBuYW1lOiAnVW5pdGVkIFN0YXRlJ1xyXG59LHtcclxuICAgIGxhYmVsOiAnaW4nLFxyXG4gICAgbmFtZTogJ0luZGlhJ1xyXG59LHtcclxuICAgIGxhYmVsOiAnZ2InLFxyXG4gICAgbmFtZTogJ0dyZWF0IEJyaXRhaW4nXHJcbn1dXHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKTtcclxuICAgIGNvbnN0IFtzZWxlY3RlZENvdW50cnksIHNldFNlbGVjdGVkQ291bnRyeV0gPSB1c2VTdGF0ZShyb3V0ZXIucXVlcnkuY291bnRyeSk7XHJcblxyXG5cclxuICAgIGNvbnN0IG9uQ2hhbmdlSGFuZGxlciA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0U2VsZWN0ZWRDb3VudHJ5KGUudGFyZ2V0LnZhbHVlKTtcclxuICAgICAgICByb3V0ZXIucHVzaChgL1tjb3VudHJ5XWAsIGAvJHtlLnRhcmdldC52YWx1ZX1gKTsgICAgICAgIFxyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCByZW5kZXJDb3VudHJpZXMgPSAoKSA9PntcclxuICAgICAgICByZXR1cm4gY291bnRyaWVzLm1hcChjb3VudHJ5ID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIDxvcHRpb24ga2V5PXtjb3VudHJ5LmxhYmVsfSB2YWx1ZT17Y291bnRyeS5sYWJlbH0+e2NvdW50cnkubmFtZX08L29wdGlvbj5cclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlYWRlclwiPlxyXG4gICAgICAgICAgICA8c2VsZWN0IGNsYXNzTmFtZT1cImdycF9fb3B0aW9uXCJcclxuICAgICAgICAgICAgdmFsdWU9e3NlbGVjdGVkQ291bnRyeX1cclxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlSGFuZGxlcn0+XHJcbiAgICAgICAgICAgICAgICB7cmVuZGVyQ291bnRyaWVzKCl9XHJcbiAgICAgICAgICAgIDwvc2VsZWN0PiAgICAgICAgXHJcbiAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgIC5oZWFkZXJ7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMzMzM7XHJcbiAgICAgICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmdycF9fb3B0aW9uIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZ3JwX19vcHRpb24gPiA6Z2xvYmFsKG9wdGlvbil7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDsgICAgICAgICAgICBcclxuICAgICAgICB9XHJcbiAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\mobin\\\\Desktop\\\\ReactApp\\\\next\\\\components\\\\Header\\\\index.js */"));
};

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ "./components/Header/index.js");
var _jsxFileName = "C:\\Users\\mobin\\Desktop\\ReactApp\\next\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }




const MyApp = ({
  Component,
  pageProps
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), __jsx(Component, _extends({}, pageProps, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map