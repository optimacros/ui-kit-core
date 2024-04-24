const c = "Webkit", f = "Ms", i = {
  transform: [c, f]
};
function s(r) {
  return r.charAt(0).toUpperCase() + r.substr(1);
}
function p(r, e) {
  return i[r].reduce((t, n) => (t[`${n}${s(r)}`] = e, t), {});
}
function u(r, e, t) {
  const n = p(e, t);
  for (const o in n)
    ({}).hasOwnProperty.call(n, o) && (r[o] = n[o]);
  return r;
}
function a(r, e = {}) {
  const t = e;
  for (const n in r)
    ({}).hasOwnProperty.call(r, n) && (t[n] = r[n], i[n] && u(t, n, r[n]));
  return t;
}
export {
  a as p
};
