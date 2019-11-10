import {footerLink} from '../util/settings.js'

export const footer = () => {
  var links = '';
  footerLink.forEach(item => {
    links += `
      <p class="footer__link">
        <a href='${item.href}'>
          ${item.text}
        </a>
      </p>
    `
  })
  
  return `
    <div class="footer">
      <div class="container">
        <div class="footer__body flex flex__align--middle">
          <div class="flex--1 footer__left">
            ${links}
          </div>
          <div class="footer__right flex">
            <div class="flex--1">
              <p class="footer-about__title">About Us</p>
              <p>
                Address: Juyuan Zhou, Fuzhou, Fujian
              </p>
              <p>
                Email: niming175@xxx.com
              </p>
            </div>
            <div class="footer__qr-code">
              <div class="qr-code">
                回---- --回
                |-假装这个
                |是二维码|
                回××× 口
              </div>
              
              <p class="footer__copy">
                niming175 &copy;2019
              </p>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  `
}