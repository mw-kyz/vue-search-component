export default {
  bind (el, bindings, vnode) {
    console.log(222)
    el.handler = function (e) {
      // 如果所点击元素不被包含在 指令所绑定的元素内
      if (!el.contains(e.target)) {
        console.log(111)
        const _methods = bindings.expression
        vnode.context[_methods]()
      }
    }

    document.addEventListener('click', el.handler, false)
  },
  unbind (el, bindings, vnode) {
    document.removeEventListener('click', el.handler, false)
  }
}