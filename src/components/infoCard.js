/**
 * 信息小卡片
 */

/**
 * 
 * @param Array data
 * data 参数:
 * [
 *    {
 *      img: '',
 *      title: ''，
 *      msg: ''
 *     }
 * ] 
 */
export const infoCard = (data) => {
  var html = '';

  data.forEach(item => {
    html += `
      <div class="info-card__body">
        <img class="info-card__img" src='${item.img}' />
        <p class="info-card__title">
          ${item.title}
        </p>
        <p class="info-card__desc">
          ${item.desc}
        </p>
      </div>
    `
  })

  return `
    <div class="info-card">
      ${html}
    </div>
  `
}