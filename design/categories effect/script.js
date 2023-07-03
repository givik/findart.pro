let lists = document.querySelectorAll(".list li")
hover3d(lists)

function hover3d(node, options){
  if(node.constructor == NodeList) {
    for(let i = 0; i < node.length; i++) {
      hover3d(node[i], options)
    }
    return
  }
  
  let opt = {
    scale: 2.24
  }
  Object.assign(opt, options)
  
  let $inner = node.children[0]
  let $mask = $inner.children[1]
  // 鼠标进入
  node.addEventListener("mousemove",function(e) {
    node.style.zIndex = "2"
    node.style.transform = `scale(${opt.scale})`
    $inner.style.boxShadow = "0 10px 15px 0 rgba(0, 0, 0, .4), 20px 20px 30px 20px rgba(0, 0, 0, .3)"
  })
  // 鼠标移动
  node.addEventListener("mousemove",function(e) {
    let offset = getOffset(node)
    let ex = e.pageX - offset.left
    let ey = e.pageY - offset.top
    let cx = node.clientWidth / 2 - ex
    let cy = node.clientHeight / 2 - ey
    let ax = - cx / 5
    let ay = cy / 5
    let yPercent = cy / node.clientHeight / 2
    $mask.style.backgroundColor = yPercent < 0 ? "#000" : "#fff"
    $mask.style.opacity = Math.abs(yPercent < 0 ? yPercent : yPercent * 0.1)
    $inner.style.transform = `rotateY(${ax}deg) rotateX(${ay}deg)`
  });
  // 鼠标移出
  node.addEventListener("mouseleave",function(e) {
    node.removeAttribute("style")
    $inner.removeAttribute("style")
    $mask.removeAttribute("style")
  })
  
  function getOffset( el ) {
      var _x = 0
      var _y = 0
      while (el && !isNaN( el.offsetLeft ) && !isNaN(el.offsetTop)) {
          _x += el.offsetLeft - el.scrollLeft
          _y += el.offsetTop - el.scrollTop
          el = el.offsetParent
      }
      return { top: _y, left: _x }
  }
}