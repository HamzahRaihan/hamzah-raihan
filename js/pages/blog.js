import { blog } from '../datas.js';
import { handleNavbar, handlerBurgerButton } from '../script.js';
import { blogContainer } from '../dom/dom.js';

handleNavbar();

handlerBurgerButton();

// * show blog list
const cardArticles = blog.map((item) => blogList(item)).join('');
blogContainer.innerHTML = cardArticles;

function blogList(item) {
  return `
  <a href="blog-detail.html?blogId=${item.blogId}">
    <div class="card-blog card-wrapper" data-blog-id="${item.blogId}">
      <div class="card-image">
        <img src="./img/${item.image}" alt="image" loading="lazy" decoding="async" />
      </div>
      <div class="card-body">
        <div class="card-detail">
          <div class="title">
            <h3>${item.name}</h3>
          </div>
          <p>${item.date}</p>
          <p>
            ${item.desc}
          </p>
        </div>
      </div>
    </div>
  </a>
  `;
}
