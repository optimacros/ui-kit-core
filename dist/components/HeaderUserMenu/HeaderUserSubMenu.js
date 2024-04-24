import { jsxs as r, jsx as s } from "react/jsx-runtime";
import { c as i } from "../index-DWRHnq8_.js";
import { s as l } from "../HeaderUserMenu.module-DQk94tZa.js";
const u = (e) => {
  const n = i(l.userMenu_List, l.userMenu_List_SubMenu, e.className);
  return /* @__PURE__ */ r("li", { children: [
    /* @__PURE__ */ s(
      "span",
      {
        role: "none",
        title: e.label,
        onClick: e.onClick,
        children: e.label
      }
    ),
    /* @__PURE__ */ s("ul", { className: n, children: e.children })
  ] });
};
export {
  u as HeaderUserSubMenu
};
