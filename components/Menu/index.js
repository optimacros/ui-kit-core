import '../assets/index30.css';
import { jsx as Vt } from "react/jsx-runtime";
import { _ as U, b as T, e as K, R as cn, w as Xe, a as _, u as Kt, f as Jn, g as tn, h as nn, i as We, j as Dt, k as Zn, l as Ue, m as Qn, K as Pe, d as $, n as er, o as tr, p as nr, q as rr, r as ar, t as ir, T as or, C as lr } from "../KeyCode-CgN7iLd1.js";
import { c as Ce } from "../index-DWRHnq8_.js";
import * as r from "react";
import ur, { useState as _t, useMemo as rn, useCallback as Oe, useRef as pt, useImperativeHandle as sr } from "react";
import { unstable_batchedUpdates as cr, flushSync as fr } from "react-dom";
var dr = ["prefixCls", "invalidate", "item", "renderItem", "responsive", "responsiveDisabled", "registerSize", "itemKey", "className", "style", "children", "display", "order", "component"], Be = void 0;
function vr(e, n) {
  var i = e.prefixCls, t = e.invalidate, o = e.item, a = e.renderItem, l = e.responsive, u = e.responsiveDisabled, c = e.registerSize, s = e.itemKey, p = e.className, v = e.style, h = e.children, M = e.display, g = e.order, P = e.component, b = P === void 0 ? "div" : P, C = U(e, dr), S = l && !M;
  function d(D) {
    c(s, D);
  }
  r.useEffect(function() {
    return function() {
      d(null);
    };
  }, []);
  var m = a && o !== Be ? a(o) : h, R;
  t || (R = {
    opacity: S ? 0 : 1,
    height: S ? 0 : Be,
    overflowY: S ? "hidden" : Be,
    order: l ? g : Be,
    pointerEvents: S ? "none" : Be,
    position: S ? "absolute" : Be
  });
  var y = {};
  S && (y["aria-hidden"] = !0);
  var I = /* @__PURE__ */ r.createElement(b, T({
    className: Ce(!t && i, p),
    style: K(K({}, R), v)
  }, y, C, {
    ref: n
  }), m);
  return l && (I = /* @__PURE__ */ r.createElement(cn, {
    onResize: function(N) {
      var V = N.offsetWidth;
      d(V);
    },
    disabled: u
  }, I)), I;
}
var lt = /* @__PURE__ */ r.forwardRef(vr);
lt.displayName = "Item";
function mr(e) {
  if (typeof MessageChannel > "u")
    Xe(e);
  else {
    var n = new MessageChannel();
    n.port1.onmessage = function() {
      return e();
    }, n.port2.postMessage(void 0);
  }
}
function pr() {
  var e = r.useRef(null), n = function(t) {
    e.current || (e.current = [], mr(function() {
      cr(function() {
        e.current.forEach(function(o) {
          o();
        }), e.current = null;
      });
    })), e.current.push(t);
  };
  return n;
}
function rt(e, n) {
  var i = r.useState(n), t = _(i, 2), o = t[0], a = t[1], l = Kt(function(u) {
    e(function() {
      a(u);
    });
  });
  return [o, l];
}
var Ct = /* @__PURE__ */ ur.createContext(null), hr = ["component"], gr = ["className"], yr = ["className"], Cr = function(n, i) {
  var t = r.useContext(Ct);
  if (!t) {
    var o = n.component, a = o === void 0 ? "div" : o, l = U(n, hr);
    return /* @__PURE__ */ r.createElement(a, T({}, l, {
      ref: i
    }));
  }
  var u = t.className, c = U(t, gr), s = n.className, p = U(n, yr);
  return /* @__PURE__ */ r.createElement(Ct.Provider, {
    value: null
  }, /* @__PURE__ */ r.createElement(lt, T({
    ref: i,
    className: Ce(u, s)
  }, c, p)));
}, fn = /* @__PURE__ */ r.forwardRef(Cr);
fn.displayName = "RawItem";
var br = ["prefixCls", "data", "renderItem", "renderRawItem", "itemKey", "itemWidth", "ssr", "style", "className", "maxCount", "renderRest", "renderRawRest", "suffix", "component", "itemComponent", "onVisibleChange"], dn = "responsive", vn = "invalidate";
function Sr(e) {
  return "+ ".concat(e.length, " ...");
}
function Ir(e, n) {
  var i = e.prefixCls, t = i === void 0 ? "rc-overflow" : i, o = e.data, a = o === void 0 ? [] : o, l = e.renderItem, u = e.renderRawItem, c = e.itemKey, s = e.itemWidth, p = s === void 0 ? 10 : s, v = e.ssr, h = e.style, M = e.className, g = e.maxCount, P = e.renderRest, b = e.renderRawRest, C = e.suffix, S = e.component, d = S === void 0 ? "div" : S, m = e.itemComponent, R = e.onVisibleChange, y = U(e, br), I = v === "full", D = pr(), N = rt(D, null), V = _(N, 2), A = V[0], z = V[1], k = A || 0, q = rt(D, /* @__PURE__ */ new Map()), B = _(q, 2), Z = B[0], H = B[1], Q = rt(D, 0), W = _(Q, 2), le = W[0], be = W[1], he = rt(D, 0), ge = _(he, 2), ue = ge[0], j = ge[1], Y = rt(D, 0), Se = _(Y, 2), se = Se[0], Ie = Se[1], F = _t(null), ee = _(F, 2), ce = ee[0], $e = ee[1], Ne = _t(null), ye = _(Ne, 2), _e = ye[0], Je = ye[1], de = r.useMemo(function() {
    return _e === null && I ? Number.MAX_SAFE_INTEGER : _e || 0;
  }, [_e, A]), Ae = _t(!1), ke = _(Ae, 2), je = ke[0], fe = ke[1], Le = "".concat(t, "-item"), we = Math.max(le, ue), Ke = g === dn, te = a.length && Ke, Re = g === vn, Te = te || typeof g == "number" && a.length > g, ne = rn(function() {
    var f = a;
    return te ? A === null && I ? f = a : f = a.slice(0, Math.min(a.length, k / p)) : typeof g == "number" && (f = a.slice(0, g)), f;
  }, [a, p, A, g, te]), Ee = rn(function() {
    return te ? a.slice(de + 1) : a.slice(ne.length);
  }, [a, ne, te, de]), ve = Oe(function(f, E) {
    var L;
    return typeof c == "function" ? c(f) : (L = c && (f == null ? void 0 : f[c])) !== null && L !== void 0 ? L : E;
  }, [c]), X = Oe(l || function(f) {
    return f;
  }, [l]);
  function me(f, E, L) {
    _e === f && (E === void 0 || E === ce) || (Je(f), L || (fe(f < a.length - 1), R == null || R(f)), E !== void 0 && $e(E));
  }
  function Me(f, E) {
    z(E.clientWidth);
  }
  function re(f, E) {
    H(function(L) {
      var ae = new Map(L);
      return E === null ? ae.delete(f) : ae.set(f, E), ae;
    });
  }
  function J(f, E) {
    j(E), be(ue);
  }
  function Et(f, E) {
    Ie(E);
  }
  function Ze(f) {
    return Z.get(ve(ne[f], f));
  }
  Jn(function() {
    if (k && typeof we == "number" && ne) {
      var f = se, E = ne.length, L = E - 1;
      if (!E) {
        me(0, null);
        return;
      }
      for (var ae = 0; ae < E; ae += 1) {
        var ze = Ze(ae);
        if (I && (ze = ze || 0), ze === void 0) {
          me(ae - 1, void 0, !0);
          break;
        }
        if (f += ze, // Only one means `totalWidth` is the final width
        L === 0 && f <= k || // Last two width will be the final width
        ae === L - 1 && f + Ze(L) <= k) {
          me(L, null);
          break;
        } else if (f + we > k) {
          me(ae - 1, f - ze - se + ue);
          break;
        }
      }
      C && Ze(0) + se > k && $e(null);
    }
  }, [k, Z, ue, se, ve, ne]);
  var Ge = je && !!Ee.length, ft = {};
  ce !== null && te && (ft = {
    position: "absolute",
    left: ce,
    top: 0
  });
  var De = {
    prefixCls: Le,
    responsive: te,
    component: m,
    invalidate: Re
  }, He = u ? function(f, E) {
    var L = ve(f, E);
    return /* @__PURE__ */ r.createElement(Ct.Provider, {
      key: L,
      value: K(K({}, De), {}, {
        order: E,
        item: f,
        itemKey: L,
        registerSize: re,
        display: E <= de
      })
    }, u(f, E));
  } : function(f, E) {
    var L = ve(f, E);
    return /* @__PURE__ */ r.createElement(lt, T({}, De, {
      order: E,
      key: L,
      item: f,
      renderItem: X,
      itemKey: L,
      registerSize: re,
      display: E <= de
    }));
  }, Ve, Qe = {
    order: Ge ? de : Number.MAX_SAFE_INTEGER,
    className: "".concat(Le, "-rest"),
    registerSize: J,
    display: Ge
  };
  if (b)
    b && (Ve = /* @__PURE__ */ r.createElement(Ct.Provider, {
      value: K(K({}, De), Qe)
    }, b(Ee)));
  else {
    var et = P || Sr;
    Ve = /* @__PURE__ */ r.createElement(lt, T({}, De, Qe), typeof et == "function" ? et(Ee) : et);
  }
  var qe = /* @__PURE__ */ r.createElement(d, T({
    className: Ce(!Re && t, M),
    style: h,
    ref: n
  }, y), ne.map(He), Te ? Ve : null, C && /* @__PURE__ */ r.createElement(lt, T({}, De, {
    responsive: Ke,
    responsiveDisabled: !te,
    order: de,
    className: "".concat(Le, "-suffix"),
    registerSize: Et,
    display: !0,
    style: ft
  }), C));
  return Ke && (qe = /* @__PURE__ */ r.createElement(cn, {
    onResize: Me,
    disabled: !te
  }, qe)), qe;
}
var xe = /* @__PURE__ */ r.forwardRef(Ir);
xe.displayName = "Overflow";
xe.Item = fn;
xe.RESPONSIVE = dn;
xe.INVALIDATE = vn;
function wt(e) {
  return e !== void 0;
}
function ht(e, n) {
  var i = n || {}, t = i.defaultValue, o = i.value, a = i.onChange, l = i.postState, u = tn(function() {
    return wt(o) ? o : wt(t) ? typeof t == "function" ? t() : t : typeof e == "function" ? e() : e;
  }), c = _(u, 2), s = c[0], p = c[1], v = o !== void 0 ? o : s, h = l ? l(v) : v, M = Kt(a), g = tn([v]), P = _(g, 2), b = P[0], C = P[1];
  nn(function() {
    var d = b[0];
    s !== d && M(s, d);
  }, [b]), nn(function() {
    wt(o) || p(o);
  }, [o]);
  var S = Kt(function(d, m) {
    p(d, m), C([v], m);
  });
  return [h, S];
}
function mn(e, n) {
  var i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, t = /* @__PURE__ */ new Set();
  function o(a, l) {
    var u = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 1, c = t.has(a);
    if (We(!c, "Warning: There may be circular references"), c)
      return !1;
    if (a === l)
      return !0;
    if (i && u > 1)
      return !1;
    t.add(a);
    var s = u + 1;
    if (Array.isArray(a)) {
      if (!Array.isArray(l) || a.length !== l.length)
        return !1;
      for (var p = 0; p < a.length; p++)
        if (!o(a[p], l[p], s))
          return !1;
      return !0;
    }
    if (a && l && Dt(a) === "object" && Dt(l) === "object") {
      var v = Object.keys(a);
      return v.length !== Object.keys(l).length ? !1 : v.every(function(h) {
        return o(a[h], l[h], s);
      });
    }
    return !1;
  }
  return o(e, n);
}
var pn = /* @__PURE__ */ r.createContext(null);
function hn(e, n) {
  return e === void 0 ? null : "".concat(e, "-").concat(n);
}
function gn(e) {
  var n = r.useContext(pn);
  return hn(n, e);
}
var Rr = ["children", "locked"], pe = /* @__PURE__ */ r.createContext(null);
function Er(e, n) {
  var i = K({}, e);
  return Object.keys(n).forEach(function(t) {
    var o = n[t];
    o !== void 0 && (i[t] = o);
  }), i;
}
function ut(e) {
  var n = e.children, i = e.locked, t = U(e, Rr), o = r.useContext(pe), a = Zn(function() {
    return Er(o, t);
  }, [o, t], function(l, u) {
    return !i && (l[0] !== u[0] || !mn(l[1], u[1], !0));
  });
  return /* @__PURE__ */ r.createElement(pe.Provider, {
    value: a
  }, n);
}
var Mr = [], yn = /* @__PURE__ */ r.createContext(null);
function St() {
  return r.useContext(yn);
}
var Cn = /* @__PURE__ */ r.createContext(Mr);
function st(e) {
  var n = r.useContext(Cn);
  return r.useMemo(function() {
    return e !== void 0 ? [].concat(Ue(n), [e]) : n;
  }, [n, e]);
}
var bn = /* @__PURE__ */ r.createContext(null), zt = /* @__PURE__ */ r.createContext({});
function an(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
  if (Qn(e)) {
    var i = e.nodeName.toLowerCase(), t = (
      // Focusable element
      ["input", "select", "textarea", "button"].includes(i) || // Editable element
      e.isContentEditable || // Anchor with href element
      i === "a" && !!e.getAttribute("href")
    ), o = e.getAttribute("tabindex"), a = Number(o), l = null;
    return o && !Number.isNaN(a) ? l = a : t && l === null && (l = 0), t && e.disabled && (l = null), l !== null && (l >= 0 || n && l < 0);
  }
  return !1;
}
function xr(e) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1, i = Ue(e.querySelectorAll("*")).filter(function(t) {
    return an(t, n);
  });
  return an(e, n) && i.unshift(e), i;
}
var Ot = Pe.LEFT, $t = Pe.RIGHT, At = Pe.UP, gt = Pe.DOWN, yt = Pe.ENTER, Sn = Pe.ESC, at = Pe.HOME, it = Pe.END, on = [At, gt, Ot, $t];
function Pr(e, n, i, t) {
  var o, a = "prev", l = "next", u = "children", c = "parent";
  if (e === "inline" && t === yt)
    return {
      inlineTrigger: !0
    };
  var s = $($({}, At, a), gt, l), p = $($($($({}, Ot, i ? l : a), $t, i ? a : l), gt, u), yt, u), v = $($($($($($({}, At, a), gt, l), yt, u), Sn, c), Ot, i ? u : c), $t, i ? c : u), h = {
    inline: s,
    horizontal: p,
    vertical: v,
    inlineSub: s,
    horizontalSub: v,
    verticalSub: v
  }, M = (o = h["".concat(e).concat(n ? "" : "Sub")]) === null || o === void 0 ? void 0 : o[t];
  switch (M) {
    case a:
      return {
        offset: -1,
        sibling: !0
      };
    case l:
      return {
        offset: 1,
        sibling: !0
      };
    case c:
      return {
        offset: -1,
        sibling: !1
      };
    case u:
      return {
        offset: 1,
        sibling: !1
      };
    default:
      return null;
  }
}
function Nr(e) {
  for (var n = e; n; ) {
    if (n.getAttribute("data-menu-list"))
      return n;
    n = n.parentElement;
  }
  return null;
}
function _r(e, n) {
  for (var i = e || document.activeElement; i; ) {
    if (n.has(i))
      return i;
    i = i.parentElement;
  }
  return null;
}
function Ft(e, n) {
  var i = xr(e, !0);
  return i.filter(function(t) {
    return n.has(t);
  });
}
function ln(e, n, i) {
  var t = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : 1;
  if (!e)
    return null;
  var o = Ft(e, n), a = o.length, l = o.findIndex(function(u) {
    return i === u;
  });
  return t < 0 ? l === -1 ? l = a - 1 : l -= 1 : t > 0 && (l += 1), l = (l + a) % a, o[l];
}
var kt = function(n, i) {
  var t = /* @__PURE__ */ new Set(), o = /* @__PURE__ */ new Map(), a = /* @__PURE__ */ new Map();
  return n.forEach(function(l) {
    var u = document.querySelector("[data-menu-id='".concat(hn(i, l), "']"));
    u && (t.add(u), a.set(u, l), o.set(l, u));
  }), {
    elements: t,
    key2element: o,
    element2key: a
  };
};
function wr(e, n, i, t, o, a, l, u, c, s) {
  var p = r.useRef(), v = r.useRef();
  v.current = n;
  var h = function() {
    Xe.cancel(p.current);
  };
  return r.useEffect(function() {
    return function() {
      h();
    };
  }, []), function(M) {
    var g = M.which;
    if ([].concat(on, [yt, Sn, at, it]).includes(g)) {
      var P = a(), b = kt(P, t), C = b, S = C.elements, d = C.key2element, m = C.element2key, R = d.get(n), y = _r(R, S), I = m.get(y), D = Pr(e, l(I, !0).length === 1, i, g);
      if (!D && g !== at && g !== it)
        return;
      (on.includes(g) || [at, it].includes(g)) && M.preventDefault();
      var N = function(H) {
        if (H) {
          var Q = H, W = H.querySelector("a");
          W != null && W.getAttribute("href") && (Q = W);
          var le = m.get(H);
          u(le), h(), p.current = Xe(function() {
            v.current === le && Q.focus();
          });
        }
      };
      if ([at, it].includes(g) || D.sibling || !y) {
        var V;
        !y || e === "inline" ? V = o.current : V = Nr(y);
        var A, z = Ft(V, S);
        g === at ? A = z[0] : g === it ? A = z[z.length - 1] : A = ln(V, S, y, D.offset), N(A);
      } else if (D.inlineTrigger)
        c(I);
      else if (D.offset > 0)
        c(I, !0), h(), p.current = Xe(function() {
          b = kt(P, t);
          var Z = y.getAttribute("aria-controls"), H = document.getElementById(Z), Q = ln(H, b.elements);
          N(Q);
        }, 5);
      else if (D.offset < 0) {
        var k = l(I, !0), q = k[k.length - 2], B = d.get(q);
        c(q, !1), N(B);
      }
    }
    s == null || s(M);
  };
}
function Kr(e) {
  Promise.resolve().then(e);
}
var Ut = "__RC_UTIL_PATH_SPLIT__", un = function(n) {
  return n.join(Ut);
}, Dr = function(n) {
  return n.split(Ut);
}, Lt = "rc-menu-more";
function Or() {
  var e = r.useState({}), n = _(e, 2), i = n[1], t = pt(/* @__PURE__ */ new Map()), o = pt(/* @__PURE__ */ new Map()), a = r.useState([]), l = _(a, 2), u = l[0], c = l[1], s = pt(0), p = pt(!1), v = function() {
    p.current || i({});
  }, h = Oe(function(d, m) {
    process.env.NODE_ENV !== "production" && We(!t.current.has(d), "Duplicated key '".concat(d, "' used in Menu by path [").concat(m.join(" > "), "]"));
    var R = un(m);
    o.current.set(R, d), t.current.set(d, R), s.current += 1;
    var y = s.current;
    Kr(function() {
      y === s.current && v();
    });
  }, []), M = Oe(function(d, m) {
    var R = un(m);
    o.current.delete(R), t.current.delete(d);
  }, []), g = Oe(function(d) {
    c(d);
  }, []), P = Oe(function(d, m) {
    var R = t.current.get(d) || "", y = Dr(R);
    return m && u.includes(y[0]) && y.unshift(Lt), y;
  }, [u]), b = Oe(function(d, m) {
    return d.some(function(R) {
      var y = P(R, !0);
      return y.includes(m);
    });
  }, [P]), C = function() {
    var m = Ue(t.current.keys());
    return u.length && m.push(Lt), m;
  }, S = Oe(function(d) {
    var m = "".concat(t.current.get(d)).concat(Ut), R = /* @__PURE__ */ new Set();
    return Ue(o.current.keys()).forEach(function(y) {
      y.startsWith(m) && R.add(o.current.get(y));
    }), R;
  }, []);
  return r.useEffect(function() {
    return function() {
      p.current = !0;
    };
  }, []), {
    // Register
    registerPath: h,
    unregisterPath: M,
    refreshOverflowKeys: g,
    // Util
    isSubPathKey: b,
    getKeyPath: P,
    getKeys: C,
    getSubPathKeys: S
  };
}
function ot(e) {
  var n = r.useRef(e);
  n.current = e;
  var i = r.useCallback(function() {
    for (var t, o = arguments.length, a = new Array(o), l = 0; l < o; l++)
      a[l] = arguments[l];
    return (t = n.current) === null || t === void 0 ? void 0 : t.call.apply(t, [n].concat(a));
  }, []);
  return e ? i : void 0;
}
var $r = Math.random().toFixed(5).toString().slice(2), sn = 0;
function Ar(e) {
  var n = ht(e, {
    value: e
  }), i = _(n, 2), t = i[0], o = i[1];
  return r.useEffect(function() {
    sn += 1;
    var a = process.env.NODE_ENV === "test" ? "test" : "".concat($r, "-").concat(sn);
    o("rc-menu-uuid-".concat(a));
  }, []), t;
}
function In(e, n) {
  var i = K({}, e);
  return Array.isArray(n) && n.forEach(function(t) {
    delete i[t];
  }), i;
}
function Rn(e, n, i, t) {
  var o = r.useContext(pe), a = o.activeKey, l = o.onActive, u = o.onInactive, c = {
    active: a === e
  };
  return n || (c.onMouseEnter = function(s) {
    i == null || i({
      key: e,
      domEvent: s
    }), l(e);
  }, c.onMouseLeave = function(s) {
    t == null || t({
      key: e,
      domEvent: s
    }), u(e);
  }), c;
}
function En(e) {
  var n = r.useContext(pe), i = n.mode, t = n.rtl, o = n.inlineIndent;
  if (i !== "inline")
    return null;
  var a = e;
  return t ? {
    paddingRight: a * o
  } : {
    paddingLeft: a * o
  };
}
function Mn(e) {
  var n = e.icon, i = e.props, t = e.children, o;
  return n === null || n === !1 ? null : (typeof n == "function" ? o = /* @__PURE__ */ r.createElement(n, K({}, i)) : typeof n != "boolean" && (o = n), o || t || null);
}
var kr = ["item"];
function bt(e) {
  var n = e.item, i = U(e, kr);
  return Object.defineProperty(i, "item", {
    get: function() {
      return We(!1, "`info.item` is deprecated since we will move to function component that not provides React Node instance in future."), n;
    }
  }), i;
}
var Lr = ["title", "attribute", "elementRef"], Tr = ["style", "className", "eventKey", "warnKey", "disabled", "itemIcon", "children", "role", "onMouseEnter", "onMouseLeave", "onClick", "onKeyDown", "onFocus"], Vr = ["active"], zr = /* @__PURE__ */ function(e) {
  tr(i, e);
  var n = nr(i);
  function i() {
    return rr(this, i), n.apply(this, arguments);
  }
  return ar(i, [{
    key: "render",
    value: function() {
      var o = this.props, a = o.title, l = o.attribute, u = o.elementRef, c = U(o, Lr), s = In(c, ["eventKey", "popupClassName", "popupOffset", "onTitleClick"]);
      return We(!l, "`attribute` of Menu.Item is deprecated. Please pass attribute directly."), /* @__PURE__ */ r.createElement(xe.Item, T({}, l, {
        title: typeof a == "string" ? a : void 0
      }, s, {
        ref: u
      }));
    }
  }]), i;
}(r.Component), Fr = /* @__PURE__ */ r.forwardRef(function(e, n) {
  var i = e.style, t = e.className, o = e.eventKey, a = e.warnKey, l = e.disabled, u = e.itemIcon, c = e.children, s = e.role, p = e.onMouseEnter, v = e.onMouseLeave, h = e.onClick, M = e.onKeyDown, g = e.onFocus, P = U(e, Tr), b = gn(o), C = r.useContext(pe), S = C.prefixCls, d = C.onItemClick, m = C.disabled, R = C.overflowDisabled, y = C.itemIcon, I = C.selectedKeys, D = C.onActive, N = r.useContext(zt), V = N._internalRenderMenuItem, A = "".concat(S, "-item"), z = r.useRef(), k = r.useRef(), q = m || l, B = er(n, k), Z = st(o);
  process.env.NODE_ENV !== "production" && a && We(!1, "MenuItem should not leave undefined `key`.");
  var H = function(F) {
    return {
      key: o,
      // Note: For legacy code is reversed which not like other antd component
      keyPath: Ue(Z).reverse(),
      item: z.current,
      domEvent: F
    };
  }, Q = u || y, W = Rn(o, q, p, v), le = W.active, be = U(W, Vr), he = I.includes(o), ge = En(Z.length), ue = function(F) {
    if (!q) {
      var ee = H(F);
      h == null || h(bt(ee)), d(ee);
    }
  }, j = function(F) {
    if (M == null || M(F), F.which === Pe.ENTER) {
      var ee = H(F);
      h == null || h(bt(ee)), d(ee);
    }
  }, Y = function(F) {
    D(o), g == null || g(F);
  }, Se = {};
  e.role === "option" && (Se["aria-selected"] = he);
  var se = /* @__PURE__ */ r.createElement(zr, T({
    ref: z,
    elementRef: B,
    role: s === null ? "none" : s || "menuitem",
    tabIndex: l ? null : -1,
    "data-menu-id": R && b ? null : b
  }, P, be, Se, {
    component: "li",
    "aria-disabled": l,
    style: K(K({}, ge), i),
    className: Ce(A, $($($({}, "".concat(A, "-active"), le), "".concat(A, "-selected"), he), "".concat(A, "-disabled"), q), t),
    onClick: ue,
    onKeyDown: j,
    onFocus: Y
  }), c, /* @__PURE__ */ r.createElement(Mn, {
    props: K(K({}, e), {}, {
      isSelected: he
    }),
    icon: Q
  }));
  return V && (se = V(se, e, {
    selected: he
  })), se;
});
function Ur(e, n) {
  var i = e.eventKey, t = St(), o = st(i);
  return r.useEffect(function() {
    if (t)
      return t.registerPath(i, o), function() {
        t.unregisterPath(i, o);
      };
  }, [o]), t ? null : /* @__PURE__ */ r.createElement(Fr, T({}, e, {
    ref: n
  }));
}
const It = /* @__PURE__ */ r.forwardRef(Ur);
var Wr = ["className", "children"], jr = function(n, i) {
  var t = n.className, o = n.children, a = U(n, Wr), l = r.useContext(pe), u = l.prefixCls, c = l.mode, s = l.rtl;
  return /* @__PURE__ */ r.createElement("ul", T({
    className: Ce(u, s && "".concat(u, "-rtl"), "".concat(u, "-sub"), "".concat(u, "-").concat(c === "inline" ? "inline" : "vertical"), t),
    role: "menu"
  }, a, {
    "data-menu-list": !0,
    ref: i
  }), o);
}, Wt = /* @__PURE__ */ r.forwardRef(jr);
Wt.displayName = "SubMenuList";
function jt(e, n) {
  return ir(e).map(function(i, t) {
    if (/* @__PURE__ */ r.isValidElement(i)) {
      var o, a, l = i.key, u = (o = (a = i.props) === null || a === void 0 ? void 0 : a.eventKey) !== null && o !== void 0 ? o : l, c = u == null;
      c && (u = "tmp_key-".concat([].concat(Ue(n), [t]).join("-")));
      var s = {
        key: u,
        eventKey: u
      };
      return process.env.NODE_ENV !== "production" && c && (s.warnKey = !0), /* @__PURE__ */ r.cloneElement(i, s);
    }
    return i;
  });
}
var G = {
  adjustX: 1,
  adjustY: 1
}, Gr = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: G
  },
  topRight: {
    points: ["br", "tr"],
    overflow: G
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: G
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: G
  },
  leftTop: {
    points: ["tr", "tl"],
    overflow: G
  },
  leftBottom: {
    points: ["br", "bl"],
    overflow: G
  },
  rightTop: {
    points: ["tl", "tr"],
    overflow: G
  },
  rightBottom: {
    points: ["bl", "br"],
    overflow: G
  }
}, Hr = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: G
  },
  topRight: {
    points: ["br", "tr"],
    overflow: G
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: G
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: G
  },
  rightTop: {
    points: ["tr", "tl"],
    overflow: G
  },
  rightBottom: {
    points: ["br", "bl"],
    overflow: G
  },
  leftTop: {
    points: ["tl", "tr"],
    overflow: G
  },
  leftBottom: {
    points: ["bl", "br"],
    overflow: G
  }
};
function xn(e, n, i) {
  if (n)
    return n;
  if (i)
    return i[e] || i.other;
}
var qr = {
  horizontal: "bottomLeft",
  vertical: "rightTop",
  "vertical-left": "rightTop",
  "vertical-right": "leftTop"
};
function Br(e) {
  var n = e.prefixCls, i = e.visible, t = e.children, o = e.popup, a = e.popupStyle, l = e.popupClassName, u = e.popupOffset, c = e.disabled, s = e.mode, p = e.onVisibleChange, v = r.useContext(pe), h = v.getPopupContainer, M = v.rtl, g = v.subMenuOpenDelay, P = v.subMenuCloseDelay, b = v.builtinPlacements, C = v.triggerSubMenuAction, S = v.forceSubMenuRender, d = v.rootClassName, m = v.motion, R = v.defaultMotions, y = r.useState(!1), I = _(y, 2), D = I[0], N = I[1], V = M ? K(K({}, Hr), b) : K(K({}, Gr), b), A = qr[s], z = xn(s, m, R), k = r.useRef(z);
  s !== "inline" && (k.current = z);
  var q = K(K({}, k.current), {}, {
    leavedClassName: "".concat(n, "-hidden"),
    removeOnLeave: !1,
    motionAppear: !0
  }), B = r.useRef();
  return r.useEffect(function() {
    return B.current = Xe(function() {
      N(i);
    }), function() {
      Xe.cancel(B.current);
    };
  }, [i]), /* @__PURE__ */ r.createElement(or, {
    prefixCls: n,
    popupClassName: Ce("".concat(n, "-popup"), $({}, "".concat(n, "-rtl"), M), l, d),
    stretch: s === "horizontal" ? "minWidth" : null,
    getPopupContainer: h,
    builtinPlacements: V,
    popupPlacement: A,
    popupVisible: D,
    popup: o,
    popupStyle: a,
    popupAlign: u && {
      offset: u
    },
    action: c ? [] : [C],
    mouseEnterDelay: g,
    mouseLeaveDelay: P,
    onPopupVisibleChange: p,
    forceRender: S,
    popupMotion: q,
    fresh: !0
  }, t);
}
function Yr(e) {
  var n = e.id, i = e.open, t = e.keyPath, o = e.children, a = "inline", l = r.useContext(pe), u = l.prefixCls, c = l.forceSubMenuRender, s = l.motion, p = l.defaultMotions, v = l.mode, h = r.useRef(!1);
  h.current = v === a;
  var M = r.useState(!h.current), g = _(M, 2), P = g[0], b = g[1], C = h.current ? i : !1;
  r.useEffect(function() {
    h.current && b(!1);
  }, [v]);
  var S = K({}, xn(a, s, p));
  t.length > 1 && (S.motionAppear = !1);
  var d = S.onVisibleChanged;
  return S.onVisibleChanged = function(m) {
    return !h.current && !m && b(!0), d == null ? void 0 : d(m);
  }, P ? null : /* @__PURE__ */ r.createElement(ut, {
    mode: a,
    locked: !h.current
  }, /* @__PURE__ */ r.createElement(lr, T({
    visible: C
  }, S, {
    forceRender: c,
    removeOnLeave: !1,
    leavedClassName: "".concat(u, "-hidden")
  }), function(m) {
    var R = m.className, y = m.style;
    return /* @__PURE__ */ r.createElement(Wt, {
      id: n,
      className: R,
      style: y
    }, o);
  }));
}
var Xr = ["style", "className", "title", "eventKey", "warnKey", "disabled", "internalPopupClose", "children", "itemIcon", "expandIcon", "popupClassName", "popupOffset", "popupStyle", "onClick", "onMouseEnter", "onMouseLeave", "onTitleClick", "onTitleMouseEnter", "onTitleMouseLeave"], Jr = ["active"], Zr = function(n) {
  var i = n.style, t = n.className, o = n.title, a = n.eventKey, l = n.warnKey, u = n.disabled, c = n.internalPopupClose, s = n.children, p = n.itemIcon, v = n.expandIcon, h = n.popupClassName, M = n.popupOffset, g = n.popupStyle, P = n.onClick, b = n.onMouseEnter, C = n.onMouseLeave, S = n.onTitleClick, d = n.onTitleMouseEnter, m = n.onTitleMouseLeave, R = U(n, Xr), y = gn(a), I = r.useContext(pe), D = I.prefixCls, N = I.mode, V = I.openKeys, A = I.disabled, z = I.overflowDisabled, k = I.activeKey, q = I.selectedKeys, B = I.itemIcon, Z = I.expandIcon, H = I.onItemClick, Q = I.onOpenChange, W = I.onActive, le = r.useContext(zt), be = le._internalRenderSubMenuItem, he = r.useContext(bn), ge = he.isSubPathKey, ue = st(), j = "".concat(D, "-submenu"), Y = A || u, Se = r.useRef(), se = r.useRef();
  process.env.NODE_ENV !== "production" && l && We(!1, "SubMenu should not leave undefined `key`.");
  var Ie = p ?? B, F = v ?? Z, ee = V.includes(a), ce = !z && ee, $e = ge(q, a), Ne = Rn(a, Y, d, m), ye = Ne.active, _e = U(Ne, Jr), Je = r.useState(!1), de = _(Je, 2), Ae = de[0], ke = de[1], je = function(J) {
    Y || ke(J);
  }, fe = function(J) {
    je(!0), b == null || b({
      key: a,
      domEvent: J
    });
  }, Le = function(J) {
    je(!1), C == null || C({
      key: a,
      domEvent: J
    });
  }, we = r.useMemo(function() {
    return ye || (N !== "inline" ? Ae || ge([k], a) : !1);
  }, [N, ye, k, Ae, a, ge]), Ke = En(ue.length), te = function(J) {
    Y || (S == null || S({
      key: a,
      domEvent: J
    }), N === "inline" && Q(a, !ee));
  }, Re = ot(function(re) {
    P == null || P(bt(re)), H(re);
  }), Te = function(J) {
    N !== "inline" && Q(a, J);
  }, ne = function() {
    W(a);
  }, Ee = y && "".concat(y, "-popup"), ve = /* @__PURE__ */ r.createElement("div", T({
    role: "menuitem",
    style: Ke,
    className: "".concat(j, "-title"),
    tabIndex: Y ? null : -1,
    ref: Se,
    title: typeof o == "string" ? o : null,
    "data-menu-id": z && y ? null : y,
    "aria-expanded": ce,
    "aria-haspopup": !0,
    "aria-controls": Ee,
    "aria-disabled": Y,
    onClick: te,
    onFocus: ne
  }, _e), o, /* @__PURE__ */ r.createElement(Mn, {
    icon: N !== "horizontal" ? F : void 0,
    props: K(K({}, n), {}, {
      isOpen: ce,
      // [Legacy] Not sure why need this mark
      isSubMenu: !0
    })
  }, /* @__PURE__ */ r.createElement("i", {
    className: "".concat(j, "-arrow")
  }))), X = r.useRef(N);
  if (N !== "inline" && ue.length > 1 ? X.current = "vertical" : X.current = N, !z) {
    var me = X.current;
    ve = /* @__PURE__ */ r.createElement(Br, {
      mode: me,
      prefixCls: j,
      visible: !c && ce && N !== "inline",
      popupClassName: h,
      popupOffset: M,
      popupStyle: g,
      popup: /* @__PURE__ */ r.createElement(
        ut,
        {
          mode: me === "horizontal" ? "vertical" : me
        },
        /* @__PURE__ */ r.createElement(Wt, {
          id: Ee,
          ref: se
        }, s)
      ),
      disabled: Y,
      onVisibleChange: Te
    }, ve);
  }
  var Me = /* @__PURE__ */ r.createElement(xe.Item, T({
    role: "none"
  }, R, {
    component: "li",
    style: i,
    className: Ce(j, "".concat(j, "-").concat(N), t, $($($($({}, "".concat(j, "-open"), ce), "".concat(j, "-active"), we), "".concat(j, "-selected"), $e), "".concat(j, "-disabled"), Y)),
    onMouseEnter: fe,
    onMouseLeave: Le
  }), ve, !z && /* @__PURE__ */ r.createElement(Yr, {
    id: Ee,
    open: ce,
    keyPath: ue
  }, s));
  return be && (Me = be(Me, n, {
    selected: $e,
    active: we,
    open: ce,
    disabled: Y
  })), /* @__PURE__ */ r.createElement(ut, {
    onItemClick: Re,
    mode: N === "horizontal" ? "vertical" : N,
    itemIcon: Ie,
    expandIcon: F
  }, Me);
};
function Rt(e) {
  var n = e.eventKey, i = e.children, t = st(n), o = jt(i, t), a = St();
  r.useEffect(function() {
    if (a)
      return a.registerPath(n, t), function() {
        a.unregisterPath(n, t);
      };
  }, [t]);
  var l;
  return a ? l = o : l = /* @__PURE__ */ r.createElement(Zr, e, o), /* @__PURE__ */ r.createElement(Cn.Provider, {
    value: t
  }, l);
}
var Qr = ["className", "title", "eventKey", "children"], ea = ["children"], ta = function(n) {
  var i = n.className, t = n.title;
  n.eventKey;
  var o = n.children, a = U(n, Qr), l = r.useContext(pe), u = l.prefixCls, c = "".concat(u, "-item-group");
  return /* @__PURE__ */ r.createElement("li", T({
    role: "presentation"
  }, a, {
    onClick: function(p) {
      return p.stopPropagation();
    },
    className: Ce(c, i)
  }), /* @__PURE__ */ r.createElement("div", {
    role: "presentation",
    className: "".concat(c, "-title"),
    title: typeof t == "string" ? t : void 0
  }, t), /* @__PURE__ */ r.createElement("ul", {
    role: "group",
    className: "".concat(c, "-list")
  }, o));
};
function Pn(e) {
  var n = e.children, i = U(e, ea), t = st(i.eventKey), o = jt(n, t), a = St();
  return a ? o : /* @__PURE__ */ r.createElement(ta, In(i, ["warnKey"]), o);
}
function Nn(e) {
  var n = e.className, i = e.style, t = r.useContext(pe), o = t.prefixCls, a = St();
  return a ? null : /* @__PURE__ */ r.createElement("li", {
    role: "separator",
    className: Ce("".concat(o, "-item-divider"), n),
    style: i
  });
}
var na = ["label", "children", "key", "type"];
function Tt(e) {
  return (e || []).map(function(n, i) {
    if (n && Dt(n) === "object") {
      var t = n, o = t.label, a = t.children, l = t.key, u = t.type, c = U(t, na), s = l ?? "tmp-".concat(i);
      return a || u === "group" ? u === "group" ? /* @__PURE__ */ r.createElement(Pn, T({
        key: s
      }, c, {
        title: o
      }), Tt(a)) : /* @__PURE__ */ r.createElement(Rt, T({
        key: s
      }, c, {
        title: o
      }), Tt(a)) : u === "divider" ? /* @__PURE__ */ r.createElement(Nn, T({
        key: s
      }, c)) : /* @__PURE__ */ r.createElement(It, T({
        key: s
      }, c), o);
    }
    return null;
  }).filter(function(n) {
    return n;
  });
}
function ra(e, n, i) {
  var t = e;
  return n && (t = Tt(n)), jt(t, i);
}
var aa = ["prefixCls", "rootClassName", "style", "className", "tabIndex", "items", "children", "direction", "id", "mode", "inlineCollapsed", "disabled", "disabledOverflow", "subMenuOpenDelay", "subMenuCloseDelay", "forceSubMenuRender", "defaultOpenKeys", "openKeys", "activeKey", "defaultActiveFirst", "selectable", "multiple", "defaultSelectedKeys", "selectedKeys", "onSelect", "onDeselect", "inlineIndent", "motion", "defaultMotions", "triggerSubMenuAction", "builtinPlacements", "itemIcon", "expandIcon", "overflowedIndicator", "overflowedIndicatorPopupClassName", "getPopupContainer", "onClick", "onOpenChange", "onKeyDown", "openAnimation", "openTransitionName", "_internalRenderMenuItem", "_internalRenderSubMenuItem"], Ye = [], ia = /* @__PURE__ */ r.forwardRef(function(e, n) {
  var i, t = e, o = t.prefixCls, a = o === void 0 ? "rc-menu" : o, l = t.rootClassName, u = t.style, c = t.className, s = t.tabIndex, p = s === void 0 ? 0 : s, v = t.items, h = t.children, M = t.direction, g = t.id, P = t.mode, b = P === void 0 ? "vertical" : P, C = t.inlineCollapsed, S = t.disabled, d = t.disabledOverflow, m = t.subMenuOpenDelay, R = m === void 0 ? 0.1 : m, y = t.subMenuCloseDelay, I = y === void 0 ? 0.1 : y, D = t.forceSubMenuRender, N = t.defaultOpenKeys, V = t.openKeys, A = t.activeKey, z = t.defaultActiveFirst, k = t.selectable, q = k === void 0 ? !0 : k, B = t.multiple, Z = B === void 0 ? !1 : B, H = t.defaultSelectedKeys, Q = t.selectedKeys, W = t.onSelect, le = t.onDeselect, be = t.inlineIndent, he = be === void 0 ? 24 : be, ge = t.motion, ue = t.defaultMotions, j = t.triggerSubMenuAction, Y = j === void 0 ? "hover" : j, Se = t.builtinPlacements, se = t.itemIcon, Ie = t.expandIcon, F = t.overflowedIndicator, ee = F === void 0 ? "..." : F, ce = t.overflowedIndicatorPopupClassName, $e = t.getPopupContainer, Ne = t.onClick, ye = t.onOpenChange, _e = t.onKeyDown, Je = t.openAnimation, de = t.openTransitionName, Ae = t._internalRenderMenuItem, ke = t._internalRenderSubMenuItem, je = U(t, aa), fe = r.useMemo(function() {
    return ra(h, v, Ye);
  }, [h, v]), Le = r.useState(!1), we = _(Le, 2), Ke = we[0], te = we[1], Re = r.useRef(), Te = Ar(g), ne = M === "rtl";
  process.env.NODE_ENV !== "production" && We(!Je && !de, "`openAnimation` and `openTransitionName` is removed. Please use `motion` or `defaultMotion` instead.");
  var Ee = ht(N, {
    value: V,
    postState: function(x) {
      return x || Ye;
    }
  }), ve = _(Ee, 2), X = ve[0], me = ve[1], Me = function(x) {
    var w = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
    function ie() {
      me(x), ye == null || ye(x);
    }
    w ? fr(ie) : ie();
  }, re = r.useState(X), J = _(re, 2), Et = J[0], Ze = J[1], Ge = r.useRef(!1), ft = r.useMemo(function() {
    return (b === "inline" || b === "vertical") && C ? ["vertical", C] : [b, !1];
  }, [b, C]), De = _(ft, 2), He = De[0], Ve = De[1], Qe = He === "inline", et = r.useState(He), qe = _(et, 2), f = qe[0], E = qe[1], L = r.useState(Ve), ae = _(L, 2), ze = ae[0], _n = ae[1];
  r.useEffect(function() {
    E(He), _n(Ve), Ge.current && (Qe ? me(Et) : Me(Ye));
  }, [He, Ve]);
  var wn = r.useState(0), Gt = _(wn, 2), dt = Gt[0], Kn = Gt[1], Mt = dt >= fe.length - 1 || f !== "horizontal" || d;
  r.useEffect(function() {
    Qe && Ze(X);
  }, [X]), r.useEffect(function() {
    return Ge.current = !0, function() {
      Ge.current = !1;
    };
  }, []);
  var Fe = Or(), Ht = Fe.registerPath, qt = Fe.unregisterPath, Dn = Fe.refreshOverflowKeys, Bt = Fe.isSubPathKey, On = Fe.getKeyPath, Yt = Fe.getKeys, $n = Fe.getSubPathKeys, An = r.useMemo(function() {
    return {
      registerPath: Ht,
      unregisterPath: qt
    };
  }, [Ht, qt]), kn = r.useMemo(function() {
    return {
      isSubPathKey: Bt
    };
  }, [Bt]);
  r.useEffect(function() {
    Dn(Mt ? Ye : fe.slice(dt + 1).map(function(O) {
      return O.key;
    }));
  }, [dt, Mt]);
  var Ln = ht(A || z && ((i = fe[0]) === null || i === void 0 ? void 0 : i.key), {
    value: A
  }), Xt = _(Ln, 2), tt = Xt[0], xt = Xt[1], Tn = ot(function(O) {
    xt(O);
  }), Vn = ot(function() {
    xt(void 0);
  });
  sr(n, function() {
    return {
      list: Re.current,
      focus: function(x) {
        var w, ie = Yt(), oe = kt(ie, Te), mt = oe.elements, Pt = oe.key2element, Yn = oe.element2key, Qt = Ft(Re.current, mt), en = tt ?? (Qt[0] ? Yn.get(Qt[0]) : (w = fe.find(function(Xn) {
          return !Xn.props.disabled;
        })) === null || w === void 0 ? void 0 : w.key), nt = Pt.get(en);
        if (en && nt) {
          var Nt;
          nt == null || (Nt = nt.focus) === null || Nt === void 0 || Nt.call(nt, x);
        }
      }
    };
  });
  var zn = ht(H || [], {
    value: Q,
    // Legacy convert key to array
    postState: function(x) {
      return Array.isArray(x) ? x : x == null ? Ye : [x];
    }
  }), Jt = _(zn, 2), vt = Jt[0], Fn = Jt[1], Un = function(x) {
    if (q) {
      var w = x.key, ie = vt.includes(w), oe;
      Z ? ie ? oe = vt.filter(function(Pt) {
        return Pt !== w;
      }) : oe = [].concat(Ue(vt), [w]) : oe = [w], Fn(oe);
      var mt = K(K({}, x), {}, {
        selectedKeys: oe
      });
      ie ? le == null || le(mt) : W == null || W(mt);
    }
    !Z && X.length && f !== "inline" && Me(Ye);
  }, Wn = ot(function(O) {
    Ne == null || Ne(bt(O)), Un(O);
  }), Zt = ot(function(O, x) {
    var w = X.filter(function(oe) {
      return oe !== O;
    });
    if (x)
      w.push(O);
    else if (f !== "inline") {
      var ie = $n(O);
      w = w.filter(function(oe) {
        return !ie.has(oe);
      });
    }
    mn(X, w, !0) || Me(w, !0);
  }), jn = function(x, w) {
    var ie = w ?? !X.includes(x);
    Zt(x, ie);
  }, Gn = wr(f, tt, ne, Te, Re, Yt, On, xt, jn, _e);
  r.useEffect(function() {
    te(!0);
  }, []);
  var Hn = r.useMemo(function() {
    return {
      _internalRenderMenuItem: Ae,
      _internalRenderSubMenuItem: ke
    };
  }, [Ae, ke]), qn = f !== "horizontal" || d ? fe : (
    // Need wrap for overflow dropdown that do not response for open
    fe.map(function(O, x) {
      return (
        // Always wrap provider to avoid sub node re-mount
        /* @__PURE__ */ r.createElement(ut, {
          key: O.key,
          overflowDisabled: x > dt
        }, O)
      );
    })
  ), Bn = /* @__PURE__ */ r.createElement(xe, T({
    id: g,
    ref: Re,
    prefixCls: "".concat(a, "-overflow"),
    component: "ul",
    itemComponent: It,
    className: Ce(a, "".concat(a, "-root"), "".concat(a, "-").concat(f), c, $($({}, "".concat(a, "-inline-collapsed"), ze), "".concat(a, "-rtl"), ne), l),
    dir: M,
    style: u,
    role: "menu",
    tabIndex: p,
    data: qn,
    renderRawItem: function(x) {
      return x;
    },
    renderRawRest: function(x) {
      var w = x.length, ie = w ? fe.slice(-w) : null;
      return /* @__PURE__ */ r.createElement(Rt, {
        eventKey: Lt,
        title: ee,
        disabled: Mt,
        internalPopupClose: w === 0,
        popupClassName: ce
      }, ie);
    },
    maxCount: f !== "horizontal" || d ? xe.INVALIDATE : xe.RESPONSIVE,
    ssr: "full",
    "data-menu-list": !0,
    onVisibleChange: function(x) {
      Kn(x);
    },
    onKeyDown: Gn
  }, je));
  return /* @__PURE__ */ r.createElement(zt.Provider, {
    value: Hn
  }, /* @__PURE__ */ r.createElement(pn.Provider, {
    value: Te
  }, /* @__PURE__ */ r.createElement(ut, {
    prefixCls: a,
    rootClassName: l,
    mode: f,
    openKeys: X,
    rtl: ne,
    disabled: S,
    motion: Ke ? ge : null,
    defaultMotions: Ke ? ue : null,
    activeKey: tt,
    onActive: Tn,
    onInactive: Vn,
    selectedKeys: vt,
    inlineIndent: he,
    subMenuOpenDelay: R,
    subMenuCloseDelay: I,
    forceSubMenuRender: D,
    builtinPlacements: Se,
    triggerSubMenuAction: Y,
    getPopupContainer: $e,
    itemIcon: se,
    expandIcon: Ie,
    onItemClick: Wn,
    onOpenChange: Zt
  }, /* @__PURE__ */ r.createElement(bn.Provider, {
    value: kn
  }, Bn), /* @__PURE__ */ r.createElement("div", {
    style: {
      display: "none"
    },
    "aria-hidden": !0
  }, /* @__PURE__ */ r.createElement(yn.Provider, {
    value: An
  }, fe)))));
}), ct = ia;
ct.Item = It;
ct.SubMenu = Rt;
ct.ItemGroup = Pn;
ct.Divider = Nn;
const fa = (e) => /* @__PURE__ */ Vt(
  ct,
  {
    selectable: !1,
    ...e
  }
), da = (e) => /* @__PURE__ */ Vt(
  Rt,
  {
    ...e,
    title: e.title
  }
), va = (e) => /* @__PURE__ */ Vt(It, { ...e, children: e.label || e.title || e.children });
export {
  Nn as Divider,
  fa as Menu,
  va as MenuItem,
  Pn as MenuItemGroup,
  da as SubMenu
};
