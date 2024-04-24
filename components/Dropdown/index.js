import '../assets/index29.css';
var ne = Object.defineProperty;
var ie = (e, n, t) => n in e ? ne(e, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[n] = t;
var y = (e, n, t) => (ie(e, typeof n != "symbol" ? n + "" : n, t), t);
import { jsx as T } from "react/jsx-runtime";
import { c as w } from "../index-DWRHnq8_.js";
import { w as oe, K, c as L, s as W, _ as ae, a as re, T as le, b as se, d as ce } from "../KeyCode-CgN7iLd1.js";
import * as F from "react";
import i, { forwardRef as fe, useMemo as ue } from "react";
import { K as ve } from "../KeyboardKeyList-CVetZNNA.js";
var de = K.ESC, me = K.TAB;
function he(e) {
  var n = e.visible, t = e.triggerRef, l = e.onVisibleChange, s = e.autoFocus, o = e.overlayRef, a = F.useRef(!1), c = function() {
    if (n) {
      var r, f;
      (r = t.current) === null || r === void 0 || (f = r.focus) === null || f === void 0 || f.call(r), l == null || l(!1);
    }
  }, p = function() {
    var r;
    return (r = o.current) !== null && r !== void 0 && r.focus ? (o.current.focus(), a.current = !0, !0) : !1;
  }, g = function(r) {
    switch (r.keyCode) {
      case de:
        c();
        break;
      case me: {
        var f = !1;
        a.current || (f = p()), f ? r.preventDefault() : c();
        break;
      }
    }
  };
  F.useEffect(function() {
    return n ? (window.addEventListener("keydown", g), s && oe(p, 3), function() {
      window.removeEventListener("keydown", g), a.current = !1;
    }) : function() {
      a.current = !1;
    };
  }, [n]);
}
var pe = /* @__PURE__ */ fe(function(e, n) {
  var t = e.overlay, l = e.arrow, s = e.prefixCls, o = ue(function() {
    var c;
    return typeof t == "function" ? c = t() : c = t, c;
  }, [t]), a = L(n, o == null ? void 0 : o.ref);
  return /* @__PURE__ */ i.createElement(i.Fragment, null, l && /* @__PURE__ */ i.createElement("div", {
    className: "".concat(s, "-arrow")
  }), /* @__PURE__ */ i.cloneElement(o, {
    ref: W(o) ? a : void 0
  }));
}), v = {
  adjustX: 1,
  adjustY: 1
}, d = [0, 0], ge = {
  topLeft: {
    points: ["bl", "tl"],
    overflow: v,
    offset: [0, -4],
    targetOffset: d
  },
  top: {
    points: ["bc", "tc"],
    overflow: v,
    offset: [0, -4],
    targetOffset: d
  },
  topRight: {
    points: ["br", "tr"],
    overflow: v,
    offset: [0, -4],
    targetOffset: d
  },
  bottomLeft: {
    points: ["tl", "bl"],
    overflow: v,
    offset: [0, 4],
    targetOffset: d
  },
  bottom: {
    points: ["tc", "bc"],
    overflow: v,
    offset: [0, 4],
    targetOffset: d
  },
  bottomRight: {
    points: ["tr", "br"],
    overflow: v,
    offset: [0, 4],
    targetOffset: d
  }
}, be = ["arrow", "prefixCls", "transitionName", "animation", "align", "placement", "placements", "getPopupContainer", "showAction", "hideAction", "overlayClassName", "overlayStyle", "visible", "trigger", "autoFocus", "overlay", "children", "onVisibleChange"];
function Ce(e, n) {
  var t, l = e.arrow, s = l === void 0 ? !1 : l, o = e.prefixCls, a = o === void 0 ? "rc-dropdown" : o, c = e.transitionName, p = e.animation, g = e.align, m = e.placement, r = m === void 0 ? "bottomLeft" : m, f = e.placements, j = f === void 0 ? ge : f, $ = e.getPopupContainer, G = e.showAction, I = e.hideAction, z = e.overlayClassName, B = e.overlayStyle, H = e.visible, N = e.trigger, E = N === void 0 ? ["hover"] : N, U = e.autoFocus, A = e.overlay, b = e.children, O = e.onVisibleChange, X = ae(e, be), Y = i.useState(), M = re(Y, 2), q = M[0], k = M[1], V = "visible" in e ? H : q, P = i.useRef(null), _ = i.useRef(null), x = i.useRef(null);
  i.useImperativeHandle(n, function() {
    return P.current;
  });
  var S = function(u) {
    k(u), O == null || O(u);
  };
  he({
    visible: V,
    triggerRef: x,
    onVisibleChange: S,
    autoFocus: U,
    overlayRef: _
  });
  var J = function(u) {
    var C = e.onOverlayClick;
    k(!1), C && C(u);
  }, D = function() {
    return /* @__PURE__ */ i.createElement(pe, {
      ref: _,
      overlay: A,
      prefixCls: a,
      arrow: s
    });
  }, Q = function() {
    return typeof A == "function" ? D : D();
  }, Z = function() {
    var u = e.minOverlayWidthMatchTrigger, C = e.alignPoint;
    return "minOverlayWidthMatchTrigger" in e ? u : !C;
  }, ee = function() {
    var u = e.openClassName;
    return u !== void 0 ? u : "".concat(a, "-open");
  }, te = /* @__PURE__ */ i.cloneElement(b, {
    className: w((t = b.props) === null || t === void 0 ? void 0 : t.className, V && ee()),
    ref: W(b) ? L(x, b.ref) : void 0
  }), R = I;
  return !R && E.indexOf("contextMenu") !== -1 && (R = ["click"]), /* @__PURE__ */ i.createElement(le, se({
    builtinPlacements: j
  }, X, {
    prefixCls: a,
    ref: P,
    popupClassName: w(z, ce({}, "".concat(a, "-show-arrow"), s)),
    popupStyle: B,
    action: E,
    showAction: G,
    hideAction: R,
    popupPlacement: r,
    popupAlign: g,
    popupTransitionName: c,
    popupAnimation: p,
    popupVisible: V,
    stretch: Z() ? "minWidth" : "",
    popup: Q(),
    onPopupVisibleChange: S,
    onPopupClick: J,
    getPopupContainer: $
  }), te);
}
const ye = /* @__PURE__ */ i.forwardRef(Ce), we = "Dropdown-module__Container__3VczI", Oe = "Dropdown-module__Container__3VczI", Ve = {
  Container: we,
  container: Oe
};
class Pe extends i.PureComponent {
  constructor(t) {
    super(t);
    y(this, "onVisibleChange", (t) => {
      this.props.onVisibleChange && this.props.onVisibleChange(t), this.setState({ visible: t });
    });
    y(this, "onOverlayClick", () => {
      this.props.closeOnSelect !== !1 && this.onVisibleChange(!1);
    });
    y(this, "onGlobalKeyDown", (t) => {
      this.state.visible && t.key === ve.ESCAPE && this.onVisibleChange(!1);
    });
    this.state = {
      visible: t.visible ?? !1,
      lastVisible: t.visible ?? !1
    }, document.addEventListener("keydown", this.onGlobalKeyDown);
  }
  componentWillUnmount() {
    document.removeEventListener("keydown", this.onGlobalKeyDown);
  }
  static getDerivedStateFromProps(t, l) {
    const s = t.visible ?? !1;
    return s !== l.lastVisible ? { visible: s, lastVisible: s } : null;
  }
  render() {
    const {
      visible: t,
      onVisibleChange: l,
      closeOnSelect: s,
      ...o
    } = this.props;
    if (this.props.disabled)
      return this.props.children;
    const a = w(this.props.className, Ve.Container), c = w(this.props.overlayClassName, "wg-dropdown");
    return /* @__PURE__ */ T("div", { className: a, children: /* @__PURE__ */ T(
      ye,
      {
        visible: this.state.visible,
        onVisibleChange: this.onVisibleChange,
        onOverlayClick: this.onOverlayClick,
        ...o,
        overlayClassName: c
      }
    ) });
  }
}
export {
  Pe as Dropdown
};
