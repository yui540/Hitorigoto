const load_view = document.getElementById('load-view')
const progress_bar = document.querySelector('.load-progressbar-mainline')
const eriri_animation = document.getElementById('eriri-animation')
const title_animation = document.getElementById('title-animation')
const top_page = document.getElementById('top-page')

/**
 * 画像のプリロード
 * @param images   : 画像パスの配列
 * @param fn       : コールバック関数
 * @param progress : 読み込み状況取得用コールバック関数
 */
export const preload = (images, fn, progress) => {
  const len  = images.length
  let load = 0

  images.forEach((image, key) => {
    const img = new Image()
    img.src = image
    img.onload = () => {
      load += 1
      progress({
        size : len,
        load : load,
        per  : load / len
      })

      if(load >= len) fn()
    }
  })
}

/**
 * スマートフォンかどうかの真偽
 * @return bool
 */
export const isSP = () => {
  const useragent = navigator.userAgent.toLowerCase()
  const reg = /(iphone|ipad|ipod|android|mobile)/

  return reg.test(useragent)
}

/**
 * PCかどうかの真偽
 * return bool
 */
export const isPC = () => {
  return !isSP()
}

/**
 * 指定した時間に要素を非表示にする
 * @param selector : セレクタ名
 * @param time     : 時間
 */
export const hiddenTimeout = (selector, time) => {
  setTimeout(() => {
    document.querySelector(selector).style.display = 'none'
  }, time)
}

/**
 * プログレスバーの更新
 * @param per : 割合
 */
export const updateProgressBar = per => {
  per *= 100
  progress_bar.children[0].style.transform = `translateX(${ -(100 - per) }%)`  
}

/**
 * ロードの終了
 */
export const finLoadView = () => {
  setTimeout(() => {
    load_view.setAttribute('data-state', 'fin')
    startEririAnimation()
  }, 800)
}

/**
 * eriri-animationの開始
 */
export const startEririAnimation = () => {
  setTimeout(() => {
    load_view.style.display = 'none'
    eriri_animation.setAttribute('data-state', 'start')
    startTitleAnimation()
  }, 9400)
}

/**
 * title-animationの開始
 */
export const startTitleAnimation = () => {
  setTimeout(() => {
    eriri_animation.style.display = 'none'
    title_animation.setAttribute('data-state', 'start')
    startTopPage()
  }, 9500)
}

/**
 * top-pageの開始
 */
export const startTopPage = () => {
  setTimeout(() => {
    title_animation.style.display = 'none'
    top_page.setAttribute('data-state', 'start')
  }, 7000)
}

/**
 * main-illustのサイズを設定
 */
export const setMainIllustSize = () => {
  let height = 0
  if(isPC()) height = window.innerHeight >= 650 ? window.innerHeight : 650
  else       height = screen.height
  const child = document.querySelectorAll('.main-illust div section')
  
  child.forEach((node) => {
    node.style.height = `${ height }px`
  })
}
