export const OCEAN_FLOW_FRAGMENT = `
precision highp float;
varying vec2 v_texCoord;
uniform float u_time;
uniform vec2 u_resolution;
uniform vec2 u_mouse;

vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

float snoise(vec2 v) {
  const vec4 C = vec4(0.211324865405187, 0.366025403784439, -0.577350269189626, 0.024390243902439);
  vec2 i  = floor(v + dot(v, C.yy));
  vec2 x0 = v -   i + dot(i, C.xx);
  vec2 i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;
  i = mod289(i);
  vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m; m = m*m;
  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;
  m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}

void main() {
  vec2 uv = v_texCoord;
  vec2 mouse = u_mouse / u_resolution;
  vec3 color1 = vec3(0.0117, 0.0156, 0.3686);
  vec3 color2 = vec3(0.0, 0.4666, 0.7137);
  vec3 color3 = vec3(0.7921, 0.9411, 0.9725);
  vec3 lime = vec3(0.7215, 1.0, 0.2352);
  float n1 = snoise(uv * 2.0 + u_time * 0.1);
  float n2 = snoise(uv * 3.0 - u_time * 0.15 + mouse * 0.5);
  float n3 = snoise(uv * 1.5 + u_time * 0.05);
  vec3 finalColor = mix(color1, color2, n1 * 0.5 + 0.5);
  finalColor = mix(finalColor, color3, n2 * 0.3);
  float glow = smoothstep(0.4, 0.8, n3);
  finalColor = mix(finalColor, lime, glow * 0.1);
  float dist = distance(uv, mouse);
  float mouseGlow = smoothstep(0.3, 0.0, dist);
  finalColor += lime * mouseGlow * 0.05;
  gl_FragColor = vec4(finalColor, 1.0);
}
`;

export const OCEAN_FLOW_VERTEX = `
attribute vec2 a_position;
varying vec2 v_texCoord;
void main() {
  v_texCoord = a_position * 0.5 + 0.5;
  gl_Position = vec4(a_position, 0.0, 1.0);
}
`;
