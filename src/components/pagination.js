/**
 * 分页
 */
export const pagination = (page = 1, total=0) => {

  // return `
  //   <ul class="pagination">
  //     <li class="disabled">
  //       <a href="#" aria-label="Previous">
  //         <span>«</span>
  //       </a>
  //     </li>
  //     <li class="active">
  //       <a href="#">
  //         1 <span class="sr-only">(current)</span>
  //       </a>
  //     </li>
  //     <li><a href="#">2</a></li>
  //     <li><a href="#">3</a></li>
  //     <li><a href="#">4</a></li>
  //     <li><a href="#">5</a></li>
  //     <li>
  //       <a href="#" aria-label="Next">
  //         <span aria-hidden="true">»</span>
  //       </a>
  //     </li>
  //   </ul>
  // `

  var firstHtml = `
    <li class="${page === 1 && 'disabled'}">
      <a href="#" aria-label="Previous">
        <span>«</span>
      </a>
    </li>
  `
  var lastHtml = `
    <li class="${page === 1 && 'disabled'}">
      <a href="#" aria-label="Next">
        <span aria-hidden="true">»</span>
      </a>
    </li>
  `
  var node = '';
  for (var i=1; i < (total/10) + 1; i ++ ) {
    node += `
      <li class="${page === i && 'active'}">
        <a page='${i}'>
          ${i}
          ${(page === i) ? `<span class="sr-only">(current)</span>` : ''}
        </a>
      </li>
    `
  }

  return `
    <ul class="pagination">
      ${firstHtml}
      ${node}
      ${lastHtml}
    </ul>
  `
}
