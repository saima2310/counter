// template.js

import { h } from 'snabbdom';


export const createView = (state, props, hooks) => {
  
  return h('div#container', [
    h('h1', { hook: hooks }, state.title), 
    h('button', {
      on: { click: props.handleClick },  
    }, 'Add')
  ]);
};
