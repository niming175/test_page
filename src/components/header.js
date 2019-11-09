/**
 * 页头组件
 */
export const header = () => {
  return `
    <div class="header">
      <div class="header__body container flex flex__align--middle">
        <div class="header__logo">
          <a href="./">NIMING175</a>
        </div>
        <div class="header__nav flex--1 align--right">
          <a href='./'>首页</a>
          <a href='./news.html' target="blank">
            新闻
          </a>
          <a href="./about.html">
            关于我们
          </a>
        </div>
      </div>
    </div>
  `
}
