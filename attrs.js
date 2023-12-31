import isArray from './utils/types/isArray'
import isObject from './utils/types/isObject'
import isString from './utils/types/isString'
import isUndefined from './utils/types/isUndefined'
import isElement from './isElement'
import setAttribute from './setAttribute'
import getAttribute from './getAttribute'
import setAttributes from './setAttributes'
import getAttributes from './getAttributes'

/**
 * 获取或者设置 DOM 节点的单个或者多个 DOM 属性
 * ========================================================================
 * @method attrs
 * @param {HTMLElement} el
 * @param {String|Object|Array} [attr]
 * @param {*} [value]
 * @return {Object|null}
 */
const attrs = (el, attr, value) => {
  if (!isElement(el)) {
    return null
  }

  // 仅传递 el 参数，获取 el 元素的所有 DOM 属性
  if (!attr && !value) {
    return getAttributes(el)
  }

  if (!isString(attr) && !isArray(attr) && !isObject(attr)) {
    return null
  }

  // 传递 attr 属性
  if (isString(attr)) {
    // 传递了 value 值，用于设置 DOM 属性
    if (!isUndefined(value)) {
      setAttribute(el, attr, value)
    } else {
      // 没有传递 value 值，用于获取 DOM 属性
      return getAttribute(el, attr)
    }
  } else if (isArray(attr)) {
    // 仅传递了 attr 属性
    // attr 为数组是，用于获取 el 元素的多个 DOM 属性
    return getAttributes(el, attr)
  } else {
    // attr 为对象，则用于给 el 元素设置多个 DOM 属性值
    setAttributes(el, attr)
  }
}

export default attrs
