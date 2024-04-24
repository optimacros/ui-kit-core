import '../assets/index17.css';
import { jsx as r } from "react/jsx-runtime";
import { c as d } from "../index-DWRHnq8_.js";
import { PureComponent as _ } from "react";
const v = "Divider-module__Divider__gHmQ6", t = "Divider-module__Divider__gHmQ6", o = "Divider-module__Divider__vertical__gHmQ6", s = "Divider-module__Divider__vertical__gHmQ6", i = {
  Divider: v,
  divider: t,
  Divider__vertical: o,
  dividerVertical: s
};
class a extends _ {
  render() {
    const e = d({
      [i.Divider]: !0,
      [i.Divider__vertical]: this.props.vertical
    });
    return /* @__PURE__ */ r("hr", { className: e });
  }
}
export {
  a as Divider
};
