import '../assets/index25.css';
var m = Object.defineProperty;
var p = (l, t, e) => t in l ? m(l, t, { enumerable: !0, configurable: !0, writable: !0, value: e }) : l[t] = e;
var a = (l, t, e) => (p(l, typeof t != "symbol" ? t + "" : t, e), e);
import { jsxs as h, jsx as i } from "react/jsx-runtime";
import { c as f } from "../index-DWRHnq8_.js";
import { l as s } from "../lodash-IPxMcogW.js";
import { Component as v } from "react";
import { SelectBoxComponent as N } from "./SelectBox.js";
import { m as d } from "../mergeStyle-CWZcmjsX.js";
import { Chip as b } from "../Chip/Chip.js";
const x = "theme-module__value__N3180", S = "theme-module__label__N3180", C = "theme-module__required__N3180", V = "theme-module__values__N3180", y = "theme-module__disabled__N3180", B = "theme-module__selected__N3180", L = "theme-module__focused__N3180", g = "theme-module__dropdown__N3180", U = "theme-module__active__N3180", A = "theme-module__up__N3180", w = "theme-module__templateValue__N3180", T = "theme-module__field__N3180", D = "theme-module__errored__N3180", $ = "theme-module__error__N3180", q = {
  value: x,
  label: S,
  required: C,
  values: V,
  disabled: y,
  selected: B,
  focused: L,
  dropdown: g,
  active: U,
  up: A,
  templateValue: w,
  field: T,
  errored: D,
  error: $
}, j = "SelectBox-module__Title__VULi0", k = "SelectBox-module__Title__VULi0", E = "SelectBox-module__value__VULi0", O = "SelectBox-module__caption__VULi0", P = "SelectBox-module__caption_disabled__VULi0", z = "SelectBox-module__caption_disabled__VULi0", F = "SelectBox-module__values__VULi0", G = "SelectBox-module__selected__VULi0", H = "SelectBox-module__disabled__VULi0", I = {
  Title: j,
  title: k,
  value: E,
  caption: O,
  caption_disabled: P,
  captionDisabled: z,
  values: F,
  selected: G,
  disabled: H
};
class Z extends v {
  constructor() {
    super(...arguments);
    a(this, "onChange", (e, o) => {
      let n = e;
      this.props.multiSelect && Array.isArray(this.props.value) && (n = [...this.props.value, e]), this.props.onChange && this.props.onChange(n, o);
    });
  }
  render() {
    const {
      label: e,
      className: o,
      multiSelect: n,
      theme: _ = {},
      ...c
    } = this.props;
    let r = d(I, _);
    r = d(q, r);
    const u = f(o, _.Container ?? {});
    return /* @__PURE__ */ h("div", { className: u, children: [
      /* @__PURE__ */ i("div", { className: r.Title, children: e }),
      /* @__PURE__ */ i(
        N,
        {
          ...c,
          theme: r,
          auto: !1,
          source: this.elements,
          onChange: this.onChange
        }
      ),
      this.renderChip()
    ] });
  }
  renderChip() {
    return this.props.multiSelect ? /* @__PURE__ */ i("div", { children: this.renderList() }) : null;
  }
  renderList() {
    return Array.isArray(this.props.value) ? s.map(this.props.value, (e) => {
      const o = s.find(this.source, { value: e });
      return o ? /* @__PURE__ */ i(
        b,
        {
          onDeleteClick: () => this.onDelete(e),
          deletable: !0,
          children: o.label
        },
        e
      ) : null;
    }) : null;
  }
  onDelete(e) {
    if (!Array.isArray(this.props.value))
      return;
    const o = s.without(this.props.value, e);
    this.props.onChange && this.props.onChange(o);
  }
  get elements() {
    return this.props.multiSelect && Array.isArray(this.props.value) ? s.filter(this.source, (e) => s.indexOf(
      this.props.value,
      e.value
    ) == -1) : this.source;
  }
  get source() {
    return this.props.source || [];
  }
}
export {
  Z as SelectBox
};
