import * as react from 'react';
import * as reactDom from 'react-dom';
import * as reactIs from 'react-is';
import * as propTypes from 'prop-types';

export const namedExports = {
  react: Object.keys(react),
  'react-dom': Object.keys(reactDom),
  'react-is': Object.keys(reactIs),
  'prop-types': Object.keys(propTypes),
}