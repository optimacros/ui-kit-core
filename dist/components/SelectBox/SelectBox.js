var w = Object.defineProperty;
var C = (c, l, e) => l in c ? w(c, l, { enumerable: !0, configurable: !0, writable: !0, value: e }) : c[l] = e;
var r = (c, l, e) => (C(c, typeof l != "symbol" ? l + "" : l, e), e);
import { jsxs as v, jsx as h } from "react/jsx-runtime";
import { c as b } from "../index-DWRHnq8_.js";
import { l as k } from "../lodash-IPxMcogW.js";
import x, { Component as S } from "react";
import { K as u } from "../KeyboardKeyList-CVetZNNA.js";
import { e as I } from "../events-CBrNWrpo.js";
import { Input as D } from "../Input/index.js";
class T extends S {
  constructor(e) {
    super(e);
    r(this, "state", {
      active: !1,
      up: !1,
      focusedItemIndex: void 0
    });
    r(this, "refNode");
    r(this, "dropdownNode");
    r(this, "renderValue", (e, t) => {
      const { labelKey: o, theme: s, valueKey: i } = this.props, { focusedItemIndex: a } = this.state, f = b({
        [s.selected]: e[i ?? "value"] === this.props.value,
        [s.disabled]: e.disabled,
        [s.focused]: t === a
      });
      return /* @__PURE__ */ h(
        "li",
        {
          className: f,
          tabIndex: a == t ? 0 : -1,
          onFocus: this.setFocusedItemIndex.bind(this, t),
          onClick: e.disabled ? void 0 : this.handleSelect.bind(this, e[i ?? "value"]),
          children: this.props.template ? this.props.template(e) : e[o ?? "label"]
        },
        t
      );
    });
    r(this, "getDocumentEvents", () => ({
      click: this.handleDocumentClick,
      touchend: this.handleDocumentClick
    }));
    r(this, "getSelectedItem", () => {
      for (const t of this.props.source)
        if (t[this.props.valueKey ?? "value"] === this.props.value)
          return t;
      const { allowBlank: e = !0 } = this.props;
      return e ? void 0 : this.props.source[0];
    });
    r(this, "getNextSelectableItemIndex", (e) => {
      const { source: t } = this.props, o = t.length - 1;
      let s = e != o ? e + 1 : 0;
      for (; t[s].disabled && s !== e; )
        s = s != o ? s + 1 : 0;
      return s;
    });
    r(this, "getPreviousSelectableItemIndex", (e) => {
      const { source: t } = this.props, o = t.length - 1;
      let s = e != 0 ? e - 1 : o;
      for (; t[s].disabled && s !== e; )
        s = s != 0 ? s - 1 : o;
      return s;
    });
    r(this, "handleSelect", (e, t) => {
      this.props.onBlur && this.props.onBlur(t), !this.props.disabled && this.props.onChange && (this.props.name && (t.target.name = this.props.name), this.props.onChange(e, t), this.close());
    });
    r(this, "handleKeyDown", (e) => {
      var m;
      const { source: t, valueKey: o } = this.props, { focusedItemIndex: s } = this.state, i = t[s || 0], a = this.getNextSelectableItemIndex(s || 0), f = this.getPreviousSelectableItemIndex(s || 0);
      let d;
      switch (e.key) {
        case u.TAB:
        case u.ESCAPE:
          this.close();
          return;
        case u.ARROW_UP:
          d = f;
          break;
        case u.ARROW_DOWN:
          d = a;
          break;
        case u.SPACE:
        case u.ENTER:
          i.disabled || this.handleSelect(i[o ?? "value"], e);
          break;
      }
      if (!k.isUndefined(d)) {
        e.preventDefault(), e.stopPropagation();
        const n = (m = this.dropdownNode.current) == null ? void 0 : m.children[d];
        n == null || n.focus();
      }
    });
    r(this, "handleClick", (e) => {
      this.open(), I.pauseEvent(e), this.props.onClick && this.props.onClick(e);
    });
    r(this, "handleDocumentClick", (e) => {
      this.state.active && !I.targetIsDescendant(e, this.refNode.current) && this.close();
    });
    r(this, "close", () => {
      this.state.active && this.setState({ active: !1, focusedItemIndex: void 0 });
    });
    r(this, "open", () => {
      var i;
      if (this.state.active)
        return;
      const e = (i = this.refNode.current) == null ? void 0 : i.getBoundingClientRect();
      if (!e)
        return;
      const { auto: t = !0 } = this.props, o = window.innerHeight || document.documentElement.offsetHeight, s = t ? e.top > o / 2 + e.height : !1;
      this.setState({ active: !0, up: s });
    });
    r(this, "handleFocus", (e) => {
      e.stopPropagation();
      const { source: t } = this.props, { focusedItemIndex: o } = this.state, s = this.dropdownNode.current;
      if (!s || !s.children)
        return;
      let i = o || 0;
      t && t[i].disabled && (i = this.getNextSelectableItemIndex(i)), setTimeout(() => {
        const a = s.children[i];
        a == null || a.focus();
      }, 30), this.props.disabled || this.open(), this.props.onFocus && this.props.onFocus(e);
    });
    r(this, "handleBlur", (e) => {
      e.stopPropagation(), setTimeout(() => {
        if (this.refNode.current) {
          const t = document.activeElement;
          this.refNode.current.contains(t) || (this.setState({
            focusedItemIndex: void 0
          }), this.state.active && this.close(), this.props.onBlur && this.props.onBlur(e));
        }
      }, 30);
    });
    r(this, "setFocusedItemIndex", (e, t) => {
      t.stopPropagation(), this.setState({
        focusedItemIndex: e
      });
    });
    this.refNode = x.createRef(), this.dropdownNode = x.createRef();
  }
  componentDidUpdate(e, t) {
    !this.state.active && t.active && I.addEventsToDocument(this.getDocumentEvents());
  }
  componentWillUnmount() {
    this.state.active && I.removeEventsFromDocument(this.getDocumentEvents());
  }
  render() {
    const {
      allowBlank: e,
      auto: t,
      labelKey: o,
      required: s,
      onChange: i,
      onFocus: a,
      onBlur: f,
      source: d,
      template: m,
      theme: n,
      valueKey: E,
      ...N
    } = this.props, p = this.getSelectedItem(), g = b(
      n.dropdown,
      {
        [n.up]: this.state.up,
        [n.active]: this.state.active,
        [n.disabled]: this.props.disabled ?? !1,
        [n.required]: this.props.required ?? !1
      },
      this.props.className ?? ""
    );
    return /* @__PURE__ */ v(
      "div",
      {
        className: g,
        "data-react-toolbox": "dropdown",
        onBlur: this.handleBlur,
        onFocus: this.handleFocus,
        ref: this.refNode,
        tabIndex: -1,
        children: [
          /* @__PURE__ */ h(
            D,
            {
              ...N,
              tabIndex: 0,
              className: n.value,
              onClick: this.handleClick,
              required: this.props.required,
              readOnly: !0,
              type: m && p ? "hidden" : void 0,
              theme: n,
              value: p && p[o ?? "label"] ? p[o ?? "label"] : ""
            }
          ),
          m && p && this.renderTemplateValue(p),
          /* @__PURE__ */ h(
            "ul",
            {
              ref: this.dropdownNode,
              onKeyDown: this.handleKeyDown,
              className: n.values,
              children: d.map(this.renderValue)
            }
          )
        ]
      }
    );
  }
  renderTemplateValue(e) {
    if (!this.props.template)
      return null;
    const { theme: t } = this.props, o = b(t.field, {
      [t.errored]: this.props.error,
      [t.disabled]: this.props.disabled ?? !1,
      [t.required]: this.props.required ?? !1
    });
    return /* @__PURE__ */ v(
      "div",
      {
        role: "none",
        className: o,
        onClick: this.handleClick,
        children: [
          /* @__PURE__ */ h("div", { className: `${t.templateValue} ${t.value}`, children: this.props.template(e) }),
          this.props.label && /* @__PURE__ */ v("label", { className: t.label, children: [
            this.props.label,
            this.props.required && /* @__PURE__ */ h("span", { className: t.required, children: " * " })
          ] }),
          this.props.error && /* @__PURE__ */ h("span", { className: t.error, children: this.props.error })
        ]
      }
    );
  }
}
export {
  T as SelectBoxComponent
};
