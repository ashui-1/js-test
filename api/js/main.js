import Outline from '@yaohaixiao/outline.js/outline'

const defaults = Outline.DEFAULTS
let outline

defaults.selector = 'h2,h3'
defaults.title = false
defaults.showCode = false
defaults.position = 'sticky'
defaults.parentElement = '#aside'
defaults.scrollElement = '#main'
defaults.articleElement = '#article'
defaults.git = 'https://github.com/yaohaixiao/dom.js'
defaults.tags = 'https://github.com/yaohaixiao/dom.js/tags'
defaults.issues = 'https://github.com/yaohaixiao/dom.js/issues'
defaults.print = {
  element: '#article',
  title: document.querySelector('.main__h1')
}
defaults.chapterTextFilter = (text) => {
  return text.replace(/\s*\(.*?\)/, '()')
}
outline = new Outline(Outline.DEFAULTS)
