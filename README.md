# WebGraphicLibrary-shader

WebGL shader wrapper.

## Installation

```sh
$ npm install --save @ahmerhh/WebGraphicLibrary-shader
```

## Usage

```js
import Shader from '@ahmerhh/WebGraphicLibrary-shader';

// setup canvas and gl

const vertexShader = new Shader(gl, gl.VERTEX_SHADER,
  `
  attribute vec3 aPos;

  void main() {
    gl_Position = vec4(aPos, 1.0);
  }
`);
```

## API

#### `shader = new Shader(gl, type, src)`

Create a new shader, where:
- `gl` is the [WebGL context](https://github.com/ahmerhh/WebGraphicLibrary-context).
- `type` is the shader type: `gl.VERTEX_SHADER` or `gl.FRAGMENT_SHADER`.
- `src` is the shader source, as a `string`.

#### `shader.dispose()`

Delete instance. Calls `gl.deleteShader`.

## License

MIT, see [LICENSE.md](https://github.com/ahmerhh/WebGraphicLibrary-shader/blob/master/LICENSE.md) for more details.

## Credits

Thanks to the amazing [stackgl](http://stack.gl/) for the inspiration.
