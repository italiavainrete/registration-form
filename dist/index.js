

function ___$insertStyle(css) {
  if (!css) {
    return;
  }
  if (typeof window === 'undefined') {
    return;
  }

  var style = document.createElement('style');

  style.setAttribute('type', 'text/css');
  style.innerHTML = css;
  document.head.appendChild(style);
  return css;
}

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopNamespace(e) {
    if (e && e.__esModule) return e;
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () {
                        return e[k];
                    }
                });
            }
        });
    }
    n['default'] = e;
    return Object.freeze(n);
}

var React__namespace = /*#__PURE__*/_interopNamespace(React);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

___$insertStyle(".counter {\n  --bg-color: #f3f3f3;\n  --base-color: #666;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100px;\n  width: 70px;\n  margin: 10% auto;\n  border: 3px solid var(--base-color);\n  border-radius: 5px;\n  color: var(--base-color);\n  background-color: var(--bg-color);\n  cursor: pointer;\n  overflow: hidden;\n}\n.counter:hover {\n  color: var(--bg-color);\n  background-color: var(--base-color);\n  border-color: var(--bg-color);\n}\n.counter__count {\n  font-size: 2rem;\n  font-family: \"Segoe UI\", sans-serif;\n  color: inherit;\n  animation: in 1s ease alternate forwards;\n  pointer-events: none;\n}\n\n@keyframes in {\n  0% {\n    transform: translateY(-200%);\n  }\n  50% {\n    color: inherit;\n    font-size: 2.2rem;\n    transform: translateY(0);\n    opacity: 1;\n  }\n  90% {\n    opacity: 0;\n    color: var(--blaze);\n  }\n  100% {\n    transform: translateY(200%);\n    font-size: 1.8rem;\n    opacity: 0;\n  }\n}");

var useState = React__namespace.useState, useReducer = React__namespace.useReducer;
var formReducer = function (state, event) {
    var _a;
    return __assign(__assign({}, state), (_a = {}, _a[event.name] = event.value, _a));
};
var RegistrationForm = function (_a) {
    var sourceType = _a.sourceType, sourceId = _a.sourceId;
    var _b = useReducer(formReducer, {}), formData = _b[0], setFormData = _b[1];
    var _c = useState(false), submitting = _c[0], setSubmitting = _c[1];
    var handleSubmit = function (event) {
        event.preventDefault();
        setSubmitting(true);
        console.log(formData);
        setTimeout(function () {
            setSubmitting(false);
        }, 3000);
    };
    var handleChange = function (event) {
        var isCheckbox = event.target.type === 'checkbox';
        setFormData({
            name: event.target.name,
            value: isCheckbox ? event.target.checked : event.target.value,
        });
    };
    return (React__namespace.createElement("div", { className: "wrapper" },
        submitting && React__namespace.createElement("p", null, "Invio"),
        React__namespace.createElement("form", { onSubmit: handleSubmit },
            React__namespace.createElement("input", { type: "hidden", name: "source_type", value: sourceType }),
            React__namespace.createElement("input", { type: "hidden", name: "source_id", value: sourceId }),
            React__namespace.createElement("fieldset", { disabled: submitting },
                React__namespace.createElement("label", null,
                    React__namespace.createElement("p", null, "Nome"),
                    React__namespace.createElement("input", { name: "firstname", onChange: handleChange, value: formData.firstname || '' })),
                React__namespace.createElement("label", null,
                    React__namespace.createElement("p", null, "Cognome"),
                    React__namespace.createElement("input", { name: "lastname", onChange: handleChange, value: formData.lastname || '' })),
                React__namespace.createElement("label", null,
                    React__namespace.createElement("p", null, "Email"),
                    React__namespace.createElement("input", { name: "email", onChange: handleChange, value: formData.email || '' })),
                React__namespace.createElement("label", null,
                    React__namespace.createElement("p", null, "Cellulare"),
                    React__namespace.createElement("input", { name: "phone", onChange: handleChange, value: formData.phone || '' }))),
            React__namespace.createElement("fieldset", { disabled: submitting },
                React__namespace.createElement("label", null,
                    React__namespace.createElement("p", null, "Indirizzo"),
                    React__namespace.createElement("input", { name: "address", onChange: handleChange, value: formData.address || '' })),
                React__namespace.createElement("label", null,
                    React__namespace.createElement("p", null, "Citt\u00E0"),
                    React__namespace.createElement("input", { name: "city", onChange: handleChange, value: formData.city || '' }))),
            React__namespace.createElement("label", null,
                React__namespace.createElement("p", null,
                    "Ho letto e accetto l'",
                    React__namespace.createElement("a", { href: "" }, "Informativa Privacy"),
                    " "),
                React__namespace.createElement("input", { type: "checkbox", name: "privacy", onChange: handleChange, checked: formData['privacy'] || false })),
            React__namespace.createElement("button", { disabled: submitting, type: "submit" }, "Registrati"))));
};
var App = function (_a) {
    var _b = _a.sourceType, sourceType = _b === void 0 ? '' : _b, _c = _a.sourceId, sourceId = _c === void 0 ? '' : _c;
    return React__namespace.createElement(RegistrationForm, { sourceType: sourceType, sourceId: sourceId });
};

exports.default = App;
//# sourceMappingURL=index.js.map
