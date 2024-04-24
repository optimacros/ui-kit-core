import { jsx as He } from "react/jsx-runtime";
import { a as gt, g as Et } from "../_commonjsHelpers-CT_km90n.js";
import it from "react";
import Ot from "react-dom";
var Ne = { exports: {} }, ie = {}, De = { exports: {} }, Ee = { exports: {} }, D = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ye;
function _t() {
  if (Ye)
    return D;
  Ye = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, u = e ? Symbol.for("react.profiler") : 60114, b = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, S = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, v = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, L = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, U = e ? Symbol.for("react.fundamental") : 60117, j = e ? Symbol.for("react.responder") : 60118, Q = e ? Symbol.for("react.scope") : 60119;
  function $(c) {
    if (typeof c == "object" && c !== null) {
      var X = c.$$typeof;
      switch (X) {
        case t:
          switch (c = c.type, c) {
            case S:
            case p:
            case o:
            case u:
            case s:
            case d:
              return c;
            default:
              switch (c = c && c.$$typeof, c) {
                case a:
                case v:
                case L:
                case T:
                case b:
                  return c;
                default:
                  return X;
              }
          }
        case n:
          return X;
      }
    }
  }
  function W(c) {
    return $(c) === p;
  }
  return D.AsyncMode = S, D.ConcurrentMode = p, D.ContextConsumer = a, D.ContextProvider = b, D.Element = t, D.ForwardRef = v, D.Fragment = o, D.Lazy = L, D.Memo = T, D.Portal = n, D.Profiler = u, D.StrictMode = s, D.Suspense = d, D.isAsyncMode = function(c) {
    return W(c) || $(c) === S;
  }, D.isConcurrentMode = W, D.isContextConsumer = function(c) {
    return $(c) === a;
  }, D.isContextProvider = function(c) {
    return $(c) === b;
  }, D.isElement = function(c) {
    return typeof c == "object" && c !== null && c.$$typeof === t;
  }, D.isForwardRef = function(c) {
    return $(c) === v;
  }, D.isFragment = function(c) {
    return $(c) === o;
  }, D.isLazy = function(c) {
    return $(c) === L;
  }, D.isMemo = function(c) {
    return $(c) === T;
  }, D.isPortal = function(c) {
    return $(c) === n;
  }, D.isProfiler = function(c) {
    return $(c) === u;
  }, D.isStrictMode = function(c) {
    return $(c) === s;
  }, D.isSuspense = function(c) {
    return $(c) === d;
  }, D.isValidElementType = function(c) {
    return typeof c == "string" || typeof c == "function" || c === o || c === p || c === u || c === s || c === d || c === m || typeof c == "object" && c !== null && (c.$$typeof === L || c.$$typeof === T || c.$$typeof === b || c.$$typeof === a || c.$$typeof === v || c.$$typeof === U || c.$$typeof === j || c.$$typeof === Q || c.$$typeof === x);
  }, D.typeOf = $, D;
}
var I = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Be;
function Ct() {
  return Be || (Be = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, n = e ? Symbol.for("react.portal") : 60106, o = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, u = e ? Symbol.for("react.profiler") : 60114, b = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, S = e ? Symbol.for("react.async_mode") : 60111, p = e ? Symbol.for("react.concurrent_mode") : 60111, v = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, m = e ? Symbol.for("react.suspense_list") : 60120, T = e ? Symbol.for("react.memo") : 60115, L = e ? Symbol.for("react.lazy") : 60116, x = e ? Symbol.for("react.block") : 60121, U = e ? Symbol.for("react.fundamental") : 60117, j = e ? Symbol.for("react.responder") : 60118, Q = e ? Symbol.for("react.scope") : 60119;
    function $(f) {
      return typeof f == "string" || typeof f == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      f === o || f === p || f === u || f === s || f === d || f === m || typeof f == "object" && f !== null && (f.$$typeof === L || f.$$typeof === T || f.$$typeof === b || f.$$typeof === a || f.$$typeof === v || f.$$typeof === U || f.$$typeof === j || f.$$typeof === Q || f.$$typeof === x);
    }
    function W(f) {
      if (typeof f == "object" && f !== null) {
        var J = f.$$typeof;
        switch (J) {
          case t:
            var ge = f.type;
            switch (ge) {
              case S:
              case p:
              case o:
              case u:
              case s:
              case d:
                return ge;
              default:
                var ke = ge && ge.$$typeof;
                switch (ke) {
                  case a:
                  case v:
                  case L:
                  case T:
                  case b:
                    return ke;
                  default:
                    return J;
                }
            }
          case n:
            return J;
        }
      }
    }
    var c = S, X = p, pe = a, ve = b, ee = t, ye = v, le = o, G = L, te = T, h = n, g = u, N = s, r = d, y = !1;
    function q(f) {
      return y || (y = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), i(f) || W(f) === S;
    }
    function i(f) {
      return W(f) === p;
    }
    function l(f) {
      return W(f) === a;
    }
    function C(f) {
      return W(f) === b;
    }
    function O(f) {
      return typeof f == "object" && f !== null && f.$$typeof === t;
    }
    function E(f) {
      return W(f) === v;
    }
    function P(f) {
      return W(f) === o;
    }
    function w(f) {
      return W(f) === L;
    }
    function R(f) {
      return W(f) === T;
    }
    function M(f) {
      return W(f) === n;
    }
    function F(f) {
      return W(f) === u;
    }
    function A(f) {
      return W(f) === s;
    }
    function H(f) {
      return W(f) === d;
    }
    I.AsyncMode = c, I.ConcurrentMode = X, I.ContextConsumer = pe, I.ContextProvider = ve, I.Element = ee, I.ForwardRef = ye, I.Fragment = le, I.Lazy = G, I.Memo = te, I.Portal = h, I.Profiler = g, I.StrictMode = N, I.Suspense = r, I.isAsyncMode = q, I.isConcurrentMode = i, I.isContextConsumer = l, I.isContextProvider = C, I.isElement = O, I.isForwardRef = E, I.isFragment = P, I.isLazy = w, I.isMemo = R, I.isPortal = M, I.isProfiler = F, I.isStrictMode = A, I.isSuspense = H, I.isValidElementType = $, I.typeOf = W;
  }()), I;
}
var Ve;
function st() {
  return Ve || (Ve = 1, process.env.NODE_ENV === "production" ? Ee.exports = _t() : Ee.exports = Ct()), Ee.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var we, ze;
function St() {
  if (ze)
    return we;
  ze = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, n = Object.prototype.propertyIsEnumerable;
  function o(u) {
    if (u == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(u);
  }
  function s() {
    try {
      if (!Object.assign)
        return !1;
      var u = new String("abc");
      if (u[5] = "de", Object.getOwnPropertyNames(u)[0] === "5")
        return !1;
      for (var b = {}, a = 0; a < 10; a++)
        b["_" + String.fromCharCode(a)] = a;
      var S = Object.getOwnPropertyNames(b).map(function(v) {
        return b[v];
      });
      if (S.join("") !== "0123456789")
        return !1;
      var p = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(v) {
        p[v] = v;
      }), Object.keys(Object.assign({}, p)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return we = s() ? Object.assign : function(u, b) {
    for (var a, S = o(u), p, v = 1; v < arguments.length; v++) {
      a = Object(arguments[v]);
      for (var d in a)
        t.call(a, d) && (S[d] = a[d]);
      if (e) {
        p = e(a);
        for (var m = 0; m < p.length; m++)
          n.call(a, p[m]) && (S[p[m]] = a[p[m]]);
      }
    }
    return S;
  }, we;
}
var Re, Ke;
function $e() {
  if (Ke)
    return Re;
  Ke = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Re = e, Re;
}
var Pe, Je;
function lt() {
  return Je || (Je = 1, Pe = Function.call.bind(Object.prototype.hasOwnProperty)), Pe;
}
var Me, Xe;
function Tt() {
  if (Xe)
    return Me;
  Xe = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = $e(), n = {}, o = lt();
    e = function(u) {
      var b = "Warning: " + u;
      typeof console < "u" && console.error(b);
      try {
        throw new Error(b);
      } catch {
      }
    };
  }
  function s(u, b, a, S, p) {
    if (process.env.NODE_ENV !== "production") {
      for (var v in u)
        if (o(u, v)) {
          var d;
          try {
            if (typeof u[v] != "function") {
              var m = Error(
                (S || "React class") + ": " + a + " type `" + v + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof u[v] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw m.name = "Invariant Violation", m;
            }
            d = u[v](b, v, S, a, null, t);
          } catch (L) {
            d = L;
          }
          if (d && !(d instanceof Error) && e(
            (S || "React class") + ": type specification of " + a + " `" + v + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in n)) {
            n[d.message] = !0;
            var T = p ? p() : "";
            e(
              "Failed " + a + " type: " + d.message + (T ?? "")
            );
          }
        }
    }
  }
  return s.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (n = {});
  }, Me = s, Me;
}
var Ae, Ge;
function wt() {
  if (Ge)
    return Ae;
  Ge = 1;
  var e = st(), t = St(), n = $e(), o = lt(), s = Tt(), u = function() {
  };
  process.env.NODE_ENV !== "production" && (u = function(a) {
    var S = "Warning: " + a;
    typeof console < "u" && console.error(S);
    try {
      throw new Error(S);
    } catch {
    }
  });
  function b() {
    return null;
  }
  return Ae = function(a, S) {
    var p = typeof Symbol == "function" && Symbol.iterator, v = "@@iterator";
    function d(i) {
      var l = i && (p && i[p] || i[v]);
      if (typeof l == "function")
        return l;
    }
    var m = "<<anonymous>>", T = {
      array: j("array"),
      bigint: j("bigint"),
      bool: j("boolean"),
      func: j("function"),
      number: j("number"),
      object: j("object"),
      string: j("string"),
      symbol: j("symbol"),
      any: Q(),
      arrayOf: $,
      element: W(),
      elementType: c(),
      instanceOf: X,
      node: ye(),
      objectOf: ve,
      oneOf: pe,
      oneOfType: ee,
      shape: G,
      exact: te
    };
    function L(i, l) {
      return i === l ? i !== 0 || 1 / i === 1 / l : i !== i && l !== l;
    }
    function x(i, l) {
      this.message = i, this.data = l && typeof l == "object" ? l : {}, this.stack = "";
    }
    x.prototype = Error.prototype;
    function U(i) {
      if (process.env.NODE_ENV !== "production")
        var l = {}, C = 0;
      function O(P, w, R, M, F, A, H) {
        if (M = M || m, A = A || R, H !== n) {
          if (S) {
            var f = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw f.name = "Invariant Violation", f;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var J = M + ":" + R;
            !l[J] && // Avoid spamming the console because they are often not actionable except for lib authors
            C < 3 && (u(
              "You are manually calling a React.PropTypes validation function for the `" + A + "` prop on `" + M + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), l[J] = !0, C++);
          }
        }
        return w[R] == null ? P ? w[R] === null ? new x("The " + F + " `" + A + "` is marked as required " + ("in `" + M + "`, but its value is `null`.")) : new x("The " + F + " `" + A + "` is marked as required in " + ("`" + M + "`, but its value is `undefined`.")) : null : i(w, R, M, F, A);
      }
      var E = O.bind(null, !1);
      return E.isRequired = O.bind(null, !0), E;
    }
    function j(i) {
      function l(C, O, E, P, w, R) {
        var M = C[O], F = N(M);
        if (F !== i) {
          var A = r(M);
          return new x(
            "Invalid " + P + " `" + w + "` of type " + ("`" + A + "` supplied to `" + E + "`, expected ") + ("`" + i + "`."),
            { expectedType: i }
          );
        }
        return null;
      }
      return U(l);
    }
    function Q() {
      return U(b);
    }
    function $(i) {
      function l(C, O, E, P, w) {
        if (typeof i != "function")
          return new x("Property `" + w + "` of component `" + E + "` has invalid PropType notation inside arrayOf.");
        var R = C[O];
        if (!Array.isArray(R)) {
          var M = N(R);
          return new x("Invalid " + P + " `" + w + "` of type " + ("`" + M + "` supplied to `" + E + "`, expected an array."));
        }
        for (var F = 0; F < R.length; F++) {
          var A = i(R, F, E, P, w + "[" + F + "]", n);
          if (A instanceof Error)
            return A;
        }
        return null;
      }
      return U(l);
    }
    function W() {
      function i(l, C, O, E, P) {
        var w = l[C];
        if (!a(w)) {
          var R = N(w);
          return new x("Invalid " + E + " `" + P + "` of type " + ("`" + R + "` supplied to `" + O + "`, expected a single ReactElement."));
        }
        return null;
      }
      return U(i);
    }
    function c() {
      function i(l, C, O, E, P) {
        var w = l[C];
        if (!e.isValidElementType(w)) {
          var R = N(w);
          return new x("Invalid " + E + " `" + P + "` of type " + ("`" + R + "` supplied to `" + O + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return U(i);
    }
    function X(i) {
      function l(C, O, E, P, w) {
        if (!(C[O] instanceof i)) {
          var R = i.name || m, M = q(C[O]);
          return new x("Invalid " + P + " `" + w + "` of type " + ("`" + M + "` supplied to `" + E + "`, expected ") + ("instance of `" + R + "`."));
        }
        return null;
      }
      return U(l);
    }
    function pe(i) {
      if (!Array.isArray(i))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? u(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : u("Invalid argument supplied to oneOf, expected an array.")), b;
      function l(C, O, E, P, w) {
        for (var R = C[O], M = 0; M < i.length; M++)
          if (L(R, i[M]))
            return null;
        var F = JSON.stringify(i, function(H, f) {
          var J = r(f);
          return J === "symbol" ? String(f) : f;
        });
        return new x("Invalid " + P + " `" + w + "` of value `" + String(R) + "` " + ("supplied to `" + E + "`, expected one of " + F + "."));
      }
      return U(l);
    }
    function ve(i) {
      function l(C, O, E, P, w) {
        if (typeof i != "function")
          return new x("Property `" + w + "` of component `" + E + "` has invalid PropType notation inside objectOf.");
        var R = C[O], M = N(R);
        if (M !== "object")
          return new x("Invalid " + P + " `" + w + "` of type " + ("`" + M + "` supplied to `" + E + "`, expected an object."));
        for (var F in R)
          if (o(R, F)) {
            var A = i(R, F, E, P, w + "." + F, n);
            if (A instanceof Error)
              return A;
          }
        return null;
      }
      return U(l);
    }
    function ee(i) {
      if (!Array.isArray(i))
        return process.env.NODE_ENV !== "production" && u("Invalid argument supplied to oneOfType, expected an instance of array."), b;
      for (var l = 0; l < i.length; l++) {
        var C = i[l];
        if (typeof C != "function")
          return u(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + y(C) + " at index " + l + "."
          ), b;
      }
      function O(E, P, w, R, M) {
        for (var F = [], A = 0; A < i.length; A++) {
          var H = i[A], f = H(E, P, w, R, M, n);
          if (f == null)
            return null;
          f.data && o(f.data, "expectedType") && F.push(f.data.expectedType);
        }
        var J = F.length > 0 ? ", expected one of type [" + F.join(", ") + "]" : "";
        return new x("Invalid " + R + " `" + M + "` supplied to " + ("`" + w + "`" + J + "."));
      }
      return U(O);
    }
    function ye() {
      function i(l, C, O, E, P) {
        return h(l[C]) ? null : new x("Invalid " + E + " `" + P + "` supplied to " + ("`" + O + "`, expected a ReactNode."));
      }
      return U(i);
    }
    function le(i, l, C, O, E) {
      return new x(
        (i || "React class") + ": " + l + " type `" + C + "." + O + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + E + "`."
      );
    }
    function G(i) {
      function l(C, O, E, P, w) {
        var R = C[O], M = N(R);
        if (M !== "object")
          return new x("Invalid " + P + " `" + w + "` of type `" + M + "` " + ("supplied to `" + E + "`, expected `object`."));
        for (var F in i) {
          var A = i[F];
          if (typeof A != "function")
            return le(E, P, w, F, r(A));
          var H = A(R, F, E, P, w + "." + F, n);
          if (H)
            return H;
        }
        return null;
      }
      return U(l);
    }
    function te(i) {
      function l(C, O, E, P, w) {
        var R = C[O], M = N(R);
        if (M !== "object")
          return new x("Invalid " + P + " `" + w + "` of type `" + M + "` " + ("supplied to `" + E + "`, expected `object`."));
        var F = t({}, C[O], i);
        for (var A in F) {
          var H = i[A];
          if (o(i, A) && typeof H != "function")
            return le(E, P, w, A, r(H));
          if (!H)
            return new x(
              "Invalid " + P + " `" + w + "` key `" + A + "` supplied to `" + E + "`.\nBad object: " + JSON.stringify(C[O], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(i), null, "  ")
            );
          var f = H(R, A, E, P, w + "." + A, n);
          if (f)
            return f;
        }
        return null;
      }
      return U(l);
    }
    function h(i) {
      switch (typeof i) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !i;
        case "object":
          if (Array.isArray(i))
            return i.every(h);
          if (i === null || a(i))
            return !0;
          var l = d(i);
          if (l) {
            var C = l.call(i), O;
            if (l !== i.entries) {
              for (; !(O = C.next()).done; )
                if (!h(O.value))
                  return !1;
            } else
              for (; !(O = C.next()).done; ) {
                var E = O.value;
                if (E && !h(E[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function g(i, l) {
      return i === "symbol" ? !0 : l ? l["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && l instanceof Symbol : !1;
    }
    function N(i) {
      var l = typeof i;
      return Array.isArray(i) ? "array" : i instanceof RegExp ? "object" : g(l, i) ? "symbol" : l;
    }
    function r(i) {
      if (typeof i > "u" || i === null)
        return "" + i;
      var l = N(i);
      if (l === "object") {
        if (i instanceof Date)
          return "date";
        if (i instanceof RegExp)
          return "regexp";
      }
      return l;
    }
    function y(i) {
      var l = r(i);
      switch (l) {
        case "array":
        case "object":
          return "an " + l;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + l;
        default:
          return l;
      }
    }
    function q(i) {
      return !i.constructor || !i.constructor.name ? m : i.constructor.name;
    }
    return T.checkPropTypes = s, T.resetWarningCache = s.resetWarningCache, T.PropTypes = T, T;
  }, Ae;
}
var xe, Ze;
function Rt() {
  if (Ze)
    return xe;
  Ze = 1;
  var e = $e();
  function t() {
  }
  function n() {
  }
  return n.resetWarningCache = t, xe = function() {
    function o(b, a, S, p, v, d) {
      if (d !== e) {
        var m = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw m.name = "Invariant Violation", m;
      }
    }
    o.isRequired = o;
    function s() {
      return o;
    }
    var u = {
      array: o,
      bigint: o,
      bool: o,
      func: o,
      number: o,
      object: o,
      string: o,
      symbol: o,
      any: o,
      arrayOf: s,
      element: o,
      elementType: o,
      instanceOf: s,
      node: o,
      objectOf: s,
      oneOf: s,
      oneOfType: s,
      shape: s,
      exact: s,
      checkPropTypes: n,
      resetWarningCache: t
    };
    return u.PropTypes = u, u;
  }, xe;
}
if (process.env.NODE_ENV !== "production") {
  var Pt = st(), Mt = !0;
  De.exports = wt()(Pt.isElement, Mt);
} else
  De.exports = Rt()();
var ut = De.exports, Ie = { exports: {} }, z = {}, Le = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = v;
  /*!
   * Adapted from jQuery UI core
   *
   * http://jqueryui.com
   *
   * Copyright 2014 jQuery Foundation and other contributors
   * Released under the MIT license.
   * http://jquery.org/license
   *
   * http://api.jqueryui.com/category/ui-core/
   */
  var n = "none", o = "contents", s = /input|select|textarea|button|object|iframe/;
  function u(d, m) {
    return m.getPropertyValue("overflow") !== "visible" || // if 'overflow: visible' set, check if there is actually any overflow
    d.scrollWidth <= 0 && d.scrollHeight <= 0;
  }
  function b(d) {
    var m = d.offsetWidth <= 0 && d.offsetHeight <= 0;
    if (m && !d.innerHTML)
      return !0;
    try {
      var T = window.getComputedStyle(d), L = T.getPropertyValue("display");
      return m ? L !== o && u(d, T) : L === n;
    } catch {
      return console.warn("Failed to inspect element style"), !1;
    }
  }
  function a(d) {
    for (var m = d, T = d.getRootNode && d.getRootNode(); m && m !== document.body; ) {
      if (T && m === T && (m = T.host.parentNode), b(m))
        return !1;
      m = m.parentNode;
    }
    return !0;
  }
  function S(d, m) {
    var T = d.nodeName.toLowerCase(), L = s.test(T) && !d.disabled || T === "a" && d.href || m;
    return L && a(d);
  }
  function p(d) {
    var m = d.getAttribute("tabindex");
    m === null && (m = void 0);
    var T = isNaN(m);
    return (T || m >= 0) && S(d, !T);
  }
  function v(d) {
    var m = [].slice.call(d.querySelectorAll("*"), 0).reduce(function(T, L) {
      return T.concat(L.shadowRoot ? v(L.shadowRoot) : [L]);
    }, []);
    return m.filter(p);
  }
  e.exports = t.default;
})(Le, Le.exports);
var ct = Le.exports;
Object.defineProperty(z, "__esModule", {
  value: !0
});
z.resetState = Dt;
z.log = It;
z.handleBlur = me;
z.handleFocus = he;
z.markForFocusLater = Lt;
z.returnFocus = Ft;
z.popWithoutFocus = Ut;
z.setupScopedFocus = Wt;
z.teardownScopedFocus = $t;
var At = ct, xt = Nt(At);
function Nt(e) {
  return e && e.__esModule ? e : { default: e };
}
var se = [], ue = null, Fe = !1;
function Dt() {
  se = [];
}
function It() {
  process.env.NODE_ENV !== "production" && (console.log("focusManager ----------"), se.forEach(function(e) {
    var t = e || {};
    console.log(t.nodeName, t.className, t.id);
  }), console.log("end focusManager ----------"));
}
function me() {
  Fe = !0;
}
function he() {
  if (Fe) {
    if (Fe = !1, !ue)
      return;
    setTimeout(function() {
      if (!ue.contains(document.activeElement)) {
        var e = (0, xt.default)(ue)[0] || ue;
        e.focus();
      }
    }, 0);
  }
}
function Lt() {
  se.push(document.activeElement);
}
function Ft() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1, t = null;
  try {
    se.length !== 0 && (t = se.pop(), t.focus({ preventScroll: e }));
    return;
  } catch {
    console.warn(["You tried to return focus to", t, "but it is not in the DOM anymore"].join(" "));
  }
}
function Ut() {
  se.length > 0 && se.pop();
}
function Wt(e) {
  ue = e, window.addEventListener ? (window.addEventListener("blur", me, !1), document.addEventListener("focus", he, !0)) : (window.attachEvent("onBlur", me), document.attachEvent("onFocus", he));
}
function $t() {
  ue = null, window.addEventListener ? (window.removeEventListener("blur", me), document.removeEventListener("focus", he)) : (window.detachEvent("onBlur", me), document.detachEvent("onFocus", he));
}
var Ue = { exports: {} };
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  }), t.default = b;
  var n = ct, o = s(n);
  function s(a) {
    return a && a.__esModule ? a : { default: a };
  }
  function u() {
    var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : document;
    return a.activeElement.shadowRoot ? u(a.activeElement.shadowRoot) : a.activeElement;
  }
  function b(a, S) {
    var p = (0, o.default)(a);
    if (!p.length) {
      S.preventDefault();
      return;
    }
    var v = void 0, d = S.shiftKey, m = p[0], T = p[p.length - 1], L = u();
    if (a === L) {
      if (!d)
        return;
      v = T;
    }
    if (T === L && !d && (v = m), m === L && d && (v = T), v) {
      S.preventDefault(), v.focus();
      return;
    }
    var x = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent), U = x != null && x[1] != "Chrome" && /\biPod\b|\biPad\b/g.exec(navigator.userAgent) == null;
    if (U) {
      var j = p.indexOf(L);
      if (j > -1 && (j += d ? -1 : 1), v = p[j], typeof v > "u") {
        S.preventDefault(), v = d ? T : m, v.focus();
        return;
      }
      S.preventDefault(), v.focus();
    }
  }
  e.exports = t.default;
})(Ue, Ue.exports);
var qt = Ue.exports, K = {}, jt = process.env.NODE_ENV !== "production", ft = function() {
};
if (jt) {
  var kt = function(t, n) {
    var o = arguments.length;
    n = new Array(o > 1 ? o - 1 : 0);
    for (var s = 1; s < o; s++)
      n[s - 1] = arguments[s];
    var u = 0, b = "Warning: " + t.replace(/%s/g, function() {
      return n[u++];
    });
    typeof console < "u" && console.error(b);
    try {
      throw new Error(b);
    } catch {
    }
  };
  ft = function(e, t, n) {
    var o = arguments.length;
    n = new Array(o > 2 ? o - 2 : 0);
    for (var s = 2; s < o; s++)
      n[s - 2] = arguments[s];
    if (t === void 0)
      throw new Error(
        "`warning(condition, format, ...args)` requires a warning message argument"
      );
    e || kt.apply(null, [t].concat(n));
  };
}
var Ht = ft, V = {}, dt = { exports: {} };
/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/
(function(e) {
  (function() {
    var t = !!(typeof window < "u" && window.document && window.document.createElement), n = {
      canUseDOM: t,
      canUseWorkers: typeof Worker < "u",
      canUseEventListeners: t && !!(window.addEventListener || window.attachEvent),
      canUseViewport: t && !!window.screen
    };
    e.exports ? e.exports = n : window.ExecutionEnvironment = n;
  })();
})(dt);
var Yt = dt.exports;
Object.defineProperty(V, "__esModule", {
  value: !0
});
V.canUseDOM = V.SafeNodeList = V.SafeHTMLCollection = void 0;
var Bt = Yt, Vt = zt(Bt);
function zt(e) {
  return e && e.__esModule ? e : { default: e };
}
var Te = Vt.default, Kt = Te.canUseDOM ? window.HTMLElement : {};
V.SafeHTMLCollection = Te.canUseDOM ? window.HTMLCollection : {};
V.SafeNodeList = Te.canUseDOM ? window.NodeList : {};
V.canUseDOM = Te.canUseDOM;
V.default = Kt;
Object.defineProperty(K, "__esModule", {
  value: !0
});
K.resetState = Qt;
K.log = en;
K.assertNodeList = pt;
K.setElement = tn;
K.validateElement = qe;
K.hide = nn;
K.show = rn;
K.documentNotReadyOrSSRTesting = on;
var Jt = Ht, Xt = Zt(Jt), Gt = V;
function Zt(e) {
  return e && e.__esModule ? e : { default: e };
}
var Y = null;
function Qt() {
  Y && (Y.removeAttribute ? Y.removeAttribute("aria-hidden") : Y.length != null ? Y.forEach(function(e) {
    return e.removeAttribute("aria-hidden");
  }) : document.querySelectorAll(Y).forEach(function(e) {
    return e.removeAttribute("aria-hidden");
  })), Y = null;
}
function en() {
  if (process.env.NODE_ENV !== "production") {
    var e = Y || {};
    console.log("ariaAppHider ----------"), console.log(e.nodeName, e.className, e.id), console.log("end ariaAppHider ----------");
  }
}
function pt(e, t) {
  if (!e || !e.length)
    throw new Error("react-modal: No elements were found for selector " + t + ".");
}
function tn(e) {
  var t = e;
  if (typeof t == "string" && Gt.canUseDOM) {
    var n = document.querySelectorAll(t);
    pt(n, t), t = n;
  }
  return Y = t || Y, Y;
}
function qe(e) {
  var t = e || Y;
  return t ? Array.isArray(t) || t instanceof HTMLCollection || t instanceof NodeList ? t : [t] : ((0, Xt.default)(!1, ["react-modal: App element is not defined.", "Please use `Modal.setAppElement(el)` or set `appElement={el}`.", "This is needed so screen readers don't see main content", "when modal is opened. It is not recommended, but you can opt-out", "by setting `ariaHideApp={false}`."].join(" ")), []);
}
function nn(e) {
  var t = !0, n = !1, o = void 0;
  try {
    for (var s = qe(e)[Symbol.iterator](), u; !(t = (u = s.next()).done); t = !0) {
      var b = u.value;
      b.setAttribute("aria-hidden", "true");
    }
  } catch (a) {
    n = !0, o = a;
  } finally {
    try {
      !t && s.return && s.return();
    } finally {
      if (n)
        throw o;
    }
  }
}
function rn(e) {
  var t = !0, n = !1, o = void 0;
  try {
    for (var s = qe(e)[Symbol.iterator](), u; !(t = (u = s.next()).done); t = !0) {
      var b = u.value;
      b.removeAttribute("aria-hidden");
    }
  } catch (a) {
    n = !0, o = a;
  } finally {
    try {
      !t && s.return && s.return();
    } finally {
      if (n)
        throw o;
    }
  }
}
function on() {
  Y = null;
}
var ce = {};
Object.defineProperty(ce, "__esModule", {
  value: !0
});
ce.resetState = an;
ce.log = sn;
var re = {}, oe = {};
function Qe(e, t) {
  e.classList.remove(t);
}
function an() {
  var e = document.getElementsByTagName("html")[0];
  for (var t in re)
    Qe(e, re[t]);
  var n = document.body;
  for (var o in oe)
    Qe(n, oe[o]);
  re = {}, oe = {};
}
function sn() {
  if (process.env.NODE_ENV !== "production") {
    var e = document.getElementsByTagName("html")[0].className, t = `Show tracked classes:

`;
    t += "<html /> (" + e + `):
  `;
    for (var n in re)
      t += "  " + n + " " + re[n] + `
  `;
    e = document.body.className, t += `

doc.body (` + e + `):
  `;
    for (var o in oe)
      t += "  " + o + " " + oe[o] + `
  `;
    t += `
`, console.log(t);
  }
}
var ln = function(t, n) {
  return t[n] || (t[n] = 0), t[n] += 1, n;
}, un = function(t, n) {
  return t[n] && (t[n] -= 1), n;
}, cn = function(t, n, o) {
  o.forEach(function(s) {
    ln(n, s), t.add(s);
  });
}, fn = function(t, n, o) {
  o.forEach(function(s) {
    un(n, s), n[s] === 0 && t.remove(s);
  });
};
ce.add = function(t, n) {
  return cn(t.classList, t.nodeName.toLowerCase() == "html" ? re : oe, n.split(" "));
};
ce.remove = function(t, n) {
  return fn(t.classList, t.nodeName.toLowerCase() == "html" ? re : oe, n.split(" "));
};
var fe = {};
Object.defineProperty(fe, "__esModule", {
  value: !0
});
fe.log = pn;
fe.resetState = vn;
function dn(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
var vt = function e() {
  var t = this;
  dn(this, e), this.register = function(n) {
    if (t.openInstances.indexOf(n) !== -1) {
      process.env.NODE_ENV !== "production" && console.warn("React-Modal: Cannot register modal instance that's already open");
      return;
    }
    t.openInstances.push(n), t.emit("register");
  }, this.deregister = function(n) {
    var o = t.openInstances.indexOf(n);
    if (o === -1) {
      process.env.NODE_ENV !== "production" && console.warn("React-Modal: Unable to deregister " + n + " as it was never registered");
      return;
    }
    t.openInstances.splice(o, 1), t.emit("deregister");
  }, this.subscribe = function(n) {
    t.subscribers.push(n);
  }, this.emit = function(n) {
    t.subscribers.forEach(function(o) {
      return o(
        n,
        // shallow copy to avoid accidental mutation
        t.openInstances.slice()
      );
    });
  }, this.openInstances = [], this.subscribers = [];
}, _e = new vt();
function pn() {
  console.log("portalOpenInstances ----------"), console.log(_e.openInstances.length), _e.openInstances.forEach(function(e) {
    return console.log(e);
  }), console.log("end portalOpenInstances ----------");
}
function vn() {
  _e = new vt();
}
fe.default = _e;
var je = {};
Object.defineProperty(je, "__esModule", {
  value: !0
});
je.resetState = bn;
je.log = gn;
var yn = fe, mn = hn(yn);
function hn(e) {
  return e && e.__esModule ? e : { default: e };
}
var k = void 0, B = void 0, ae = [];
function bn() {
  for (var e = [k, B], t = 0; t < e.length; t++) {
    var n = e[t];
    n && n.parentNode && n.parentNode.removeChild(n);
  }
  k = B = null, ae = [];
}
function gn() {
  console.log("bodyTrap ----------"), console.log(ae.length);
  for (var e = [k, B], t = 0; t < e.length; t++) {
    var n = e[t], o = n || {};
    console.log(o.nodeName, o.className, o.id);
  }
  console.log("edn bodyTrap ----------");
}
function et() {
  if (ae.length === 0) {
    process.env.NODE_ENV !== "production" && console.warn("React-Modal: Open instances > 0 expected");
    return;
  }
  ae[ae.length - 1].focusContent();
}
function En(e, t) {
  !k && !B && (k = document.createElement("div"), k.setAttribute("data-react-modal-body-trap", ""), k.style.position = "absolute", k.style.opacity = "0", k.setAttribute("tabindex", "0"), k.addEventListener("focus", et), B = k.cloneNode(), B.addEventListener("focus", et)), ae = t, ae.length > 0 ? (document.body.firstChild !== k && document.body.insertBefore(k, document.body.firstChild), document.body.lastChild !== B && document.body.appendChild(B)) : (k.parentElement && k.parentElement.removeChild(k), B.parentElement && B.parentElement.removeChild(B));
}
mn.default.subscribe(En);
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n = Object.assign || function(h) {
    for (var g = 1; g < arguments.length; g++) {
      var N = arguments[g];
      for (var r in N)
        Object.prototype.hasOwnProperty.call(N, r) && (h[r] = N[r]);
    }
    return h;
  }, o = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(h) {
    return typeof h;
  } : function(h) {
    return h && typeof Symbol == "function" && h.constructor === Symbol && h !== Symbol.prototype ? "symbol" : typeof h;
  }, s = /* @__PURE__ */ function() {
    function h(g, N) {
      for (var r = 0; r < N.length; r++) {
        var y = N[r];
        y.enumerable = y.enumerable || !1, y.configurable = !0, "value" in y && (y.writable = !0), Object.defineProperty(g, y.key, y);
      }
    }
    return function(g, N, r) {
      return N && h(g.prototype, N), r && h(g, r), g;
    };
  }(), u = it, b = ut, a = c(b), S = z, p = W(S), v = qt, d = c(v), m = K, T = W(m), L = ce, x = W(L), U = V, j = c(U), Q = fe, $ = c(Q);
  function W(h) {
    if (h && h.__esModule)
      return h;
    var g = {};
    if (h != null)
      for (var N in h)
        Object.prototype.hasOwnProperty.call(h, N) && (g[N] = h[N]);
    return g.default = h, g;
  }
  function c(h) {
    return h && h.__esModule ? h : { default: h };
  }
  function X(h, g) {
    if (!(h instanceof g))
      throw new TypeError("Cannot call a class as a function");
  }
  function pe(h, g) {
    if (!h)
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return g && (typeof g == "object" || typeof g == "function") ? g : h;
  }
  function ve(h, g) {
    if (typeof g != "function" && g !== null)
      throw new TypeError("Super expression must either be null or a function, not " + typeof g);
    h.prototype = Object.create(g && g.prototype, { constructor: { value: h, enumerable: !1, writable: !0, configurable: !0 } }), g && (Object.setPrototypeOf ? Object.setPrototypeOf(h, g) : h.__proto__ = g);
  }
  var ee = {
    overlay: "ReactModal__Overlay",
    content: "ReactModal__Content"
  }, ye = function(g) {
    return g.code === "Tab" || g.keyCode === 9;
  }, le = function(g) {
    return g.code === "Escape" || g.keyCode === 27;
  }, G = 0, te = function(h) {
    ve(g, h);
    function g(N) {
      X(this, g);
      var r = pe(this, (g.__proto__ || Object.getPrototypeOf(g)).call(this, N));
      return r.setOverlayRef = function(y) {
        r.overlay = y, r.props.overlayRef && r.props.overlayRef(y);
      }, r.setContentRef = function(y) {
        r.content = y, r.props.contentRef && r.props.contentRef(y);
      }, r.afterClose = function() {
        var y = r.props, q = y.appElement, i = y.ariaHideApp, l = y.htmlOpenClassName, C = y.bodyOpenClassName, O = y.parentSelector, E = O && O().ownerDocument || document;
        C && x.remove(E.body, C), l && x.remove(E.getElementsByTagName("html")[0], l), i && G > 0 && (G -= 1, G === 0 && T.show(q)), r.props.shouldFocusAfterRender && (r.props.shouldReturnFocusAfterClose ? (p.returnFocus(r.props.preventScroll), p.teardownScopedFocus()) : p.popWithoutFocus()), r.props.onAfterClose && r.props.onAfterClose(), $.default.deregister(r);
      }, r.open = function() {
        r.beforeOpen(), r.state.afterOpen && r.state.beforeClose ? (clearTimeout(r.closeTimer), r.setState({ beforeClose: !1 })) : (r.props.shouldFocusAfterRender && (p.setupScopedFocus(r.node), p.markForFocusLater()), r.setState({ isOpen: !0 }, function() {
          r.openAnimationFrame = requestAnimationFrame(function() {
            r.setState({ afterOpen: !0 }), r.props.isOpen && r.props.onAfterOpen && r.props.onAfterOpen({
              overlayEl: r.overlay,
              contentEl: r.content
            });
          });
        }));
      }, r.close = function() {
        r.props.closeTimeoutMS > 0 ? r.closeWithTimeout() : r.closeWithoutTimeout();
      }, r.focusContent = function() {
        return r.content && !r.contentHasFocus() && r.content.focus({ preventScroll: !0 });
      }, r.closeWithTimeout = function() {
        var y = Date.now() + r.props.closeTimeoutMS;
        r.setState({ beforeClose: !0, closesAt: y }, function() {
          r.closeTimer = setTimeout(r.closeWithoutTimeout, r.state.closesAt - Date.now());
        });
      }, r.closeWithoutTimeout = function() {
        r.setState({
          beforeClose: !1,
          isOpen: !1,
          afterOpen: !1,
          closesAt: null
        }, r.afterClose);
      }, r.handleKeyDown = function(y) {
        ye(y) && (0, d.default)(r.content, y), r.props.shouldCloseOnEsc && le(y) && (y.stopPropagation(), r.requestClose(y));
      }, r.handleOverlayOnClick = function(y) {
        r.shouldClose === null && (r.shouldClose = !0), r.shouldClose && r.props.shouldCloseOnOverlayClick && (r.ownerHandlesClose() ? r.requestClose(y) : r.focusContent()), r.shouldClose = null;
      }, r.handleContentOnMouseUp = function() {
        r.shouldClose = !1;
      }, r.handleOverlayOnMouseDown = function(y) {
        !r.props.shouldCloseOnOverlayClick && y.target == r.overlay && y.preventDefault();
      }, r.handleContentOnClick = function() {
        r.shouldClose = !1;
      }, r.handleContentOnMouseDown = function() {
        r.shouldClose = !1;
      }, r.requestClose = function(y) {
        return r.ownerHandlesClose() && r.props.onRequestClose(y);
      }, r.ownerHandlesClose = function() {
        return r.props.onRequestClose;
      }, r.shouldBeClosed = function() {
        return !r.state.isOpen && !r.state.beforeClose;
      }, r.contentHasFocus = function() {
        return document.activeElement === r.content || r.content.contains(document.activeElement);
      }, r.buildClassName = function(y, q) {
        var i = (typeof q > "u" ? "undefined" : o(q)) === "object" ? q : {
          base: ee[y],
          afterOpen: ee[y] + "--after-open",
          beforeClose: ee[y] + "--before-close"
        }, l = i.base;
        return r.state.afterOpen && (l = l + " " + i.afterOpen), r.state.beforeClose && (l = l + " " + i.beforeClose), typeof q == "string" && q ? l + " " + q : l;
      }, r.attributesFromObject = function(y, q) {
        return Object.keys(q).reduce(function(i, l) {
          return i[y + "-" + l] = q[l], i;
        }, {});
      }, r.state = {
        afterOpen: !1,
        beforeClose: !1
      }, r.shouldClose = null, r.moveFromContentToOverlay = null, r;
    }
    return s(g, [{
      key: "componentDidMount",
      value: function() {
        this.props.isOpen && this.open();
      }
    }, {
      key: "componentDidUpdate",
      value: function(r, y) {
        process.env.NODE_ENV !== "production" && (r.bodyOpenClassName !== this.props.bodyOpenClassName && console.warn('React-Modal: "bodyOpenClassName" prop has been modified. This may cause unexpected behavior when multiple modals are open.'), r.htmlOpenClassName !== this.props.htmlOpenClassName && console.warn('React-Modal: "htmlOpenClassName" prop has been modified. This may cause unexpected behavior when multiple modals are open.')), this.props.isOpen && !r.isOpen ? this.open() : !this.props.isOpen && r.isOpen && this.close(), this.props.shouldFocusAfterRender && this.state.isOpen && !y.isOpen && this.focusContent();
      }
    }, {
      key: "componentWillUnmount",
      value: function() {
        this.state.isOpen && this.afterClose(), clearTimeout(this.closeTimer), cancelAnimationFrame(this.openAnimationFrame);
      }
    }, {
      key: "beforeOpen",
      value: function() {
        var r = this.props, y = r.appElement, q = r.ariaHideApp, i = r.htmlOpenClassName, l = r.bodyOpenClassName, C = r.parentSelector, O = C && C().ownerDocument || document;
        l && x.add(O.body, l), i && x.add(O.getElementsByTagName("html")[0], i), q && (G += 1, T.hide(y)), $.default.register(this);
      }
      // Don't steal focus from inner elements
    }, {
      key: "render",
      value: function() {
        var r = this.props, y = r.id, q = r.className, i = r.overlayClassName, l = r.defaultStyles, C = r.children, O = q ? {} : l.content, E = i ? {} : l.overlay;
        if (this.shouldBeClosed())
          return null;
        var P = {
          ref: this.setOverlayRef,
          className: this.buildClassName("overlay", i),
          style: n({}, E, this.props.style.overlay),
          onClick: this.handleOverlayOnClick,
          onMouseDown: this.handleOverlayOnMouseDown
        }, w = n({
          id: y,
          ref: this.setContentRef,
          style: n({}, O, this.props.style.content),
          className: this.buildClassName("content", q),
          tabIndex: "-1",
          onKeyDown: this.handleKeyDown,
          onMouseDown: this.handleContentOnMouseDown,
          onMouseUp: this.handleContentOnMouseUp,
          onClick: this.handleContentOnClick,
          role: this.props.role,
          "aria-label": this.props.contentLabel
        }, this.attributesFromObject("aria", n({ modal: !0 }, this.props.aria)), this.attributesFromObject("data", this.props.data || {}), {
          "data-testid": this.props.testId
        }), R = this.props.contentElement(w, C);
        return this.props.overlayElement(P, R);
      }
    }]), g;
  }(u.Component);
  te.defaultProps = {
    style: {
      overlay: {},
      content: {}
    },
    defaultStyles: {}
  }, te.propTypes = {
    isOpen: a.default.bool.isRequired,
    defaultStyles: a.default.shape({
      content: a.default.object,
      overlay: a.default.object
    }),
    style: a.default.shape({
      content: a.default.object,
      overlay: a.default.object
    }),
    className: a.default.oneOfType([a.default.string, a.default.object]),
    overlayClassName: a.default.oneOfType([a.default.string, a.default.object]),
    parentSelector: a.default.func,
    bodyOpenClassName: a.default.string,
    htmlOpenClassName: a.default.string,
    ariaHideApp: a.default.bool,
    appElement: a.default.oneOfType([a.default.instanceOf(j.default), a.default.instanceOf(U.SafeHTMLCollection), a.default.instanceOf(U.SafeNodeList), a.default.arrayOf(a.default.instanceOf(j.default))]),
    onAfterOpen: a.default.func,
    onAfterClose: a.default.func,
    onRequestClose: a.default.func,
    closeTimeoutMS: a.default.number,
    shouldFocusAfterRender: a.default.bool,
    shouldCloseOnOverlayClick: a.default.bool,
    shouldReturnFocusAfterClose: a.default.bool,
    preventScroll: a.default.bool,
    role: a.default.string,
    contentLabel: a.default.string,
    aria: a.default.object,
    data: a.default.object,
    children: a.default.node,
    shouldCloseOnEsc: a.default.bool,
    overlayRef: a.default.func,
    contentRef: a.default.func,
    id: a.default.string,
    overlayElement: a.default.func,
    contentElement: a.default.func,
    testId: a.default.string
  }, t.default = te, e.exports = t.default;
})(Ie, Ie.exports);
var On = Ie.exports;
function yt() {
  var e = this.constructor.getDerivedStateFromProps(this.props, this.state);
  e != null && this.setState(e);
}
function mt(e) {
  function t(n) {
    var o = this.constructor.getDerivedStateFromProps(e, n);
    return o ?? null;
  }
  this.setState(t.bind(this));
}
function ht(e, t) {
  try {
    var n = this.props, o = this.state;
    this.props = e, this.state = t, this.__reactInternalSnapshotFlag = !0, this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      n,
      o
    );
  } finally {
    this.props = n, this.state = o;
  }
}
yt.__suppressDeprecationWarning = !0;
mt.__suppressDeprecationWarning = !0;
ht.__suppressDeprecationWarning = !0;
function _n(e) {
  var t = e.prototype;
  if (!t || !t.isReactComponent)
    throw new Error("Can only polyfill class components");
  if (typeof e.getDerivedStateFromProps != "function" && typeof t.getSnapshotBeforeUpdate != "function")
    return e;
  var n = null, o = null, s = null;
  if (typeof t.componentWillMount == "function" ? n = "componentWillMount" : typeof t.UNSAFE_componentWillMount == "function" && (n = "UNSAFE_componentWillMount"), typeof t.componentWillReceiveProps == "function" ? o = "componentWillReceiveProps" : typeof t.UNSAFE_componentWillReceiveProps == "function" && (o = "UNSAFE_componentWillReceiveProps"), typeof t.componentWillUpdate == "function" ? s = "componentWillUpdate" : typeof t.UNSAFE_componentWillUpdate == "function" && (s = "UNSAFE_componentWillUpdate"), n !== null || o !== null || s !== null) {
    var u = e.displayName || e.name, b = typeof e.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
    throw Error(
      `Unsafe legacy lifecycles will not be called for components using new component APIs.

` + u + " uses " + b + " but also contains the following legacy lifecycles:" + (n !== null ? `
  ` + n : "") + (o !== null ? `
  ` + o : "") + (s !== null ? `
  ` + s : "") + `

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`
    );
  }
  if (typeof e.getDerivedStateFromProps == "function" && (t.componentWillMount = yt, t.componentWillReceiveProps = mt), typeof t.getSnapshotBeforeUpdate == "function") {
    if (typeof t.componentDidUpdate != "function")
      throw new Error(
        "Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype"
      );
    t.componentWillUpdate = ht;
    var a = t.componentDidUpdate;
    t.componentDidUpdate = function(p, v, d) {
      var m = this.__reactInternalSnapshotFlag ? this.__reactInternalSnapshot : d;
      a.call(this, p, v, m);
    };
  }
  return e;
}
const Cn = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  polyfill: _n
}, Symbol.toStringTag, { value: "Module" })), Sn = /* @__PURE__ */ gt(Cn);
Object.defineProperty(ie, "__esModule", {
  value: !0
});
ie.bodyOpenClassName = ie.portalClassName = void 0;
var tt = Object.assign || function(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t];
    for (var o in n)
      Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
  }
  return e;
}, Tn = /* @__PURE__ */ function() {
  function e(t, n) {
    for (var o = 0; o < n.length; o++) {
      var s = n[o];
      s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s);
    }
  }
  return function(t, n, o) {
    return n && e(t.prototype, n), o && e(t, o), t;
  };
}(), bt = it, Ce = be(bt), wn = Ot, Se = be(wn), Rn = ut, _ = be(Rn), Pn = On, nt = be(Pn), Mn = K, An = Nn(Mn), Z = V, rt = be(Z), xn = Sn;
function Nn(e) {
  if (e && e.__esModule)
    return e;
  var t = {};
  if (e != null)
    for (var n in e)
      Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
  return t.default = e, t;
}
function be(e) {
  return e && e.__esModule ? e : { default: e };
}
function Dn(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ot(e, t) {
  if (!e)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function In(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
  e.prototype = Object.create(t && t.prototype, { constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 } }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
}
var Ln = ie.portalClassName = "ReactModalPortal", Fn = ie.bodyOpenClassName = "ReactModal__Body--open", ne = Z.canUseDOM && Se.default.createPortal !== void 0, We = function(t) {
  return document.createElement(t);
}, at = function() {
  return ne ? Se.default.createPortal : Se.default.unstable_renderSubtreeIntoContainer;
};
function Oe(e) {
  return e();
}
var de = function(e) {
  In(t, e);
  function t() {
    var n, o, s, u;
    Dn(this, t);
    for (var b = arguments.length, a = Array(b), S = 0; S < b; S++)
      a[S] = arguments[S];
    return u = (o = (s = ot(this, (n = t.__proto__ || Object.getPrototypeOf(t)).call.apply(n, [this].concat(a))), s), s.removePortal = function() {
      !ne && Se.default.unmountComponentAtNode(s.node);
      var p = Oe(s.props.parentSelector);
      p && p.contains(s.node) ? p.removeChild(s.node) : console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.');
    }, s.portalRef = function(p) {
      s.portal = p;
    }, s.renderPortal = function(p) {
      var v = at(), d = v(s, Ce.default.createElement(nt.default, tt({ defaultStyles: t.defaultStyles }, p)), s.node);
      s.portalRef(d);
    }, o), ot(s, u);
  }
  return Tn(t, [{
    key: "componentDidMount",
    value: function() {
      if (Z.canUseDOM) {
        ne || (this.node = We("div")), this.node.className = this.props.portalClassName;
        var o = Oe(this.props.parentSelector);
        o.appendChild(this.node), !ne && this.renderPortal(this.props);
      }
    }
  }, {
    key: "getSnapshotBeforeUpdate",
    value: function(o) {
      var s = Oe(o.parentSelector), u = Oe(this.props.parentSelector);
      return { prevParent: s, nextParent: u };
    }
  }, {
    key: "componentDidUpdate",
    value: function(o, s, u) {
      if (Z.canUseDOM) {
        var b = this.props, a = b.isOpen, S = b.portalClassName;
        o.portalClassName !== S && (this.node.className = S);
        var p = u.prevParent, v = u.nextParent;
        v !== p && (p.removeChild(this.node), v.appendChild(this.node)), !(!o.isOpen && !a) && !ne && this.renderPortal(this.props);
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      if (!(!Z.canUseDOM || !this.node || !this.portal)) {
        var o = this.portal.state, s = Date.now(), u = o.isOpen && this.props.closeTimeoutMS && (o.closesAt || s + this.props.closeTimeoutMS);
        u ? (o.beforeClose || this.portal.closeWithTimeout(), setTimeout(this.removePortal, u - s)) : this.removePortal();
      }
    }
  }, {
    key: "render",
    value: function() {
      if (!Z.canUseDOM || !ne)
        return null;
      !this.node && ne && (this.node = We("div"));
      var o = at();
      return o(Ce.default.createElement(nt.default, tt({
        ref: this.portalRef,
        defaultStyles: t.defaultStyles
      }, this.props)), this.node);
    }
  }], [{
    key: "setAppElement",
    value: function(o) {
      An.setElement(o);
    }
    /* eslint-disable react/no-unused-prop-types */
    /* eslint-enable react/no-unused-prop-types */
  }]), t;
}(bt.Component);
de.propTypes = {
  isOpen: _.default.bool.isRequired,
  style: _.default.shape({
    content: _.default.object,
    overlay: _.default.object
  }),
  portalClassName: _.default.string,
  bodyOpenClassName: _.default.string,
  htmlOpenClassName: _.default.string,
  className: _.default.oneOfType([_.default.string, _.default.shape({
    base: _.default.string.isRequired,
    afterOpen: _.default.string.isRequired,
    beforeClose: _.default.string.isRequired
  })]),
  overlayClassName: _.default.oneOfType([_.default.string, _.default.shape({
    base: _.default.string.isRequired,
    afterOpen: _.default.string.isRequired,
    beforeClose: _.default.string.isRequired
  })]),
  appElement: _.default.oneOfType([_.default.instanceOf(rt.default), _.default.instanceOf(Z.SafeHTMLCollection), _.default.instanceOf(Z.SafeNodeList), _.default.arrayOf(_.default.instanceOf(rt.default))]),
  onAfterOpen: _.default.func,
  onRequestClose: _.default.func,
  closeTimeoutMS: _.default.number,
  ariaHideApp: _.default.bool,
  shouldFocusAfterRender: _.default.bool,
  shouldCloseOnOverlayClick: _.default.bool,
  shouldReturnFocusAfterClose: _.default.bool,
  preventScroll: _.default.bool,
  parentSelector: _.default.func,
  aria: _.default.object,
  data: _.default.object,
  role: _.default.string,
  contentLabel: _.default.string,
  shouldCloseOnEsc: _.default.bool,
  overlayRef: _.default.func,
  contentRef: _.default.func,
  id: _.default.string,
  overlayElement: _.default.func,
  contentElement: _.default.func
};
de.defaultProps = {
  isOpen: !1,
  portalClassName: Ln,
  bodyOpenClassName: Fn,
  role: "dialog",
  ariaHideApp: !0,
  closeTimeoutMS: 0,
  shouldFocusAfterRender: !0,
  shouldCloseOnEsc: !0,
  shouldCloseOnOverlayClick: !0,
  shouldReturnFocusAfterClose: !0,
  preventScroll: !1,
  parentSelector: function() {
    return document.body;
  },
  overlayElement: function(t, n) {
    return Ce.default.createElement(
      "div",
      t,
      n
    );
  },
  contentElement: function(t, n) {
    return Ce.default.createElement(
      "div",
      t,
      n
    );
  }
};
de.defaultStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(255, 255, 255, 0.75)"
  },
  content: {
    position: "absolute",
    top: "40px",
    left: "40px",
    right: "40px",
    bottom: "40px",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    padding: "20px"
  }
};
(0, xn.polyfill)(de);
process.env.NODE_ENV !== "production" && (de.setCreateHTMLElement = function(e) {
  return We = e;
});
ie.default = de;
(function(e, t) {
  Object.defineProperty(t, "__esModule", {
    value: !0
  });
  var n = ie, o = s(n);
  function s(u) {
    return u && u.__esModule ? u : { default: u };
  }
  t.default = o.default, e.exports = t.default;
})(Ne, Ne.exports);
var Un = Ne.exports;
const Wn = /* @__PURE__ */ Et(Un), Hn = (e) => e.testMode ? /* @__PURE__ */ He("div", { className: "ReactModalRootContainer", children: e.children }) : /* @__PURE__ */ He(Wn, { ...e });
export {
  Hn as default
};
