/**
 * Function allowing the creation of DOM elements
 * @param {*} type
 * @param {*} attributes
 * @param  {...any} children
 * @returns
 */
const createElementFactory = (type, attributes, ...children) => {
  const el = document.createElement(type);
  let key = "";

  for (key in attributes) {
    el.setAttribute(key, attributes[key]);
  }

  children.forEach(child => {
    if (typeof child === "string") {
      el.appendChild(document.createTextNode(child));
    } else {
      el.appendChild(child);
    }
  });

  return el;
};

export { createElementFactory };
