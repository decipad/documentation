// global shenanigans
const React = require('react');
const { Buffer } = require('buffer');

if (!('Buffer' in global)) {
  global.Buffer = Buffer;
}

const process = require('process');

if (!('process' in global)) {
  global.process = process;
}

if (!('React' in global)) {
  global.React = React;
}

const { TextEncoder, TextDecoder } = require('util');

if (TextDecoder && !('TextDecoder' in global)) {
  global.TextDecoder = TextDecoder;
}
if (TextEncoder && !('TextEncoder' in global)) {
  global.TextEncoder = TextEncoder;
}
