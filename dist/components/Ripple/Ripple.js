var b = Object.defineProperty;
var T = (c, n, h) => n in c ? b(c, n, { enumerable: !0, configurable: !0, writable: !0, value: h }) : c[n] = h;
var a = (c, n, h) => (T(c, typeof n != "symbol" ? n + "" : n, h), h);
import { jsx as N } from "react/jsx-runtime";
import { c as M } from "../index-DWRHnq8_.js";
import { l as O } from "../lodash-IPxMcogW.js";
import S, { Component as w } from "react";
import { m as $ } from "../mergeStyle-CWZcmjsX.js";
import { e as v } from "../events-CBrNWrpo.js";
import { p as j } from "../prefixer-DdK5skfq.js";
const q = (c) => {
  const {
    centered: n = !1,
    className: h = "",
    multiple: x = !0,
    passthrough: y = !0,
    spread: D = 2,
    theme: L
  } = c;
  return function(C) {
    return class extends w {
      constructor() {
        super(...arguments);
        a(this, "state", {
          ripples: {}
        });
        /**
         * Variable to store the ripple references
         */
        a(this, "rippleNodes", {});
        a(this, "currentCount", 0);
        a(this, "touchCache", !1);
        a(this, "doRipple", () => !this.props.disabled && (this.props.ripple ?? !0));
        a(this, "handleMouseDown", (e) => {
          if (this.props.onMouseDown && this.props.onMouseDown(e), this.doRipple()) {
            const { x: t, y: s } = v.getMousePosition(e);
            this.animateRipple(t, s, !1, e.target);
          }
        });
        a(this, "handleTouchStart", (e) => {
          if (this.props.onTouchStart && this.props.onTouchStart(e), this.doRipple()) {
            const { x: t, y: s } = v.getTouchPosition(e);
            this.animateRipple(t, s, !0, e.target);
          }
        });
      }
      componentDidUpdate(e, t) {
        Object.keys(t.ripples).length < Object.keys(this.state.ripples).length && this.addRippleRemoveEventListener(this.getLastKey());
      }
      componentWillUnmount() {
        Object.keys(this.state.ripples).forEach((e) => {
          this.state.ripples[e].endRipple();
        });
      }
      render() {
        const {
          children: e,
          disabled: t = !1,
          ripple: s = !0,
          onRippleEnded: p,
          rippleCentered: o,
          rippleClassName: d = h,
          rippleMultiple: l,
          rippleSpread: r,
          theme: i = {},
          ...u
        } = this.props, { ripples: f } = this.state, R = Object.keys(f).map((E) => this.renderRipple(E, d, f[E])), m = {
          onMouseDown: this.handleMouseDown,
          onTouchStart: this.handleTouchStart,
          ...u
        }, g = y ? { ...m, theme: i, disabled: t } : m;
        return s ? S.createElement(C, g, [e, R]) : S.createElement(C, g, e);
      }
      renderRipple(e, t, { active: s, left: p, restarting: o, top: d, width: l }) {
        const r = $(L, this.props.theme), i = o ? 0 : 1, u = `translate3d(${-l / 2 + p}px, ${-l / 2 + d}px, 0) scale(${i})`, f = M(
          r.ripple,
          {
            [r.rippleActive]: s,
            [r.rippleRestarting]: o
          },
          t
        );
        return /* @__PURE__ */ N(
          "span",
          {
            "data-react-toolbox": "ripple",
            className: r.rippleWrapper,
            children: /* @__PURE__ */ N(
              "span",
              {
                className: f,
                ref: (R) => {
                  R && (this.rippleNodes[e] = R);
                },
                style: j(
                  { transform: u },
                  {
                    width: `${l}px`,
                    height: `${l}px`
                  }
                )
              }
            )
          },
          e
        );
      }
      /**
       * Find out a descriptor object for the ripple element being created depending on
       * the position where the it was triggered and the component's dimensions.
       *
       * @param {Number} x Coordinate x in the viewport where ripple was triggered
       * @param {Number} y Coordinate y in the viewport where ripple was triggered
       * @return {Object} Descriptor element including position and size of the element
       */
      getDescriptor(e, t, s) {
        const p = s.getBoundingClientRect();
        if (!p)
          return { left: 0, top: 0, width: 0 };
        const { left: o, top: d, height: l, width: r } = p, {
          rippleCentered: i = n,
          rippleSpread: u = D
        } = this.props;
        return {
          left: i ? 0 : e - o - r / 2,
          top: i ? 0 : t - d - l / 2,
          width: r * u
        };
      }
      /**
       * Increments and internal counter and returns the next value as a string. It
       * is used to assign key references to new ripple elements.
       *
       * @return {String} Key to be assigned to a ripple.
       */
      getNextKey() {
        return this.currentCount = this.currentCount ? this.currentCount + 1 : 1, `ripple${this.currentCount}`;
      }
      /**
       * Return the last generated key for a ripple element. When there is only one ripple
       * and to get the reference when a ripple was just created.
       *
       * @return {String} The last generated ripple key.
       */
      getLastKey() {
        return `ripple${this.currentCount}`;
      }
      /**
       * Determine if a ripple should start depending if its a touch event. For mobile both
       * touchStart and mouseDown are launched so in case is touch we should always trigger
       * but if its not we should check if a touch was already triggered to decide.
       *
       * @param {Boolean} isTouch True in case a touch event triggered the ripple false otherwise.
       * @return {Boolean} True in case the ripple should trigger or false if it shouldn't.
       */
      rippleShouldTrigger(e) {
        const t = e ? !0 : !this.touchCache;
        return this.touchCache = e, t;
      }
      /**
       * Start a ripple animation on an specific point with touch or mouse events. First
       * decides if the animation should trigger. If the ripple is multiple or there is no
       * ripple present, it creates a new key. If it's a simple ripple and already exists,
       * it just restarts the current ripple. The animation happens in two state changes
       * to allow triggering via css.
       *
       * @param {Number} x Coordinate X on the screen where animation should start
       * @param {Number} y Coordinate Y on the screen where animation should start
       * @param {Boolean} isTouch Use events from touch or mouse.
       */
      animateRipple(e, t, s, p) {
        if (this.rippleShouldTrigger(s)) {
          const { top: o, left: d, width: l } = this.getDescriptor(e, t, p), r = Object.keys(this.state.ripples).length === 0, i = this.props.rippleMultiple ?? x ?? r ? this.getNextKey() : this.getLastKey(), u = this.addRippleDeactivateEventListener(s, i), f = {
            active: !1,
            restarting: !0,
            top: o,
            left: d,
            width: l,
            endRipple: u
          }, R = { active: !0, restarting: !1 };
          this.setState(
            (m) => ({
              ripples: {
                ...m.ripples,
                [i]: f
              }
            }),
            () => {
              var m;
              this.rippleNodes[i] && ((m = this.rippleNodes[i]) == null || m.offsetWidth), this.setState((g) => ({
                ripples: {
                  ...g.ripples,
                  [i]: {
                    ...g.ripples[i],
                    ...R
                  }
                }
              }));
            }
          );
        }
      }
      /**
       * Add an event listener to the reference with given key so when the animation transition
       * ends we can be sure that it finished and it can be safely removed from the state.
       * This function is called whenever a new ripple is added to the component.
       *
       * @param {String} rippleKey Is the key of the ripple to add the event.
       */
      addRippleRemoveEventListener(e) {
        const t = this.rippleNodes[e], s = (p) => {
          p.propertyName === "opacity" && (this.props.onRippleEnded && this.props.onRippleEnded(p), v.removeEventListenerOnTransitionEnded(this.rippleNodes[e], s), delete this.rippleNodes[e], this.setState((o) => ({
            ripples: O.omit(o.ripples, [e])
          })));
        };
        v.addEventListenerOnTransitionEnded(t, s);
      }
      /**
       * Add an event listener to the document needed to deactivate a ripple and make it dissappear.
       * Deactivation can happen with a touchend or mouseup depending on the trigger type. The
       * ending function is created from a factory function and returned.
       *
       * @param {Boolean} isTouch True in case the trigger was a touch event false otherwise.
       * @param {String} rippleKey It's a key to identify the ripple that should be deactivated.
       * @return {Function} Callback function that deactivates the ripple and removes the listener
       */
      addRippleDeactivateEventListener(e, t) {
        const s = e ? "touchend" : "mouseup", p = this.createRippleDeactivateCallback(s, t);
        return document.addEventListener(s, p), p;
      }
      /**
       * Generates a function that can be called to deactivate a ripple and remove its finishing
       * event listener. If is generated because we need to store it to be called on unmount in case
       * the ripple is still running.
       *
       * @param {String} eventType Is the event type that can be touchend or mouseup
       * @param {String} rippleKey Is the key representing the ripple
       * @return {Function} Callback function that deactivates the ripple and removes the listener
       */
      createRippleDeactivateCallback(e, t) {
        const s = () => {
          document.removeEventListener(e, s), this.setState((p) => ({
            ripples: {
              ...p.ripples,
              [t]: {
                ...p.ripples[t],
                active: !1
              }
            }
          }));
        };
        return s;
      }
    };
  };
};
export {
  q as default
};
