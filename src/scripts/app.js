import React from 'react'
import { render } from 'react-dom'
import * as util from './lib/util'
import preload_json from './config/preload'
import history_json from './config/history'
import product_json from './config/product'
import memories_json from './config/memories'

// components
import HistoryBox from './components/history-box.jsx'
import ProductBox from './components/product-box.jsx'
import MemoriesBox from './components/memories-box.jsx'

console.log('###############################################')
console.log('                 ヒトリゴト')
console.log('         「推しキャラは、コロコロ変わる。」')
console.log('###############################################')
console.log('Designed by yuki540.')

render(
  <HistoryBox json={ history_json } />,
  document.getElementById('history-box')
)

render(
  <ProductBox json={ product_json } />,
  document.getElementById('product-box')
)

render(
  <MemoriesBox json={ memories_json } />,
  document.getElementById('memories-box')
)

// bind event
util.setMainIllustSize()
util.setNavEffect()
util.bindSpMenu()
util.bindCloseBtn()
util.bindRouting()

// preload
util.preload(preload_json, () => {
  util.finLoadView()  
}, data => {
  util.updateProgressBar(data.per)
})
