function scrollIntoView () {
  window.scrollTo(0, 0)
}

// 阻止微信拖动
setTimeout(() => {
  autoScale({
    deviseW: 750,
    deviseH: 1508,
    center: 'middle',
    scroll: false,
    type: 'scale',
    box: '.scale-box'
  })
}, 100);