import { m as ue, b as se, g as ce, R as Z, o as fe, d as le, e as de } from "./mobx.esm-zRz8Rcao.js";
import O, { useState as pe, forwardRef as V, memo as I, Component as J, PureComponent as Q } from "react";
import { unstable_batchedUpdates as ve } from "react-dom";
if (!pe)
  throw new Error("mobx-react-lite requires React with Hooks support");
if (!ue)
  throw new Error("mobx-react-lite@3 requires mobx at least version 6 to be available");
function be(e) {
  e();
}
function he(e) {
  e || (e = be, process.env.NODE_ENV !== "production" && console.warn("[MobX] Failed to get unstable_batched updates from react-dom / react-native")), se({ reactionScheduler: e });
}
function ye(e) {
  return ce(e);
}
var me = 1e4, Se = 1e4, we = (
  /** @class */
  function() {
    function e(r) {
      var t = this;
      Object.defineProperty(this, "finalize", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: r
      }), Object.defineProperty(this, "registrations", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: /* @__PURE__ */ new Map()
      }), Object.defineProperty(this, "sweepTimeout", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: void 0
      }), Object.defineProperty(this, "sweep", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: function(n) {
          n === void 0 && (n = me), clearTimeout(t.sweepTimeout), t.sweepTimeout = void 0;
          var o = Date.now();
          t.registrations.forEach(function(a, i) {
            o - a.registeredAt >= n && (t.finalize(a.value), t.registrations.delete(i));
          }), t.registrations.size > 0 && t.scheduleSweep();
        }
      }), Object.defineProperty(this, "finalizeAllImmediately", {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: function() {
          t.sweep(0);
        }
      });
    }
    return Object.defineProperty(e.prototype, "register", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: function(r, t, n) {
        this.registrations.set(n, {
          value: t,
          registeredAt: Date.now()
        }), this.scheduleSweep();
      }
    }), Object.defineProperty(e.prototype, "unregister", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: function(r) {
        this.registrations.delete(r);
      }
    }), Object.defineProperty(e.prototype, "scheduleSweep", {
      enumerable: !1,
      configurable: !0,
      writable: !0,
      value: function() {
        this.sweepTimeout === void 0 && (this.sweepTimeout = setTimeout(this.sweep, Se));
      }
    }), e;
  }()
), ge = typeof FinalizationRegistry < "u" ? FinalizationRegistry : we, _ = new ge(function(e) {
  var r;
  (r = e.reaction) === null || r === void 0 || r.dispose(), e.reaction = null;
}), A = { exports: {} }, P = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var F;
function Ee() {
  if (F)
    return P;
  F = 1;
  var e = O;
  function r(f, d) {
    return f === d && (f !== 0 || 1 / f === 1 / d) || f !== f && d !== d;
  }
  var t = typeof Object.is == "function" ? Object.is : r, n = e.useState, o = e.useEffect, a = e.useLayoutEffect, i = e.useDebugValue;
  function u(f, d) {
    var v = d(), S = n({ inst: { value: v, getSnapshot: d } }), b = S[0].inst, w = S[1];
    return a(function() {
      b.value = v, b.getSnapshot = d, s(b) && w({ inst: b });
    }, [f, v, d]), o(function() {
      return s(b) && w({ inst: b }), f(function() {
        s(b) && w({ inst: b });
      });
    }, [f]), i(v), v;
  }
  function s(f) {
    var d = f.getSnapshot;
    f = f.value;
    try {
      var v = d();
      return !t(f, v);
    } catch {
      return !0;
    }
  }
  function m(f, d) {
    return d();
  }
  var D = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? m : u;
  return P.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : D, P;
}
var j = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $;
function Oe() {
  return $ || ($ = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = O, r = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function t(l) {
      {
        for (var c = arguments.length, h = new Array(c > 1 ? c - 1 : 0), p = 1; p < c; p++)
          h[p - 1] = arguments[p];
        n("error", l, h);
      }
    }
    function n(l, c, h) {
      {
        var p = r.ReactDebugCurrentFrame, g = p.getStackAddendum();
        g !== "" && (c += "%s", h = h.concat([g]));
        var E = h.map(function(y) {
          return String(y);
        });
        E.unshift("Warning: " + c), Function.prototype.apply.call(console[l], console, E);
      }
    }
    function o(l, c) {
      return l === c && (l !== 0 || 1 / l === 1 / c) || l !== l && c !== c;
    }
    var a = typeof Object.is == "function" ? Object.is : o, i = e.useState, u = e.useEffect, s = e.useLayoutEffect, m = e.useDebugValue, D = !1, f = !1;
    function d(l, c, h) {
      D || e.startTransition !== void 0 && (D = !0, t("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var p = c();
      if (!f) {
        var g = c();
        a(p, g) || (t("The result of getSnapshot should be cached to avoid an infinite loop"), f = !0);
      }
      var E = i({
        inst: {
          value: p,
          getSnapshot: c
        }
      }), y = E[0].inst, T = E[1];
      return s(function() {
        y.value = p, y.getSnapshot = c, v(y) && T({
          inst: y
        });
      }, [l, p, c]), u(function() {
        v(y) && T({
          inst: y
        });
        var ae = function() {
          v(y) && T({
            inst: y
          });
        };
        return l(ae);
      }, [l]), m(p), p;
    }
    function v(l) {
      var c = l.getSnapshot, h = l.value;
      try {
        var p = c();
        return !a(h, p);
      } catch {
        return !0;
      }
    }
    function S(l, c, h) {
      return c();
    }
    var b = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", w = !b, oe = w ? S : d, ie = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : oe;
    j.useSyncExternalStore = ie, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), j;
}
process.env.NODE_ENV === "production" ? A.exports = Ee() : A.exports = Oe();
var _e = A.exports;
function B(e) {
  e.reaction = new Z("observer".concat(e.name), function() {
    var r;
    e.stateVersion = Symbol(), (r = e.onStoreChange) === null || r === void 0 || r.call(e);
  });
}
function Re(e, r) {
  r === void 0 && (r = "observed");
  var t = O.useRef(null);
  if (!t.current) {
    var n = {
      reaction: null,
      onStoreChange: null,
      stateVersion: Symbol(),
      name: r,
      subscribe: function(u) {
        return _.unregister(n), n.onStoreChange = u, n.reaction || (B(n), n.stateVersion = Symbol()), function() {
          var s;
          n.onStoreChange = null, (s = n.reaction) === null || s === void 0 || s.dispose(), n.reaction = null;
        };
      },
      getSnapshot: function() {
        return n.stateVersion;
      }
    };
    t.current = n;
  }
  var o = t.current;
  o.reaction || (B(o), _.register(t, o, o)), O.useDebugValue(o.reaction, ye), _e.useSyncExternalStore(
    // Both of these must be stable, otherwise it would keep resubscribing every render.
    o.subscribe,
    o.getSnapshot,
    o.getSnapshot
  );
  var a, i;
  if (o.reaction.track(function() {
    try {
      a = e();
    } catch (u) {
      i = u;
    }
  }), i)
    throw i;
  return a;
}
var L, M, q = !0, ee = typeof Symbol == "function" && Symbol.for, De = (M = (L = Object.getOwnPropertyDescriptor(function() {
}, "name")) === null || L === void 0 ? void 0 : L.configurable) !== null && M !== void 0 ? M : !1, z = ee ? Symbol.for("react.forward_ref") : typeof V == "function" && V(function(e) {
  return null;
}).$$typeof, G = ee ? Symbol.for("react.memo") : typeof I == "function" && I(function(e) {
  return null;
}).$$typeof;
function xe(e, r) {
  var t;
  if (process.env.NODE_ENV !== "production" && q && r && (q = !1, console.warn("[mobx-react-lite] `observer(fn, { forwardRef: true })` is deprecated, use `observer(React.forwardRef(fn))`")), G && e.$$typeof === G)
    throw new Error("[mobx-react-lite] You are trying to use `observer` on a function component wrapped in either another `observer` or `React.memo`. The observer already applies 'React.memo' for you.");
  var n = (t = r == null ? void 0 : r.forwardRef) !== null && t !== void 0 ? t : !1, o = e, a = e.displayName || e.name;
  if (z && e.$$typeof === z && (n = !0, o = e.render, typeof o != "function"))
    throw new Error("[mobx-react-lite] `render` property of ForwardRef was not a function");
  var i = function(u, s) {
    return Re(function() {
      return o(u, s);
    }, a);
  };
  return i.displayName = e.displayName, De && Object.defineProperty(i, "name", {
    value: e.name,
    writable: !0,
    configurable: !0
  }), e.contextTypes && (i.contextTypes = e.contextTypes), n && (i = V(i)), i = I(i), Pe(e, i), process.env.NODE_ENV !== "production" && Object.defineProperty(i, "contextTypes", {
    set: function() {
      var u, s;
      throw new Error("[mobx-react-lite] `".concat(this.displayName || ((u = this.type) === null || u === void 0 ? void 0 : u.displayName) || ((s = this.type) === null || s === void 0 ? void 0 : s.name) || "Component", ".contextTypes` must be set before applying `observer`."));
    }
  }), i;
}
var Te = {
  $$typeof: !0,
  render: !0,
  compare: !0,
  type: !0,
  // Don't redefine `displayName`,
  // it's defined as getter-setter pair on `memo` (see #3192).
  displayName: !0
};
function Pe(e, r) {
  Object.keys(e).forEach(function(t) {
    Te[t] || Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(e, t));
  });
}
process.env.NODE_ENV;
var N;
he(ve);
N = _.finalizeAllImmediately;
function je(e, r) {
  if (C(e, r))
    return !0;
  if (typeof e != "object" || e === null || typeof r != "object" || r === null)
    return !1;
  var t = Object.keys(e), n = Object.keys(r);
  if (t.length !== n.length)
    return !1;
  for (var o = 0; o < t.length; o++)
    if (!Object.hasOwnProperty.call(r, t[o]) || !C(e[t[o]], r[t[o]]))
      return !1;
  return !0;
}
function C(e, r) {
  return e === r ? e !== 0 || 1 / e === 1 / r : e !== e && r !== r;
}
var k = /* @__PURE__ */ Symbol("patchMixins"), re = /* @__PURE__ */ Symbol("patchedDefinition");
function Le(e, r) {
  var t = e[k] = e[k] || {}, n = t[r] = t[r] || {};
  return n.locks = n.locks || 0, n.methods = n.methods || [], n;
}
function W(e, r) {
  for (var t = this, n = arguments.length, o = new Array(n > 2 ? n - 2 : 0), a = 2; a < n; a++)
    o[a - 2] = arguments[a];
  r.locks++;
  try {
    var i;
    return e != null && (i = e.apply(this, o)), i;
  } finally {
    r.locks--, r.locks === 0 && r.methods.forEach(function(u) {
      u.apply(t, o);
    });
  }
}
function H(e, r) {
  var t = function() {
    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++)
      a[i] = arguments[i];
    W.call.apply(W, [this, e, r].concat(a));
  };
  return t;
}
function Me(e, r, t) {
  var n = Le(e, r);
  n.methods.indexOf(t) < 0 && n.methods.push(t);
  var o = Object.getOwnPropertyDescriptor(e, r);
  if (!(o && o[re])) {
    var a = e[r], i = te(e, r, o ? o.enumerable : void 0, n, a);
    Object.defineProperty(e, r, i);
  }
}
function te(e, r, t, n, o) {
  var a, i = H(o, n);
  return a = {}, a[re] = !0, a.get = function() {
    return i;
  }, a.set = function(s) {
    if (this === e)
      i = H(s, n);
    else {
      var m = te(this, r, t, n, s);
      Object.defineProperty(this, r, m);
    }
  }, a.configurable = !0, a.enumerable = t, a;
}
var K = /* @__PURE__ */ Symbol("ObserverAdministration"), Y = /* @__PURE__ */ Symbol("isMobXReactObserver"), ne;
process.env.NODE_ENV !== "production" && (ne = {
  props: /* @__PURE__ */ U("props"),
  state: /* @__PURE__ */ U("state"),
  context: /* @__PURE__ */ U("context")
});
function R(e) {
  var r;
  return (r = e[K]) != null ? r : e[K] = {
    reaction: null,
    mounted: !1,
    reactionInvalidatedBeforeMount: !1,
    forceUpdate: null,
    name: x(e.constructor),
    state: void 0,
    props: void 0,
    context: void 0
  };
}
function Ne(e) {
  var r = e.prototype;
  if (e[Y]) {
    var t = x(e);
    throw new Error("The provided component class (" + t + ") has already been declared as an observer component.");
  } else
    e[Y] = !0;
  if (r.componentWillReact)
    throw new Error("The componentWillReact life-cycle event is no longer supported");
  if (e.__proto__ !== Q) {
    if (!r.shouldComponentUpdate)
      r.shouldComponentUpdate = X;
    else if (r.shouldComponentUpdate !== X)
      throw new Error("It is not allowed to use shouldComponentUpdate in observer based components.");
  }
  process.env.NODE_ENV !== "production" && Object.defineProperties(r, ne);
  var n = r.render;
  if (typeof n != "function") {
    var o = x(e);
    throw new Error("[mobx-react] class component (" + o + ") is missing `render` method.\n`observer` requires `render` being a function defined on prototype.\n`render = () => {}` or `render = function() {}` is not supported.");
  }
  r.render = function() {
    return Object.defineProperty(this, "render", {
      // There is no safe way to replace render, therefore it's forbidden.
      configurable: !1,
      writable: !1,
      value: Ue.call(this, n)
    }), this.render();
  };
  var a = r.componentDidMount;
  return r.componentDidMount = function() {
    var i = this;
    if (process.env.NODE_ENV !== "production" && this.componentDidMount !== Object.getPrototypeOf(this).componentDidMount) {
      var u = x(e);
      throw new Error("[mobx-react] `observer(" + u + ").componentDidMount` must be defined on prototype.\n`componentDidMount = () => {}` or `componentDidMount = function() {}` is not supported.");
    }
    var s = R(this);
    return s.mounted = !0, _.unregister(this), s.forceUpdate = function() {
      return i.forceUpdate();
    }, (!s.reaction || s.reactionInvalidatedBeforeMount) && s.forceUpdate(), a == null ? void 0 : a.apply(this, arguments);
  }, Me(r, "componentWillUnmount", function() {
    var i, u = R(this);
    (i = u.reaction) == null || i.dispose(), u.reaction = null, u.forceUpdate = null, u.mounted = !1, u.reactionInvalidatedBeforeMount = !1;
  }), e;
}
function x(e) {
  return e.displayName || e.name || "<component>";
}
function Ue(e) {
  var r = e.bind(this), t = R(this);
  function n() {
    t.reaction || (t.reaction = Ve(t), t.mounted || _.register(this, t, this));
    var o = void 0, a = void 0;
    if (t.reaction.track(function() {
      try {
        a = le(!1, r);
      } catch (i) {
        o = i;
      }
    }), o)
      throw o;
    return a;
  }
  return n;
}
function Ve(e) {
  return new Z(e.name + ".render()", function() {
    if (!e.mounted) {
      e.reactionInvalidatedBeforeMount = !0;
      return;
    }
    try {
      e.forceUpdate == null || e.forceUpdate();
    } catch {
      var r;
      (r = e.reaction) == null || r.dispose(), e.reaction = null;
    }
  });
}
function X(e, r) {
  return this.state !== r ? !0 : !je(this.props, e);
}
function U(e) {
  return {
    configurable: !0,
    enumerable: !0,
    get: function() {
      var t = R(this), n = de().trackingDerivation;
      if (n && n !== t.reaction)
        throw new Error('[mobx-react] Cannot read "' + t.name + "." + e + `" in a reactive context, as it isn't observable.
                    Please use component lifecycle method to copy the value into a local observable first.
                    See https://github.com/mobxjs/mobx/blob/main/packages/mobx-react/README.md#note-on-using-props-and-state-in-derivations`);
      return t[e];
    },
    set: function(t) {
      R(this)[e] = t;
    }
  };
}
function $e(e, r) {
  if (r && r.kind !== "class")
    throw new Error("The @observer decorator can be used on classes only");
  return e.isMobxInjector === !0 && console.warn("Mobx observer: You are trying to use `observer` on a component that already has `inject`. Please apply `observer` before applying `inject`"), Object.prototype.isPrototypeOf.call(J, e) || Object.prototype.isPrototypeOf.call(Q, e) ? Ne(e) : xe(e);
}
O.version.split(".")[0];
if (!J)
  throw new Error("mobx-react requires React to be available");
if (!fe)
  throw new Error("mobx-react requires mobx to be available");
export {
  $e as o
};
