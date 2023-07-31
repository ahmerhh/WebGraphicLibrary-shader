import test from 'tape';
import getGl from '@ahmerhh/WebGraphicLibrary-context';
import Shader from '../src';

const canvas = document.createElement('canvas');
const gl = getGl(canvas);

const vertexSrc = `
  attribute vec3 aPosition;

  void main() {
    gl_Position = vec4(aPosition, 1.0);
  }
`;

const fragmentSrc = `
  precision mediump float;

  void main() {
    gl_FragColor = vec4(1.0);
  }
`;

const invalidSrc = `
  void main() {
  }
`;

// Test: Shader should be instantiable
test('should be instanciable', t => {
  t.plan(1);

  const shader = new Shader(gl, gl.VERTEX_SHADER, vertexSrc);

  t.ok(shader instanceof Shader, 'instance of Shader');
});

// Test: Shader should accept vertex and fragment shaders
test('should accept vertex and fragment shader', t => {
  t.plan(1);

  const vertexShader = new Shader(gl, gl.VERTEX_SHADER, vertexSrc);
  const fragmentShader = new Shader(gl, gl.FRAGMENT_SHADER, fragmentSrc);

  t.pass('success creating a vertex and fragment shader');
});

// Test: Shader should throw with invalid source
test('should throws with invalid source', t => {
  t.plan(1);

  t.throws(() => new Shader(gl, gl.VERTEX_SHADER, invalidSrc), Error, 'throws with invalid source');
});

// Test: Shader should expose the WebGLShader
test('should expose the WebGLShader', t => {
  t.plan(1);

  const shader = new Shader(gl, gl.VERTEX_SHADER, vertexSrc);

  t.ok(shader.shader instanceof WebGLShader, 'attribute shader is instance of WebGLShader');
});

// Test: Shader should delete the WebGLShader when disposing
test('should delete the WebGLShader when disposing', t => {
  t.plan(1);

  const shader = new Shader(gl, gl.VERTEX_SHADER, vertexSrc);
  shader.dispose();

  t.equal(shader.shader, null, 'shader deleted');
});

// Close the window when the tests are finished
test.onFinish(window.close.bind(window));
