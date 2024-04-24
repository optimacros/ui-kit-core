import '../assets/index10.css';
import { jsx as o, jsxs as n } from "react/jsx-runtime";
import { c as a } from "../index-DWRHnq8_.js";
import { Component as d } from "react";
import c from "./DraggableModalContainer.js";
import i from "./ReactModal.js";
import { FontIcon as C } from "../FontIcon/FontIcon.js";
const m = "Modal-module__ReactModal__Overlay__fZ4C1", p = "Modal-module__ReactModal__Overlay__fZ4C1", u = "Modal-module__ReactModal__Content__fZ4C1", h = "Modal-module__ReactModal__Content__fZ4C1", M = "Modal-module__Container__fZ4C1", f = "Modal-module__Container__fZ4C1", g = "Modal-module__Container__compact__fZ4C1", H = "Modal-module__Container__compact__fZ4C1", N = "Modal-module__Header__fZ4C1", Z = "Modal-module__Header__fZ4C1", v = "Modal-module__Content__fZ4C1", b = "Modal-module__Content__fZ4C1", R = "Modal-module__Header_Title__fZ4C1", B = "Modal-module__Header_Title__fZ4C1", y = "Modal-module__Header__draggable__fZ4C1", T = "Modal-module__Header__draggable__fZ4C1", O = "Modal-module__CloseButton_Icon__fZ4C1", I = "Modal-module__CloseButton_Icon__fZ4C1", D = "Modal-module__CustomHeaderContainer__fZ4C1", x = "Modal-module__CustomHeaderContainer__fZ4C1", e = {
  ReactModal__Overlay: m,
  reactModalOverlay: p,
  ReactModal__Content: u,
  reactModalContent: h,
  Container: M,
  container: f,
  Container__compact: g,
  containerCompact: H,
  Header: N,
  header: Z,
  Content: v,
  content: b,
  Header_Title: R,
  headerTitle: B,
  Header__draggable: y,
  headerDraggable: T,
  CloseButton_Icon: O,
  closeButtonIcon: I,
  CustomHeaderContainer: D,
  customHeaderContainer: x
};
class S extends d {
  render() {
    const t = a({
      [e.Container]: !0,
      [e.Container__compact]: this.props.compact ?? !1
    }), r = this.props.contentClassName ? a({
      [e.Content]: !0,
      [this.props.contentClassName]: !!this.props.contentClassName
    }) : e.Content, {
      title: j,
      compact: k,
      nonDraggable: q,
      isFatalError: E,
      draggableTarget: A,
      customHeaderButton: L,
      headerClassName: $,
      contentClassName: w,
      ...s
    } = this.props, l = a(this.props.className, e.ReactModal__Content), _ = a(this.props.overlayClassName, e.ReactModal__Overlay);
    return /* @__PURE__ */ o(
      i,
      {
        ...s,
        contentLabel: "optimacros-modal",
        shouldCloseOnOverlayClick: !1,
        ariaHideApp: !1,
        className: l,
        overlayClassName: _,
        children: /* @__PURE__ */ o(c, { draggableTarget: this.props.draggableTarget ?? `.${e.Header}`, children: /* @__PURE__ */ n("div", { className: t, children: [
          this.renderHeader(),
          /* @__PURE__ */ o("div", { className: r, children: this.props.children })
        ] }) })
      }
    );
  }
  renderHeader() {
    if (!this.props.title)
      return null;
    const t = this.props.headerClassName ? a({
      [e.Header]: !0,
      [this.props.headerClassName]: !!this.props.headerClassName,
      [e.Header__draggable]: !(this.props.nonDraggable ?? !1)
    }) : a({
      [e.Header]: !0,
      [e.Header__draggable]: !(this.props.nonDraggable ?? !1)
    });
    return /* @__PURE__ */ n("div", { className: t, children: [
      /* @__PURE__ */ o("div", { className: e.Header_Title, children: this.props.title }),
      /* @__PURE__ */ o("div", { className: e.CustomHeaderContainer, children: this.props.customHeaderButton }),
      this.renderCloseButton()
    ] });
  }
  renderCloseButton() {
    return !this.props.onRequestClose || this.props.isFatalError ? null : /* @__PURE__ */ o("div", { className: e.CloseButton, children: /* @__PURE__ */ o(
      C,
      {
        value: "close",
        className: e.CloseButton_Icon,
        onClick: this.props.onRequestClose
      }
    ) });
  }
}
export {
  S as Modal
};
