// template.js

import { h } from 'snabbdom';

// `createView` is a factory function for generating virtual DOM templates
export const createView = (state, props, hooks) => {
  // Define your template using Snabbdom's `h` function
  return h('div#container', [
    h('h1', { hook: hooks }, state.title), // `state.title` is dynamically rendered
    h('button', {
      on: { click: props.handleClick },    // Event listeners are directly attached
    }, 'Add')
  ]);
};
