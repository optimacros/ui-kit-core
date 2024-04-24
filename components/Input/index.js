import '../assets/index26.css';
var F = Object.defineProperty;
var q = (a, s, e) => s in a ? F(a, s, { enumerable: !0, configurable: !0, writable: !0, value: e }) : a[s] = e;
var p = (a, s, e) => (q(a, typeof s != "symbol" ? s + "" : s, e), e);
import { jsxs as x, jsx as r } from "react/jsx-runtime";
import { c as N } from "../index-DWRHnq8_.js";
import { l as d } from "../lodash-IPxMcogW.js";
import D from "react";
import { m as v } from "../mergeStyle-CWZcmjsX.js";
import { i as B } from "../utils-C_7PwjZI.js";
import { FontIcon as U } from "../FontIcon/FontIcon.js";
const R = "theme-module__input__D7Bzj", W = "theme-module__withIcon__D7Bzj", V = "theme-module__icon__D7Bzj", H = "theme-module__inputElement__D7Bzj", M = "theme-module__bar__D7Bzj", O = "theme-module__label__D7Bzj", k = "theme-module__fixed__D7Bzj", G = "theme-module__required__D7Bzj", J = "theme-module__hint__D7Bzj", Q = "theme-module__filled__D7Bzj", X = "theme-module__error__D7Bzj", Y = "theme-module__counter__D7Bzj", Z = "theme-module__disabled__D7Bzj", ee = "theme-module__errored__D7Bzj", te = "theme-module__hidden__D7Bzj", ne = "theme-module__oneLineError__D7Bzj", oe = {
  input: R,
  withIcon: W,
  icon: V,
  inputElement: H,
  bar: M,
  label: O,
  fixed: k,
  required: G,
  hint: J,
  filled: Q,
  error: X,
  counter: Y,
  disabled: Z,
  errored: ee,
  hidden: te,
  oneLineError: ne
}, ie = "Input-module__input__mKgI2", se = "Input-module__inputElement__mKgI2", le = "Input-module__label__mKgI2", re = "Input-module__fixed__mKgI2", ae = "Input-module__bar__mKgI2", de = "Input-module__hint__mKgI2", ue = "Input-module__collapsed__mKgI2", me = {
  input: ie,
  inputElement: se,
  label: le,
  fixed: re,
  bar: ae,
  hint: de,
  collapsed: ue
};
class xe extends D.Component {
  constructor(e) {
    super(e);
    p(this, "inputNode");
    p(this, "handleChange", (e) => {
      const { onChange: n, multiline: o, maxLength: l } = this.props, i = e.target, u = i.value, _ = o && l && i.value.length > l ? u.substring(0, l) : u;
      n && n(_, e);
    });
    p(this, "handleAutoresize", () => {
      const e = this.inputNode.current;
      if (e)
        if (!d.isUndefined(this.props.rows))
          e.style.height = "none";
        else {
          const n = window.getComputedStyle(e, null), o = n.boxSizing === "content-box" ? -(parseFloat(n.paddingTop) + parseFloat(n.paddingBottom)) : parseFloat(n.borderTopWidth) + parseFloat(n.borderBottomWidth);
          e.style.height = "auto", e.style.height = `${e.scrollHeight + o}px`;
        }
    });
    p(this, "handleKeyPress", (e) => {
      const {
        multiline: n,
        maxLength: o,
        onKeyPress: l
      } = this.props;
      if (n && o) {
        const i = e.target;
        if (d.isNull(i.selectionEnd) || d.isNull(i.selectionStart))
          return;
        if (!(i.selectionEnd - i.selectionStart) && i.value.length === o) {
          e.preventDefault(), e.stopPropagation();
          return;
        }
      }
      l && l(e);
    });
    this.inputNode = D.createRef();
  }
  componentDidMount() {
    this.props.multiline && (window.addEventListener("resize", this.handleAutoresize), this.handleAutoresize());
  }
  componentDidUpdate(e) {
    this.props.multiline && (window.addEventListener("resize", this.handleAutoresize), this.handleAutoresize()), !this.props.multiline && e.multiline ? window.addEventListener("resize", this.handleAutoresize) : this.props.multiline && !e.multiline && window.removeEventListener("resize", this.handleAutoresize);
  }
  componentWillUnmount() {
    this.props.multiline && window.removeEventListener("resize", this.handleAutoresize);
  }
  render() {
    const {
      children: e,
      name: n,
      value: o,
      role: l = "input",
      type: i = "text",
      rows: u = 1,
      collapsed: g = !1,
      disabled: _ = !1,
      multiline: E = !1,
      required: w = !1,
      floating: y = !0,
      defaultValue: I,
      error: m,
      oneLineError: b,
      hint: j = "",
      icon: z,
      label: L,
      maxLength: f,
      theme: K,
      onKeyPress: T,
      ...A
    } = this.props, S = !d.isUndefined(f) && !d.isUndefined(o) ? o.toString().length : 0, h = g ? "" : L;
    let t = v(oe, K);
    t = v(t, me);
    const C = N(t.label, {
      [t.fixed]: !y
    }), P = N(
      t.input,
      {
        [t.collapsed]: g,
        [t.disabled]: _,
        [t.errored]: m,
        [t.oneLineError]: b,
        [t.hidden]: i === "hidden",
        [t.withIcon]: z
      },
      this.props.className
    ), $ = B(o) || B(I), c = {
      ...A,
      className: N(t.inputElement, {
        [t.filled]: $
      }),
      onChange: this.handleChange,
      ref: this.inputNode,
      role: l,
      name: n,
      defaultValue: I,
      disabled: _,
      required: w,
      type: i,
      value: d.isNull(o) ? "" : o
    };
    return E ? (c.rows = u, c.onKeyDown = this.handleKeyPress) : (c.maxLength = f, c.onKeyDown = T), /* @__PURE__ */ x(
      "div",
      {
        "data-react-toolbox": "input",
        className: P,
        children: [
          D.createElement(
            E ? "textarea" : "input",
            c
          ),
          z && /* @__PURE__ */ r(
            U,
            {
              className: t.icon,
              value: z
            }
          ),
          /* @__PURE__ */ r("span", { className: t.bar }),
          h && /* @__PURE__ */ x(
            "label",
            {
              title: typeof h == "string" ? h : "",
              className: C,
              children: [
                h,
                w && /* @__PURE__ */ r("span", { className: t.required, children: " * " })
              ]
            }
          ),
          j && /* @__PURE__ */ r(
            "span",
            {
              hidden: !!h,
              className: t.hint,
              children: j
            }
          ),
          !b && m && /* @__PURE__ */ r("span", { className: t.error, children: m }),
          b && m ? /* @__PURE__ */ r("div", { className: t.error, children: m }) : /* @__PURE__ */ r("div", { className: t.hidden }),
          f && /* @__PURE__ */ x("span", { className: t.counter, children: [
            S,
            "/",
            f
          ] })
        ]
      }
    );
  }
  blur() {
    var e;
    (e = this.inputNode.current) == null || e.blur();
  }
  focus() {
    var e;
    (e = this.inputNode.current) == null || e.focus();
  }
}
export {
  xe as Input
};
