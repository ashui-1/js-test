import isElement from './isElement'
import getPreviousSibling from './getPreviousSibling'

/**
 * 获取 DOM 元素的前面所有邻居元素节点。
 * ========================================================================
 * @method getPreviousSiblings
 * @param {HTMLElement} el
 * @return {Array}
 */
const getPreviousSiblings = (el) => {
  const prev = []
  let $sibling

  if (!isElement(el)) {
    return prev
  }

  $sibling = getPreviousSibling(el)

  if ($sibling) {
    prev.push($sibling)
  }

  while ($sibling) {
    $sibling = getPreviousSibling($sibling)

    if ($sibling) {
      prev.push($sibling)
    }
  }

  return prev
}

export default getPreviousSiblings
