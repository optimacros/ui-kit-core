import { l as r } from "./lodash-IPxMcogW.js";
const a = {
  getMousePosition(e) {
    return {
      x: e.pageX - (window.scrollX || window.pageXOffset),
      y: e.pageY - (window.scrollY || window.pageYOffset)
    };
  },
  getTouchPosition(e) {
    return {
      x: e.touches[0].pageX - (window.scrollX || window.pageXOffset),
      y: e.touches[0].pageY - (window.scrollY || window.pageYOffset)
    };
  },
  pauseEvent(e) {
    e.stopPropagation(), e.preventDefault();
  },
  addEventsToDocument(e) {
    Object.keys(e).forEach((n) => {
      document.addEventListener(n, e[n], !1);
    });
  },
  removeEventsFromDocument(e) {
    Object.keys(e).forEach((n) => {
      document.removeEventListener(n, e[n], !1);
    });
  },
  targetIsDescendant(e, n) {
    let t = e.target;
    for (; t !== null; ) {
      if (t === n)
        return !0;
      t = t.parentNode;
    }
    return !1;
  },
  addEventListenerOnTransitionEnded(e, n) {
    if (!e)
      return !1;
    const t = s(e);
    return t ? (e.addEventListener(t, n), !0) : !1;
  },
  removeEventListenerOnTransitionEnded(e, n) {
    if (!e)
      return !1;
    const t = s(e);
    return t ? (e.removeEventListener(t, n), !0) : !1;
  }
}, o = {
  transition: "transitionend",
  // @ts-ignore
  OTransition: "oTransitionEnd",
  MozTransition: "transitionend",
  WebkitTransition: "webkitTransitionEnd"
};
function s(e) {
  return r.keys(o).reduce((n, t) => !n && !r.isUndefined(e.style[t]) ? o[t] : n, null);
}
export {
  a as e
};
