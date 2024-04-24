import '../assets/index9.css';
import { jsx as n } from "react/jsx-runtime";
import { c as i } from "../index-DWRHnq8_.js";
import t from "react";
import { m as c } from "../mergeStyle-CWZcmjsX.js";
const h = "theme-module__horizontal__tVsjr", _ = "theme-module__vertical__tVsjr", d = {
  horizontal: h,
  vertical: _
}, g = ({
  children: a,
  theme: r,
  className: l,
  type: s
}) => {
  const e = c(r, d), m = i(e[s ?? "horizontal"], l);
  return /* @__PURE__ */ n(
    "nav",
    {
      "data-react-toolbox": "navigation",
      className: m,
      children: t.Children.map(a, (o) => t.isValidElement(o) ? t.cloneElement(o, { theme: e }) : null)
    }
  );
};
export {
  g as Navigation
};
