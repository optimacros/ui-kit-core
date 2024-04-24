import { jsx as e, jsxs as s } from "react/jsx-runtime";
import a from "react";
import { s as r } from "../HeaderUserMenu.module-DQk94tZa.js";
class c extends a.Component {
  render() {
    return /* @__PURE__ */ e("div", { className: r.headerNav, children: /* @__PURE__ */ e("ul", { className: r.headerNav_List, children: /* @__PURE__ */ e("li", { className: r.headerNav_Item, children: this.renderDropDown() }) }) });
  }
  renderDropDown() {
    return /* @__PURE__ */ s("div", { className: r.userMenu, children: [
      /* @__PURE__ */ e("div", { className: r.userMenu_Title, children: this.props.userName || " " }),
      /* @__PURE__ */ e("div", { className: r.userMenu_List, children: /* @__PURE__ */ s("ul", { children: [
        /* @__PURE__ */ e("li", { className: r.userMenu_Name, children: /* @__PURE__ */ e("span", { children: this.props.userName || " " }) }),
        this.props.children
      ] }) })
    ] });
  }
}
export {
  c as HeaderUserMenu
};
