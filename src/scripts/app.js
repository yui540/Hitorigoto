import * as util from './lib/util'
import preload_json from './config/preload'

console.log('###############################################')
console.log('                 ヒトリゴト')
console.log('         「推しキャラは、コロコロ変わる。」')
console.log('###############################################')
console.log('Designed by yuki540.')

util.setMainIllustSize()
util.preload(preload_json, () => {
  util.finLoadView()  
}, data => {
  util.updateProgressBar(data.per)
})
