/**
 * @param {string} type - the node type
 * @param {?object} configObject - the props
 * @param  {...any} args - the children array
 * @returns {object} - to be used by render
 */
export function createElement(type, configObject, ...args) {
  console.log({
    type,
    configObject,
    args,
  });
  // TODO: to be implemented
  return {};
}
