var qn = {
  0: "Invalid value for configuration 'enforceActions', expected 'never', 'always' or 'observed'",
  1: function(t, r) {
    return "Cannot apply '" + t + "' to '" + r.toString() + "': Field not found.";
  },
  /*
  2(prop) {
      return `invalid decorator for '${prop.toString()}'`
  },
  3(prop) {
      return `Cannot decorate '${prop.toString()}': action can only be used on properties with a function value.`
  },
  4(prop) {
      return `Cannot decorate '${prop.toString()}': computed can only be used on getter properties.`
  },
  */
  5: "'keys()' can only be used on observable objects, arrays, sets and maps",
  6: "'values()' can only be used on observable objects, arrays, sets and maps",
  7: "'entries()' can only be used on observable objects, arrays and maps",
  8: "'set()' can only be used on observable objects, arrays and maps",
  9: "'remove()' can only be used on observable objects, arrays and maps",
  10: "'has()' can only be used on observable objects, arrays and maps",
  11: "'get()' can only be used on observable objects, arrays and maps",
  12: "Invalid annotation",
  13: "Dynamic observable objects cannot be frozen. If you're passing observables to 3rd party component/function that calls Object.freeze, pass copy instead: toJS(observable)",
  14: "Intercept handlers should return nothing or a change object",
  15: "Observable arrays cannot be frozen. If you're passing observables to 3rd party component/function that calls Object.freeze, pass copy instead: toJS(observable)",
  16: "Modification exception: the internal structure of an observable array was changed.",
  17: function(t, r) {
    return "[mobx.array] Index out of bounds, " + t + " is larger than " + r;
  },
  18: "mobx.map requires Map polyfill for the current browser. Check babel-polyfill or core-js/es6/map.js",
  19: function(t) {
    return "Cannot initialize from classes that inherit from Map: " + t.constructor.name;
  },
  20: function(t) {
    return "Cannot initialize map from " + t;
  },
  21: function(t) {
    return "Cannot convert to map from '" + t + "'";
  },
  22: "mobx.set requires Set polyfill for the current browser. Check babel-polyfill or core-js/es6/set.js",
  23: "It is not possible to get index atoms from arrays",
  24: function(t) {
    return "Cannot obtain administration from " + t;
  },
  25: function(t, r) {
    return "the entry '" + t + "' does not exist in the observable map '" + r + "'";
  },
  26: "please specify a property",
  27: function(t, r) {
    return "no observable property '" + t.toString() + "' found on the observable object '" + r + "'";
  },
  28: function(t) {
    return "Cannot obtain atom from " + t;
  },
  29: "Expecting some object",
  30: "invalid action stack. did you forget to finish an action?",
  31: "missing option for computed: get",
  32: function(t, r) {
    return "Cycle detected in computation " + t + ": " + r;
  },
  33: function(t) {
    return "The setter of computed value '" + t + "' is trying to update itself. Did you intend to update an _observable_ value, instead of the computed property?";
  },
  34: function(t) {
    return "[ComputedValue '" + t + "'] It is not possible to assign a new value to a computed value.";
  },
  35: "There are multiple, different versions of MobX active. Make sure MobX is loaded only once or use `configure({ isolateGlobalState: true })`",
  36: "isolateGlobalState should be called before MobX is running any reactions",
  37: function(t) {
    return "[mobx] `observableArray." + t + "()` mutates the array in-place, which is not allowed inside a derivation. Use `array.slice()." + t + "()` instead";
  },
  38: "'ownKeys()' can only be used on observable objects",
  39: "'defineProperty()' can only be used on observable objects"
}, zn = process.env.NODE_ENV !== "production" ? qn : {};
function l(e) {
  for (var t = arguments.length, r = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++)
    r[n - 1] = arguments[n];
  if (process.env.NODE_ENV !== "production") {
    var i = typeof e == "string" ? e : zn[e];
    throw typeof i == "function" && (i = i.apply(null, r)), new Error("[MobX] " + i);
  }
  throw new Error(typeof e == "number" ? "[MobX] minified error nr: " + e + (r.length ? " " + r.map(String).join(",") : "") + ". Find the full error at: https://github.com/mobxjs/mobx/blob/main/packages/mobx/src/errors.ts" : "[MobX] " + e);
}
var Xn = {};
function Nt() {
  return typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : Xn;
}
var Yt = Object.assign, Ke = Object.getOwnPropertyDescriptor, K = Object.defineProperty, Je = Object.prototype, Ge = [];
Object.freeze(Ge);
var Jt = {};
Object.freeze(Jt);
var kn = typeof Proxy < "u", Wn = /* @__PURE__ */ Object.toString();
function Zt() {
  kn || l(process.env.NODE_ENV !== "production" ? "`Proxy` objects are not available in the current environment. Please configure MobX to enable a fallback implementation.`" : "Proxy not available");
}
function me(e) {
  process.env.NODE_ENV !== "production" && c.verifyProxies && l("MobX is currently configured to be able to run in ES5 mode, but in ES5 MobX won't be able to " + e);
}
function L() {
  return ++c.mobxGuid;
}
function At(e) {
  var t = !1;
  return function() {
    if (!t)
      return t = !0, e.apply(this, arguments);
  };
}
var ce = function() {
};
function g(e) {
  return typeof e == "function";
}
function ee(e) {
  var t = typeof e;
  switch (t) {
    case "string":
    case "symbol":
    case "number":
      return !0;
  }
  return !1;
}
function Ze(e) {
  return e !== null && typeof e == "object";
}
function F(e) {
  if (!Ze(e))
    return !1;
  var t = Object.getPrototypeOf(e);
  if (t == null)
    return !0;
  var r = Object.hasOwnProperty.call(t, "constructor") && t.constructor;
  return typeof r == "function" && r.toString() === Wn;
}
function Qt(e) {
  var t = e == null ? void 0 : e.constructor;
  return t ? t.name === "GeneratorFunction" || t.displayName === "GeneratorFunction" : !1;
}
function Qe(e, t, r) {
  K(e, t, {
    enumerable: !1,
    writable: !0,
    configurable: !0,
    value: r
  });
}
function en(e, t, r) {
  K(e, t, {
    enumerable: !1,
    writable: !1,
    configurable: !0,
    value: r
  });
}
function oe(e, t) {
  var r = "isMobX" + e;
  return t.prototype[r] = !0, function(n) {
    return Ze(n) && n[r] === !0;
  };
}
function ve(e) {
  return e instanceof Map;
}
function Se(e) {
  return e instanceof Set;
}
var tn = typeof Object.getOwnPropertySymbols < "u";
function Hn(e) {
  var t = Object.keys(e);
  if (!tn)
    return t;
  var r = Object.getOwnPropertySymbols(e);
  return r.length ? [].concat(t, r.filter(function(n) {
    return Je.propertyIsEnumerable.call(e, n);
  })) : t;
}
var et = typeof Reflect < "u" && Reflect.ownKeys ? Reflect.ownKeys : tn ? function(e) {
  return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e));
} : (
  /* istanbul ignore next */
  Object.getOwnPropertyNames
);
function lt(e) {
  return typeof e == "string" ? e : typeof e == "symbol" ? e.toString() : new String(e).toString();
}
function nn(e) {
  return e === null ? null : typeof e == "object" ? "" + e : e;
}
function P(e, t) {
  return Je.hasOwnProperty.call(e, t);
}
var Yn = Object.getOwnPropertyDescriptors || function(t) {
  var r = {};
  return et(t).forEach(function(n) {
    r[n] = Ke(t, n);
  }), r;
};
function Bt(e, t) {
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, Qn(n.key), n);
  }
}
function St(e, t, r) {
  return t && Bt(e.prototype, t), r && Bt(e, r), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function X() {
  return X = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, X.apply(this, arguments);
}
function rn(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, dt(e, t);
}
function dt(e, t) {
  return dt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(n, i) {
    return n.__proto__ = i, n;
  }, dt(e, t);
}
function Me(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function Jn(e, t) {
  if (e) {
    if (typeof e == "string")
      return Lt(e, t);
    var r = Object.prototype.toString.call(e).slice(8, -1);
    if (r === "Object" && e.constructor && (r = e.constructor.name), r === "Map" || r === "Set")
      return Array.from(e);
    if (r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
      return Lt(e, t);
  }
}
function Lt(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var r = 0, n = new Array(t); r < t; r++)
    n[r] = e[r];
  return n;
}
function fe(e, t) {
  var r = typeof Symbol < "u" && e[Symbol.iterator] || e["@@iterator"];
  if (r)
    return (r = r.call(e)).next.bind(r);
  if (Array.isArray(e) || (r = Jn(e)) || t && e && typeof e.length == "number") {
    r && (e = r);
    var n = 0;
    return function() {
      return n >= e.length ? {
        done: !0
      } : {
        done: !1,
        value: e[n++]
      };
    };
  }
  throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Zn(e, t) {
  if (typeof e != "object" || e === null)
    return e;
  var r = e[Symbol.toPrimitive];
  if (r !== void 0) {
    var n = r.call(e, t || "default");
    if (typeof n != "object")
      return n;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function Qn(e) {
  var t = Zn(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
var y = /* @__PURE__ */ Symbol("mobx-stored-annotations");
function G(e) {
  function t(r, n) {
    if (we(n))
      return e.decorate_20223_(r, n);
    he(r, n, e);
  }
  return Object.assign(t, e);
}
function he(e, t, r) {
  if (P(e, y) || Qe(e, y, X({}, e[y])), process.env.NODE_ENV !== "production" && qe(r) && !P(e[y], t)) {
    var n = e.constructor.name + ".prototype." + t.toString();
    l("'" + n + "' is decorated with 'override', but no such decorated member was found on prototype.");
  }
  er(e, r, t), qe(r) || (e[y][t] = r);
}
function er(e, t, r) {
  if (process.env.NODE_ENV !== "production" && !qe(t) && P(e[y], r)) {
    var n = e.constructor.name + ".prototype." + r.toString(), i = e[y][r].annotationType_, o = t.annotationType_;
    l("Cannot apply '@" + o + "' to '" + n + "':" + (`
The field is already decorated with '@` + i + "'.") + `
Re-decorating fields is not allowed.
Use '@override' decorator for methods overridden by subclass.`);
  }
}
function tr(e) {
  return P(e, y) || Qe(e, y, X({}, e[y])), e[y];
}
function we(e) {
  return typeof e == "object" && typeof e.kind == "string";
}
function tt(e, t) {
  process.env.NODE_ENV !== "production" && !t.includes(e.kind) && l("The decorator applied to '" + String(e.name) + "' cannot be used on a " + e.kind + " element");
}
var _ = /* @__PURE__ */ Symbol("mobx administration"), De = /* @__PURE__ */ function() {
  function e(r) {
    r === void 0 && (r = process.env.NODE_ENV !== "production" ? "Atom@" + L() : "Atom"), this.name_ = void 0, this.isPendingUnobservation_ = !1, this.isBeingObserved_ = !1, this.observers_ = /* @__PURE__ */ new Set(), this.diffValue_ = 0, this.lastAccessedBy_ = 0, this.lowestObserverState_ = h.NOT_TRACKING_, this.onBOL = void 0, this.onBUOL = void 0, this.name_ = r;
  }
  var t = e.prototype;
  return t.onBO = function() {
    this.onBOL && this.onBOL.forEach(function(n) {
      return n();
    });
  }, t.onBUO = function() {
    this.onBUOL && this.onBUOL.forEach(function(n) {
      return n();
    });
  }, t.reportObserved = function() {
    return En(this);
  }, t.reportChanged = function() {
    j(), Nn(this), x();
  }, t.toString = function() {
    return this.name_;
  }, e;
}(), wt = /* @__PURE__ */ oe("Atom", De);
function on(e, t, r) {
  t === void 0 && (t = ce), r === void 0 && (r = ce);
  var n = new De(e);
  return t !== ce && hi(n, t), r !== ce && jn(n, r), n;
}
function nr(e, t) {
  return e === t;
}
function rr(e, t) {
  return Rt(e, t);
}
function ir(e, t) {
  return Rt(e, t, 1);
}
function or(e, t) {
  return Object.is ? Object.is(e, t) : e === t ? e !== 0 || 1 / e === 1 / t : e !== e && t !== t;
}
var Fe = {
  identity: nr,
  structural: rr,
  default: or,
  shallow: ir
};
function te(e, t, r) {
  return Ne(e) ? e : Array.isArray(e) ? m.array(e, {
    name: r
  }) : F(e) ? m.object(e, void 0, {
    name: r
  }) : ve(e) ? m.map(e, {
    name: r
  }) : Se(e) ? m.set(e, {
    name: r
  }) : typeof e == "function" && !je(e) && !Ee(e) ? Qt(e) ? de(e) : ye(r, e) : e;
}
function sr(e, t, r) {
  if (e == null || _e(e) || Te(e) || k(e) || pe(e))
    return e;
  if (Array.isArray(e))
    return m.array(e, {
      name: r,
      deep: !1
    });
  if (F(e))
    return m.object(e, void 0, {
      name: r,
      deep: !1
    });
  if (ve(e))
    return m.map(e, {
      name: r,
      deep: !1
    });
  if (Se(e))
    return m.set(e, {
      name: r,
      deep: !1
    });
  process.env.NODE_ENV !== "production" && l("The shallow modifier / decorator can only used in combination with arrays, objects, maps and sets");
}
function nt(e) {
  return e;
}
function ar(e, t) {
  return process.env.NODE_ENV !== "production" && Ne(e) && l("observable.struct should not be used with observable values"), Rt(e, t) ? t : e;
}
var ur = "override";
function qe(e) {
  return e.annotationType_ === ur;
}
function Ve(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: cr,
    extend_: fr,
    decorate_20223_: lr
  };
}
function cr(e, t, r, n) {
  var i;
  if ((i = this.options_) != null && i.bound)
    return this.extend_(e, t, r, !1) === null ? 0 : 1;
  if (n === e.target_)
    return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if (je(r.value))
    return 1;
  var o = sn(e, this, t, r, !1);
  return K(n, t, o), 2;
}
function fr(e, t, r, n) {
  var i = sn(e, this, t, r);
  return e.defineProperty_(t, i, n);
}
function lr(e, t) {
  process.env.NODE_ENV !== "production" && tt(t, ["method", "field"]);
  var r = t.kind, n = t.name, i = t.addInitializer, o = this, s = function(f) {
    var d, v, p, E;
    return ne((d = (v = o.options_) == null ? void 0 : v.name) != null ? d : n.toString(), f, (p = (E = o.options_) == null ? void 0 : E.autoAction) != null ? p : !1);
  };
  if (r == "field") {
    i(function() {
      he(this, n, o);
    });
    return;
  }
  if (r == "method") {
    var a;
    return je(e) || (e = s(e)), (a = this.options_) != null && a.bound && i(function() {
      var u = this, f = u[n].bind(u);
      f.isMobxAction = !0, u[n] = f;
    }), e;
  }
  l("Cannot apply '" + o.annotationType_ + "' to '" + String(n) + "' (kind: " + r + "):" + (`
'` + o.annotationType_ + "' can only be used on properties with a function value."));
}
function dr(e, t, r, n) {
  var i = t.annotationType_, o = n.value;
  process.env.NODE_ENV !== "production" && !g(o) && l("Cannot apply '" + i + "' to '" + e.name_ + "." + r.toString() + "':" + (`
'` + i + "' can only be used on properties with a function value."));
}
function sn(e, t, r, n, i) {
  var o, s, a, u, f, d, v;
  i === void 0 && (i = c.safeDescriptors), dr(e, t, r, n);
  var p = n.value;
  if ((o = t.options_) != null && o.bound) {
    var E;
    p = p.bind((E = e.proxy_) != null ? E : e.target_);
  }
  return {
    value: ne(
      (s = (a = t.options_) == null ? void 0 : a.name) != null ? s : r.toString(),
      p,
      (u = (f = t.options_) == null ? void 0 : f.autoAction) != null ? u : !1,
      // https://github.com/mobxjs/mobx/discussions/3140
      (d = t.options_) != null && d.bound ? (v = e.proxy_) != null ? v : e.target_ : void 0
    ),
    // Non-configurable for classes
    // prevents accidental field redefinition in subclass
    configurable: i ? e.isPlainObject_ : !0,
    // https://github.com/mobxjs/mobx/pull/2641#issuecomment-737292058
    enumerable: !1,
    // Non-obsevable, therefore non-writable
    // Also prevents rewriting in subclass constructor
    writable: !i
  };
}
function an(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: _r,
    extend_: vr,
    decorate_20223_: hr
  };
}
function _r(e, t, r, n) {
  var i;
  if (n === e.target_)
    return this.extend_(e, t, r, !1) === null ? 0 : 2;
  if ((i = this.options_) != null && i.bound && (!P(e.target_, t) || !Ee(e.target_[t])) && this.extend_(e, t, r, !1) === null)
    return 0;
  if (Ee(r.value))
    return 1;
  var o = un(e, this, t, r, !1, !1);
  return K(n, t, o), 2;
}
function vr(e, t, r, n) {
  var i, o = un(e, this, t, r, (i = this.options_) == null ? void 0 : i.bound);
  return e.defineProperty_(t, o, n);
}
function hr(e, t) {
  var r;
  process.env.NODE_ENV !== "production" && tt(t, ["method"]);
  var n = t.name, i = t.addInitializer;
  return Ee(e) || (e = de(e)), (r = this.options_) != null && r.bound && i(function() {
    var o = this, s = o[n].bind(o);
    s.isMobXFlow = !0, o[n] = s;
  }), e;
}
function pr(e, t, r, n) {
  var i = t.annotationType_, o = n.value;
  process.env.NODE_ENV !== "production" && !g(o) && l("Cannot apply '" + i + "' to '" + e.name_ + "." + r.toString() + "':" + (`
'` + i + "' can only be used on properties with a generator function value."));
}
function un(e, t, r, n, i, o) {
  o === void 0 && (o = c.safeDescriptors), pr(e, t, r, n);
  var s = n.value;
  if (Ee(s) || (s = de(s)), i) {
    var a;
    s = s.bind((a = e.proxy_) != null ? a : e.target_), s.isMobXFlow = !0;
  }
  return {
    value: s,
    // Non-configurable for classes
    // prevents accidental field redefinition in subclass
    configurable: o ? e.isPlainObject_ : !0,
    // https://github.com/mobxjs/mobx/pull/2641#issuecomment-737292058
    enumerable: !1,
    // Non-obsevable, therefore non-writable
    // Also prevents rewriting in subclass constructor
    writable: !o
  };
}
function Dt(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: br,
    extend_: gr,
    decorate_20223_: mr
  };
}
function br(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function gr(e, t, r, n) {
  return Or(e, this, t, r), e.defineComputedProperty_(t, X({}, this.options_, {
    get: r.get,
    set: r.set
  }), n);
}
function mr(e, t) {
  process.env.NODE_ENV !== "production" && tt(t, ["getter"]);
  var r = this, n = t.name, i = t.addInitializer;
  return i(function() {
    var o = be(this)[_], s = X({}, r.options_, {
      get: e,
      context: this
    });
    s.name || (s.name = process.env.NODE_ENV !== "production" ? o.name_ + "." + n.toString() : "ObservableObject." + n.toString()), o.values_.set(n, new re(s));
  }), function() {
    return this[_].getObservablePropValue_(n);
  };
}
function Or(e, t, r, n) {
  var i = t.annotationType_, o = n.get;
  process.env.NODE_ENV !== "production" && !o && l("Cannot apply '" + i + "' to '" + e.name_ + "." + r.toString() + "':" + (`
'` + i + "' can only be used on getter(+setter) properties."));
}
function rt(e, t) {
  return {
    annotationType_: e,
    options_: t,
    make_: yr,
    extend_: Er,
    decorate_20223_: Nr
  };
}
function yr(e, t, r) {
  return this.extend_(e, t, r, !1) === null ? 0 : 1;
}
function Er(e, t, r, n) {
  var i, o;
  return Ar(e, this, t, r), e.defineObservableProperty_(t, r.value, (i = (o = this.options_) == null ? void 0 : o.enhancer) != null ? i : te, n);
}
function Nr(e, t) {
  if (process.env.NODE_ENV !== "production") {
    if (t.kind === "field")
      throw l("Please use `@observable accessor " + String(t.name) + "` instead of `@observable " + String(t.name) + "`");
    tt(t, ["accessor"]);
  }
  var r = this, n = t.kind, i = t.name, o = /* @__PURE__ */ new WeakSet();
  function s(a, u) {
    var f, d, v = be(a)[_], p = new Q(u, (f = (d = r.options_) == null ? void 0 : d.enhancer) != null ? f : te, process.env.NODE_ENV !== "production" ? v.name_ + "." + i.toString() : "ObservableObject." + i.toString(), !1);
    v.values_.set(i, p), o.add(a);
  }
  if (n == "accessor")
    return {
      get: function() {
        return o.has(this) || s(this, e.get.call(this)), this[_].getObservablePropValue_(i);
      },
      set: function(u) {
        return o.has(this) || s(this, u), this[_].setObservablePropValue_(i, u);
      },
      init: function(u) {
        return o.has(this) || s(this, u), u;
      }
    };
}
function Ar(e, t, r, n) {
  var i = t.annotationType_;
  process.env.NODE_ENV !== "production" && !("value" in n) && l("Cannot apply '" + i + "' to '" + e.name_ + "." + r.toString() + "':" + (`
'` + i + "' cannot be used on getter/setter properties"));
}
var Sr = "true", wr = /* @__PURE__ */ cn();
function cn(e) {
  return {
    annotationType_: Sr,
    options_: e,
    make_: Dr,
    extend_: Vr,
    decorate_20223_: jr
  };
}
function Dr(e, t, r, n) {
  var i, o;
  if (r.get)
    return it.make_(e, t, r, n);
  if (r.set) {
    var s = ne(t.toString(), r.set);
    return n === e.target_ ? e.defineProperty_(t, {
      configurable: c.safeDescriptors ? e.isPlainObject_ : !0,
      set: s
    }) === null ? 0 : 2 : (K(n, t, {
      configurable: !0,
      set: s
    }), 2);
  }
  if (n !== e.target_ && typeof r.value == "function") {
    var a;
    if (Qt(r.value)) {
      var u, f = (u = this.options_) != null && u.autoBind ? de.bound : de;
      return f.make_(e, t, r, n);
    }
    var d = (a = this.options_) != null && a.autoBind ? ye.bound : ye;
    return d.make_(e, t, r, n);
  }
  var v = ((i = this.options_) == null ? void 0 : i.deep) === !1 ? m.ref : m;
  if (typeof r.value == "function" && (o = this.options_) != null && o.autoBind) {
    var p;
    r.value = r.value.bind((p = e.proxy_) != null ? p : e.target_);
  }
  return v.make_(e, t, r, n);
}
function Vr(e, t, r, n) {
  var i, o;
  if (r.get)
    return it.extend_(e, t, r, n);
  if (r.set)
    return e.defineProperty_(t, {
      configurable: c.safeDescriptors ? e.isPlainObject_ : !0,
      set: ne(t.toString(), r.set)
    }, n);
  if (typeof r.value == "function" && (i = this.options_) != null && i.autoBind) {
    var s;
    r.value = r.value.bind((s = e.proxy_) != null ? s : e.target_);
  }
  var a = ((o = this.options_) == null ? void 0 : o.deep) === !1 ? m.ref : m;
  return a.extend_(e, t, r, n);
}
function jr(e, t) {
  l("'" + this.annotationType_ + "' cannot be used as a decorator");
}
var xr = "observable", Pr = "observable.ref", Tr = "observable.shallow", Rr = "observable.struct", fn = {
  deep: !0,
  name: void 0,
  defaultDecorator: void 0,
  proxy: !0
};
Object.freeze(fn);
function Ce(e) {
  return e || fn;
}
var _t = /* @__PURE__ */ rt(xr), Cr = /* @__PURE__ */ rt(Pr, {
  enhancer: nt
}), Br = /* @__PURE__ */ rt(Tr, {
  enhancer: sr
}), Lr = /* @__PURE__ */ rt(Rr, {
  enhancer: ar
}), ln = /* @__PURE__ */ G(_t);
function Be(e) {
  return e.deep === !0 ? te : e.deep === !1 ? nt : Ur(e.defaultDecorator);
}
function Mr(e) {
  var t;
  return e ? (t = e.defaultDecorator) != null ? t : cn(e) : void 0;
}
function Ur(e) {
  var t, r;
  return e && (t = (r = e.options_) == null ? void 0 : r.enhancer) != null ? t : te;
}
function dn(e, t, r) {
  if (we(t))
    return _t.decorate_20223_(e, t);
  if (ee(t)) {
    he(e, t, _t);
    return;
  }
  return Ne(e) ? e : F(e) ? m.object(e, t, r) : Array.isArray(e) ? m.array(e, t) : ve(e) ? m.map(e, t) : Se(e) ? m.set(e, t) : typeof e == "object" && e !== null ? e : m.box(e, t);
}
Yt(dn, ln);
var Ir = {
  box: function(t, r) {
    var n = Ce(r);
    return new Q(t, Be(n), n.name, !0, n.equals);
  },
  array: function(t, r) {
    var n = Ce(r);
    return (c.useProxies === !1 || n.proxy === !1 ? $i : xi)(t, Be(n), n.name);
  },
  map: function(t, r) {
    var n = Ce(r);
    return new Ln(t, Be(n), n.name);
  },
  set: function(t, r) {
    var n = Ce(r);
    return new In(t, Be(n), n.name);
  },
  object: function(t, r, n) {
    return ae(function() {
      return gi(c.useProxies === !1 || (n == null ? void 0 : n.proxy) === !1 ? be({}, n) : Di({}, n), t, r);
    });
  },
  ref: /* @__PURE__ */ G(Cr),
  shallow: /* @__PURE__ */ G(Br),
  deep: ln,
  struct: /* @__PURE__ */ G(Lr)
}, m = /* @__PURE__ */ Yt(dn, Ir), _n = "computed", $r = "computed.struct", vt = /* @__PURE__ */ Dt(_n), Kr = /* @__PURE__ */ Dt($r, {
  equals: Fe.structural
}), it = function(t, r) {
  if (we(r))
    return vt.decorate_20223_(t, r);
  if (ee(r))
    return he(t, r, vt);
  if (F(t))
    return G(Dt(_n, t));
  process.env.NODE_ENV !== "production" && (g(t) || l("First argument to `computed` should be an expression."), g(r) && l("A setter as second argument is no longer supported, use `{ set: fn }` option instead"));
  var n = F(r) ? r : {};
  return n.get = t, n.name || (n.name = t.name || ""), new re(n);
};
Object.assign(it, vt);
it.struct = /* @__PURE__ */ G(Kr);
var Mt, Ut, ze = 0, Gr = 1, Fr = (Mt = (Ut = /* @__PURE__ */ Ke(function() {
}, "name")) == null ? void 0 : Ut.configurable) != null ? Mt : !1, It = {
  value: "action",
  configurable: !0,
  writable: !1,
  enumerable: !1
};
function ne(e, t, r, n) {
  r === void 0 && (r = !1), process.env.NODE_ENV !== "production" && (g(t) || l("`action` can only be invoked on functions"), (typeof e != "string" || !e) && l("actions should have valid names, got: '" + e + "'"));
  function i() {
    return qr(e, r, t, n || this, arguments);
  }
  return i.isMobxAction = !0, i.toString = function() {
    return t.toString();
  }, Fr && (It.value = e, K(i, "name", It)), i;
}
function qr(e, t, r, n, i) {
  var o = zr(e, t, n, i);
  try {
    return r.apply(n, i);
  } catch (s) {
    throw o.error_ = s, s;
  } finally {
    Xr(o);
  }
}
function zr(e, t, r, n) {
  var i = process.env.NODE_ENV !== "production" && O() && !!e, o = 0;
  if (process.env.NODE_ENV !== "production" && i) {
    o = Date.now();
    var s = n ? Array.from(n) : Ge;
    A({
      type: jt,
      name: e,
      object: r,
      arguments: s
    });
  }
  var a = c.trackingDerivation, u = !t || !a;
  j();
  var f = c.allowStateChanges;
  u && (se(), f = ot(!0));
  var d = Vt(!0), v = {
    runAsAction_: u,
    prevDerivation_: a,
    prevAllowStateChanges_: f,
    prevAllowStateReads_: d,
    notifySpy_: i,
    startTime_: o,
    actionId_: Gr++,
    parentActionId_: ze
  };
  return ze = v.actionId_, v;
}
function Xr(e) {
  ze !== e.actionId_ && l(30), ze = e.parentActionId_, e.error_ !== void 0 && (c.suppressReactionErrors = !0), st(e.prevAllowStateChanges_), Oe(e.prevAllowStateReads_), x(), e.runAsAction_ && z(e.prevDerivation_), process.env.NODE_ENV !== "production" && e.notifySpy_ && S({
    time: Date.now() - e.startTime_
  }), c.suppressReactionErrors = !1;
}
function Gi(e, t) {
  var r = ot(e);
  try {
    return t();
  } finally {
    st(r);
  }
}
function ot(e) {
  var t = c.allowStateChanges;
  return c.allowStateChanges = e, t;
}
function st(e) {
  c.allowStateChanges = e;
}
var vn, kr = "create";
vn = Symbol.toPrimitive;
var Q = /* @__PURE__ */ function(e) {
  rn(t, e);
  function t(n, i, o, s, a) {
    var u;
    return o === void 0 && (o = process.env.NODE_ENV !== "production" ? "ObservableValue@" + L() : "ObservableValue"), s === void 0 && (s = !0), a === void 0 && (a = Fe.default), u = e.call(this, o) || this, u.enhancer = void 0, u.name_ = void 0, u.equals = void 0, u.hasUnreportedChange_ = !1, u.interceptors_ = void 0, u.changeListeners_ = void 0, u.value_ = void 0, u.dehancer = void 0, u.enhancer = i, u.name_ = o, u.equals = a, u.value_ = i(n, void 0, o), process.env.NODE_ENV !== "production" && s && O() && ie({
      type: kr,
      object: Me(u),
      observableKind: "value",
      debugObjectName: u.name_,
      newValue: "" + u.value_
    }), u;
  }
  var r = t.prototype;
  return r.dehanceValue = function(i) {
    return this.dehancer !== void 0 ? this.dehancer(i) : i;
  }, r.set = function(i) {
    var o = this.value_;
    if (i = this.prepareNewValue_(i), i !== c.UNCHANGED) {
      var s = O();
      process.env.NODE_ENV !== "production" && s && A({
        type: R,
        object: this,
        observableKind: "value",
        debugObjectName: this.name_,
        newValue: i,
        oldValue: o
      }), this.setNewValue_(i), process.env.NODE_ENV !== "production" && s && S();
    }
  }, r.prepareNewValue_ = function(i) {
    if ($(this), D(this)) {
      var o = V(this, {
        object: this,
        type: R,
        newValue: i
      });
      if (!o)
        return c.UNCHANGED;
      i = o.newValue;
    }
    return i = this.enhancer(i, this.value_, this.name_), this.equals(this.value_, i) ? c.UNCHANGED : i;
  }, r.setNewValue_ = function(i) {
    var o = this.value_;
    this.value_ = i, this.reportChanged(), C(this) && B(this, {
      type: R,
      object: this,
      newValue: i,
      oldValue: o
    });
  }, r.get = function() {
    return this.reportObserved(), this.dehanceValue(this.value_);
  }, r.intercept_ = function(i) {
    return xe(this, i);
  }, r.observe_ = function(i, o) {
    return o && i({
      observableKind: "value",
      debugObjectName: this.name_,
      object: this,
      type: R,
      newValue: this.value_,
      oldValue: void 0
    }), Pe(this, i);
  }, r.raw = function() {
    return this.value_;
  }, r.toJSON = function() {
    return this.get();
  }, r.toString = function() {
    return this.name_ + "[" + this.value_ + "]";
  }, r.valueOf = function() {
    return nn(this.get());
  }, r[vn] = function() {
    return this.valueOf();
  }, t;
}(De), hn;
hn = Symbol.toPrimitive;
var re = /* @__PURE__ */ function() {
  function e(r) {
    this.dependenciesState_ = h.NOT_TRACKING_, this.observing_ = [], this.newObserving_ = null, this.isBeingObserved_ = !1, this.isPendingUnobservation_ = !1, this.observers_ = /* @__PURE__ */ new Set(), this.diffValue_ = 0, this.runId_ = 0, this.lastAccessedBy_ = 0, this.lowestObserverState_ = h.UP_TO_DATE_, this.unboundDepsCount_ = 0, this.value_ = new Xe(null), this.name_ = void 0, this.triggeredBy_ = void 0, this.isComputing_ = !1, this.isRunningSetter_ = !1, this.derivation = void 0, this.setter_ = void 0, this.isTracing_ = T.NONE, this.scope_ = void 0, this.equals_ = void 0, this.requiresReaction_ = void 0, this.keepAlive_ = void 0, this.onBOL = void 0, this.onBUOL = void 0, r.get || l(31), this.derivation = r.get, this.name_ = r.name || (process.env.NODE_ENV !== "production" ? "ComputedValue@" + L() : "ComputedValue"), r.set && (this.setter_ = ne(process.env.NODE_ENV !== "production" ? this.name_ + "-setter" : "ComputedValue-setter", r.set)), this.equals_ = r.equals || (r.compareStructural || r.struct ? Fe.structural : Fe.default), this.scope_ = r.context, this.requiresReaction_ = r.requiresReaction, this.keepAlive_ = !!r.keepAlive;
  }
  var t = e.prototype;
  return t.onBecomeStale_ = function() {
    ei(this);
  }, t.onBO = function() {
    this.onBOL && this.onBOL.forEach(function(n) {
      return n();
    });
  }, t.onBUO = function() {
    this.onBUOL && this.onBUOL.forEach(function(n) {
      return n();
    });
  }, t.get = function() {
    if (this.isComputing_ && l(32, this.name_, this.derivation), c.inBatch === 0 && // !globalState.trackingDerivatpion &&
    this.observers_.size === 0 && !this.keepAlive_)
      ht(this) && (this.warnAboutUntrackedRead_(), j(), this.value_ = this.computeValue_(!1), x());
    else if (En(this), ht(this)) {
      var n = c.trackingContext;
      this.keepAlive_ && !n && (c.trackingContext = this), this.trackAndCompute() && Qr(this), c.trackingContext = n;
    }
    var i = this.value_;
    if (Ue(i))
      throw i.cause;
    return i;
  }, t.set = function(n) {
    if (this.setter_) {
      this.isRunningSetter_ && l(33, this.name_), this.isRunningSetter_ = !0;
      try {
        this.setter_.call(this.scope_, n);
      } finally {
        this.isRunningSetter_ = !1;
      }
    } else
      l(34, this.name_);
  }, t.trackAndCompute = function() {
    var n = this.value_, i = (
      /* see #1208 */
      this.dependenciesState_ === h.NOT_TRACKING_
    ), o = this.computeValue_(!0), s = i || Ue(n) || Ue(o) || !this.equals_(n, o);
    return s && (this.value_ = o, process.env.NODE_ENV !== "production" && O() && ie({
      observableKind: "computed",
      debugObjectName: this.name_,
      object: this.scope_,
      type: "update",
      oldValue: n,
      newValue: o
    })), s;
  }, t.computeValue_ = function(n) {
    this.isComputing_ = !0;
    var i = ot(!1), o;
    if (n)
      o = pn(this, this.derivation, this.scope_);
    else if (c.disableErrorBoundaries === !0)
      o = this.derivation.call(this.scope_);
    else
      try {
        o = this.derivation.call(this.scope_);
      } catch (s) {
        o = new Xe(s);
      }
    return st(i), this.isComputing_ = !1, o;
  }, t.suspend_ = function() {
    this.keepAlive_ || (pt(this), this.value_ = void 0, process.env.NODE_ENV !== "production" && this.isTracing_ !== T.NONE && console.log("[mobx.trace] Computed value '" + this.name_ + "' was suspended and it will recompute on the next access."));
  }, t.observe_ = function(n, i) {
    var o = this, s = !0, a = void 0;
    return fi(function() {
      var u = o.get();
      if (!s || i) {
        var f = se();
        n({
          observableKind: "computed",
          debugObjectName: o.name_,
          type: R,
          object: o,
          newValue: u,
          oldValue: a
        }), z(f);
      }
      s = !1, a = u;
    });
  }, t.warnAboutUntrackedRead_ = function() {
    process.env.NODE_ENV !== "production" && (this.isTracing_ !== T.NONE && console.log("[mobx.trace] Computed value '" + this.name_ + "' is being read outside a reactive context. Doing a full recompute."), (typeof this.requiresReaction_ == "boolean" ? this.requiresReaction_ : c.computedRequiresReaction) && console.warn("[mobx] Computed value '" + this.name_ + "' is being read outside a reactive context. Doing a full recompute."));
  }, t.toString = function() {
    return this.name_ + "[" + this.derivation.toString() + "]";
  }, t.valueOf = function() {
    return nn(this.get());
  }, t[hn] = function() {
    return this.valueOf();
  }, e;
}(), at = /* @__PURE__ */ oe("ComputedValue", re), h;
(function(e) {
  e[e.NOT_TRACKING_ = -1] = "NOT_TRACKING_", e[e.UP_TO_DATE_ = 0] = "UP_TO_DATE_", e[e.POSSIBLY_STALE_ = 1] = "POSSIBLY_STALE_", e[e.STALE_ = 2] = "STALE_";
})(h || (h = {}));
var T;
(function(e) {
  e[e.NONE = 0] = "NONE", e[e.LOG = 1] = "LOG", e[e.BREAK = 2] = "BREAK";
})(T || (T = {}));
var Xe = function(t) {
  this.cause = void 0, this.cause = t;
};
function Ue(e) {
  return e instanceof Xe;
}
function ht(e) {
  switch (e.dependenciesState_) {
    case h.UP_TO_DATE_:
      return !1;
    case h.NOT_TRACKING_:
    case h.STALE_:
      return !0;
    case h.POSSIBLY_STALE_: {
      for (var t = Vt(!0), r = se(), n = e.observing_, i = n.length, o = 0; o < i; o++) {
        var s = n[o];
        if (at(s)) {
          if (c.disableErrorBoundaries)
            s.get();
          else
            try {
              s.get();
            } catch {
              return z(r), Oe(t), !0;
            }
          if (e.dependenciesState_ === h.STALE_)
            return z(r), Oe(t), !0;
        }
      }
      return gn(e), z(r), Oe(t), !1;
    }
  }
}
function $(e) {
  if (process.env.NODE_ENV !== "production") {
    var t = e.observers_.size > 0;
    !c.allowStateChanges && (t || c.enforceActions === "always") && console.warn("[MobX] " + (c.enforceActions ? "Since strict-mode is enabled, changing (observed) observable values without using an action is not allowed. Tried to modify: " : "Side effects like changing state are not allowed at this point. Are you trying to modify state from, for example, a computed value or the render function of a React component? You can wrap side effects in 'runInAction' (or decorate functions with 'action') if needed. Tried to modify: ") + e.name_);
  }
}
function Wr(e) {
  process.env.NODE_ENV !== "production" && !c.allowStateReads && c.observableRequiresReaction && console.warn("[mobx] Observable '" + e.name_ + "' being read outside a reactive context.");
}
function pn(e, t, r) {
  var n = Vt(!0);
  gn(e), e.newObserving_ = new Array(
    // Reserve constant space for initial dependencies, dynamic space otherwise.
    // See https://github.com/mobxjs/mobx/pull/3833
    e.runId_ === 0 ? 100 : e.observing_.length
  ), e.unboundDepsCount_ = 0, e.runId_ = ++c.runId;
  var i = c.trackingDerivation;
  c.trackingDerivation = e, c.inBatch++;
  var o;
  if (c.disableErrorBoundaries === !0)
    o = t.call(r);
  else
    try {
      o = t.call(r);
    } catch (s) {
      o = new Xe(s);
    }
  return c.inBatch--, c.trackingDerivation = i, Yr(e), Hr(e), Oe(n), o;
}
function Hr(e) {
  process.env.NODE_ENV !== "production" && e.observing_.length === 0 && (typeof e.requiresObservable_ == "boolean" ? e.requiresObservable_ : c.reactionRequiresObservable) && console.warn("[mobx] Derivation '" + e.name_ + "' is created/updated without reading any observable value.");
}
function Yr(e) {
  for (var t = e.observing_, r = e.observing_ = e.newObserving_, n = h.UP_TO_DATE_, i = 0, o = e.unboundDepsCount_, s = 0; s < o; s++) {
    var a = r[s];
    a.diffValue_ === 0 && (a.diffValue_ = 1, i !== s && (r[i] = a), i++), a.dependenciesState_ > n && (n = a.dependenciesState_);
  }
  for (r.length = i, e.newObserving_ = null, o = t.length; o--; ) {
    var u = t[o];
    u.diffValue_ === 0 && On(u, e), u.diffValue_ = 0;
  }
  for (; i--; ) {
    var f = r[i];
    f.diffValue_ === 1 && (f.diffValue_ = 0, Zr(f, e));
  }
  n !== h.UP_TO_DATE_ && (e.dependenciesState_ = n, e.onBecomeStale_());
}
function pt(e) {
  var t = e.observing_;
  e.observing_ = [];
  for (var r = t.length; r--; )
    On(t[r], e);
  e.dependenciesState_ = h.NOT_TRACKING_;
}
function bn(e) {
  var t = se();
  try {
    return e();
  } finally {
    z(t);
  }
}
function se() {
  var e = c.trackingDerivation;
  return c.trackingDerivation = null, e;
}
function z(e) {
  c.trackingDerivation = e;
}
function Vt(e) {
  var t = c.allowStateReads;
  return c.allowStateReads = e, t;
}
function Oe(e) {
  c.allowStateReads = e;
}
function gn(e) {
  if (e.dependenciesState_ !== h.UP_TO_DATE_) {
    e.dependenciesState_ = h.UP_TO_DATE_;
    for (var t = e.observing_, r = t.length; r--; )
      t[r].lowestObserverState_ = h.UP_TO_DATE_;
  }
}
var Ie = function() {
  this.version = 6, this.UNCHANGED = {}, this.trackingDerivation = null, this.trackingContext = null, this.runId = 0, this.mobxGuid = 0, this.inBatch = 0, this.pendingUnobservations = [], this.pendingReactions = [], this.isRunningReactions = !1, this.allowStateChanges = !1, this.allowStateReads = !0, this.enforceActions = !0, this.spyListeners = [], this.globalReactionErrorHandlers = [], this.computedRequiresReaction = !1, this.reactionRequiresObservable = !1, this.observableRequiresReaction = !1, this.disableErrorBoundaries = !1, this.suppressReactionErrors = !1, this.useProxies = !0, this.verifyProxies = !1, this.safeDescriptors = !0;
}, $e = !0, mn = !1, c = /* @__PURE__ */ function() {
  var e = /* @__PURE__ */ Nt();
  return e.__mobxInstanceCount > 0 && !e.__mobxGlobals && ($e = !1), e.__mobxGlobals && e.__mobxGlobals.version !== new Ie().version && ($e = !1), $e ? e.__mobxGlobals ? (e.__mobxInstanceCount += 1, e.__mobxGlobals.UNCHANGED || (e.__mobxGlobals.UNCHANGED = {}), e.__mobxGlobals) : (e.__mobxInstanceCount = 1, e.__mobxGlobals = /* @__PURE__ */ new Ie()) : (setTimeout(function() {
    mn || l(35);
  }, 1), new Ie());
}();
function Jr() {
  if ((c.pendingReactions.length || c.inBatch || c.isRunningReactions) && l(36), mn = !0, $e) {
    var e = Nt();
    --e.__mobxInstanceCount === 0 && (e.__mobxGlobals = void 0), c = new Ie();
  }
}
function Fi() {
  return c;
}
function Zr(e, t) {
  e.observers_.add(t), e.lowestObserverState_ > t.dependenciesState_ && (e.lowestObserverState_ = t.dependenciesState_);
}
function On(e, t) {
  e.observers_.delete(t), e.observers_.size === 0 && yn(e);
}
function yn(e) {
  e.isPendingUnobservation_ === !1 && (e.isPendingUnobservation_ = !0, c.pendingUnobservations.push(e));
}
function j() {
  c.inBatch++;
}
function x() {
  if (--c.inBatch === 0) {
    wn();
    for (var e = c.pendingUnobservations, t = 0; t < e.length; t++) {
      var r = e[t];
      r.isPendingUnobservation_ = !1, r.observers_.size === 0 && (r.isBeingObserved_ && (r.isBeingObserved_ = !1, r.onBUO()), r instanceof re && r.suspend_());
    }
    c.pendingUnobservations = [];
  }
}
function En(e) {
  Wr(e);
  var t = c.trackingDerivation;
  return t !== null ? (t.runId_ !== e.lastAccessedBy_ && (e.lastAccessedBy_ = t.runId_, t.newObserving_[t.unboundDepsCount_++] = e, !e.isBeingObserved_ && c.trackingContext && (e.isBeingObserved_ = !0, e.onBO())), e.isBeingObserved_) : (e.observers_.size === 0 && c.inBatch > 0 && yn(e), !1);
}
function Nn(e) {
  e.lowestObserverState_ !== h.STALE_ && (e.lowestObserverState_ = h.STALE_, e.observers_.forEach(function(t) {
    t.dependenciesState_ === h.UP_TO_DATE_ && (process.env.NODE_ENV !== "production" && t.isTracing_ !== T.NONE && An(t, e), t.onBecomeStale_()), t.dependenciesState_ = h.STALE_;
  }));
}
function Qr(e) {
  e.lowestObserverState_ !== h.STALE_ && (e.lowestObserverState_ = h.STALE_, e.observers_.forEach(function(t) {
    t.dependenciesState_ === h.POSSIBLY_STALE_ ? (t.dependenciesState_ = h.STALE_, process.env.NODE_ENV !== "production" && t.isTracing_ !== T.NONE && An(t, e)) : t.dependenciesState_ === h.UP_TO_DATE_ && (e.lowestObserverState_ = h.UP_TO_DATE_);
  }));
}
function ei(e) {
  e.lowestObserverState_ === h.UP_TO_DATE_ && (e.lowestObserverState_ = h.POSSIBLY_STALE_, e.observers_.forEach(function(t) {
    t.dependenciesState_ === h.UP_TO_DATE_ && (t.dependenciesState_ = h.POSSIBLY_STALE_, t.onBecomeStale_());
  }));
}
function An(e, t) {
  if (console.log("[mobx.trace] '" + e.name_ + "' is invalidated due to a change in: '" + t.name_ + "'"), e.isTracing_ === T.BREAK) {
    var r = [];
    Sn(mi(e), r, 1), new Function(`debugger;
/*
Tracing '` + e.name_ + `'

You are entering this break point because derivation '` + e.name_ + "' is being traced and '" + t.name_ + `' is now forcing it to update.
Just follow the stacktrace you should now see in the devtools to see precisely what piece of your code is causing this update
The stackframe you are looking for is at least ~6-8 stack-frames up.

` + (e instanceof re ? e.derivation.toString().replace(/[*]\//g, "/") : "") + `

The dependencies for this derivation are:

` + r.join(`
`) + `
*/
    `)();
  }
}
function Sn(e, t, r) {
  if (t.length >= 1e3) {
    t.push("(and many more)");
    return;
  }
  t.push("" + "	".repeat(r - 1) + e.name), e.dependencies && e.dependencies.forEach(function(n) {
    return Sn(n, t, r + 1);
  });
}
var bt = /* @__PURE__ */ function() {
  function e(r, n, i, o) {
    r === void 0 && (r = process.env.NODE_ENV !== "production" ? "Reaction@" + L() : "Reaction"), this.name_ = void 0, this.onInvalidate_ = void 0, this.errorHandler_ = void 0, this.requiresObservable_ = void 0, this.observing_ = [], this.newObserving_ = [], this.dependenciesState_ = h.NOT_TRACKING_, this.diffValue_ = 0, this.runId_ = 0, this.unboundDepsCount_ = 0, this.isDisposed_ = !1, this.isScheduled_ = !1, this.isTrackPending_ = !1, this.isRunning_ = !1, this.isTracing_ = T.NONE, this.name_ = r, this.onInvalidate_ = n, this.errorHandler_ = i, this.requiresObservable_ = o;
  }
  var t = e.prototype;
  return t.onBecomeStale_ = function() {
    this.schedule_();
  }, t.schedule_ = function() {
    this.isScheduled_ || (this.isScheduled_ = !0, c.pendingReactions.push(this), wn());
  }, t.isScheduled = function() {
    return this.isScheduled_;
  }, t.runReaction_ = function() {
    if (!this.isDisposed_) {
      j(), this.isScheduled_ = !1;
      var n = c.trackingContext;
      if (c.trackingContext = this, ht(this)) {
        this.isTrackPending_ = !0;
        try {
          this.onInvalidate_(), process.env.NODE_ENV !== "production" && this.isTrackPending_ && O() && ie({
            name: this.name_,
            type: "scheduled-reaction"
          });
        } catch (i) {
          this.reportExceptionInDerivation_(i);
        }
      }
      c.trackingContext = n, x();
    }
  }, t.track = function(n) {
    if (!this.isDisposed_) {
      j();
      var i = O(), o;
      process.env.NODE_ENV !== "production" && i && (o = Date.now(), A({
        name: this.name_,
        type: "reaction"
      })), this.isRunning_ = !0;
      var s = c.trackingContext;
      c.trackingContext = this;
      var a = pn(this, n, void 0);
      c.trackingContext = s, this.isRunning_ = !1, this.isTrackPending_ = !1, this.isDisposed_ && pt(this), Ue(a) && this.reportExceptionInDerivation_(a.cause), process.env.NODE_ENV !== "production" && i && S({
        time: Date.now() - o
      }), x();
    }
  }, t.reportExceptionInDerivation_ = function(n) {
    var i = this;
    if (this.errorHandler_) {
      this.errorHandler_(n, this);
      return;
    }
    if (c.disableErrorBoundaries)
      throw n;
    var o = process.env.NODE_ENV !== "production" ? "[mobx] Encountered an uncaught exception that was thrown by a reaction or observer component, in: '" + this + "'" : "[mobx] uncaught error in '" + this + "'";
    c.suppressReactionErrors ? process.env.NODE_ENV !== "production" && console.warn("[mobx] (error in reaction '" + this.name_ + "' suppressed, fix error of causing action below)") : console.error(o, n), process.env.NODE_ENV !== "production" && O() && ie({
      type: "error",
      name: this.name_,
      message: o,
      error: "" + n
    }), c.globalReactionErrorHandlers.forEach(function(s) {
      return s(n, i);
    });
  }, t.dispose = function() {
    this.isDisposed_ || (this.isDisposed_ = !0, this.isRunning_ || (j(), pt(this), x()));
  }, t.getDisposer_ = function(n) {
    var i = this, o = function s() {
      i.dispose(), n == null || n.removeEventListener == null || n.removeEventListener("abort", s);
    };
    return n == null || n.addEventListener == null || n.addEventListener("abort", o), o[_] = this, o;
  }, t.toString = function() {
    return "Reaction[" + this.name_ + "]";
  }, t.trace = function(n) {
    n === void 0 && (n = !1), Ai(this, n);
  }, e;
}(), $t = 100, gt = function(t) {
  return t();
};
function wn() {
  c.inBatch > 0 || c.isRunningReactions || gt(ti);
}
function ti() {
  c.isRunningReactions = !0;
  for (var e = c.pendingReactions, t = 0; e.length > 0; ) {
    ++t === $t && (console.error(process.env.NODE_ENV !== "production" ? "Reaction doesn't converge to a stable state after " + $t + " iterations." + (" Probably there is a cycle in the reactive function: " + e[0]) : "[mobx] cycle in reaction: " + e[0]), e.splice(0));
    for (var r = e.splice(0), n = 0, i = r.length; n < i; n++)
      r[n].runReaction_();
  }
  c.isRunningReactions = !1;
}
var ke = /* @__PURE__ */ oe("Reaction", bt);
function ni(e) {
  var t = gt;
  gt = function(n) {
    return e(function() {
      return t(n);
    });
  };
}
function O() {
  return process.env.NODE_ENV !== "production" && !!c.spyListeners.length;
}
function ie(e) {
  if (process.env.NODE_ENV !== "production" && c.spyListeners.length)
    for (var t = c.spyListeners, r = 0, n = t.length; r < n; r++)
      t[r](e);
}
function A(e) {
  if (process.env.NODE_ENV !== "production") {
    var t = X({}, e, {
      spyReportStart: !0
    });
    ie(t);
  }
}
var ri = {
  type: "report-end",
  spyReportEnd: !0
};
function S(e) {
  process.env.NODE_ENV !== "production" && ie(e ? X({}, e, {
    type: "report-end",
    spyReportEnd: !0
  }) : ri);
}
function ii(e) {
  return process.env.NODE_ENV === "production" ? (console.warn("[mobx.spy] Is a no-op in production builds"), function() {
  }) : (c.spyListeners.push(e), At(function() {
    c.spyListeners = c.spyListeners.filter(function(t) {
      return t !== e;
    });
  }));
}
var jt = "action", oi = "action.bound", Dn = "autoAction", si = "autoAction.bound", ai = "<unnamed action>", mt = /* @__PURE__ */ Ve(jt), ui = /* @__PURE__ */ Ve(oi, {
  bound: !0
}), Ot = /* @__PURE__ */ Ve(Dn, {
  autoAction: !0
}), ci = /* @__PURE__ */ Ve(si, {
  autoAction: !0,
  bound: !0
});
function Vn(e) {
  var t = function(n, i) {
    if (g(n))
      return ne(n.name || ai, n, e);
    if (g(i))
      return ne(n, i, e);
    if (we(i))
      return (e ? Ot : mt).decorate_20223_(n, i);
    if (ee(i))
      return he(n, i, e ? Ot : mt);
    if (ee(n))
      return G(Ve(e ? Dn : jt, {
        name: n,
        autoAction: e
      }));
    process.env.NODE_ENV !== "production" && l("Invalid arguments for `action`");
  };
  return t;
}
var le = /* @__PURE__ */ Vn(!1);
Object.assign(le, mt);
var ye = /* @__PURE__ */ Vn(!0);
Object.assign(ye, Ot);
le.bound = /* @__PURE__ */ G(ui);
ye.bound = /* @__PURE__ */ G(ci);
function je(e) {
  return g(e) && e.isMobxAction === !0;
}
function fi(e, t) {
  var r, n, i, o, s;
  t === void 0 && (t = Jt), process.env.NODE_ENV !== "production" && (g(e) || l("Autorun expects a function as first argument"), je(e) && l("Autorun does not accept actions since actions are untrackable"));
  var a = (r = (n = t) == null ? void 0 : n.name) != null ? r : process.env.NODE_ENV !== "production" ? e.name || "Autorun@" + L() : "Autorun", u = !t.scheduler && !t.delay, f;
  if (u)
    f = new bt(a, function() {
      this.track(p);
    }, t.onError, t.requiresObservable);
  else {
    var d = di(t), v = !1;
    f = new bt(a, function() {
      v || (v = !0, d(function() {
        v = !1, f.isDisposed_ || f.track(p);
      }));
    }, t.onError, t.requiresObservable);
  }
  function p() {
    e(f);
  }
  return (i = t) != null && (o = i.signal) != null && o.aborted || f.schedule_(), f.getDisposer_((s = t) == null ? void 0 : s.signal);
}
var li = function(t) {
  return t();
};
function di(e) {
  return e.scheduler ? e.scheduler : e.delay ? function(t) {
    return setTimeout(t, e.delay);
  } : li;
}
var _i = "onBO", vi = "onBUO";
function hi(e, t, r) {
  return xn(_i, e, t, r);
}
function jn(e, t, r) {
  return xn(vi, e, t, r);
}
function xn(e, t, r, n) {
  var i = typeof n == "function" ? Y(t, r) : Y(t), o = g(n) ? n : r, s = e + "L";
  return i[s] ? i[s].add(o) : i[s] = /* @__PURE__ */ new Set([o]), function() {
    var a = i[s];
    a && (a.delete(o), a.size === 0 && delete i[s]);
  };
}
var pi = "never", Le = "always", bi = "observed";
function qi(e) {
  e.isolateGlobalState === !0 && Jr();
  var t = e.useProxies, r = e.enforceActions;
  if (t !== void 0 && (c.useProxies = t === Le ? !0 : t === pi ? !1 : typeof Proxy < "u"), t === "ifavailable" && (c.verifyProxies = !0), r !== void 0) {
    var n = r === Le ? Le : r === bi;
    c.enforceActions = n, c.allowStateChanges = !(n === !0 || n === Le);
  }
  ["computedRequiresReaction", "reactionRequiresObservable", "observableRequiresReaction", "disableErrorBoundaries", "safeDescriptors"].forEach(function(i) {
    i in e && (c[i] = !!e[i]);
  }), c.allowStateReads = !c.observableRequiresReaction, process.env.NODE_ENV !== "production" && c.disableErrorBoundaries === !0 && console.warn("WARNING: Debug feature only. MobX will NOT recover from errors when `disableErrorBoundaries` is enabled."), e.reactionScheduler && ni(e.reactionScheduler);
}
function gi(e, t, r, n) {
  process.env.NODE_ENV !== "production" && (arguments.length > 4 && l("'extendObservable' expected 2-4 arguments"), typeof e != "object" && l("'extendObservable' expects an object as first argument"), k(e) && l("'extendObservable' should not be used on maps, use map.merge instead"), F(t) || l("'extendObservable' only accepts plain objects as second argument"), (Ne(t) || Ne(r)) && l("Extending an object with another observable (object) is not supported"));
  var i = Yn(t);
  return ae(function() {
    var o = be(e, n)[_];
    et(i).forEach(function(s) {
      o.extend_(
        s,
        i[s],
        // must pass "undefined" for { key: undefined }
        r && s in r ? r[s] : !0
      );
    });
  }), e;
}
function mi(e, t) {
  return Pn(Y(e, t));
}
function Pn(e) {
  var t = {
    name: e.name_
  };
  return e.observing_ && e.observing_.length > 0 && (t.dependencies = Oi(e.observing_).map(Pn)), t;
}
function Oi(e) {
  return Array.from(new Set(e));
}
var yi = 0;
function Tn() {
  this.message = "FLOW_CANCELLED";
}
Tn.prototype = /* @__PURE__ */ Object.create(Error.prototype);
var ct = /* @__PURE__ */ an("flow"), Ei = /* @__PURE__ */ an("flow.bound", {
  bound: !0
}), de = /* @__PURE__ */ Object.assign(function(t, r) {
  if (we(r))
    return ct.decorate_20223_(t, r);
  if (ee(r))
    return he(t, r, ct);
  process.env.NODE_ENV !== "production" && arguments.length !== 1 && l("Flow expects single argument with generator function");
  var n = t, i = n.name || "<unnamed flow>", o = function() {
    var a = this, u = arguments, f = ++yi, d = le(i + " - runid: " + f + " - init", n).apply(a, u), v, p = void 0, E = new Promise(function(ue, U) {
      var I = 0;
      v = U;
      function Re(N) {
        p = void 0;
        var W;
        try {
          W = le(i + " - runid: " + f + " - yield " + I++, d.next).call(d, N);
        } catch (J) {
          return U(J);
        }
        ge(W);
      }
      function ut(N) {
        p = void 0;
        var W;
        try {
          W = le(i + " - runid: " + f + " - yield " + I++, d.throw).call(d, N);
        } catch (J) {
          return U(J);
        }
        ge(W);
      }
      function ge(N) {
        if (g(N == null ? void 0 : N.then)) {
          N.then(ge, U);
          return;
        }
        return N.done ? ue(N.value) : (p = Promise.resolve(N.value), p.then(Re, ut));
      }
      Re(void 0);
    });
    return E.cancel = le(i + " - runid: " + f + " - cancel", function() {
      try {
        p && Kt(p);
        var ue = d.return(void 0), U = Promise.resolve(ue.value);
        U.then(ce, ce), Kt(U), v(new Tn());
      } catch (I) {
        v(I);
      }
    }), E;
  };
  return o.isMobXFlow = !0, o;
}, ct);
de.bound = /* @__PURE__ */ G(Ei);
function Kt(e) {
  g(e.cancel) && e.cancel();
}
function Ee(e) {
  return (e == null ? void 0 : e.isMobXFlow) === !0;
}
function Ni(e, t) {
  return e ? t !== void 0 ? process.env.NODE_ENV !== "production" && (k(e) || Te(e)) ? l("isObservable(object, propertyName) is not supported for arrays and maps. Use map.has or array.length instead.") : _e(e) ? e[_].values_.has(t) : !1 : _e(e) || !!e[_] || wt(e) || ke(e) || at(e) : !1;
}
function Ne(e) {
  return process.env.NODE_ENV !== "production" && arguments.length !== 1 && l("isObservable expects only 1 argument. Use isObservableProp to inspect the observability of a property"), Ni(e);
}
function Ai() {
  if (process.env.NODE_ENV !== "production") {
    for (var e = !1, t = arguments.length, r = new Array(t), n = 0; n < t; n++)
      r[n] = arguments[n];
    typeof r[r.length - 1] == "boolean" && (e = r.pop());
    var i = Si(r);
    if (!i)
      return l("'trace(break?)' can only be used inside a tracked computed value or a Reaction. Consider passing in the computed value or reaction explicitly");
    i.isTracing_ === T.NONE && console.log("[mobx.trace] '" + i.name_ + "' tracing enabled"), i.isTracing_ = e ? T.BREAK : T.LOG;
  }
}
function Si(e) {
  switch (e.length) {
    case 0:
      return c.trackingDerivation;
    case 1:
      return Y(e[0]);
    case 2:
      return Y(e[0], e[1]);
  }
}
function q(e, t) {
  t === void 0 && (t = void 0), j();
  try {
    return e.apply(t);
  } finally {
    x();
  }
}
function Z(e) {
  return e[_];
}
var wi = {
  has: function(t, r) {
    return process.env.NODE_ENV !== "production" && c.trackingDerivation && me("detect new properties using the 'in' operator. Use 'has' from 'mobx' instead."), Z(t).has_(r);
  },
  get: function(t, r) {
    return Z(t).get_(r);
  },
  set: function(t, r, n) {
    var i;
    return ee(r) ? (process.env.NODE_ENV !== "production" && !Z(t).values_.has(r) && me("add a new observable property through direct assignment. Use 'set' from 'mobx' instead."), (i = Z(t).set_(r, n, !0)) != null ? i : !0) : !1;
  },
  deleteProperty: function(t, r) {
    var n;
    return process.env.NODE_ENV !== "production" && me("delete properties from an observable object. Use 'remove' from 'mobx' instead."), ee(r) ? (n = Z(t).delete_(r, !0)) != null ? n : !0 : !1;
  },
  defineProperty: function(t, r, n) {
    var i;
    return process.env.NODE_ENV !== "production" && me("define property on an observable object. Use 'defineProperty' from 'mobx' instead."), (i = Z(t).defineProperty_(r, n)) != null ? i : !0;
  },
  ownKeys: function(t) {
    return process.env.NODE_ENV !== "production" && c.trackingDerivation && me("iterate keys to detect added / removed properties. Use 'keys' from 'mobx' instead."), Z(t).ownKeys_();
  },
  preventExtensions: function(t) {
    l(13);
  }
};
function Di(e, t) {
  var r, n;
  return Zt(), e = be(e, t), (n = (r = e[_]).proxy_) != null ? n : r.proxy_ = new Proxy(e, wi);
}
function D(e) {
  return e.interceptors_ !== void 0 && e.interceptors_.length > 0;
}
function xe(e, t) {
  var r = e.interceptors_ || (e.interceptors_ = []);
  return r.push(t), At(function() {
    var n = r.indexOf(t);
    n !== -1 && r.splice(n, 1);
  });
}
function V(e, t) {
  var r = se();
  try {
    for (var n = [].concat(e.interceptors_ || []), i = 0, o = n.length; i < o && (t = n[i](t), t && !t.type && l(14), !!t); i++)
      ;
    return t;
  } finally {
    z(r);
  }
}
function C(e) {
  return e.changeListeners_ !== void 0 && e.changeListeners_.length > 0;
}
function Pe(e, t) {
  var r = e.changeListeners_ || (e.changeListeners_ = []);
  return r.push(t), At(function() {
    var n = r.indexOf(t);
    n !== -1 && r.splice(n, 1);
  });
}
function B(e, t) {
  var r = se(), n = e.changeListeners_;
  if (n) {
    n = n.slice();
    for (var i = 0, o = n.length; i < o; i++)
      n[i](t);
    z(r);
  }
}
function zi(e, t, r) {
  return ae(function() {
    var n, i = be(e, r)[_];
    process.env.NODE_ENV !== "production" && t && e[y] && l("makeObservable second arg must be nullish when using decorators. Mixing @decorator syntax with annotations is not supported."), (n = t) != null || (t = tr(e)), et(t).forEach(function(o) {
      return i.make_(o, t[o]);
    });
  }), e;
}
var Gt = "splice", R = "update", Vi = 1e4, ji = {
  get: function(t, r) {
    var n = t[_];
    return r === _ ? n : r === "length" ? n.getArrayLength_() : typeof r == "string" && !isNaN(r) ? n.get_(parseInt(r)) : P(We, r) ? We[r] : t[r];
  },
  set: function(t, r, n) {
    var i = t[_];
    return r === "length" && i.setArrayLength_(n), typeof r == "symbol" || isNaN(r) ? t[r] = n : i.set_(parseInt(r), n), !0;
  },
  preventExtensions: function() {
    l(15);
  }
}, xt = /* @__PURE__ */ function() {
  function e(r, n, i, o) {
    r === void 0 && (r = process.env.NODE_ENV !== "production" ? "ObservableArray@" + L() : "ObservableArray"), this.owned_ = void 0, this.legacyMode_ = void 0, this.atom_ = void 0, this.values_ = [], this.interceptors_ = void 0, this.changeListeners_ = void 0, this.enhancer_ = void 0, this.dehancer = void 0, this.proxy_ = void 0, this.lastKnownLength_ = 0, this.owned_ = i, this.legacyMode_ = o, this.atom_ = new De(r), this.enhancer_ = function(s, a) {
      return n(s, a, process.env.NODE_ENV !== "production" ? r + "[..]" : "ObservableArray[..]");
    };
  }
  var t = e.prototype;
  return t.dehanceValue_ = function(n) {
    return this.dehancer !== void 0 ? this.dehancer(n) : n;
  }, t.dehanceValues_ = function(n) {
    return this.dehancer !== void 0 && n.length > 0 ? n.map(this.dehancer) : n;
  }, t.intercept_ = function(n) {
    return xe(this, n);
  }, t.observe_ = function(n, i) {
    return i === void 0 && (i = !1), i && n({
      observableKind: "array",
      object: this.proxy_,
      debugObjectName: this.atom_.name_,
      type: "splice",
      index: 0,
      added: this.values_.slice(),
      addedCount: this.values_.length,
      removed: [],
      removedCount: 0
    }), Pe(this, n);
  }, t.getArrayLength_ = function() {
    return this.atom_.reportObserved(), this.values_.length;
  }, t.setArrayLength_ = function(n) {
    (typeof n != "number" || isNaN(n) || n < 0) && l("Out of range: " + n);
    var i = this.values_.length;
    if (n !== i)
      if (n > i) {
        for (var o = new Array(n - i), s = 0; s < n - i; s++)
          o[s] = void 0;
        this.spliceWithArray_(i, 0, o);
      } else
        this.spliceWithArray_(n, i - n);
  }, t.updateArrayLength_ = function(n, i) {
    n !== this.lastKnownLength_ && l(16), this.lastKnownLength_ += i, this.legacyMode_ && i > 0 && Gn(n + i + 1);
  }, t.spliceWithArray_ = function(n, i, o) {
    var s = this;
    $(this.atom_);
    var a = this.values_.length;
    if (n === void 0 ? n = 0 : n > a ? n = a : n < 0 && (n = Math.max(0, a + n)), arguments.length === 1 ? i = a - n : i == null ? i = 0 : i = Math.max(0, Math.min(i, a - n)), o === void 0 && (o = Ge), D(this)) {
      var u = V(this, {
        object: this.proxy_,
        type: Gt,
        index: n,
        removedCount: i,
        added: o
      });
      if (!u)
        return Ge;
      i = u.removedCount, o = u.added;
    }
    if (o = o.length === 0 ? o : o.map(function(v) {
      return s.enhancer_(v, void 0);
    }), this.legacyMode_ || process.env.NODE_ENV !== "production") {
      var f = o.length - i;
      this.updateArrayLength_(a, f);
    }
    var d = this.spliceItemsIntoValues_(n, i, o);
    return (i !== 0 || o.length !== 0) && this.notifyArraySplice_(n, o, d), this.dehanceValues_(d);
  }, t.spliceItemsIntoValues_ = function(n, i, o) {
    if (o.length < Vi) {
      var s;
      return (s = this.values_).splice.apply(s, [n, i].concat(o));
    } else {
      var a = this.values_.slice(n, n + i), u = this.values_.slice(n + i);
      this.values_.length += o.length - i;
      for (var f = 0; f < o.length; f++)
        this.values_[n + f] = o[f];
      for (var d = 0; d < u.length; d++)
        this.values_[n + o.length + d] = u[d];
      return a;
    }
  }, t.notifyArrayChildUpdate_ = function(n, i, o) {
    var s = !this.owned_ && O(), a = C(this), u = a || s ? {
      observableKind: "array",
      object: this.proxy_,
      type: R,
      debugObjectName: this.atom_.name_,
      index: n,
      newValue: i,
      oldValue: o
    } : null;
    process.env.NODE_ENV !== "production" && s && A(u), this.atom_.reportChanged(), a && B(this, u), process.env.NODE_ENV !== "production" && s && S();
  }, t.notifyArraySplice_ = function(n, i, o) {
    var s = !this.owned_ && O(), a = C(this), u = a || s ? {
      observableKind: "array",
      object: this.proxy_,
      debugObjectName: this.atom_.name_,
      type: Gt,
      index: n,
      removed: o,
      added: i,
      removedCount: o.length,
      addedCount: i.length
    } : null;
    process.env.NODE_ENV !== "production" && s && A(u), this.atom_.reportChanged(), a && B(this, u), process.env.NODE_ENV !== "production" && s && S();
  }, t.get_ = function(n) {
    if (this.legacyMode_ && n >= this.values_.length) {
      console.warn(process.env.NODE_ENV !== "production" ? "[mobx.array] Attempt to read an array index (" + n + ") that is out of bounds (" + this.values_.length + "). Please check length first. Out of bound indices will not be tracked by MobX" : "[mobx] Out of bounds read: " + n);
      return;
    }
    return this.atom_.reportObserved(), this.dehanceValue_(this.values_[n]);
  }, t.set_ = function(n, i) {
    var o = this.values_;
    if (this.legacyMode_ && n > o.length && l(17, n, o.length), n < o.length) {
      $(this.atom_);
      var s = o[n];
      if (D(this)) {
        var a = V(this, {
          type: R,
          object: this.proxy_,
          index: n,
          newValue: i
        });
        if (!a)
          return;
        i = a.newValue;
      }
      i = this.enhancer_(i, s);
      var u = i !== s;
      u && (o[n] = i, this.notifyArrayChildUpdate_(n, i, s));
    } else {
      for (var f = new Array(n + 1 - o.length), d = 0; d < f.length - 1; d++)
        f[d] = void 0;
      f[f.length - 1] = i, this.spliceWithArray_(o.length, 0, f);
    }
  }, e;
}();
function xi(e, t, r, n) {
  return r === void 0 && (r = process.env.NODE_ENV !== "production" ? "ObservableArray@" + L() : "ObservableArray"), n === void 0 && (n = !1), Zt(), ae(function() {
    var i = new xt(r, t, n, !1);
    en(i.values_, _, i);
    var o = new Proxy(i.values_, ji);
    return i.proxy_ = o, e && e.length && i.spliceWithArray_(0, 0, e), o;
  });
}
var We = {
  clear: function() {
    return this.splice(0);
  },
  replace: function(t) {
    var r = this[_];
    return r.spliceWithArray_(0, r.values_.length, t);
  },
  // Used by JSON.stringify
  toJSON: function() {
    return this.slice();
  },
  /*
   * functions that do alter the internal structure of the array, (based on lib.es6.d.ts)
   * since these functions alter the inner structure of the array, the have side effects.
   * Because the have side effects, they should not be used in computed function,
   * and for that reason the do not call dependencyState.notifyObserved
   */
  splice: function(t, r) {
    for (var n = arguments.length, i = new Array(n > 2 ? n - 2 : 0), o = 2; o < n; o++)
      i[o - 2] = arguments[o];
    var s = this[_];
    switch (arguments.length) {
      case 0:
        return [];
      case 1:
        return s.spliceWithArray_(t);
      case 2:
        return s.spliceWithArray_(t, r);
    }
    return s.spliceWithArray_(t, r, i);
  },
  spliceWithArray: function(t, r, n) {
    return this[_].spliceWithArray_(t, r, n);
  },
  push: function() {
    for (var t = this[_], r = arguments.length, n = new Array(r), i = 0; i < r; i++)
      n[i] = arguments[i];
    return t.spliceWithArray_(t.values_.length, 0, n), t.values_.length;
  },
  pop: function() {
    return this.splice(Math.max(this[_].values_.length - 1, 0), 1)[0];
  },
  shift: function() {
    return this.splice(0, 1)[0];
  },
  unshift: function() {
    for (var t = this[_], r = arguments.length, n = new Array(r), i = 0; i < r; i++)
      n[i] = arguments[i];
    return t.spliceWithArray_(0, 0, n), t.values_.length;
  },
  reverse: function() {
    return c.trackingDerivation && l(37, "reverse"), this.replace(this.slice().reverse()), this;
  },
  sort: function() {
    c.trackingDerivation && l(37, "sort");
    var t = this.slice();
    return t.sort.apply(t, arguments), this.replace(t), this;
  },
  remove: function(t) {
    var r = this[_], n = r.dehanceValues_(r.values_).indexOf(t);
    return n > -1 ? (this.splice(n, 1), !0) : !1;
  }
};
b("at", w);
b("concat", w);
b("flat", w);
b("includes", w);
b("indexOf", w);
b("join", w);
b("lastIndexOf", w);
b("slice", w);
b("toString", w);
b("toLocaleString", w);
b("toSorted", w);
b("toSpliced", w);
b("with", w);
b("every", M);
b("filter", M);
b("find", M);
b("findIndex", M);
b("findLast", M);
b("findLastIndex", M);
b("flatMap", M);
b("forEach", M);
b("map", M);
b("some", M);
b("toReversed", M);
b("reduce", Rn);
b("reduceRight", Rn);
function b(e, t) {
  typeof Array.prototype[e] == "function" && (We[e] = t(e));
}
function w(e) {
  return function() {
    var t = this[_];
    t.atom_.reportObserved();
    var r = t.dehanceValues_(t.values_);
    return r[e].apply(r, arguments);
  };
}
function M(e) {
  return function(t, r) {
    var n = this, i = this[_];
    i.atom_.reportObserved();
    var o = i.dehanceValues_(i.values_);
    return o[e](function(s, a) {
      return t.call(r, s, a, n);
    });
  };
}
function Rn(e) {
  return function() {
    var t = this, r = this[_];
    r.atom_.reportObserved();
    var n = r.dehanceValues_(r.values_), i = arguments[0];
    return arguments[0] = function(o, s, a) {
      return i(o, s, a, t);
    }, n[e].apply(n, arguments);
  };
}
var Pi = /* @__PURE__ */ oe("ObservableArrayAdministration", xt);
function Te(e) {
  return Ze(e) && Pi(e[_]);
}
var Cn, Bn, Ti = {}, H = "add", He = "delete";
Cn = Symbol.iterator;
Bn = Symbol.toStringTag;
var Ln = /* @__PURE__ */ function() {
  function e(r, n, i) {
    var o = this;
    n === void 0 && (n = te), i === void 0 && (i = process.env.NODE_ENV !== "production" ? "ObservableMap@" + L() : "ObservableMap"), this.enhancer_ = void 0, this.name_ = void 0, this[_] = Ti, this.data_ = void 0, this.hasMap_ = void 0, this.keysAtom_ = void 0, this.interceptors_ = void 0, this.changeListeners_ = void 0, this.dehancer = void 0, this.enhancer_ = n, this.name_ = i, g(Map) || l(18), ae(function() {
      o.keysAtom_ = on(process.env.NODE_ENV !== "production" ? o.name_ + ".keys()" : "ObservableMap.keys()"), o.data_ = /* @__PURE__ */ new Map(), o.hasMap_ = /* @__PURE__ */ new Map(), r && o.merge(r);
    });
  }
  var t = e.prototype;
  return t.has_ = function(n) {
    return this.data_.has(n);
  }, t.has = function(n) {
    var i = this;
    if (!c.trackingDerivation)
      return this.has_(n);
    var o = this.hasMap_.get(n);
    if (!o) {
      var s = o = new Q(this.has_(n), nt, process.env.NODE_ENV !== "production" ? this.name_ + "." + lt(n) + "?" : "ObservableMap.key?", !1);
      this.hasMap_.set(n, s), jn(s, function() {
        return i.hasMap_.delete(n);
      });
    }
    return o.get();
  }, t.set = function(n, i) {
    var o = this.has_(n);
    if (D(this)) {
      var s = V(this, {
        type: o ? R : H,
        object: this,
        newValue: i,
        name: n
      });
      if (!s)
        return this;
      i = s.newValue;
    }
    return o ? this.updateValue_(n, i) : this.addValue_(n, i), this;
  }, t.delete = function(n) {
    var i = this;
    if ($(this.keysAtom_), D(this)) {
      var o = V(this, {
        type: He,
        object: this,
        name: n
      });
      if (!o)
        return !1;
    }
    if (this.has_(n)) {
      var s = O(), a = C(this), u = a || s ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: He,
        object: this,
        oldValue: this.data_.get(n).value_,
        name: n
      } : null;
      return process.env.NODE_ENV !== "production" && s && A(u), q(function() {
        var f;
        i.keysAtom_.reportChanged(), (f = i.hasMap_.get(n)) == null || f.setNewValue_(!1);
        var d = i.data_.get(n);
        d.setNewValue_(void 0), i.data_.delete(n);
      }), a && B(this, u), process.env.NODE_ENV !== "production" && s && S(), !0;
    }
    return !1;
  }, t.updateValue_ = function(n, i) {
    var o = this.data_.get(n);
    if (i = o.prepareNewValue_(i), i !== c.UNCHANGED) {
      var s = O(), a = C(this), u = a || s ? {
        observableKind: "map",
        debugObjectName: this.name_,
        type: R,
        object: this,
        oldValue: o.value_,
        name: n,
        newValue: i
      } : null;
      process.env.NODE_ENV !== "production" && s && A(u), o.setNewValue_(i), a && B(this, u), process.env.NODE_ENV !== "production" && s && S();
    }
  }, t.addValue_ = function(n, i) {
    var o = this;
    $(this.keysAtom_), q(function() {
      var f, d = new Q(i, o.enhancer_, process.env.NODE_ENV !== "production" ? o.name_ + "." + lt(n) : "ObservableMap.key", !1);
      o.data_.set(n, d), i = d.value_, (f = o.hasMap_.get(n)) == null || f.setNewValue_(!0), o.keysAtom_.reportChanged();
    });
    var s = O(), a = C(this), u = a || s ? {
      observableKind: "map",
      debugObjectName: this.name_,
      type: H,
      object: this,
      name: n,
      newValue: i
    } : null;
    process.env.NODE_ENV !== "production" && s && A(u), a && B(this, u), process.env.NODE_ENV !== "production" && s && S();
  }, t.get = function(n) {
    return this.has(n) ? this.dehanceValue_(this.data_.get(n).get()) : this.dehanceValue_(void 0);
  }, t.dehanceValue_ = function(n) {
    return this.dehancer !== void 0 ? this.dehancer(n) : n;
  }, t.keys = function() {
    return this.keysAtom_.reportObserved(), this.data_.keys();
  }, t.values = function() {
    var n = this, i = this.keys();
    return Ae({
      next: function() {
        var s = i.next(), a = s.done, u = s.value;
        return {
          done: a,
          value: a ? void 0 : n.get(u)
        };
      }
    });
  }, t.entries = function() {
    var n = this, i = this.keys();
    return Ae({
      next: function() {
        var s = i.next(), a = s.done, u = s.value;
        return {
          done: a,
          value: a ? void 0 : [u, n.get(u)]
        };
      }
    });
  }, t[Cn] = function() {
    return this.entries();
  }, t.forEach = function(n, i) {
    for (var o = fe(this), s; !(s = o()).done; ) {
      var a = s.value, u = a[0], f = a[1];
      n.call(i, f, u, this);
    }
  }, t.merge = function(n) {
    var i = this;
    return k(n) && (n = new Map(n)), q(function() {
      F(n) ? Hn(n).forEach(function(o) {
        return i.set(o, n[o]);
      }) : Array.isArray(n) ? n.forEach(function(o) {
        var s = o[0], a = o[1];
        return i.set(s, a);
      }) : ve(n) ? (n.constructor !== Map && l(19, n), n.forEach(function(o, s) {
        return i.set(s, o);
      })) : n != null && l(20, n);
    }), this;
  }, t.clear = function() {
    var n = this;
    q(function() {
      bn(function() {
        for (var i = fe(n.keys()), o; !(o = i()).done; ) {
          var s = o.value;
          n.delete(s);
        }
      });
    });
  }, t.replace = function(n) {
    var i = this;
    return q(function() {
      for (var o = Ri(n), s = /* @__PURE__ */ new Map(), a = !1, u = fe(i.data_.keys()), f; !(f = u()).done; ) {
        var d = f.value;
        if (!o.has(d)) {
          var v = i.delete(d);
          if (v)
            a = !0;
          else {
            var p = i.data_.get(d);
            s.set(d, p);
          }
        }
      }
      for (var E = fe(o.entries()), ue; !(ue = E()).done; ) {
        var U = ue.value, I = U[0], Re = U[1], ut = i.data_.has(I);
        if (i.set(I, Re), i.data_.has(I)) {
          var ge = i.data_.get(I);
          s.set(I, ge), ut || (a = !0);
        }
      }
      if (!a)
        if (i.data_.size !== s.size)
          i.keysAtom_.reportChanged();
        else
          for (var N = i.data_.keys(), W = s.keys(), J = N.next(), Ct = W.next(); !J.done; ) {
            if (J.value !== Ct.value) {
              i.keysAtom_.reportChanged();
              break;
            }
            J = N.next(), Ct = W.next();
          }
      i.data_ = s;
    }), this;
  }, t.toString = function() {
    return "[object ObservableMap]";
  }, t.toJSON = function() {
    return Array.from(this);
  }, t.observe_ = function(n, i) {
    return process.env.NODE_ENV !== "production" && i === !0 && l("`observe` doesn't support fireImmediately=true in combination with maps."), Pe(this, n);
  }, t.intercept_ = function(n) {
    return xe(this, n);
  }, St(e, [{
    key: "size",
    get: function() {
      return this.keysAtom_.reportObserved(), this.data_.size;
    }
  }, {
    key: Bn,
    get: function() {
      return "Map";
    }
  }]), e;
}(), k = /* @__PURE__ */ oe("ObservableMap", Ln);
function Ri(e) {
  if (ve(e) || k(e))
    return e;
  if (Array.isArray(e))
    return new Map(e);
  if (F(e)) {
    var t = /* @__PURE__ */ new Map();
    for (var r in e)
      t.set(r, e[r]);
    return t;
  } else
    return l(21, e);
}
var Mn, Un, Ci = {};
Mn = Symbol.iterator;
Un = Symbol.toStringTag;
var In = /* @__PURE__ */ function() {
  function e(r, n, i) {
    var o = this;
    n === void 0 && (n = te), i === void 0 && (i = process.env.NODE_ENV !== "production" ? "ObservableSet@" + L() : "ObservableSet"), this.name_ = void 0, this[_] = Ci, this.data_ = /* @__PURE__ */ new Set(), this.atom_ = void 0, this.changeListeners_ = void 0, this.interceptors_ = void 0, this.dehancer = void 0, this.enhancer_ = void 0, this.name_ = i, g(Set) || l(22), this.enhancer_ = function(s, a) {
      return n(s, a, i);
    }, ae(function() {
      o.atom_ = on(o.name_), r && o.replace(r);
    });
  }
  var t = e.prototype;
  return t.dehanceValue_ = function(n) {
    return this.dehancer !== void 0 ? this.dehancer(n) : n;
  }, t.clear = function() {
    var n = this;
    q(function() {
      bn(function() {
        for (var i = fe(n.data_.values()), o; !(o = i()).done; ) {
          var s = o.value;
          n.delete(s);
        }
      });
    });
  }, t.forEach = function(n, i) {
    for (var o = fe(this), s; !(s = o()).done; ) {
      var a = s.value;
      n.call(i, a, a, this);
    }
  }, t.add = function(n) {
    var i = this;
    if ($(this.atom_), D(this)) {
      var o = V(this, {
        type: H,
        object: this,
        newValue: n
      });
      if (!o)
        return this;
    }
    if (!this.has(n)) {
      q(function() {
        i.data_.add(i.enhancer_(n, void 0)), i.atom_.reportChanged();
      });
      var s = process.env.NODE_ENV !== "production" && O(), a = C(this), u = a || s ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: H,
        object: this,
        newValue: n
      } : null;
      s && process.env.NODE_ENV !== "production" && A(u), a && B(this, u), s && process.env.NODE_ENV !== "production" && S();
    }
    return this;
  }, t.delete = function(n) {
    var i = this;
    if (D(this)) {
      var o = V(this, {
        type: He,
        object: this,
        oldValue: n
      });
      if (!o)
        return !1;
    }
    if (this.has(n)) {
      var s = process.env.NODE_ENV !== "production" && O(), a = C(this), u = a || s ? {
        observableKind: "set",
        debugObjectName: this.name_,
        type: He,
        object: this,
        oldValue: n
      } : null;
      return s && process.env.NODE_ENV !== "production" && A(u), q(function() {
        i.atom_.reportChanged(), i.data_.delete(n);
      }), a && B(this, u), s && process.env.NODE_ENV !== "production" && S(), !0;
    }
    return !1;
  }, t.has = function(n) {
    return this.atom_.reportObserved(), this.data_.has(this.dehanceValue_(n));
  }, t.entries = function() {
    var n = 0, i = Array.from(this.keys()), o = Array.from(this.values());
    return Ae({
      next: function() {
        var a = n;
        return n += 1, a < o.length ? {
          value: [i[a], o[a]],
          done: !1
        } : {
          done: !0
        };
      }
    });
  }, t.keys = function() {
    return this.values();
  }, t.values = function() {
    this.atom_.reportObserved();
    var n = this, i = 0, o = Array.from(this.data_.values());
    return Ae({
      next: function() {
        return i < o.length ? {
          value: n.dehanceValue_(o[i++]),
          done: !1
        } : {
          done: !0
        };
      }
    });
  }, t.replace = function(n) {
    var i = this;
    return pe(n) && (n = new Set(n)), q(function() {
      Array.isArray(n) ? (i.clear(), n.forEach(function(o) {
        return i.add(o);
      })) : Se(n) ? (i.clear(), n.forEach(function(o) {
        return i.add(o);
      })) : n != null && l("Cannot initialize set from " + n);
    }), this;
  }, t.observe_ = function(n, i) {
    return process.env.NODE_ENV !== "production" && i === !0 && l("`observe` doesn't support fireImmediately=true in combination with sets."), Pe(this, n);
  }, t.intercept_ = function(n) {
    return xe(this, n);
  }, t.toJSON = function() {
    return Array.from(this);
  }, t.toString = function() {
    return "[object ObservableSet]";
  }, t[Mn] = function() {
    return this.values();
  }, St(e, [{
    key: "size",
    get: function() {
      return this.atom_.reportObserved(), this.data_.size;
    }
  }, {
    key: Un,
    get: function() {
      return "Set";
    }
  }]), e;
}(), pe = /* @__PURE__ */ oe("ObservableSet", In), Ft = /* @__PURE__ */ Object.create(null), qt = "remove", yt = /* @__PURE__ */ function() {
  function e(r, n, i, o) {
    n === void 0 && (n = /* @__PURE__ */ new Map()), o === void 0 && (o = wr), this.target_ = void 0, this.values_ = void 0, this.name_ = void 0, this.defaultAnnotation_ = void 0, this.keysAtom_ = void 0, this.changeListeners_ = void 0, this.interceptors_ = void 0, this.proxy_ = void 0, this.isPlainObject_ = void 0, this.appliedAnnotations_ = void 0, this.pendingKeys_ = void 0, this.target_ = r, this.values_ = n, this.name_ = i, this.defaultAnnotation_ = o, this.keysAtom_ = new De(process.env.NODE_ENV !== "production" ? this.name_ + ".keys" : "ObservableObject.keys"), this.isPlainObject_ = F(this.target_), process.env.NODE_ENV !== "production" && !Fn(this.defaultAnnotation_) && l("defaultAnnotation must be valid annotation"), process.env.NODE_ENV !== "production" && (this.appliedAnnotations_ = {});
  }
  var t = e.prototype;
  return t.getObservablePropValue_ = function(n) {
    return this.values_.get(n).get();
  }, t.setObservablePropValue_ = function(n, i) {
    var o = this.values_.get(n);
    if (o instanceof re)
      return o.set(i), !0;
    if (D(this)) {
      var s = V(this, {
        type: R,
        object: this.proxy_ || this.target_,
        name: n,
        newValue: i
      });
      if (!s)
        return null;
      i = s.newValue;
    }
    if (i = o.prepareNewValue_(i), i !== c.UNCHANGED) {
      var a = C(this), u = process.env.NODE_ENV !== "production" && O(), f = a || u ? {
        type: R,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        oldValue: o.value_,
        name: n,
        newValue: i
      } : null;
      process.env.NODE_ENV !== "production" && u && A(f), o.setNewValue_(i), a && B(this, f), process.env.NODE_ENV !== "production" && u && S();
    }
    return !0;
  }, t.get_ = function(n) {
    return c.trackingDerivation && !P(this.target_, n) && this.has_(n), this.target_[n];
  }, t.set_ = function(n, i, o) {
    return o === void 0 && (o = !1), P(this.target_, n) ? this.values_.has(n) ? this.setObservablePropValue_(n, i) : o ? Reflect.set(this.target_, n, i) : (this.target_[n] = i, !0) : this.extend_(n, {
      value: i,
      enumerable: !0,
      writable: !0,
      configurable: !0
    }, this.defaultAnnotation_, o);
  }, t.has_ = function(n) {
    if (!c.trackingDerivation)
      return n in this.target_;
    this.pendingKeys_ || (this.pendingKeys_ = /* @__PURE__ */ new Map());
    var i = this.pendingKeys_.get(n);
    return i || (i = new Q(n in this.target_, nt, process.env.NODE_ENV !== "production" ? this.name_ + "." + lt(n) + "?" : "ObservableObject.key?", !1), this.pendingKeys_.set(n, i)), i.get();
  }, t.make_ = function(n, i) {
    if (i === !0 && (i = this.defaultAnnotation_), i !== !1) {
      if (kt(this, i, n), !(n in this.target_)) {
        var o;
        if ((o = this.target_[y]) != null && o[n])
          return;
        l(1, i.annotationType_, this.name_ + "." + n.toString());
      }
      for (var s = this.target_; s && s !== Je; ) {
        var a = Ke(s, n);
        if (a) {
          var u = i.make_(this, n, a, s);
          if (u === 0)
            return;
          if (u === 1)
            break;
        }
        s = Object.getPrototypeOf(s);
      }
      Xt(this, i, n);
    }
  }, t.extend_ = function(n, i, o, s) {
    if (s === void 0 && (s = !1), o === !0 && (o = this.defaultAnnotation_), o === !1)
      return this.defineProperty_(n, i, s);
    kt(this, o, n);
    var a = o.extend_(this, n, i, s);
    return a && Xt(this, o, n), a;
  }, t.defineProperty_ = function(n, i, o) {
    o === void 0 && (o = !1), $(this.keysAtom_);
    try {
      j();
      var s = this.delete_(n);
      if (!s)
        return s;
      if (D(this)) {
        var a = V(this, {
          object: this.proxy_ || this.target_,
          name: n,
          type: H,
          newValue: i.value
        });
        if (!a)
          return null;
        var u = a.newValue;
        i.value !== u && (i = X({}, i, {
          value: u
        }));
      }
      if (o) {
        if (!Reflect.defineProperty(this.target_, n, i))
          return !1;
      } else
        K(this.target_, n, i);
      this.notifyPropertyAddition_(n, i.value);
    } finally {
      x();
    }
    return !0;
  }, t.defineObservableProperty_ = function(n, i, o, s) {
    s === void 0 && (s = !1), $(this.keysAtom_);
    try {
      j();
      var a = this.delete_(n);
      if (!a)
        return a;
      if (D(this)) {
        var u = V(this, {
          object: this.proxy_ || this.target_,
          name: n,
          type: H,
          newValue: i
        });
        if (!u)
          return null;
        i = u.newValue;
      }
      var f = zt(n), d = {
        configurable: c.safeDescriptors ? this.isPlainObject_ : !0,
        enumerable: !0,
        get: f.get,
        set: f.set
      };
      if (s) {
        if (!Reflect.defineProperty(this.target_, n, d))
          return !1;
      } else
        K(this.target_, n, d);
      var v = new Q(i, o, process.env.NODE_ENV !== "production" ? this.name_ + "." + n.toString() : "ObservableObject.key", !1);
      this.values_.set(n, v), this.notifyPropertyAddition_(n, v.value_);
    } finally {
      x();
    }
    return !0;
  }, t.defineComputedProperty_ = function(n, i, o) {
    o === void 0 && (o = !1), $(this.keysAtom_);
    try {
      j();
      var s = this.delete_(n);
      if (!s)
        return s;
      if (D(this)) {
        var a = V(this, {
          object: this.proxy_ || this.target_,
          name: n,
          type: H,
          newValue: void 0
        });
        if (!a)
          return null;
      }
      i.name || (i.name = process.env.NODE_ENV !== "production" ? this.name_ + "." + n.toString() : "ObservableObject.key"), i.context = this.proxy_ || this.target_;
      var u = zt(n), f = {
        configurable: c.safeDescriptors ? this.isPlainObject_ : !0,
        enumerable: !1,
        get: u.get,
        set: u.set
      };
      if (o) {
        if (!Reflect.defineProperty(this.target_, n, f))
          return !1;
      } else
        K(this.target_, n, f);
      this.values_.set(n, new re(i)), this.notifyPropertyAddition_(n, void 0);
    } finally {
      x();
    }
    return !0;
  }, t.delete_ = function(n, i) {
    if (i === void 0 && (i = !1), $(this.keysAtom_), !P(this.target_, n))
      return !0;
    if (D(this)) {
      var o = V(this, {
        object: this.proxy_ || this.target_,
        name: n,
        type: qt
      });
      if (!o)
        return null;
    }
    try {
      var s, a;
      j();
      var u = C(this), f = process.env.NODE_ENV !== "production" && O(), d = this.values_.get(n), v = void 0;
      if (!d && (u || f)) {
        var p;
        v = (p = Ke(this.target_, n)) == null ? void 0 : p.value;
      }
      if (i) {
        if (!Reflect.deleteProperty(this.target_, n))
          return !1;
      } else
        delete this.target_[n];
      if (process.env.NODE_ENV !== "production" && delete this.appliedAnnotations_[n], d && (this.values_.delete(n), d instanceof Q && (v = d.value_), Nn(d)), this.keysAtom_.reportChanged(), (s = this.pendingKeys_) == null || (a = s.get(n)) == null || a.set(n in this.target_), u || f) {
        var E = {
          type: qt,
          observableKind: "object",
          object: this.proxy_ || this.target_,
          debugObjectName: this.name_,
          oldValue: v,
          name: n
        };
        process.env.NODE_ENV !== "production" && f && A(E), u && B(this, E), process.env.NODE_ENV !== "production" && f && S();
      }
    } finally {
      x();
    }
    return !0;
  }, t.observe_ = function(n, i) {
    return process.env.NODE_ENV !== "production" && i === !0 && l("`observe` doesn't support the fire immediately property for observable objects."), Pe(this, n);
  }, t.intercept_ = function(n) {
    return xe(this, n);
  }, t.notifyPropertyAddition_ = function(n, i) {
    var o, s, a = C(this), u = process.env.NODE_ENV !== "production" && O();
    if (a || u) {
      var f = a || u ? {
        type: H,
        observableKind: "object",
        debugObjectName: this.name_,
        object: this.proxy_ || this.target_,
        name: n,
        newValue: i
      } : null;
      process.env.NODE_ENV !== "production" && u && A(f), a && B(this, f), process.env.NODE_ENV !== "production" && u && S();
    }
    (o = this.pendingKeys_) == null || (s = o.get(n)) == null || s.set(!0), this.keysAtom_.reportChanged();
  }, t.ownKeys_ = function() {
    return this.keysAtom_.reportObserved(), et(this.target_);
  }, t.keys_ = function() {
    return this.keysAtom_.reportObserved(), Object.keys(this.target_);
  }, e;
}();
function be(e, t) {
  var r;
  if (process.env.NODE_ENV !== "production" && t && _e(e) && l("Options can't be provided for already observable objects."), P(e, _))
    return process.env.NODE_ENV !== "production" && !(Tt(e) instanceof yt) && l("Cannot convert '" + Ye(e) + `' into observable object:
The target is already observable of different type.
Extending builtins is not supported.`), e;
  process.env.NODE_ENV !== "production" && !Object.isExtensible(e) && l("Cannot make the designated object observable; it is not extensible");
  var n = (r = t == null ? void 0 : t.name) != null ? r : process.env.NODE_ENV !== "production" ? (F(e) ? "ObservableObject" : e.constructor.name) + "@" + L() : "ObservableObject", i = new yt(e, /* @__PURE__ */ new Map(), String(n), Mr(t));
  return Qe(e, _, i), e;
}
var Bi = /* @__PURE__ */ oe("ObservableObjectAdministration", yt);
function zt(e) {
  return Ft[e] || (Ft[e] = {
    get: function() {
      return this[_].getObservablePropValue_(e);
    },
    set: function(r) {
      return this[_].setObservablePropValue_(e, r);
    }
  });
}
function _e(e) {
  return Ze(e) ? Bi(e[_]) : !1;
}
function Xt(e, t, r) {
  var n;
  process.env.NODE_ENV !== "production" && (e.appliedAnnotations_[r] = t), (n = e.target_[y]) == null || delete n[r];
}
function kt(e, t, r) {
  if (process.env.NODE_ENV !== "production" && !Fn(t) && l("Cannot annotate '" + e.name_ + "." + r.toString() + "': Invalid annotation."), process.env.NODE_ENV !== "production" && !qe(t) && P(e.appliedAnnotations_, r)) {
    var n = e.name_ + "." + r.toString(), i = e.appliedAnnotations_[r].annotationType_, o = t.annotationType_;
    l("Cannot apply '" + o + "' to '" + n + "':" + (`
The field is already annotated with '` + i + "'.") + `
Re-annotating fields is not allowed.
Use 'override' annotation for methods overridden by subclass.`);
  }
}
var Li = /* @__PURE__ */ Kn(0), Mi = /* @__PURE__ */ function() {
  var e = !1, t = {};
  return Object.defineProperty(t, "0", {
    set: function() {
      e = !0;
    }
  }), Object.create(t)[0] = 1, e === !1;
}(), ft = 0, $n = function() {
};
function Ui(e, t) {
  Object.setPrototypeOf ? Object.setPrototypeOf(e.prototype, t) : e.prototype.__proto__ !== void 0 ? e.prototype.__proto__ = t : e.prototype = t;
}
Ui($n, Array.prototype);
var Pt = /* @__PURE__ */ function(e, t, r) {
  rn(n, e);
  function n(o, s, a, u) {
    var f;
    return a === void 0 && (a = process.env.NODE_ENV !== "production" ? "ObservableArray@" + L() : "ObservableArray"), u === void 0 && (u = !1), f = e.call(this) || this, ae(function() {
      var d = new xt(a, s, u, !0);
      d.proxy_ = Me(f), en(Me(f), _, d), o && o.length && f.spliceWithArray(0, 0, o), Mi && Object.defineProperty(Me(f), "0", Li);
    }), f;
  }
  var i = n.prototype;
  return i.concat = function() {
    this[_].atom_.reportObserved();
    for (var s = arguments.length, a = new Array(s), u = 0; u < s; u++)
      a[u] = arguments[u];
    return Array.prototype.concat.apply(
      this.slice(),
      //@ts-ignore
      a.map(function(f) {
        return Te(f) ? f.slice() : f;
      })
    );
  }, i[r] = function() {
    var o = this, s = 0;
    return Ae({
      next: function() {
        return s < o.length ? {
          value: o[s++],
          done: !1
        } : {
          done: !0,
          value: void 0
        };
      }
    });
  }, St(n, [{
    key: "length",
    get: function() {
      return this[_].getArrayLength_();
    },
    set: function(s) {
      this[_].setArrayLength_(s);
    }
  }, {
    key: t,
    get: function() {
      return "Array";
    }
  }]), n;
}($n, Symbol.toStringTag, Symbol.iterator);
Object.entries(We).forEach(function(e) {
  var t = e[0], r = e[1];
  t !== "concat" && Qe(Pt.prototype, t, r);
});
function Kn(e) {
  return {
    enumerable: !1,
    configurable: !0,
    get: function() {
      return this[_].get_(e);
    },
    set: function(r) {
      this[_].set_(e, r);
    }
  };
}
function Ii(e) {
  K(Pt.prototype, "" + e, Kn(e));
}
function Gn(e) {
  if (e > ft) {
    for (var t = ft; t < e + 100; t++)
      Ii(t);
    ft = e;
  }
}
Gn(1e3);
function $i(e, t, r) {
  return new Pt(e, t, r);
}
function Y(e, t) {
  if (typeof e == "object" && e !== null) {
    if (Te(e))
      return t !== void 0 && l(23), e[_].atom_;
    if (pe(e))
      return e.atom_;
    if (k(e)) {
      if (t === void 0)
        return e.keysAtom_;
      var r = e.data_.get(t) || e.hasMap_.get(t);
      return r || l(25, t, Ye(e)), r;
    }
    if (_e(e)) {
      if (!t)
        return l(26);
      var n = e[_].values_.get(t);
      return n || l(27, t, Ye(e)), n;
    }
    if (wt(e) || at(e) || ke(e))
      return e;
  } else if (g(e) && ke(e[_]))
    return e[_];
  l(28);
}
function Tt(e, t) {
  if (e || l(29), t !== void 0)
    return Tt(Y(e, t));
  if (wt(e) || at(e) || ke(e) || k(e) || pe(e))
    return e;
  if (e[_])
    return e[_];
  l(24, e);
}
function Ye(e, t) {
  var r;
  if (t !== void 0)
    r = Y(e, t);
  else {
    if (je(e))
      return e.name;
    _e(e) || k(e) || pe(e) ? r = Tt(e) : r = Y(e);
  }
  return r.name_;
}
function ae(e) {
  var t = se(), r = ot(!0);
  j();
  try {
    return e();
  } finally {
    x(), st(r), z(t);
  }
}
var Wt = Je.toString;
function Rt(e, t, r) {
  return r === void 0 && (r = -1), Et(e, t, r);
}
function Et(e, t, r, n, i) {
  if (e === t)
    return e !== 0 || 1 / e === 1 / t;
  if (e == null || t == null)
    return !1;
  if (e !== e)
    return t !== t;
  var o = typeof e;
  if (o !== "function" && o !== "object" && typeof t != "object")
    return !1;
  var s = Wt.call(e);
  if (s !== Wt.call(t))
    return !1;
  switch (s) {
    case "[object RegExp]":
    case "[object String]":
      return "" + e == "" + t;
    case "[object Number]":
      return +e != +e ? +t != +t : +e == 0 ? 1 / +e === 1 / t : +e == +t;
    case "[object Date]":
    case "[object Boolean]":
      return +e == +t;
    case "[object Symbol]":
      return typeof Symbol < "u" && Symbol.valueOf.call(e) === Symbol.valueOf.call(t);
    case "[object Map]":
    case "[object Set]":
      r >= 0 && r++;
      break;
  }
  e = Ht(e), t = Ht(t);
  var a = s === "[object Array]";
  if (!a) {
    if (typeof e != "object" || typeof t != "object")
      return !1;
    var u = e.constructor, f = t.constructor;
    if (u !== f && !(g(u) && u instanceof u && g(f) && f instanceof f) && "constructor" in e && "constructor" in t)
      return !1;
  }
  if (r === 0)
    return !1;
  r < 0 && (r = -1), n = n || [], i = i || [];
  for (var d = n.length; d--; )
    if (n[d] === e)
      return i[d] === t;
  if (n.push(e), i.push(t), a) {
    if (d = e.length, d !== t.length)
      return !1;
    for (; d--; )
      if (!Et(e[d], t[d], r - 1, n, i))
        return !1;
  } else {
    var v = Object.keys(e), p;
    if (d = v.length, Object.keys(t).length !== d)
      return !1;
    for (; d--; )
      if (p = v[d], !(P(t, p) && Et(e[p], t[p], r - 1, n, i)))
        return !1;
  }
  return n.pop(), i.pop(), !0;
}
function Ht(e) {
  return Te(e) ? e.slice() : ve(e) || k(e) || Se(e) || pe(e) ? Array.from(e.entries()) : e;
}
function Ae(e) {
  return e[Symbol.iterator] = Ki, e;
}
function Ki() {
  return this;
}
function Fn(e) {
  return (
    // Can be function
    e instanceof Object && typeof e.annotationType_ == "string" && g(e.make_) && g(e.extend_)
  );
}
["Symbol", "Map", "Set"].forEach(function(e) {
  var t = Nt();
  typeof t[e] > "u" && l("MobX requires global '" + e + "' to be available or polyfilled");
});
typeof __MOBX_DEVTOOLS_GLOBAL_HOOK__ == "object" && __MOBX_DEVTOOLS_GLOBAL_HOOK__.injectMobx({
  spy: ii,
  extras: {
    getDebugName: Ye
  },
  $mobx: _
});
export {
  bt as R,
  le as a,
  qi as b,
  it as c,
  Gi as d,
  Fi as e,
  mi as g,
  zi as m,
  m as o
};
