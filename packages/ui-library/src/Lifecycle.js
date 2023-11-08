
export const createLifecycleHooks = (onCreate, onUpdate, onRemove) => {
    return {
      create: () => onCreate(),
      update: (_, vnode) => onUpdate(vnode),
      remove: (vnode, removeCallback) => {
        onRemove();
        removeCallback();
      }
    };
  };
  
