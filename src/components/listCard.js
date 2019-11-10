/**
 * 列表页的卡片
 * data 格式
 * { 
 *  "id": "10",
 *  "createdAt": "2019-11-10T02:48:41.566Z",
 *  "name": "Larissa Wiza",
 *  "avatar": "https://s3.amazonaws.com/desastrozo/128.jpg",
 *  "title": "title 10",
 *  "desc": "desc 10",
 *  "content": "content 10
 * }
 */
export const listCard = (data) => {
  return `
    <div class="list-card">
      <div class="list-card__head">
        <div class="list-card__img">
          <img src='${data.avatar}' />
        </div>
        <div class="list-card__info">
          <p class="list-card__name">
            ${data.name}
          </p>
          <p class="list-card__time">
            ${moment(data.createdAt).format('ll')}
          </p>
        </div>
      </div>

      <div class="list-card__content">
        <p class="list-card__title">
          ${data.title}
        </p>
        <p class="list-card__desc">
          ${data.desc}
        </p>
      </div>
    </div>
  `
} 