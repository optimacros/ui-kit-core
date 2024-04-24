function u(r = {}, c = {}) {
  const o = Object.keys(r).reduce((e, n) => {
    const t = r[n];
    return typeof t != "function" && (e[n] = t), e;
  }, {});
  return Object.keys(c).forEach((e) => {
    const n = o[e], t = c[e];
    switch (typeof t) {
      case "object": {
        switch (typeof n) {
          case "object": {
            o[e] = u(n, t);
            break;
          }
          case "undefined": {
            o[e] = t;
            break;
          }
          default:
            throw new Error(`You are merging object ${e} with a non-object ${n}`);
        }
        break;
      }
      case "undefined":
      case "function":
        break;
      default: {
        switch (typeof n) {
          case "object":
            throw new Error(`You are merging non-object ${t} with an object ${e}`);
          case "undefined": {
            o[e] = t;
            break;
          }
          default: {
            o[e] = n.split(" ").concat(t.split(" ")).filter((a, s, i) => i.indexOf(a) === s && a !== "").join(" ");
            break;
          }
        }
        break;
      }
    }
  }), o;
}
export {
  u as m
};
