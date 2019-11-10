// 加载jQ
import './src/script/jquery-3.4.1.min.js'

export const load = (loaded) => {
  $(function() {
    console.log('初始加载');
    if (loaded) loaded()
  })
}
