//statemanagement.js
import { init, classModule, propsModule, styleModule, eventListenersModule, h } from 'snabbdom';

const patch = init([classModule, propsModule, styleModule, eventListenersModule]);

let vnode;

export const updateState = (newState, render) => {
  const newVnode = render(newState);
  patch(vnode, newVnode);
  vnode = newVnode;
};

export const mount = (selector, render, state) => {
  const container = document.querySelector(selector);
  vnode = h('div', 'Loading...');
  patch(container, vnode);
  updateState(state, render);
};


