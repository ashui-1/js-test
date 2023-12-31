import isElement from './isElement'
import getPageXY from './getPageXY'
import getOffset from './getOffset'
import canPosition from './canPosition'

/**
 * 获取 DOM 元素的定位信息
 * ========================================================================
 * @method positions
 * @param {HTMLElement} el
 * @return {Object|Boolean}
 */
const positions = (el) => {
  let offset

  if (!isElement(el) || !canPosition(el)) {
    return false
  }

  offset = getOffset(el)

  return {
    top: offset.top,
    left: offset.left,
    ...getPageXY(el)
  }
}

export default positions
