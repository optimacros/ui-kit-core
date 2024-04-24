import '../assets/index16.css';
var u = Object.defineProperty;
var m = (o, n, t) => n in o ? u(o, n, { enumerable: !0, configurable: !0, writable: !0, value: t }) : o[n] = t;
var p = (o, n, t) => (m(o, typeof n != "symbol" ? n + "" : n, t), t);
import { jsx as e } from "react/jsx-runtime";
import { c as _ } from "../index-DWRHnq8_.js";
import c from "react";
const l = "Counter-module__Counter__BpzW6", C = "Counter-module__Counter__BpzW6", d = "Counter-module__Empty__BpzW6", v = "Counter-module__Empty__BpzW6", h = "Counter-module__NavigationLink__BpzW6", g = "Counter-module__NavigationLink__BpzW6", r = {
  Counter: l,
  counter: C,
  Empty: d,
  empty: v,
  NavigationLink: h,
  navigationLink: g
};
class L extends c.Component {
  constructor() {
    super(...arguments);
    p(this, "renderCounter", () => {
      const t = this.props.value, i = this.props.maxValue ?? 1 / 0, s = t === 0, a = _({
        [r.Counter]: !0,
        [r.Empty]: s
      }, this.props.className);
      return s ? /* @__PURE__ */ e("span", { className: a }) : t > 0 ? /* @__PURE__ */ e("span", { className: a, children: t <= i ? t : `${i}+` }) : null;
    });
  }
  render() {
    if (this.props.route && this.props.navigationComponent) {
      const t = this.props.navigationComponent;
      return /* @__PURE__ */ e(
        t,
        {
          route: this.props.route,
          className: r.NavigationLink,
          children: this.renderCounter()
        }
      );
    }
    return this.renderCounter();
  }
}
export {
  L as Counter
};
