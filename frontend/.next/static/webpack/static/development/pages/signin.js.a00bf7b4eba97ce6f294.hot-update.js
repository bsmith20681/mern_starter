webpackHotUpdate("static\\development\\pages\\signin.js",{

/***/ "./components/auth/SigninComponent.js":
/*!********************************************!*\
  !*** ./components/auth/SigninComponent.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _actions_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../actions/auth */ "./actions/auth.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "D:\\mern_starter\\frontend\\components\\auth\\SigninComponent.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var SigninComponent = function SigninComponent() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({
    email: '',
    password: '',
    error: '',
    loading: false,
    message: '',
    showForm: true
  }),
      values = _useState[0],
      setValues = _useState[1];

  var email = values.email,
      password = values.password,
      error = values.error,
      loading = values.loading,
      message = values.message,
      showForm = values.showForm;

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault(); // console.table({ name, email, password, error, loading, message, showForm });

    setValues(_objectSpread({}, values, {
      loading: true,
      error: false
    }));
    var user = {
      email: email,
      password: password
    };
    Object(_actions_auth__WEBPACK_IMPORTED_MODULE_2__["signin"])(user).then(function (data) {
      console.log(data);

      if (data.error) {
        setValues(_objectSpread({}, values, {
          error: data.error,
          loading: false
        }));
      } else {
        Object(_actions_auth__WEBPACK_IMPORTED_MODULE_2__["authenticate"])(data, function () {
          next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push("/");
        });
      }
    });
  };

  var handleChange = function handleChange(name) {
    return function (e) {
      setValues(_objectSpread({}, values, Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
        error: false
      }, name, e.target.value)));
    };
  };

  var showLoading = function showLoading() {
    return loading ? __jsx("div", {
      className: "alert alert-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, "Loading...") : '';
  };

  var showError = function showError() {
    return error ? __jsx("div", {
      className: "alert alert-danger",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, error) : '';
  };

  var showMessage = function showMessage() {
    return message ? __jsx("div", {
      className: "alert alert-info",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, message) : '';
  };

  var signinForm = function signinForm() {
    return __jsx("form", {
      onSubmit: handleSubmit,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx("div", {
      "class": "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("label", {
      "for": "exampleInputEmail1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, "Email address"), __jsx("input", {
      value: email,
      onChange: handleChange('email'),
      type: "email",
      "class": "form-control",
      id: "exampleInputEmail1",
      "aria-describedby": "emailHelp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }), __jsx("small", {
      id: "emailHelp",
      "class": "form-text text-muted",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "We'll never share your email with anyone else.")), __jsx("div", {
      "class": "form-group",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx("label", {
      "for": "exampleInputPassword1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, "Password"), __jsx("input", {
      value: password,
      onChange: handleChange('password'),
      type: "password",
      "class": "form-control",
      id: "exampleInputPassword1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    })), __jsx("button", {
      type: "submit",
      "class": "btn btn-primary",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, "Sign In"));
  };

  return __jsx("div", {
    "class": "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx("div", {
    "class": "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx("div", {
    "class": "col-lg-12 col-md-12 col-sm-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("h1", {
    "class": "text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Sign In"), showError(), showLoading(), showMessage(), showForm && signinForm())));
};

/* harmony default export */ __webpack_exports__["default"] = (SigninComponent);

/***/ })

})
//# sourceMappingURL=signin.js.a00bf7b4eba97ce6f294.hot-update.js.map