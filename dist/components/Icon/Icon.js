import '../assets/index20.css';
import { jsx as t } from "react/jsx-runtime";
import { FontIcon as e } from "../FontIcon/FontIcon.js";
const c = "Icon-module__Container__dD3FN", i = "Icon-module__Container__dD3FN", a = {
  Container: c,
  container: i
}, _ = (r) => {
  const { value: n, ...o } = r;
  return typeof n == "string" ? /* @__PURE__ */ t(
    e,
    {
      ...o,
      value: n
    }
  ) : /* @__PURE__ */ t(
    "div",
    {
      ...o,
      className: o.className ?? a.Container,
      children: n
    }
  );
};
export {
  _ as Icon
};
