import { jsxs as n } from "react/jsx-runtime";
import { c } from "../index-DWRHnq8_.js";
const p = (o) => {
  const {
    alt: e = "",
    children: t,
    className: s = "",
    theme: l,
    value: a,
    ...r
  } = o;
  return /* @__PURE__ */ n(
    "span",
    {
      ...r,
      "data-react-toolbox": "font-icon",
      "aria-label": e,
      className: c(
        {
          "material-icons": typeof a == "string" || typeof t == "string"
        },
        s
      ),
      children: [
        a,
        t
      ]
    }
  );
};
export {
  p as FontIcon
};
