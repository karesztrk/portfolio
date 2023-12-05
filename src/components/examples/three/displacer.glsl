uniform float time;
uniform float displacement;
uniform float elevation;
uniform float elevationFilter;
uniform float speed;

vec3 transform() {
  float factor = abs(sin(time)) * displacement;
  vec3 offset = normal * factor;
  float waveY = abs(sin(position.y * elevation + time * speed)) * elevationFilter;
  vec3 transformed = vec3(position + waveY * offset);
  return transformed;
}

void main() {
    vec3 newPosition = transform();
    vec4 modelPosition = modelMatrix * vec4(newPosition, 1.0);
    vec4 viewPosition = viewMatrix * modelPosition;
    vec4 projectedPosition = projectionMatrix * viewPosition;

    gl_Position = projectedPosition;

}
