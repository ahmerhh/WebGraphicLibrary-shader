/**
 * @class Shader
 * Represents a WebGL shader (either vertex shader or fragment shader).
 */
export default class Shader {
    /**
     * @constructs Shader
     * Creates a WebGL shader of the specified type with the given source code.
     * @param {WebGLRenderingContext} gl - The WebGL context.
     * @param {uint} type - The type of the shader. Should be either gl.VERTEX_SHADER or gl.FRAGMENT_SHADER.
     * @param {string} src - The source code of the shader.
     */
    constructor(gl, type, src) {
      this.gl = gl;
  
      // Create the WebGL shader of the specified type
      this.shader = this.gl.createShader(type);
  
      // Set the source code of the shader and compile it
      this.gl.shaderSource(this.shader, src);
      this.gl.compileShader(this.shader);
  
      // Check if the shader compilation was successful
      if (!this.gl.getShaderParameter(this.shader, this.gl.COMPILE_STATUS)) {
        const error = this.gl.getShaderInfoLog(this.shader);
        throw new Error(`Error while compiling shader: ${error}`);
      }
    }
  
    /**
     * @method dispose
     * @public
     * Deletes the WebGL shader, releasing the associated resources.
     */
    dispose() {
      this.gl.deleteShader(this.shader);
      this.shader = null;
    }
  }
  