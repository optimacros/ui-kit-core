import * as u from "react";
import Vn, { useRef as ot, useLayoutEffect as Mi, useEffect as nr } from "react";
import Pi, { createPortal as Ti } from "react-dom";
import { c as ut } from "./index-DWRHnq8_.js";
function gt() {
  return gt = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, gt.apply(this, arguments);
}
function Oe(e) {
  "@babel/helpers - typeof";
  return Oe = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
    return typeof t;
  } : function(t) {
    return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t;
  }, Oe(e);
}
function Ni(e, t) {
  if (Oe(e) != "object" || !e)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (Oe(n) != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Hn(e) {
  var t = Ni(e, "string");
  return Oe(t) == "symbol" ? t : t + "";
}
function ve(e, t, r) {
  return t = Hn(t), t in e ? Object.defineProperty(e, t, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = r, e;
}
function Ai(e) {
  if (Array.isArray(e))
    return e;
}
function Oi(e, t) {
  var r = e == null ? null : typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r != null) {
    var n, i, a, o, l = [], f = !0, c = !1;
    try {
      if (a = (r = r.call(e)).next, t === 0) {
        if (Object(r) !== r)
          return;
        f = !1;
      } else
        for (; !(f = (n = a.call(r)).done) && (l.push(n.value), l.length !== t); f = !0)
          ;
    } catch (d) {
      c = !0, i = d;
    } finally {
      try {
        if (!f && r.return != null && (o = r.return(), Object(o) !== o))
          return;
      } finally {
        if (c)
          throw i;
      }
    }
    return l;
  }
}
function $r(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function Bn(e, t) {
  if (e) {
    if (typeof e == "string")
      return $r(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return $r(e, t);
  }
}
function Li() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function A(e, t) {
  return Ai(e) || Oi(e, t) || Bn(e, t) || Li();
}
function Di(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), i, a;
  for (a = 0; a < n.length; a++)
    i = n[a], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
  return r;
}
function zr(e, t) {
  if (e == null)
    return {};
  var r = Di(e, t), n, i;
  if (Object.getOwnPropertySymbols) {
    var a = Object.getOwnPropertySymbols(e);
    for (i = 0; i < a.length; i++)
      n = a[i], !(t.indexOf(n) >= 0) && Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
  }
  return r;
}
function hn(e, t) {
  var r = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(e);
    t && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(e, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function C(e) {
  for (var t = 1; t < arguments.length; t++) {
    var r = arguments[t] != null ? arguments[t] : {};
    t % 2 ? hn(Object(r), !0).forEach(function(n) {
      ve(e, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : hn(Object(r)).forEach(function(n) {
      Object.defineProperty(e, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return e;
}
function Ie() {
  return !!(typeof window < "u" && window.document && window.document.createElement);
}
var Wr = {}, rn = [], xi = function(t) {
  rn.push(t);
};
function or(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = rn.reduce(function(n, i) {
      return i(n ?? "", "warning");
    }, t);
    r && console.error("Warning: ".concat(r));
  }
}
function Ii(e, t) {
  if (process.env.NODE_ENV !== "production" && !e && console !== void 0) {
    var r = rn.reduce(function(n, i) {
      return i(n ?? "", "note");
    }, t);
    r && console.warn("Note: ".concat(r));
  }
}
function ki() {
  Wr = {};
}
function Kn(e, t, r) {
  !t && !Wr[r] && (e(!1, r), Wr[r] = !0);
}
function vr(e, t) {
  Kn(or, e, t);
}
function Fi(e, t) {
  Kn(Ii, e, t);
}
vr.preMessage = xi;
vr.resetWarned = ki;
vr.noteOnce = Fi;
var jr = { exports: {} }, k = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var mn;
function Ui() {
  if (mn)
    return k;
  mn = 1;
  var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), o = Symbol.for("react.context"), l = Symbol.for("react.server_context"), f = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), b;
  b = Symbol.for("react.module.reference");
  function p(s) {
    if (typeof s == "object" && s !== null) {
      var w = s.$$typeof;
      switch (w) {
        case e:
          switch (s = s.type, s) {
            case r:
            case i:
            case n:
            case c:
            case d:
              return s;
            default:
              switch (s = s && s.$$typeof, s) {
                case l:
                case o:
                case f:
                case y:
                case v:
                case a:
                  return s;
                default:
                  return w;
              }
          }
        case t:
          return w;
      }
    }
  }
  return k.ContextConsumer = o, k.ContextProvider = a, k.Element = e, k.ForwardRef = f, k.Fragment = r, k.Lazy = y, k.Memo = v, k.Portal = t, k.Profiler = i, k.StrictMode = n, k.Suspense = c, k.SuspenseList = d, k.isAsyncMode = function() {
    return !1;
  }, k.isConcurrentMode = function() {
    return !1;
  }, k.isContextConsumer = function(s) {
    return p(s) === o;
  }, k.isContextProvider = function(s) {
    return p(s) === a;
  }, k.isElement = function(s) {
    return typeof s == "object" && s !== null && s.$$typeof === e;
  }, k.isForwardRef = function(s) {
    return p(s) === f;
  }, k.isFragment = function(s) {
    return p(s) === r;
  }, k.isLazy = function(s) {
    return p(s) === y;
  }, k.isMemo = function(s) {
    return p(s) === v;
  }, k.isPortal = function(s) {
    return p(s) === t;
  }, k.isProfiler = function(s) {
    return p(s) === i;
  }, k.isStrictMode = function(s) {
    return p(s) === n;
  }, k.isSuspense = function(s) {
    return p(s) === c;
  }, k.isSuspenseList = function(s) {
    return p(s) === d;
  }, k.isValidElementType = function(s) {
    return typeof s == "string" || typeof s == "function" || s === r || s === i || s === n || s === c || s === d || s === h || typeof s == "object" && s !== null && (s.$$typeof === y || s.$$typeof === v || s.$$typeof === a || s.$$typeof === o || s.$$typeof === f || s.$$typeof === b || s.getModuleId !== void 0);
  }, k.typeOf = p, k;
}
var F = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yn;
function $i() {
  return yn || (yn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), t = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), o = Symbol.for("react.context"), l = Symbol.for("react.server_context"), f = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), v = Symbol.for("react.memo"), y = Symbol.for("react.lazy"), h = Symbol.for("react.offscreen"), b = !1, p = !1, s = !1, w = !1, N = !1, P;
    P = Symbol.for("react.module.reference");
    function E(m) {
      return !!(typeof m == "string" || typeof m == "function" || m === r || m === i || N || m === n || m === c || m === d || w || m === h || b || p || s || typeof m == "object" && m !== null && (m.$$typeof === y || m.$$typeof === v || m.$$typeof === a || m.$$typeof === o || m.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      m.$$typeof === P || m.getModuleId !== void 0));
    }
    function M(m) {
      if (typeof m == "object" && m !== null) {
        var ie = m.$$typeof;
        switch (ie) {
          case e:
            var fe = m.type;
            switch (fe) {
              case r:
              case i:
              case n:
              case c:
              case d:
                return fe;
              default:
                var Y = fe && fe.$$typeof;
                switch (Y) {
                  case l:
                  case o:
                  case f:
                  case y:
                  case v:
                  case a:
                    return Y;
                  default:
                    return ie;
                }
            }
          case t:
            return ie;
        }
      }
    }
    var x = o, O = a, W = e, re = f, K = r, $ = y, j = v, z = t, B = i, I = n, L = c, V = d, T = !1, ee = !1;
    function D(m) {
      return T || (T = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function oe(m) {
      return ee || (ee = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function ae(m) {
      return M(m) === o;
    }
    function pe(m) {
      return M(m) === a;
    }
    function Re(m) {
      return typeof m == "object" && m !== null && m.$$typeof === e;
    }
    function de(m) {
      return M(m) === f;
    }
    function Ce(m) {
      return M(m) === r;
    }
    function se(m) {
      return M(m) === y;
    }
    function q(m) {
      return M(m) === v;
    }
    function ue(m) {
      return M(m) === t;
    }
    function ce(m) {
      return M(m) === i;
    }
    function ne(m) {
      return M(m) === n;
    }
    function Le(m) {
      return M(m) === c;
    }
    function De(m) {
      return M(m) === d;
    }
    F.ContextConsumer = x, F.ContextProvider = O, F.Element = W, F.ForwardRef = re, F.Fragment = K, F.Lazy = $, F.Memo = j, F.Portal = z, F.Profiler = B, F.StrictMode = I, F.Suspense = L, F.SuspenseList = V, F.isAsyncMode = D, F.isConcurrentMode = oe, F.isContextConsumer = ae, F.isContextProvider = pe, F.isElement = Re, F.isForwardRef = de, F.isFragment = Ce, F.isLazy = se, F.isMemo = q, F.isPortal = ue, F.isProfiler = ce, F.isStrictMode = ne, F.isSuspense = Le, F.isSuspenseList = De, F.isValidElementType = E, F.typeOf = M;
  }()), F;
}
process.env.NODE_ENV === "production" ? jr.exports = Ui() : jr.exports = $i();
var qn = jr.exports;
function zi(e, t, r) {
  var n = u.useRef({});
  return (!("value" in n.current) || r(n.current.condition, t)) && (n.current.value = e(), n.current.condition = t), n.current.value;
}
function nn(e, t) {
  typeof e == "function" ? e(t) : Oe(e) === "object" && e && "current" in e && (e.current = t);
}
function Qn() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  var n = t.filter(function(i) {
    return i;
  });
  return n.length <= 1 ? n[0] : function(i) {
    t.forEach(function(a) {
      nn(a, i);
    });
  };
}
function an() {
  for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++)
    t[r] = arguments[r];
  return zi(function() {
    return Qn.apply(void 0, t);
  }, t, function(n, i) {
    return n.length !== i.length || n.every(function(a, o) {
      return a !== i[o];
    });
  });
}
function dr(e) {
  var t, r, n = qn.isMemo(e) ? e.type.type : e.type;
  return !(typeof n == "function" && !((t = n.prototype) !== null && t !== void 0 && t.render) || typeof e == "function" && !((r = e.prototype) !== null && r !== void 0 && r.render));
}
var Gn = /* @__PURE__ */ u.createContext(null);
function Wi(e) {
  if (Array.isArray(e))
    return $r(e);
}
function ji(e) {
  if (typeof Symbol < "u" && e[Symbol.iterator] != null || e["@@iterator"] != null)
    return Array.from(e);
}
function Vi() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Vr(e) {
  return Wi(e) || ji(e) || Bn(e) || Vi();
}
var gn = process.env.NODE_ENV !== "test" && Ie() ? u.useLayoutEffect : u.useEffect, ye = function(t, r) {
  var n = u.useRef(!0);
  gn(function() {
    return t(n.current);
  }, r), gn(function() {
    return n.current = !1, function() {
      n.current = !0;
    };
  }, []);
}, lo = function(t, r) {
  ye(function(n) {
    if (!n)
      return t();
  }, r);
}, En = [];
function Hi(e, t) {
  var r = u.useState(function() {
    if (!Ie())
      return null;
    var b = document.createElement("div");
    return process.env.NODE_ENV !== "production" && t && b.setAttribute("data-debug", t), b;
  }), n = A(r, 1), i = n[0], a = u.useRef(!1), o = u.useContext(Gn), l = u.useState(En), f = A(l, 2), c = f[0], d = f[1], v = o || (a.current ? void 0 : function(b) {
    d(function(p) {
      var s = [b].concat(Vr(p));
      return s;
    });
  });
  function y() {
    i.parentElement || document.body.appendChild(i), a.current = !0;
  }
  function h() {
    var b;
    (b = i.parentElement) === null || b === void 0 || b.removeChild(i), a.current = !1;
  }
  return ye(function() {
    return e ? o ? o(y) : y() : h(), h;
  }, [e]), ye(function() {
    c.length && (c.forEach(function(b) {
      return b();
    }), d(En));
  }, [c]), [i, v];
}
function Bi(e, t) {
  if (!e)
    return !1;
  if (e.contains)
    return e.contains(t);
  for (var r = t; r; ) {
    if (r === e)
      return !0;
    r = r.parentNode;
  }
  return !1;
}
var bn = "data-rc-order", pn = "data-rc-priority", Ki = "rc-util-key", Hr = /* @__PURE__ */ new Map();
function Zn() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, t = e.mark;
  return t ? t.startsWith("data-") ? t : "data-".concat(t) : Ki;
}
function hr(e) {
  if (e.attachTo)
    return e.attachTo;
  var t = document.querySelector("head");
  return t || document.body;
}
function qi(e) {
  return e === "queue" ? "prependQueue" : e ? "prepend" : "append";
}
function Jn(e) {
  return Array.from((Hr.get(e) || e).children).filter(function(t) {
    return t.tagName === "STYLE";
  });
}
function Yn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
  if (!Ie())
    return null;
  var r = t.csp, n = t.prepend, i = t.priority, a = i === void 0 ? 0 : i, o = qi(n), l = o === "prependQueue", f = document.createElement("style");
  f.setAttribute(bn, o), l && a && f.setAttribute(pn, "".concat(a)), r != null && r.nonce && (f.nonce = r == null ? void 0 : r.nonce), f.innerHTML = e;
  var c = hr(t), d = c.firstChild;
  if (n) {
    if (l) {
      var v = Jn(c).filter(function(y) {
        if (!["prepend", "prependQueue"].includes(y.getAttribute(bn)))
          return !1;
        var h = Number(y.getAttribute(pn) || 0);
        return a >= h;
      });
      if (v.length)
        return c.insertBefore(f, v[v.length - 1].nextSibling), f;
    }
    c.insertBefore(f, d);
  } else
    c.appendChild(f);
  return f;
}
function Xn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = hr(t);
  return Jn(r).find(function(n) {
    return n.getAttribute(Zn(t)) === e;
  });
}
function Sn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = Xn(e, t);
  if (r) {
    var n = hr(t);
    n.removeChild(r);
  }
}
function Qi(e, t) {
  var r = Hr.get(e);
  if (!r || !Bi(document, r)) {
    var n = Yn("", t), i = n.parentNode;
    Hr.set(e, i), e.removeChild(n);
  }
}
function Gi(e, t) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, n = hr(r);
  Qi(n, r);
  var i = Xn(t, r);
  if (i) {
    var a, o;
    if ((a = r.csp) !== null && a !== void 0 && a.nonce && i.nonce !== ((o = r.csp) === null || o === void 0 ? void 0 : o.nonce)) {
      var l;
      i.nonce = (l = r.csp) === null || l === void 0 ? void 0 : l.nonce;
    }
    return i.innerHTML !== e && (i.innerHTML = e), i;
  }
  var f = Yn(e, r);
  return f.setAttribute(Zn(r), t), f;
}
var Fr;
function Zi(e) {
  if (typeof document > "u")
    return 0;
  if (e || Fr === void 0) {
    var t = document.createElement("div");
    t.style.width = "100%", t.style.height = "200px";
    var r = document.createElement("div"), n = r.style;
    n.position = "absolute", n.top = "0", n.left = "0", n.pointerEvents = "none", n.visibility = "hidden", n.width = "200px", n.height = "150px", n.overflow = "hidden", r.appendChild(t), document.body.appendChild(r);
    var i = t.offsetWidth;
    r.style.overflow = "scroll";
    var a = t.offsetWidth;
    i === a && (a = r.clientWidth), document.body.removeChild(r), Fr = i - a;
  }
  return Fr;
}
function wn(e) {
  var t = e.match(/^(.*)px$/), r = Number(t == null ? void 0 : t[1]);
  return Number.isNaN(r) ? Zi() : r;
}
function Ji(e) {
  if (typeof document > "u" || !e || !(e instanceof Element))
    return {
      width: 0,
      height: 0
    };
  var t = getComputedStyle(e, "::-webkit-scrollbar"), r = t.width, n = t.height;
  return {
    width: wn(r),
    height: wn(n)
  };
}
function Yi() {
  return document.body.scrollHeight > (window.innerHeight || document.documentElement.clientHeight) && window.innerWidth > document.body.offsetWidth;
}
var Xi = "rc-util-locker-".concat(Date.now()), _n = 0;
function ea(e) {
  var t = !!e, r = u.useState(function() {
    return _n += 1, "".concat(Xi, "_").concat(_n);
  }), n = A(r, 1), i = n[0];
  ye(function() {
    if (t) {
      var a = Ji(document.body).width, o = Yi();
      Gi(`
html body {
  overflow-y: hidden;
  `.concat(o ? "width: calc(100% - ".concat(a, "px);") : "", `
}`), i);
    } else
      Sn(i);
    return function() {
      Sn(i);
    };
  }, [t, i]);
}
var Rn = !1;
function ta(e) {
  return typeof e == "boolean" && (Rn = e), Rn;
}
var Cn = function(t) {
  return t === !1 ? !1 : !Ie() || !t ? null : typeof t == "string" ? document.querySelector(t) : typeof t == "function" ? t() : t;
}, on = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var r = e.open, n = e.autoLock, i = e.getContainer, a = e.debug, o = e.autoDestroy, l = o === void 0 ? !0 : o, f = e.children, c = u.useState(r), d = A(c, 2), v = d[0], y = d[1], h = v || r;
  process.env.NODE_ENV !== "production" && vr(Ie() || !r, "Portal only work in client side. Please call 'useEffect' to show Portal instead default render in SSR."), u.useEffect(function() {
    (l || r) && y(r);
  }, [r, l]);
  var b = u.useState(function() {
    return Cn(i);
  }), p = A(b, 2), s = p[0], w = p[1];
  u.useEffect(function() {
    var j = Cn(i);
    w(j ?? null);
  });
  var N = Hi(h && !s, a), P = A(N, 2), E = P[0], M = P[1], x = s ?? E;
  ea(n && r && Ie() && (x === E || x === document.body));
  var O = null;
  if (f && dr(f) && t) {
    var W = f;
    O = W.ref;
  }
  var re = an(O, t);
  if (!h || !Ie() || s === void 0)
    return null;
  var K = x === !1 || ta(), $ = f;
  return t && ($ = /* @__PURE__ */ u.cloneElement(f, {
    ref: re
  })), /* @__PURE__ */ u.createElement(Gn.Provider, {
    value: M
  }, K ? $ : /* @__PURE__ */ Ti($, x));
});
process.env.NODE_ENV !== "production" && (on.displayName = "Portal");
function Br(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, r = [];
  return Vn.Children.forEach(e, function(n) {
    n == null && !t.keepEmpty || (Array.isArray(n) ? r = r.concat(Br(n)) : qn.isFragment(n) && n.props ? r = r.concat(Br(n.props.children, t)) : r.push(n));
  }), r;
}
function ur(e) {
  return e instanceof HTMLElement || e instanceof SVGElement;
}
function ir(e) {
  return ur(e) ? e : e instanceof Vn.Component ? Pi.findDOMNode(e) : null;
}
var Kr = /* @__PURE__ */ u.createContext(null);
function ra(e) {
  var t = e.children, r = e.onBatchResize, n = u.useRef(0), i = u.useRef([]), a = u.useContext(Kr), o = u.useCallback(function(l, f, c) {
    n.current += 1;
    var d = n.current;
    i.current.push({
      size: l,
      element: f,
      data: c
    }), Promise.resolve().then(function() {
      d === n.current && (r == null || r(i.current), i.current = []);
    }), a == null || a(l, f, c);
  }, [r, a]);
  return /* @__PURE__ */ u.createElement(Kr.Provider, {
    value: o
  }, t);
}
var ei = function() {
  if (typeof Map < "u")
    return Map;
  function e(t, r) {
    var n = -1;
    return t.some(function(i, a) {
      return i[0] === r ? (n = a, !0) : !1;
    }), n;
  }
  return (
    /** @class */
    function() {
      function t() {
        this.__entries__ = [];
      }
      return Object.defineProperty(t.prototype, "size", {
        /**
         * @returns {boolean}
         */
        get: function() {
          return this.__entries__.length;
        },
        enumerable: !0,
        configurable: !0
      }), t.prototype.get = function(r) {
        var n = e(this.__entries__, r), i = this.__entries__[n];
        return i && i[1];
      }, t.prototype.set = function(r, n) {
        var i = e(this.__entries__, r);
        ~i ? this.__entries__[i][1] = n : this.__entries__.push([r, n]);
      }, t.prototype.delete = function(r) {
        var n = this.__entries__, i = e(n, r);
        ~i && n.splice(i, 1);
      }, t.prototype.has = function(r) {
        return !!~e(this.__entries__, r);
      }, t.prototype.clear = function() {
        this.__entries__.splice(0);
      }, t.prototype.forEach = function(r, n) {
        n === void 0 && (n = null);
        for (var i = 0, a = this.__entries__; i < a.length; i++) {
          var o = a[i];
          r.call(n, o[1], o[0]);
        }
      }, t;
    }()
  );
}(), qr = typeof window < "u" && typeof document < "u" && window.document === document, sr = function() {
  return typeof global < "u" && global.Math === Math ? global : typeof self < "u" && self.Math === Math ? self : typeof window < "u" && window.Math === Math ? window : Function("return this")();
}(), na = function() {
  return typeof requestAnimationFrame == "function" ? requestAnimationFrame.bind(sr) : function(e) {
    return setTimeout(function() {
      return e(Date.now());
    }, 1e3 / 60);
  };
}(), ia = 2;
function aa(e, t) {
  var r = !1, n = !1, i = 0;
  function a() {
    r && (r = !1, e()), n && l();
  }
  function o() {
    na(a);
  }
  function l() {
    var f = Date.now();
    if (r) {
      if (f - i < ia)
        return;
      n = !0;
    } else
      r = !0, n = !1, setTimeout(o, t);
    i = f;
  }
  return l;
}
var oa = 20, ua = ["top", "right", "bottom", "left", "width", "height", "size", "weight"], sa = typeof MutationObserver < "u", ca = (
  /** @class */
  function() {
    function e() {
      this.connected_ = !1, this.mutationEventsAdded_ = !1, this.mutationsObserver_ = null, this.observers_ = [], this.onTransitionEnd_ = this.onTransitionEnd_.bind(this), this.refresh = aa(this.refresh.bind(this), oa);
    }
    return e.prototype.addObserver = function(t) {
      ~this.observers_.indexOf(t) || this.observers_.push(t), this.connected_ || this.connect_();
    }, e.prototype.removeObserver = function(t) {
      var r = this.observers_, n = r.indexOf(t);
      ~n && r.splice(n, 1), !r.length && this.connected_ && this.disconnect_();
    }, e.prototype.refresh = function() {
      var t = this.updateObservers_();
      t && this.refresh();
    }, e.prototype.updateObservers_ = function() {
      var t = this.observers_.filter(function(r) {
        return r.gatherActive(), r.hasActive();
      });
      return t.forEach(function(r) {
        return r.broadcastActive();
      }), t.length > 0;
    }, e.prototype.connect_ = function() {
      !qr || this.connected_ || (document.addEventListener("transitionend", this.onTransitionEnd_), window.addEventListener("resize", this.refresh), sa ? (this.mutationsObserver_ = new MutationObserver(this.refresh), this.mutationsObserver_.observe(document, {
        attributes: !0,
        childList: !0,
        characterData: !0,
        subtree: !0
      })) : (document.addEventListener("DOMSubtreeModified", this.refresh), this.mutationEventsAdded_ = !0), this.connected_ = !0);
    }, e.prototype.disconnect_ = function() {
      !qr || !this.connected_ || (document.removeEventListener("transitionend", this.onTransitionEnd_), window.removeEventListener("resize", this.refresh), this.mutationsObserver_ && this.mutationsObserver_.disconnect(), this.mutationEventsAdded_ && document.removeEventListener("DOMSubtreeModified", this.refresh), this.mutationsObserver_ = null, this.mutationEventsAdded_ = !1, this.connected_ = !1);
    }, e.prototype.onTransitionEnd_ = function(t) {
      var r = t.propertyName, n = r === void 0 ? "" : r, i = ua.some(function(a) {
        return !!~n.indexOf(a);
      });
      i && this.refresh();
    }, e.getInstance = function() {
      return this.instance_ || (this.instance_ = new e()), this.instance_;
    }, e.instance_ = null, e;
  }()
), ti = function(e, t) {
  for (var r = 0, n = Object.keys(t); r < n.length; r++) {
    var i = n[r];
    Object.defineProperty(e, i, {
      value: t[i],
      enumerable: !1,
      writable: !1,
      configurable: !0
    });
  }
  return e;
}, Et = function(e) {
  var t = e && e.ownerDocument && e.ownerDocument.defaultView;
  return t || sr;
}, ri = mr(0, 0, 0, 0);
function cr(e) {
  return parseFloat(e) || 0;
}
function Mn(e) {
  for (var t = [], r = 1; r < arguments.length; r++)
    t[r - 1] = arguments[r];
  return t.reduce(function(n, i) {
    var a = e["border-" + i + "-width"];
    return n + cr(a);
  }, 0);
}
function fa(e) {
  for (var t = ["top", "right", "bottom", "left"], r = {}, n = 0, i = t; n < i.length; n++) {
    var a = i[n], o = e["padding-" + a];
    r[a] = cr(o);
  }
  return r;
}
function la(e) {
  var t = e.getBBox();
  return mr(0, 0, t.width, t.height);
}
function va(e) {
  var t = e.clientWidth, r = e.clientHeight;
  if (!t && !r)
    return ri;
  var n = Et(e).getComputedStyle(e), i = fa(n), a = i.left + i.right, o = i.top + i.bottom, l = cr(n.width), f = cr(n.height);
  if (n.boxSizing === "border-box" && (Math.round(l + a) !== t && (l -= Mn(n, "left", "right") + a), Math.round(f + o) !== r && (f -= Mn(n, "top", "bottom") + o)), !ha(e)) {
    var c = Math.round(l + a) - t, d = Math.round(f + o) - r;
    Math.abs(c) !== 1 && (l -= c), Math.abs(d) !== 1 && (f -= d);
  }
  return mr(i.left, i.top, l, f);
}
var da = /* @__PURE__ */ function() {
  return typeof SVGGraphicsElement < "u" ? function(e) {
    return e instanceof Et(e).SVGGraphicsElement;
  } : function(e) {
    return e instanceof Et(e).SVGElement && typeof e.getBBox == "function";
  };
}();
function ha(e) {
  return e === Et(e).document.documentElement;
}
function ma(e) {
  return qr ? da(e) ? la(e) : va(e) : ri;
}
function ya(e) {
  var t = e.x, r = e.y, n = e.width, i = e.height, a = typeof DOMRectReadOnly < "u" ? DOMRectReadOnly : Object, o = Object.create(a.prototype);
  return ti(o, {
    x: t,
    y: r,
    width: n,
    height: i,
    top: r,
    right: t + n,
    bottom: i + r,
    left: t
  }), o;
}
function mr(e, t, r, n) {
  return { x: e, y: t, width: r, height: n };
}
var ga = (
  /** @class */
  function() {
    function e(t) {
      this.broadcastWidth = 0, this.broadcastHeight = 0, this.contentRect_ = mr(0, 0, 0, 0), this.target = t;
    }
    return e.prototype.isActive = function() {
      var t = ma(this.target);
      return this.contentRect_ = t, t.width !== this.broadcastWidth || t.height !== this.broadcastHeight;
    }, e.prototype.broadcastRect = function() {
      var t = this.contentRect_;
      return this.broadcastWidth = t.width, this.broadcastHeight = t.height, t;
    }, e;
  }()
), Ea = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t, r) {
      var n = ya(r);
      ti(this, { target: t, contentRect: n });
    }
    return e;
  }()
), ba = (
  /** @class */
  function() {
    function e(t, r, n) {
      if (this.activeObservations_ = [], this.observations_ = new ei(), typeof t != "function")
        throw new TypeError("The callback provided as parameter 1 is not a function.");
      this.callback_ = t, this.controller_ = r, this.callbackCtx_ = n;
    }
    return e.prototype.observe = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof Et(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var r = this.observations_;
        r.has(t) || (r.set(t, new ga(t)), this.controller_.addObserver(this), this.controller_.refresh());
      }
    }, e.prototype.unobserve = function(t) {
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      if (!(typeof Element > "u" || !(Element instanceof Object))) {
        if (!(t instanceof Et(t).Element))
          throw new TypeError('parameter 1 is not of type "Element".');
        var r = this.observations_;
        r.has(t) && (r.delete(t), r.size || this.controller_.removeObserver(this));
      }
    }, e.prototype.disconnect = function() {
      this.clearActive(), this.observations_.clear(), this.controller_.removeObserver(this);
    }, e.prototype.gatherActive = function() {
      var t = this;
      this.clearActive(), this.observations_.forEach(function(r) {
        r.isActive() && t.activeObservations_.push(r);
      });
    }, e.prototype.broadcastActive = function() {
      if (this.hasActive()) {
        var t = this.callbackCtx_, r = this.activeObservations_.map(function(n) {
          return new Ea(n.target, n.broadcastRect());
        });
        this.callback_.call(t, r, t), this.clearActive();
      }
    }, e.prototype.clearActive = function() {
      this.activeObservations_.splice(0);
    }, e.prototype.hasActive = function() {
      return this.activeObservations_.length > 0;
    }, e;
  }()
), ni = typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : new ei(), ii = (
  /** @class */
  /* @__PURE__ */ function() {
    function e(t) {
      if (!(this instanceof e))
        throw new TypeError("Cannot call a class as a function.");
      if (!arguments.length)
        throw new TypeError("1 argument required, but only 0 present.");
      var r = ca.getInstance(), n = new ba(t, r, this);
      ni.set(this, n);
    }
    return e;
  }()
);
[
  "observe",
  "unobserve",
  "disconnect"
].forEach(function(e) {
  ii.prototype[e] = function() {
    var t;
    return (t = ni.get(this))[e].apply(t, arguments);
  };
});
var pa = function() {
  return typeof sr.ResizeObserver < "u" ? sr.ResizeObserver : ii;
}(), We = /* @__PURE__ */ new Map();
function ai(e) {
  e.forEach(function(t) {
    var r, n = t.target;
    (r = We.get(n)) === null || r === void 0 || r.forEach(function(i) {
      return i(n);
    });
  });
}
var oi = new pa(ai);
process.env.NODE_ENV;
process.env.NODE_ENV;
function Sa(e, t) {
  We.has(e) || (We.set(e, /* @__PURE__ */ new Set()), oi.observe(e)), We.get(e).add(t);
}
function wa(e, t) {
  We.has(e) && (We.get(e).delete(t), We.get(e).size || (oi.unobserve(e), We.delete(e)));
}
function un(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function Pn(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Hn(n.key), n);
  }
}
function sn(e, t, r) {
  return t && Pn(e.prototype, t), r && Pn(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function Qr(e, t) {
  return Qr = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, Qr(e, t);
}
function cn(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError("Super expression must either be null or a function");
  e.prototype = Object.create(t && t.prototype, {
    constructor: {
      value: e,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(e, "prototype", {
    writable: !1
  }), t && Qr(e, t);
}
function fr(e) {
  return fr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(r) {
    return r.__proto__ || Object.getPrototypeOf(r);
  }, fr(e);
}
function ui() {
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (ui = function() {
    return !!e;
  })();
}
function Gr(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function _a(e, t) {
  if (t && (Oe(t) === "object" || typeof t == "function"))
    return t;
  if (t !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined");
  return Gr(e);
}
function fn(e) {
  var t = ui();
  return function() {
    var n = fr(e), i;
    if (t) {
      var a = fr(this).constructor;
      i = Reflect.construct(n, arguments, a);
    } else
      i = n.apply(this, arguments);
    return _a(this, i);
  };
}
var Ra = /* @__PURE__ */ function(e) {
  cn(r, e);
  var t = fn(r);
  function r() {
    return un(this, r), t.apply(this, arguments);
  }
  return sn(r, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), r;
}(u.Component);
function Ca(e, t) {
  var r = e.children, n = e.disabled, i = u.useRef(null), a = u.useRef(null), o = u.useContext(Kr), l = typeof r == "function", f = l ? r(i) : r, c = u.useRef({
    width: -1,
    height: -1,
    offsetWidth: -1,
    offsetHeight: -1
  }), d = !l && /* @__PURE__ */ u.isValidElement(f) && dr(f), v = d ? f.ref : null, y = an(v, i), h = function() {
    var w;
    return ir(i.current) || // Support `nativeElement` format
    (i.current && Oe(i.current) === "object" ? ir((w = i.current) === null || w === void 0 ? void 0 : w.nativeElement) : null) || ir(a.current);
  };
  u.useImperativeHandle(t, function() {
    return h();
  });
  var b = u.useRef(e);
  b.current = e;
  var p = u.useCallback(function(s) {
    var w = b.current, N = w.onResize, P = w.data, E = s.getBoundingClientRect(), M = E.width, x = E.height, O = s.offsetWidth, W = s.offsetHeight, re = Math.floor(M), K = Math.floor(x);
    if (c.current.width !== re || c.current.height !== K || c.current.offsetWidth !== O || c.current.offsetHeight !== W) {
      var $ = {
        width: re,
        height: K,
        offsetWidth: O,
        offsetHeight: W
      };
      c.current = $;
      var j = O === Math.round(M) ? M : O, z = W === Math.round(x) ? x : W, B = C(C({}, $), {}, {
        offsetWidth: j,
        offsetHeight: z
      });
      o == null || o(B, s, P), N && Promise.resolve().then(function() {
        N(B, s);
      });
    }
  }, []);
  return u.useEffect(function() {
    var s = h();
    return s && !n && Sa(s, p), function() {
      return wa(s, p);
    };
  }, [i.current, n]), /* @__PURE__ */ u.createElement(Ra, {
    ref: a
  }, d ? /* @__PURE__ */ u.cloneElement(f, {
    ref: y
  }) : f);
}
var si = /* @__PURE__ */ u.forwardRef(Ca);
process.env.NODE_ENV !== "production" && (si.displayName = "SingleObserver");
var Ma = "rc-observer-key";
function Pa(e, t) {
  var r = e.children, n = typeof r == "function" ? [r] : Br(r);
  return process.env.NODE_ENV !== "production" && (n.length > 1 ? or(!1, "Find more than one child node with `children` in ResizeObserver. Please use ResizeObserver.Collection instead.") : n.length === 0 && or(!1, "`children` of ResizeObserver is empty. Nothing is in observe.")), n.map(function(i, a) {
    var o = (i == null ? void 0 : i.key) || "".concat(Ma, "-").concat(a);
    return /* @__PURE__ */ u.createElement(si, gt({}, e, {
      key: o,
      ref: a === 0 ? t : void 0
    }), i);
  });
}
var yr = /* @__PURE__ */ u.forwardRef(Pa);
process.env.NODE_ENV !== "production" && (yr.displayName = "ResizeObserver");
yr.Collection = ra;
function ci(e) {
  var t;
  return e == null || (t = e.getRootNode) === null || t === void 0 ? void 0 : t.call(e);
}
function Ta(e) {
  return ci(e) instanceof ShadowRoot;
}
function Zr(e) {
  return Ta(e) ? ci(e) : null;
}
function it(e) {
  var t = u.useRef();
  t.current = e;
  var r = u.useCallback(function() {
    for (var n, i = arguments.length, a = new Array(i), o = 0; o < i; o++)
      a[o] = arguments[o];
    return (n = t.current) === null || n === void 0 ? void 0 : n.call.apply(n, [t].concat(a));
  }, []);
  return r;
}
function Na() {
  var e = C({}, u);
  return e.useId;
}
var Tn = 0, Nn = Na();
const Aa = Nn ? (
  // Use React `useId`
  function(t) {
    var r = Nn();
    return t || (process.env.NODE_ENV === "test" ? "test-id" : r);
  }
) : (
  // Use compatible of `useId`
  function(t) {
    var r = u.useState("ssr-id"), n = A(r, 2), i = n[0], a = n[1];
    return u.useEffect(function() {
      var o = Tn;
      Tn += 1, a("rc_unique_".concat(o));
    }, []), t || (process.env.NODE_ENV === "test" ? "test-id" : i);
  }
), Oa = function() {
  if (typeof navigator > "u" || typeof window > "u")
    return !1;
  var e = navigator.userAgent || navigator.vendor || window.opera;
  return /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(e) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw-(n|u)|c55\/|capi|ccwa|cdm-|cell|chtm|cldc|cmd-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc-s|devi|dica|dmob|do(c|p)o|ds(12|-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(-|_)|g1 u|g560|gene|gf-5|g-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd-(m|p|t)|hei-|hi(pt|ta)|hp( i|ip)|hs-c|ht(c(-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i-(20|go|ma)|i230|iac( |-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|-[a-w])|libw|lynx|m1-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|-([1-8]|c))|phil|pire|pl(ay|uc)|pn-2|po(ck|rt|se)|prox|psio|pt-g|qa-a|qc(07|12|21|32|60|-[2-7]|i-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h-|oo|p-)|sdk\/|se(c(-|0|1)|47|mc|nd|ri)|sgh-|shar|sie(-|m)|sk-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h-|v-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl-|tdg-|tel(i|m)|tim-|t-mo|to(pl|sh)|ts(70|m-|m3|m5)|tx-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas-|your|zeto|zte-/i.test(e == null ? void 0 : e.substr(0, 4));
};
var La = /* @__PURE__ */ u.createContext({}), Da = /* @__PURE__ */ function(e) {
  cn(r, e);
  var t = fn(r);
  function r() {
    return un(this, r), t.apply(this, arguments);
  }
  return sn(r, [{
    key: "render",
    value: function() {
      return this.props.children;
    }
  }]), r;
}(u.Component);
function ar(e) {
  var t = u.useRef(!1), r = u.useState(e), n = A(r, 2), i = n[0], a = n[1];
  u.useEffect(function() {
    return t.current = !1, function() {
      t.current = !0;
    };
  }, []);
  function o(l, f) {
    f && t.current || a(l);
  }
  return [i, o];
}
var at = "none", Xt = "appear", er = "enter", tr = "leave", An = "none", Ae = "prepare", mt = "start", yt = "active", ln = "end", fi = "prepared";
function On(e, t) {
  var r = {};
  return r[e.toLowerCase()] = t.toLowerCase(), r["Webkit".concat(e)] = "webkit".concat(t), r["Moz".concat(e)] = "moz".concat(t), r["ms".concat(e)] = "MS".concat(t), r["O".concat(e)] = "o".concat(t.toLowerCase()), r;
}
function xa(e, t) {
  var r = {
    animationend: On("Animation", "AnimationEnd"),
    transitionend: On("Transition", "TransitionEnd")
  };
  return e && ("AnimationEvent" in t || delete r.animationend.animation, "TransitionEvent" in t || delete r.transitionend.transition), r;
}
var Ia = xa(Ie(), typeof window < "u" ? window : {}), li = {};
if (Ie()) {
  var ka = document.createElement("div");
  li = ka.style;
}
var rr = {};
function vi(e) {
  if (rr[e])
    return rr[e];
  var t = Ia[e];
  if (t)
    for (var r = Object.keys(t), n = r.length, i = 0; i < n; i += 1) {
      var a = r[i];
      if (Object.prototype.hasOwnProperty.call(t, a) && a in li)
        return rr[e] = t[a], rr[e];
    }
  return "";
}
var di = vi("animationend"), hi = vi("transitionend"), mi = !!(di && hi), Ln = di || "animationend", Dn = hi || "transitionend";
function xn(e, t) {
  if (!e)
    return null;
  if (Oe(e) === "object") {
    var r = t.replace(/-\w/g, function(n) {
      return n[1].toUpperCase();
    });
    return e[r];
  }
  return "".concat(e, "-").concat(t);
}
const Fa = function(e) {
  var t = ot(), r = ot(e);
  r.current = e;
  var n = u.useCallback(function(o) {
    r.current(o);
  }, []);
  function i(o) {
    o && (o.removeEventListener(Dn, n), o.removeEventListener(Ln, n));
  }
  function a(o) {
    t.current && t.current !== o && i(t.current), o && o !== t.current && (o.addEventListener(Dn, n), o.addEventListener(Ln, n), t.current = o);
  }
  return u.useEffect(function() {
    return function() {
      i(t.current);
    };
  }, []), [a, i];
};
var yi = Ie() ? Mi : nr, gi = function(t) {
  return +setTimeout(t, 16);
}, Ei = function(t) {
  return clearTimeout(t);
};
typeof window < "u" && "requestAnimationFrame" in window && (gi = function(t) {
  return window.requestAnimationFrame(t);
}, Ei = function(t) {
  return window.cancelAnimationFrame(t);
});
var In = 0, gr = /* @__PURE__ */ new Map();
function bi(e) {
  gr.delete(e);
}
var lr = function(t) {
  var r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  In += 1;
  var n = In;
  function i(a) {
    if (a === 0)
      bi(n), t();
    else {
      var o = gi(function() {
        i(a - 1);
      });
      gr.set(n, o);
    }
  }
  return i(r), n;
};
lr.cancel = function(e) {
  var t = gr.get(e);
  return bi(e), Ei(t);
};
process.env.NODE_ENV !== "production" && (lr.ids = function() {
  return gr;
});
const Ua = function() {
  var e = u.useRef(null);
  function t() {
    lr.cancel(e.current);
  }
  function r(n) {
    var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 2;
    t();
    var a = lr(function() {
      i <= 1 ? n({
        isCanceled: function() {
          return a !== e.current;
        }
      }) : r(n, i - 1);
    });
    e.current = a;
  }
  return u.useEffect(function() {
    return function() {
      t();
    };
  }, []), [r, t];
};
var $a = [Ae, mt, yt, ln], za = [Ae, fi], pi = !1, Wa = !0;
function Si(e) {
  return e === yt || e === ln;
}
const ja = function(e, t, r) {
  var n = ar(An), i = A(n, 2), a = i[0], o = i[1], l = Ua(), f = A(l, 2), c = f[0], d = f[1];
  function v() {
    o(Ae, !0);
  }
  var y = t ? za : $a;
  return yi(function() {
    if (a !== An && a !== ln) {
      var h = y.indexOf(a), b = y[h + 1], p = r(a);
      p === pi ? o(b, !0) : b && c(function(s) {
        function w() {
          s.isCanceled() || o(b, !0);
        }
        p === !0 ? w() : Promise.resolve(p).then(w);
      });
    }
  }, [e, a]), u.useEffect(function() {
    return function() {
      d();
    };
  }, []), [v, a];
};
function Va(e, t, r, n) {
  var i = n.motionEnter, a = i === void 0 ? !0 : i, o = n.motionAppear, l = o === void 0 ? !0 : o, f = n.motionLeave, c = f === void 0 ? !0 : f, d = n.motionDeadline, v = n.motionLeaveImmediately, y = n.onAppearPrepare, h = n.onEnterPrepare, b = n.onLeavePrepare, p = n.onAppearStart, s = n.onEnterStart, w = n.onLeaveStart, N = n.onAppearActive, P = n.onEnterActive, E = n.onLeaveActive, M = n.onAppearEnd, x = n.onEnterEnd, O = n.onLeaveEnd, W = n.onVisibleChanged, re = ar(), K = A(re, 2), $ = K[0], j = K[1], z = ar(at), B = A(z, 2), I = B[0], L = B[1], V = ar(null), T = A(V, 2), ee = T[0], D = T[1], oe = ot(!1), ae = ot(null);
  function pe() {
    return r();
  }
  var Re = ot(!1);
  function de() {
    L(at, !0), D(null, !0);
  }
  function Ce(R) {
    var H = pe();
    if (!(R && !R.deadline && R.target !== H)) {
      var U = Re.current, le;
      I === Xt && U ? le = M == null ? void 0 : M(H, R) : I === er && U ? le = x == null ? void 0 : x(H, R) : I === tr && U && (le = O == null ? void 0 : O(H, R)), I !== at && U && le !== !1 && de();
    }
  }
  var se = Fa(Ce), q = A(se, 1), ue = q[0], ce = function(H) {
    var U, le, Ee;
    switch (H) {
      case Xt:
        return U = {}, ve(U, Ae, y), ve(U, mt, p), ve(U, yt, N), U;
      case er:
        return le = {}, ve(le, Ae, h), ve(le, mt, s), ve(le, yt, P), le;
      case tr:
        return Ee = {}, ve(Ee, Ae, b), ve(Ee, mt, w), ve(Ee, yt, E), Ee;
      default:
        return {};
    }
  }, ne = u.useMemo(function() {
    return ce(I);
  }, [I]), Le = ja(I, !e, function(R) {
    if (R === Ae) {
      var H = ne[Ae];
      return H ? H(pe()) : pi;
    }
    if (ie in ne) {
      var U;
      D(((U = ne[ie]) === null || U === void 0 ? void 0 : U.call(ne, pe(), null)) || null);
    }
    return ie === yt && (ue(pe()), d > 0 && (clearTimeout(ae.current), ae.current = setTimeout(function() {
      Ce({
        deadline: !0
      });
    }, d))), ie === fi && de(), Wa;
  }), De = A(Le, 2), m = De[0], ie = De[1], fe = Si(ie);
  Re.current = fe, yi(function() {
    j(t);
    var R = oe.current;
    oe.current = !0;
    var H;
    !R && t && l && (H = Xt), R && t && a && (H = er), (R && !t && c || !R && v && !t && c) && (H = tr);
    var U = ce(H);
    H && (e || U[Ae]) ? (L(H), m()) : L(at);
  }, [t]), nr(function() {
    // Cancel appear
    (I === Xt && !l || // Cancel enter
    I === er && !a || // Cancel leave
    I === tr && !c) && L(at);
  }, [l, a, c]), nr(function() {
    return function() {
      oe.current = !1, clearTimeout(ae.current);
    };
  }, []);
  var Y = u.useRef(!1);
  nr(function() {
    $ && (Y.current = !0), $ !== void 0 && I === at && ((Y.current || $) && (W == null || W($)), Y.current = !0);
  }, [$, I]);
  var ge = ee;
  return ne[Ae] && ie === mt && (ge = C({
    transition: "none"
  }, ge)), [I, ie, ge, $ ?? t];
}
function Ha(e) {
  var t = e;
  Oe(e) === "object" && (t = e.transitionSupport);
  function r(i, a) {
    return !!(i.motionName && t && a !== !1);
  }
  var n = /* @__PURE__ */ u.forwardRef(function(i, a) {
    var o = i.visible, l = o === void 0 ? !0 : o, f = i.removeOnLeave, c = f === void 0 ? !0 : f, d = i.forceRender, v = i.children, y = i.motionName, h = i.leavedClassName, b = i.eventProps, p = u.useContext(La), s = p.motion, w = r(i, s), N = ot(), P = ot();
    function E() {
      try {
        return N.current instanceof HTMLElement ? N.current : ir(P.current);
      } catch {
        return null;
      }
    }
    var M = Va(w, l, E, i), x = A(M, 4), O = x[0], W = x[1], re = x[2], K = x[3], $ = u.useRef(K);
    K && ($.current = !0);
    var j = u.useCallback(function(D) {
      N.current = D, nn(a, D);
    }, [a]), z, B = C(C({}, b), {}, {
      visible: l
    });
    if (!v)
      z = null;
    else if (O === at)
      K ? z = v(C({}, B), j) : !c && $.current && h ? z = v(C(C({}, B), {}, {
        className: h
      }), j) : d || !c && !h ? z = v(C(C({}, B), {}, {
        style: {
          display: "none"
        }
      }), j) : z = null;
    else {
      var I, L;
      W === Ae ? L = "prepare" : Si(W) ? L = "active" : W === mt && (L = "start");
      var V = xn(y, "".concat(O, "-").concat(L));
      z = v(C(C({}, B), {}, {
        className: ut(xn(y, O), (I = {}, ve(I, V, V && L), ve(I, y, typeof y == "string"), I)),
        style: re
      }), j);
    }
    if (/* @__PURE__ */ u.isValidElement(z) && dr(z)) {
      var T = z, ee = T.ref;
      ee || (z = /* @__PURE__ */ u.cloneElement(z, {
        ref: j
      }));
    }
    return /* @__PURE__ */ u.createElement(Da, {
      ref: P
    }, z);
  });
  return n.displayName = "CSSMotion", n;
}
const vn = Ha(mi);
var Jr = "add", Yr = "keep", Xr = "remove", Ur = "removed";
function Ba(e) {
  var t;
  return e && Oe(e) === "object" && "key" in e ? t = e : t = {
    key: e
  }, C(C({}, t), {}, {
    key: String(t.key)
  });
}
function en() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [];
  return e.map(Ba);
}
function Ka() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = [], n = 0, i = t.length, a = en(e), o = en(t);
  a.forEach(function(c) {
    for (var d = !1, v = n; v < i; v += 1) {
      var y = o[v];
      if (y.key === c.key) {
        n < v && (r = r.concat(o.slice(n, v).map(function(h) {
          return C(C({}, h), {}, {
            status: Jr
          });
        })), n = v), r.push(C(C({}, y), {}, {
          status: Yr
        })), n += 1, d = !0;
        break;
      }
    }
    d || r.push(C(C({}, c), {}, {
      status: Xr
    }));
  }), n < i && (r = r.concat(o.slice(n).map(function(c) {
    return C(C({}, c), {}, {
      status: Jr
    });
  })));
  var l = {};
  r.forEach(function(c) {
    var d = c.key;
    l[d] = (l[d] || 0) + 1;
  });
  var f = Object.keys(l).filter(function(c) {
    return l[c] > 1;
  });
  return f.forEach(function(c) {
    r = r.filter(function(d) {
      var v = d.key, y = d.status;
      return v !== c || y !== Xr;
    }), r.forEach(function(d) {
      d.key === c && (d.status = Yr);
    });
  }), r;
}
var qa = ["component", "children", "onVisibleChanged", "onAllRemoved"], Qa = ["status"], Ga = ["eventProps", "visible", "children", "motionName", "motionAppear", "motionEnter", "motionLeave", "motionLeaveImmediately", "motionDeadline", "removeOnLeave", "leavedClassName", "onAppearPrepare", "onAppearStart", "onAppearActive", "onAppearEnd", "onEnterStart", "onEnterActive", "onEnterEnd", "onLeaveStart", "onLeaveActive", "onLeaveEnd"];
function Za(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : vn, r = /* @__PURE__ */ function(n) {
    cn(a, n);
    var i = fn(a);
    function a() {
      var o;
      un(this, a);
      for (var l = arguments.length, f = new Array(l), c = 0; c < l; c++)
        f[c] = arguments[c];
      return o = i.call.apply(i, [this].concat(f)), ve(Gr(o), "state", {
        keyEntities: []
      }), ve(Gr(o), "removeKey", function(d) {
        var v = o.state.keyEntities, y = v.map(function(h) {
          return h.key !== d ? h : C(C({}, h), {}, {
            status: Ur
          });
        });
        return o.setState({
          keyEntities: y
        }), y.filter(function(h) {
          var b = h.status;
          return b !== Ur;
        }).length;
      }), o;
    }
    return sn(a, [{
      key: "render",
      value: function() {
        var l = this, f = this.state.keyEntities, c = this.props, d = c.component, v = c.children, y = c.onVisibleChanged, h = c.onAllRemoved, b = zr(c, qa), p = d || u.Fragment, s = {};
        return Ga.forEach(function(w) {
          s[w] = b[w], delete b[w];
        }), delete b.keys, /* @__PURE__ */ u.createElement(p, b, f.map(function(w, N) {
          var P = w.status, E = zr(w, Qa), M = P === Jr || P === Yr;
          return /* @__PURE__ */ u.createElement(t, gt({}, s, {
            key: E.key,
            visible: M,
            eventProps: E,
            onVisibleChanged: function(O) {
              if (y == null || y(O, {
                key: E.key
              }), !O) {
                var W = l.removeKey(E.key);
                W === 0 && h && h();
              }
            }
          }), function(x, O) {
            return v(C(C({}, x), {}, {
              index: N
            }), O);
          });
        }));
      }
    }], [{
      key: "getDerivedStateFromProps",
      value: function(l, f) {
        var c = l.keys, d = f.keyEntities, v = en(c), y = Ka(d, v);
        return {
          keyEntities: y.filter(function(h) {
            var b = d.find(function(p) {
              var s = p.key;
              return h.key === s;
            });
            return !(b && b.status === Ur && h.status === Xr);
          })
        };
      }
    }]), a;
  }(u.Component);
  return ve(r, "defaultProps", {
    component: "div"
  }), r;
}
Za(mi);
function Ja(e) {
  var t = e.prefixCls, r = e.align, n = e.arrow, i = e.arrowPos, a = n || {}, o = a.className, l = a.content, f = i.x, c = f === void 0 ? 0 : f, d = i.y, v = d === void 0 ? 0 : d, y = u.useRef();
  if (!r || !r.points)
    return null;
  var h = {
    position: "absolute"
  };
  if (r.autoArrow !== !1) {
    var b = r.points[0], p = r.points[1], s = b[0], w = b[1], N = p[0], P = p[1];
    s === N || !["t", "b"].includes(s) ? h.top = v : s === "t" ? h.top = 0 : h.bottom = 0, w === P || !["l", "r"].includes(w) ? h.left = c : w === "l" ? h.left = 0 : h.right = 0;
  }
  return /* @__PURE__ */ u.createElement("div", {
    ref: y,
    className: ut("".concat(t, "-arrow"), o),
    style: h
  }, l);
}
function Ya(e) {
  var t = e.prefixCls, r = e.open, n = e.zIndex, i = e.mask, a = e.motion;
  return i ? /* @__PURE__ */ u.createElement(vn, gt({}, a, {
    motionAppear: !0,
    visible: r,
    removeOnLeave: !0
  }), function(o) {
    var l = o.className;
    return /* @__PURE__ */ u.createElement("div", {
      style: {
        zIndex: n
      },
      className: ut("".concat(t, "-mask"), l)
    });
  }) : null;
}
var wi = /* @__PURE__ */ u.memo(function(e) {
  var t = e.children;
  return t;
}, function(e, t) {
  return t.cache;
});
process.env.NODE_ENV !== "production" && (wi.displayName = "PopupContent");
var _i = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var r = e.popup, n = e.className, i = e.prefixCls, a = e.style, o = e.target, l = e.onVisibleChanged, f = e.open, c = e.keepDom, d = e.fresh, v = e.onClick, y = e.mask, h = e.arrow, b = e.arrowPos, p = e.align, s = e.motion, w = e.maskMotion, N = e.forceRender, P = e.getPopupContainer, E = e.autoDestroy, M = e.portal, x = e.zIndex, O = e.onMouseEnter, W = e.onMouseLeave, re = e.onPointerEnter, K = e.ready, $ = e.offsetX, j = e.offsetY, z = e.offsetR, B = e.offsetB, I = e.onAlign, L = e.onPrepare, V = e.stretch, T = e.targetWidth, ee = e.targetHeight, D = typeof r == "function" ? r() : r, oe = f || c, ae = (P == null ? void 0 : P.length) > 0, pe = u.useState(!P || !ae), Re = A(pe, 2), de = Re[0], Ce = Re[1];
  if (ye(function() {
    !de && ae && o && Ce(!0);
  }, [de, ae, o]), !de)
    return null;
  var se = "auto", q = {
    left: "-1000vw",
    top: "-1000vh",
    right: se,
    bottom: se
  };
  if (K || !f) {
    var ue, ce = p.points, ne = p.dynamicInset || ((ue = p._experimental) === null || ue === void 0 ? void 0 : ue.dynamicInset), Le = ne && ce[0][1] === "r", De = ne && ce[0][0] === "b";
    Le ? (q.right = z, q.left = se) : (q.left = $, q.right = se), De ? (q.bottom = B, q.top = se) : (q.top = j, q.bottom = se);
  }
  var m = {};
  return V && (V.includes("height") && ee ? m.height = ee : V.includes("minHeight") && ee && (m.minHeight = ee), V.includes("width") && T ? m.width = T : V.includes("minWidth") && T && (m.minWidth = T)), f || (m.pointerEvents = "none"), /* @__PURE__ */ u.createElement(M, {
    open: N || oe,
    getContainer: P && function() {
      return P(o);
    },
    autoDestroy: E
  }, /* @__PURE__ */ u.createElement(Ya, {
    prefixCls: i,
    open: f,
    zIndex: x,
    mask: y,
    motion: w
  }), /* @__PURE__ */ u.createElement(yr, {
    onResize: I,
    disabled: !f
  }, function(ie) {
    return /* @__PURE__ */ u.createElement(vn, gt({
      motionAppear: !0,
      motionEnter: !0,
      motionLeave: !0,
      removeOnLeave: !1,
      forceRender: N,
      leavedClassName: "".concat(i, "-hidden")
    }, s, {
      onAppearPrepare: L,
      onEnterPrepare: L,
      visible: f,
      onVisibleChanged: function(Y) {
        var ge;
        s == null || (ge = s.onVisibleChanged) === null || ge === void 0 || ge.call(s, Y), l(Y);
      }
    }), function(fe, Y) {
      var ge = fe.className, R = fe.style, H = ut(i, ge, n);
      return /* @__PURE__ */ u.createElement("div", {
        ref: Qn(ie, t, Y),
        className: H,
        style: C(C(C(C({
          "--arrow-x": "".concat(b.x || 0, "px"),
          "--arrow-y": "".concat(b.y || 0, "px")
        }, q), m), R), {}, {
          boxSizing: "border-box",
          zIndex: x
        }, a),
        onMouseEnter: O,
        onMouseLeave: W,
        onPointerEnter: re,
        onClick: v
      }, h && /* @__PURE__ */ u.createElement(Ja, {
        prefixCls: i,
        arrow: h,
        arrowPos: b,
        align: p
      }), /* @__PURE__ */ u.createElement(wi, {
        cache: !f && !d
      }, D));
    });
  }));
});
process.env.NODE_ENV !== "production" && (_i.displayName = "Popup");
var Ri = /* @__PURE__ */ u.forwardRef(function(e, t) {
  var r = e.children, n = e.getTriggerDOMNode, i = dr(r), a = u.useCallback(function(l) {
    nn(t, n ? n(l) : l);
  }, [n]), o = an(a, r.ref);
  return i ? /* @__PURE__ */ u.cloneElement(r, {
    ref: o
  }) : r;
});
process.env.NODE_ENV !== "production" && (Ri.displayName = "TriggerWrapper");
var kn = /* @__PURE__ */ u.createContext(null);
function Fn(e) {
  return e ? Array.isArray(e) ? e : [e] : [];
}
function Xa(e, t, r, n) {
  return u.useMemo(function() {
    var i = Fn(r ?? t), a = Fn(n ?? t), o = new Set(i), l = new Set(a);
    return e && (o.has("hover") && (o.delete("hover"), o.add("click")), l.has("hover") && (l.delete("hover"), l.add("click"))), [o, l];
  }, [e, t, r, n]);
}
const eo = function(e) {
  if (!e)
    return !1;
  if (e instanceof Element) {
    if (e.offsetParent)
      return !0;
    if (e.getBBox) {
      var t = e.getBBox(), r = t.width, n = t.height;
      if (r || n)
        return !0;
    }
    if (e.getBoundingClientRect) {
      var i = e.getBoundingClientRect(), a = i.width, o = i.height;
      if (a || o)
        return !0;
    }
  }
  return !1;
};
function to() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], r = arguments.length > 2 ? arguments[2] : void 0;
  return r ? e[0] === t[0] : e[0] === t[0] && e[1] === t[1];
}
function ro(e, t, r, n) {
  for (var i = r.points, a = Object.keys(e), o = 0; o < a.length; o += 1) {
    var l, f = a[o];
    if (to((l = e[f]) === null || l === void 0 ? void 0 : l.points, i, n))
      return "".concat(t, "-placement-").concat(f);
  }
  return "";
}
function Un(e, t, r, n) {
  return t || (r ? {
    motionName: "".concat(e, "-").concat(r)
  } : n ? {
    motionName: n
  } : null);
}
function At(e) {
  return e.ownerDocument.defaultView;
}
function tn(e) {
  for (var t = [], r = e == null ? void 0 : e.parentElement, n = ["hidden", "scroll", "clip", "auto"]; r; ) {
    var i = At(r).getComputedStyle(r), a = i.overflowX, o = i.overflowY, l = i.overflow;
    [a, o, l].some(function(f) {
      return n.includes(f);
    }) && t.push(r), r = r.parentElement;
  }
  return t;
}
function Nt(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
  return Number.isNaN(e) ? t : e;
}
function Tt(e) {
  return Nt(parseFloat(e), 0);
}
function $n(e, t) {
  var r = C({}, e);
  return (t || []).forEach(function(n) {
    if (!(n instanceof HTMLBodyElement || n instanceof HTMLHtmlElement)) {
      var i = At(n).getComputedStyle(n), a = i.overflow, o = i.overflowClipMargin, l = i.borderTopWidth, f = i.borderBottomWidth, c = i.borderLeftWidth, d = i.borderRightWidth, v = n.getBoundingClientRect(), y = n.offsetHeight, h = n.clientHeight, b = n.offsetWidth, p = n.clientWidth, s = Tt(l), w = Tt(f), N = Tt(c), P = Tt(d), E = Nt(Math.round(v.width / b * 1e3) / 1e3), M = Nt(Math.round(v.height / y * 1e3) / 1e3), x = (b - p - N - P) * E, O = (y - h - s - w) * M, W = s * M, re = w * M, K = N * E, $ = P * E, j = 0, z = 0;
      if (a === "clip") {
        var B = Tt(o);
        j = B * E, z = B * M;
      }
      var I = v.x + K - j, L = v.y + W - z, V = I + v.width + 2 * j - K - $ - x, T = L + v.height + 2 * z - W - re - O;
      r.left = Math.max(r.left, I), r.top = Math.max(r.top, L), r.right = Math.min(r.right, V), r.bottom = Math.min(r.bottom, T);
    }
  }), r;
}
function zn(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, r = "".concat(t), n = r.match(/^(.*)\%$/);
  return n ? e * (parseFloat(n[1]) / 100) : parseFloat(r);
}
function Wn(e, t) {
  var r = t || [], n = A(r, 2), i = n[0], a = n[1];
  return [zn(e.width, i), zn(e.height, a)];
}
function jn() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "";
  return [e[0], e[1]];
}
function ht(e, t) {
  var r = t[0], n = t[1], i, a;
  return r === "t" ? a = e.y : r === "b" ? a = e.y + e.height : a = e.y + e.height / 2, n === "l" ? i = e.x : n === "r" ? i = e.x + e.width : i = e.x + e.width / 2, {
    x: i,
    y: a
  };
}
function Ke(e, t) {
  var r = {
    t: "b",
    b: "t",
    l: "r",
    r: "l"
  };
  return e.map(function(n, i) {
    return i === t ? r[n] || "c" : n;
  }).join("");
}
function no(e, t, r, n, i, a, o) {
  var l = u.useState({
    ready: !1,
    offsetX: 0,
    offsetY: 0,
    offsetR: 0,
    offsetB: 0,
    arrowX: 0,
    arrowY: 0,
    scaleX: 1,
    scaleY: 1,
    align: i[n] || {}
  }), f = A(l, 2), c = f[0], d = f[1], v = u.useRef(0), y = u.useMemo(function() {
    return t ? tn(t) : [];
  }, [t]), h = u.useRef({}), b = function() {
    h.current = {};
  };
  e || b();
  var p = it(function() {
    if (t && r && e) {
      let we = function(qt, _e) {
        var vt = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : H, Qt = D.x + qt, dt = D.y + _e, Gt = Qt + ue, Pt = dt + q, Zt = Math.max(Qt, vt.left), Dr = Math.max(dt, vt.top), xr = Math.min(Gt, vt.right), Ir = Math.min(Pt, vt.bottom);
        return Math.max(0, (xr - Zt) * (Ir - Dr));
      }, Kt = function() {
        Je = D.y + Z, Ye = Je + q, Ue = D.x + X, Xe = Ue + ue;
      };
      var N, P, E = t, M = E.ownerDocument, x = At(E), O = x.getComputedStyle(E), W = O.width, re = O.height, K = O.position, $ = E.style.left, j = E.style.top, z = E.style.right, B = E.style.bottom, I = E.style.overflow, L = C(C({}, i[n]), a), V = M.createElement("div");
      (N = E.parentElement) === null || N === void 0 || N.appendChild(V), V.style.left = "".concat(E.offsetLeft, "px"), V.style.top = "".concat(E.offsetTop, "px"), V.style.position = K, V.style.height = "".concat(E.offsetHeight, "px"), V.style.width = "".concat(E.offsetWidth, "px"), E.style.left = "0", E.style.top = "0", E.style.right = "auto", E.style.bottom = "auto", E.style.overflow = "hidden";
      var T;
      if (Array.isArray(r))
        T = {
          x: r[0],
          y: r[1],
          width: 0,
          height: 0
        };
      else {
        var ee = r.getBoundingClientRect();
        T = {
          x: ee.x,
          y: ee.y,
          width: ee.width,
          height: ee.height
        };
      }
      var D = E.getBoundingClientRect(), oe = M.documentElement, ae = oe.clientWidth, pe = oe.clientHeight, Re = oe.scrollWidth, de = oe.scrollHeight, Ce = oe.scrollTop, se = oe.scrollLeft, q = D.height, ue = D.width, ce = T.height, ne = T.width, Le = {
        left: 0,
        top: 0,
        right: ae,
        bottom: pe
      }, De = {
        left: -se,
        top: -Ce,
        right: Re - se,
        bottom: de - Ce
      }, m = L.htmlRegion, ie = "visible", fe = "visibleFirst";
      m !== "scroll" && m !== fe && (m = ie);
      var Y = m === fe, ge = $n(De, y), R = $n(Le, y), H = m === ie ? R : ge, U = Y ? R : H;
      E.style.left = "auto", E.style.top = "auto", E.style.right = "0", E.style.bottom = "0";
      var le = E.getBoundingClientRect();
      E.style.left = $, E.style.top = j, E.style.right = z, E.style.bottom = B, E.style.overflow = I, (P = E.parentElement) === null || P === void 0 || P.removeChild(V);
      var Ee = Nt(Math.round(ue / parseFloat(W) * 1e3) / 1e3), qe = Nt(Math.round(q / parseFloat(re) * 1e3) / 1e3);
      if (Ee === 0 || qe === 0 || ur(r) && !eo(r))
        return;
      var Ot = L.offset, he = L.targetOffset, Er = Wn(D, Ot), bt = A(Er, 2), Me = bt[0], Pe = bt[1], Lt = Wn(T, he), Te = A(Lt, 2), br = Te[0], Dt = Te[1];
      T.x -= br, T.y -= Dt;
      var pr = L.points || [], Qe = A(pr, 2), Se = Qe[0], je = Qe[1], ke = jn(je), be = jn(Se), xt = ht(T, ke), It = ht(D, be), Fe = C({}, L), X = xt.x - It.x + Me, Z = xt.y - It.y + Pe, J = we(X, Z), st = we(X, Z, R), Ve = ht(T, ["t", "l"]), Ge = ht(D, ["t", "l"]), pt = ht(T, ["b", "r"]), St = ht(D, ["b", "r"]), Ze = L.overflow || {}, Ne = Ze.adjustX, Sr = Ze.adjustY, wt = Ze.shiftX, ct = Ze.shiftY, _t = function(_e) {
        return typeof _e == "boolean" ? _e : _e >= 0;
      }, Je, Ye, Ue, Xe;
      Kt();
      var kt = _t(Sr), Rt = be[0] === ke[0];
      if (kt && be[0] === "t" && (Ye > U.bottom || h.current.bt)) {
        var He = Z;
        Rt ? He -= q - ce : He = Ve.y - St.y - Pe;
        var Ft = we(X, He), ft = we(X, He, R);
        // Of course use larger one
        Ft > J || Ft === J && (!Y || // Choose recommend one
        ft >= st) ? (h.current.bt = !0, Z = He, Pe = -Pe, Fe.points = [Ke(be, 0), Ke(ke, 0)]) : h.current.bt = !1;
      }
      if (kt && be[0] === "b" && (Je < U.top || h.current.tb)) {
        var et = Z;
        Rt ? et += q - ce : et = pt.y - Ge.y - Pe;
        var me = we(X, et), wr = we(X, et, R);
        // Of course use larger one
        me > J || me === J && (!Y || // Choose recommend one
        wr >= st) ? (h.current.tb = !0, Z = et, Pe = -Pe, Fe.points = [Ke(be, 0), Ke(ke, 0)]) : h.current.tb = !1;
      }
      var Ut = _t(Ne), $t = be[1] === ke[1];
      if (Ut && be[1] === "l" && (Xe > U.right || h.current.rl)) {
        var tt = X;
        $t ? tt -= ue - ne : tt = Ve.x - St.x - Me;
        var zt = we(tt, Z), _r = we(tt, Z, R);
        // Of course use larger one
        zt > J || zt === J && (!Y || // Choose recommend one
        _r >= st) ? (h.current.rl = !0, X = tt, Me = -Me, Fe.points = [Ke(be, 1), Ke(ke, 1)]) : h.current.rl = !1;
      }
      if (Ut && be[1] === "r" && (Ue < U.left || h.current.lr)) {
        var rt = X;
        $t ? rt += ue - ne : rt = pt.x - Ge.x - Me;
        var Wt = we(rt, Z), Rr = we(rt, Z, R);
        // Of course use larger one
        Wt > J || Wt === J && (!Y || // Choose recommend one
        Rr >= st) ? (h.current.lr = !0, X = rt, Me = -Me, Fe.points = [Ke(be, 1), Ke(ke, 1)]) : h.current.lr = !1;
      }
      Kt();
      var xe = wt === !0 ? 0 : wt;
      typeof xe == "number" && (Ue < R.left && (X -= Ue - R.left - Me, T.x + ne < R.left + xe && (X += T.x - R.left + ne - xe)), Xe > R.right && (X -= Xe - R.right - Me, T.x > R.right - xe && (X += T.x - R.right + xe)));
      var $e = ct === !0 ? 0 : ct;
      typeof $e == "number" && (Je < R.top && (Z -= Je - R.top - Pe, T.y + ce < R.top + $e && (Z += T.y - R.top + ce - $e)), Ye > R.bottom && (Z -= Ye - R.bottom - Pe, T.y > R.bottom - $e && (Z += T.y - R.bottom + $e)));
      var Ct = D.x + X, jt = Ct + ue, Be = D.y + Z, nt = Be + q, Mt = T.x, lt = Mt + ne, ze = T.y, Cr = ze + ce, Mr = Math.max(Ct, Mt), Pr = Math.min(jt, lt), Vt = (Mr + Pr) / 2, Tr = Vt - Ct, Nr = Math.max(Be, ze), Ar = Math.min(nt, Cr), Ht = (Nr + Ar) / 2, Or = Ht - Be;
      o == null || o(t, Fe);
      var Lr = le.right - D.x - (X + D.width), Bt = le.bottom - D.y - (Z + D.height);
      d({
        ready: !0,
        offsetX: X / Ee,
        offsetY: Z / qe,
        offsetR: Lr / Ee,
        offsetB: Bt / qe,
        arrowX: Tr / Ee,
        arrowY: Or / qe,
        scaleX: Ee,
        scaleY: qe,
        align: Fe
      });
    }
  }), s = function() {
    v.current += 1;
    var P = v.current;
    Promise.resolve().then(function() {
      v.current === P && p();
    });
  }, w = function() {
    d(function(P) {
      return C(C({}, P), {}, {
        ready: !1
      });
    });
  };
  return ye(w, [n]), ye(function() {
    e || w();
  }, [e]), [c.ready, c.offsetX, c.offsetY, c.offsetR, c.offsetB, c.arrowX, c.arrowY, c.scaleX, c.scaleY, c.align, s];
}
function io(e, t, r, n, i) {
  ye(function() {
    if (e && t && r) {
      let v = function() {
        n(), i();
      };
      var a = t, o = r, l = tn(a), f = tn(o), c = At(o), d = new Set([c].concat(Vr(l), Vr(f)));
      return d.forEach(function(y) {
        y.addEventListener("scroll", v, {
          passive: !0
        });
      }), c.addEventListener("resize", v, {
        passive: !0
      }), n(), function() {
        d.forEach(function(y) {
          y.removeEventListener("scroll", v), c.removeEventListener("resize", v);
        });
      };
    }
  }, [e, t, r]);
}
function ao(e, t, r, n, i, a, o, l) {
  var f = u.useRef(e);
  f.current = e, u.useEffect(function() {
    if (t && n && (!i || a)) {
      var c = function(w) {
        var N = w.target;
        f.current && !o(N) && l(!1);
      }, d = At(n);
      d.addEventListener("mousedown", c, !0), d.addEventListener("contextmenu", c, !0);
      var v = Zr(r);
      if (v && (v.addEventListener("mousedown", c, !0), v.addEventListener("contextmenu", c, !0)), process.env.NODE_ENV !== "production") {
        var y, h, b = r == null || (y = r.getRootNode) === null || y === void 0 ? void 0 : y.call(r), p = (h = n.getRootNode) === null || h === void 0 ? void 0 : h.call(n);
        or(b === p, "trigger element and popup element should in same shadow root.");
      }
      return function() {
        d.removeEventListener("mousedown", c, !0), d.removeEventListener("contextmenu", c, !0), v && (v.removeEventListener("mousedown", c, !0), v.removeEventListener("contextmenu", c, !0));
      };
    }
  }, [t, r, n, i, a]);
}
var oo = ["prefixCls", "children", "action", "showAction", "hideAction", "popupVisible", "defaultPopupVisible", "onPopupVisibleChange", "afterPopupVisibleChange", "mouseEnterDelay", "mouseLeaveDelay", "focusDelay", "blurDelay", "mask", "maskClosable", "getPopupContainer", "forceRender", "autoDestroy", "destroyPopupOnHide", "popup", "popupClassName", "popupStyle", "popupPlacement", "builtinPlacements", "popupAlign", "zIndex", "stretch", "getPopupClassNameFromAlign", "fresh", "alignPoint", "onPopupClick", "onPopupAlign", "arrow", "popupMotion", "maskMotion", "popupTransitionName", "popupAnimation", "maskTransitionName", "maskAnimation", "className", "getTriggerDOMNode"];
function uo() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : on, t = /* @__PURE__ */ u.forwardRef(function(r, n) {
    var i = r.prefixCls, a = i === void 0 ? "rc-trigger-popup" : i, o = r.children, l = r.action, f = l === void 0 ? "hover" : l, c = r.showAction, d = r.hideAction, v = r.popupVisible, y = r.defaultPopupVisible, h = r.onPopupVisibleChange, b = r.afterPopupVisibleChange, p = r.mouseEnterDelay, s = r.mouseLeaveDelay, w = s === void 0 ? 0.1 : s, N = r.focusDelay, P = r.blurDelay, E = r.mask, M = r.maskClosable, x = M === void 0 ? !0 : M, O = r.getPopupContainer, W = r.forceRender, re = r.autoDestroy, K = r.destroyPopupOnHide, $ = r.popup, j = r.popupClassName, z = r.popupStyle, B = r.popupPlacement, I = r.builtinPlacements, L = I === void 0 ? {} : I, V = r.popupAlign, T = r.zIndex, ee = r.stretch, D = r.getPopupClassNameFromAlign, oe = r.fresh, ae = r.alignPoint, pe = r.onPopupClick, Re = r.onPopupAlign, de = r.arrow, Ce = r.popupMotion, se = r.maskMotion, q = r.popupTransitionName, ue = r.popupAnimation, ce = r.maskTransitionName, ne = r.maskAnimation, Le = r.className, De = r.getTriggerDOMNode, m = zr(r, oo), ie = re || K || !1, fe = u.useState(!1), Y = A(fe, 2), ge = Y[0], R = Y[1];
    ye(function() {
      R(Oa());
    }, []);
    var H = u.useRef({}), U = u.useContext(kn), le = u.useMemo(function() {
      return {
        registerSubPopup: function(_, Q) {
          H.current[_] = Q, U == null || U.registerSubPopup(_, Q);
        }
      };
    }, [U]), Ee = Aa(), qe = u.useState(null), Ot = A(qe, 2), he = Ot[0], Er = Ot[1], bt = u.useRef(null), Me = it(function(g) {
      bt.current = g, ur(g) && he !== g && Er(g), U == null || U.registerSubPopup(Ee, g);
    }), Pe = u.useState(null), Lt = A(Pe, 2), Te = Lt[0], br = Lt[1], Dt = u.useRef(null), pr = it(function(g) {
      ur(g) && Te !== g && (br(g), Dt.current = g);
    }), Qe = u.Children.only(o), Se = (Qe == null ? void 0 : Qe.props) || {}, je = {}, ke = it(function(g) {
      var _, Q, te = Te;
      return (te == null ? void 0 : te.contains(g)) || ((_ = Zr(te)) === null || _ === void 0 ? void 0 : _.host) === g || g === te || (he == null ? void 0 : he.contains(g)) || ((Q = Zr(he)) === null || Q === void 0 ? void 0 : Q.host) === g || g === he || Object.values(H.current).some(function(G) {
        return (G == null ? void 0 : G.contains(g)) || g === G;
      });
    }), be = Un(a, Ce, ue, q), xt = Un(a, se, ne, ce), It = u.useState(y || !1), Fe = A(It, 2), X = Fe[0], Z = Fe[1], J = v ?? X, st = it(function(g) {
      v === void 0 && Z(g);
    });
    ye(function() {
      Z(v || !1);
    }, [v]);
    var Ve = u.useRef(J);
    Ve.current = J;
    var Ge = u.useRef([]);
    Ge.current = [];
    var pt = it(function(g) {
      var _;
      st(g), ((_ = Ge.current[Ge.current.length - 1]) !== null && _ !== void 0 ? _ : J) !== g && (Ge.current.push(g), h == null || h(g));
    }), St = u.useRef(), Ze = function() {
      clearTimeout(St.current);
    }, Ne = function(_) {
      var Q = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0;
      Ze(), Q === 0 ? pt(_) : St.current = setTimeout(function() {
        pt(_);
      }, Q * 1e3);
    };
    u.useEffect(function() {
      return Ze;
    }, []);
    var Sr = u.useState(!1), wt = A(Sr, 2), ct = wt[0], _t = wt[1];
    ye(function(g) {
      (!g || J) && _t(!0);
    }, [J]);
    var Je = u.useState(null), Ye = A(Je, 2), Ue = Ye[0], Xe = Ye[1], kt = u.useState([0, 0]), Rt = A(kt, 2), He = Rt[0], Ft = Rt[1], ft = function(_) {
      Ft([_.clientX, _.clientY]);
    }, et = no(J, he, ae ? He : Te, B, L, V, Re), me = A(et, 11), wr = me[0], Ut = me[1], $t = me[2], tt = me[3], zt = me[4], _r = me[5], rt = me[6], Wt = me[7], Rr = me[8], xe = me[9], $e = me[10], Ct = Xa(ge, f, c, d), jt = A(Ct, 2), Be = jt[0], nt = jt[1], Mt = Be.has("click"), lt = nt.has("click") || nt.has("contextMenu"), ze = it(function() {
      ct || $e();
    }), Cr = function() {
      Ve.current && ae && lt && Ne(!1);
    };
    io(J, Te, he, ze, Cr), ye(function() {
      ze();
    }, [He, B]), ye(function() {
      J && !(L != null && L[B]) && ze();
    }, [JSON.stringify(V)]);
    var Mr = u.useMemo(function() {
      var g = ro(L, a, xe, ae);
      return ut(g, D == null ? void 0 : D(xe));
    }, [xe, D, L, a, ae]);
    u.useImperativeHandle(n, function() {
      return {
        nativeElement: Dt.current,
        popupElement: bt.current,
        forceAlign: ze
      };
    });
    var Pr = u.useState(0), Vt = A(Pr, 2), Tr = Vt[0], Nr = Vt[1], Ar = u.useState(0), Ht = A(Ar, 2), Or = Ht[0], Lr = Ht[1], Bt = function() {
      if (ee && Te) {
        var _ = Te.getBoundingClientRect();
        Nr(_.width), Lr(_.height);
      }
    }, we = function() {
      Bt(), ze();
    }, Kt = function(_) {
      _t(!1), $e(), b == null || b(_);
    }, qt = function() {
      return new Promise(function(_) {
        Bt(), Xe(function() {
          return _;
        });
      });
    };
    ye(function() {
      Ue && ($e(), Ue(), Xe(null));
    }, [Ue]);
    function _e(g, _, Q, te) {
      je[g] = function(G) {
        var Jt;
        te == null || te(G), Ne(_, Q);
        for (var kr = arguments.length, dn = new Array(kr > 1 ? kr - 1 : 0), Yt = 1; Yt < kr; Yt++)
          dn[Yt - 1] = arguments[Yt];
        (Jt = Se[g]) === null || Jt === void 0 || Jt.call.apply(Jt, [Se, G].concat(dn));
      };
    }
    (Mt || lt) && (je.onClick = function(g) {
      var _;
      Ve.current && lt ? Ne(!1) : !Ve.current && Mt && (ft(g), Ne(!0));
      for (var Q = arguments.length, te = new Array(Q > 1 ? Q - 1 : 0), G = 1; G < Q; G++)
        te[G - 1] = arguments[G];
      (_ = Se.onClick) === null || _ === void 0 || _.call.apply(_, [Se, g].concat(te));
    }), ao(J, lt, Te, he, E, x, ke, Ne);
    var vt = Be.has("hover"), Qt = nt.has("hover"), dt, Gt;
    vt && (_e("onMouseEnter", !0, p, function(g) {
      ft(g);
    }), _e("onPointerEnter", !0, p, function(g) {
      ft(g);
    }), dt = function(_) {
      (J || ct) && he !== null && he !== void 0 && he.contains(_.target) && Ne(!0, p);
    }, ae && (je.onMouseMove = function(g) {
      var _;
      (_ = Se.onMouseMove) === null || _ === void 0 || _.call(Se, g);
    })), Qt && (_e("onMouseLeave", !1, w), _e("onPointerLeave", !1, w), Gt = function() {
      Ne(!1, w);
    }), Be.has("focus") && _e("onFocus", !0, N), nt.has("focus") && _e("onBlur", !1, P), Be.has("contextMenu") && (je.onContextMenu = function(g) {
      var _;
      Ve.current && nt.has("contextMenu") ? Ne(!1) : (ft(g), Ne(!0)), g.preventDefault();
      for (var Q = arguments.length, te = new Array(Q > 1 ? Q - 1 : 0), G = 1; G < Q; G++)
        te[G - 1] = arguments[G];
      (_ = Se.onContextMenu) === null || _ === void 0 || _.call.apply(_, [Se, g].concat(te));
    }), Le && (je.className = ut(Se.className, Le));
    var Pt = C(C({}, Se), je), Zt = {}, Dr = ["onContextMenu", "onClick", "onMouseDown", "onTouchStart", "onMouseEnter", "onMouseLeave", "onFocus", "onBlur"];
    Dr.forEach(function(g) {
      m[g] && (Zt[g] = function() {
        for (var _, Q = arguments.length, te = new Array(Q), G = 0; G < Q; G++)
          te[G] = arguments[G];
        (_ = Pt[g]) === null || _ === void 0 || _.call.apply(_, [Pt].concat(te)), m[g].apply(m, te);
      });
    });
    var xr = /* @__PURE__ */ u.cloneElement(Qe, C(C({}, Pt), Zt)), Ir = {
      x: _r,
      y: rt
    }, Ci = de ? C({}, de !== !0 ? de : {}) : null;
    return /* @__PURE__ */ u.createElement(u.Fragment, null, /* @__PURE__ */ u.createElement(yr, {
      disabled: !J,
      ref: pr,
      onResize: we
    }, /* @__PURE__ */ u.createElement(Ri, {
      getTriggerDOMNode: De
    }, xr)), /* @__PURE__ */ u.createElement(kn.Provider, {
      value: le
    }, /* @__PURE__ */ u.createElement(_i, {
      portal: e,
      ref: Me,
      prefixCls: a,
      popup: $,
      className: ut(j, Mr),
      style: z,
      target: Te,
      onMouseEnter: dt,
      onMouseLeave: Gt,
      onPointerEnter: dt,
      zIndex: T,
      open: J,
      keepDom: ct,
      fresh: oe,
      onClick: pe,
      mask: E,
      motion: be,
      maskMotion: xt,
      onVisibleChanged: Kt,
      onPrepare: qt,
      forceRender: W,
      autoDestroy: ie,
      getPopupContainer: O,
      align: xe,
      arrow: Ci,
      arrowPos: Ir,
      ready: wr,
      offsetX: Ut,
      offsetY: $t,
      offsetR: tt,
      offsetB: zt,
      onAlign: ze,
      stretch: ee,
      targetWidth: Tr / Wt,
      targetHeight: Or / Rr
    })));
  });
  return process.env.NODE_ENV !== "production" && (t.displayName = "Trigger"), t;
}
const vo = uo(on);
var S = {
  /**
   * MAC_ENTER
   */
  MAC_ENTER: 3,
  /**
   * BACKSPACE
   */
  BACKSPACE: 8,
  /**
   * TAB
   */
  TAB: 9,
  /**
   * NUMLOCK on FF/Safari Mac
   */
  NUM_CENTER: 12,
  // NUMLOCK on FF/Safari Mac
  /**
   * ENTER
   */
  ENTER: 13,
  /**
   * SHIFT
   */
  SHIFT: 16,
  /**
   * CTRL
   */
  CTRL: 17,
  /**
   * ALT
   */
  ALT: 18,
  /**
   * PAUSE
   */
  PAUSE: 19,
  /**
   * CAPS_LOCK
   */
  CAPS_LOCK: 20,
  /**
   * ESC
   */
  ESC: 27,
  /**
   * SPACE
   */
  SPACE: 32,
  /**
   * PAGE_UP
   */
  PAGE_UP: 33,
  // also NUM_NORTH_EAST
  /**
   * PAGE_DOWN
   */
  PAGE_DOWN: 34,
  // also NUM_SOUTH_EAST
  /**
   * END
   */
  END: 35,
  // also NUM_SOUTH_WEST
  /**
   * HOME
   */
  HOME: 36,
  // also NUM_NORTH_WEST
  /**
   * LEFT
   */
  LEFT: 37,
  // also NUM_WEST
  /**
   * UP
   */
  UP: 38,
  // also NUM_NORTH
  /**
   * RIGHT
   */
  RIGHT: 39,
  // also NUM_EAST
  /**
   * DOWN
   */
  DOWN: 40,
  // also NUM_SOUTH
  /**
   * PRINT_SCREEN
   */
  PRINT_SCREEN: 44,
  /**
   * INSERT
   */
  INSERT: 45,
  // also NUM_INSERT
  /**
   * DELETE
   */
  DELETE: 46,
  // also NUM_DELETE
  /**
   * ZERO
   */
  ZERO: 48,
  /**
   * ONE
   */
  ONE: 49,
  /**
   * TWO
   */
  TWO: 50,
  /**
   * THREE
   */
  THREE: 51,
  /**
   * FOUR
   */
  FOUR: 52,
  /**
   * FIVE
   */
  FIVE: 53,
  /**
   * SIX
   */
  SIX: 54,
  /**
   * SEVEN
   */
  SEVEN: 55,
  /**
   * EIGHT
   */
  EIGHT: 56,
  /**
   * NINE
   */
  NINE: 57,
  /**
   * QUESTION_MARK
   */
  QUESTION_MARK: 63,
  // needs localization
  /**
   * A
   */
  A: 65,
  /**
   * B
   */
  B: 66,
  /**
   * C
   */
  C: 67,
  /**
   * D
   */
  D: 68,
  /**
   * E
   */
  E: 69,
  /**
   * F
   */
  F: 70,
  /**
   * G
   */
  G: 71,
  /**
   * H
   */
  H: 72,
  /**
   * I
   */
  I: 73,
  /**
   * J
   */
  J: 74,
  /**
   * K
   */
  K: 75,
  /**
   * L
   */
  L: 76,
  /**
   * M
   */
  M: 77,
  /**
   * N
   */
  N: 78,
  /**
   * O
   */
  O: 79,
  /**
   * P
   */
  P: 80,
  /**
   * Q
   */
  Q: 81,
  /**
   * R
   */
  R: 82,
  /**
   * S
   */
  S: 83,
  /**
   * T
   */
  T: 84,
  /**
   * U
   */
  U: 85,
  /**
   * V
   */
  V: 86,
  /**
   * W
   */
  W: 87,
  /**
   * X
   */
  X: 88,
  /**
   * Y
   */
  Y: 89,
  /**
   * Z
   */
  Z: 90,
  /**
   * META
   */
  META: 91,
  // WIN_KEY_LEFT
  /**
   * WIN_KEY_RIGHT
   */
  WIN_KEY_RIGHT: 92,
  /**
   * CONTEXT_MENU
   */
  CONTEXT_MENU: 93,
  /**
   * NUM_ZERO
   */
  NUM_ZERO: 96,
  /**
   * NUM_ONE
   */
  NUM_ONE: 97,
  /**
   * NUM_TWO
   */
  NUM_TWO: 98,
  /**
   * NUM_THREE
   */
  NUM_THREE: 99,
  /**
   * NUM_FOUR
   */
  NUM_FOUR: 100,
  /**
   * NUM_FIVE
   */
  NUM_FIVE: 101,
  /**
   * NUM_SIX
   */
  NUM_SIX: 102,
  /**
   * NUM_SEVEN
   */
  NUM_SEVEN: 103,
  /**
   * NUM_EIGHT
   */
  NUM_EIGHT: 104,
  /**
   * NUM_NINE
   */
  NUM_NINE: 105,
  /**
   * NUM_MULTIPLY
   */
  NUM_MULTIPLY: 106,
  /**
   * NUM_PLUS
   */
  NUM_PLUS: 107,
  /**
   * NUM_MINUS
   */
  NUM_MINUS: 109,
  /**
   * NUM_PERIOD
   */
  NUM_PERIOD: 110,
  /**
   * NUM_DIVISION
   */
  NUM_DIVISION: 111,
  /**
   * F1
   */
  F1: 112,
  /**
   * F2
   */
  F2: 113,
  /**
   * F3
   */
  F3: 114,
  /**
   * F4
   */
  F4: 115,
  /**
   * F5
   */
  F5: 116,
  /**
   * F6
   */
  F6: 117,
  /**
   * F7
   */
  F7: 118,
  /**
   * F8
   */
  F8: 119,
  /**
   * F9
   */
  F9: 120,
  /**
   * F10
   */
  F10: 121,
  /**
   * F11
   */
  F11: 122,
  /**
   * F12
   */
  F12: 123,
  /**
   * NUMLOCK
   */
  NUMLOCK: 144,
  /**
   * SEMICOLON
   */
  SEMICOLON: 186,
  // needs localization
  /**
   * DASH
   */
  DASH: 189,
  // needs localization
  /**
   * EQUALS
   */
  EQUALS: 187,
  // needs localization
  /**
   * COMMA
   */
  COMMA: 188,
  // needs localization
  /**
   * PERIOD
   */
  PERIOD: 190,
  // needs localization
  /**
   * SLASH
   */
  SLASH: 191,
  // needs localization
  /**
   * APOSTROPHE
   */
  APOSTROPHE: 192,
  // needs localization
  /**
   * SINGLE_QUOTE
   */
  SINGLE_QUOTE: 222,
  // needs localization
  /**
   * OPEN_SQUARE_BRACKET
   */
  OPEN_SQUARE_BRACKET: 219,
  // needs localization
  /**
   * BACKSLASH
   */
  BACKSLASH: 220,
  // needs localization
  /**
   * CLOSE_SQUARE_BRACKET
   */
  CLOSE_SQUARE_BRACKET: 221,
  // needs localization
  /**
   * WIN_KEY
   */
  WIN_KEY: 224,
  /**
   * MAC_FF_META
   */
  MAC_FF_META: 224,
  // Firefox (Gecko) fires this for the meta key instead of 91
  /**
   * WIN_IME
   */
  WIN_IME: 229,
  // ======================== Function ========================
  /**
   * whether text and modified key is entered at the same time.
   */
  isTextModifyingKeyEvent: function(t) {
    var r = t.keyCode;
    if (t.altKey && !t.ctrlKey || t.metaKey || // Function keys don't generate text
    r >= S.F1 && r <= S.F12)
      return !1;
    switch (r) {
      case S.ALT:
      case S.CAPS_LOCK:
      case S.CONTEXT_MENU:
      case S.CTRL:
      case S.DOWN:
      case S.END:
      case S.ESC:
      case S.HOME:
      case S.INSERT:
      case S.LEFT:
      case S.MAC_FF_META:
      case S.META:
      case S.NUMLOCK:
      case S.NUM_CENTER:
      case S.PAGE_DOWN:
      case S.PAGE_UP:
      case S.PAUSE:
      case S.PRINT_SCREEN:
      case S.RIGHT:
      case S.SHIFT:
      case S.UP:
      case S.WIN_KEY:
      case S.WIN_KEY_RIGHT:
        return !1;
      default:
        return !0;
    }
  },
  /**
   * whether character is entered.
   */
  isCharacterKey: function(t) {
    if (t >= S.ZERO && t <= S.NINE || t >= S.NUM_ZERO && t <= S.NUM_MULTIPLY || t >= S.A && t <= S.Z || window.navigator.userAgent.indexOf("WebKit") !== -1 && t === 0)
      return !0;
    switch (t) {
      case S.SPACE:
      case S.QUESTION_MARK:
      case S.NUM_PLUS:
      case S.NUM_MINUS:
      case S.NUM_PERIOD:
      case S.NUM_DIVISION:
      case S.SEMICOLON:
      case S.DASH:
      case S.EQUALS:
      case S.COMMA:
      case S.PERIOD:
      case S.SLASH:
      case S.APOSTROPHE:
      case S.SINGLE_QUOTE:
      case S.OPEN_SQUARE_BRACKET:
      case S.BACKSLASH:
      case S.CLOSE_SQUARE_BRACKET:
        return !0;
      default:
        return !1;
    }
  }
};
export {
  vn as C,
  S as K,
  yr as R,
  vo as T,
  zr as _,
  A as a,
  gt as b,
  Qn as c,
  ve as d,
  C as e,
  ye as f,
  ar as g,
  lo as h,
  vr as i,
  Oe as j,
  zi as k,
  Vr as l,
  eo as m,
  an as n,
  cn as o,
  fn as p,
  un as q,
  sn as r,
  dr as s,
  Br as t,
  it as u,
  lr as w
};
