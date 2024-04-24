import { jsx as l, jsxs as n } from "react/jsx-runtime";
import { Icon as o } from "../Icon/Icon.js";
import { s as c } from "../HeaderUserMenu.module-DQk94tZa.js";
const f = (e) => {
  const a = e.href ? "a" : "span", {
    className: s,
    onClick: t,
    label: r,
    icon: m,
    children: d,
    ...i
  } = e;
  return /* @__PURE__ */ l(
    "li",
    {
      role: "none",
      className: e.className,
      onClick: e.onClick,
      title: e.label,
      children: /* @__PURE__ */ n(a, { ...i, children: [
        e.icon && /* @__PURE__ */ l(
          o,
          {
            className: c.Icon,
            value: e.icon
          }
        ),
        /* @__PURE__ */ n("div", { className: c.Label, children: [
          e.label,
          e.children
        ] })
      ] })
    }
  );
};
export {
  f as HeaderUserMenuElement
};
