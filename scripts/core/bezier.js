/*

on factor;
off period;

procedure bez(a1, b1);
a1 + (b1 - a1)*s;

lin   := bez(k1, k2);
quad  := bez(lin, sub(k2=k3, k1=k2, lin));
cubic := bez(quad, sub(k3=k4,k2=k3,k1=k2, quad));

on fort;
cubic;
df(cubic, s);
df(cubic, s, 2);
off fort;

*/

export function cubic(k1, k2, k3, k4, s) {
  return -(k1*s**3 - 3*k1*s**2 + 3*k1*s - k1 - 3*k2*s**3 + 6*k2*s**2 - 3*k2*s + 3*
    k3*s**3 - 3*k3*s**2 - k4*s**3);
}

export function dcubic(k1, k2, k3, k4, s) {
  return -3*((s - 1)**2*k1 - k4*s**2 + (3*s - 2)*k3*s - (3*s - 1)*(s - 1)*k2);
}

export function d2cubic(k1, k2, k3, k4, s) {
  return -6*(k1*s - k1 - 3*k2*s + 2*k2 + 3*k3*s - k3 - k4*s);
}
