import { blog } from '../datas.js';
import { handleNavbar, handlerBurgerButton } from '../script.js';

handleNavbar();

handlerBurgerButton();

function getBlogIdFromURL() {
  const searchParams = new URLSearchParams(window.location.search);
  return searchParams.get('blogId');
}

function displayBlogDetail() {
  const detailContainer = document.querySelector('.detail-container');
  const blogId = getBlogIdFromURL();
  const blogItem = blog.find((b) => b.blogId == blogId);
  if (blogItem) {
    detailContainer.innerHTML = showBlogDetail(blogItem);
  } else {
    detailContainer.innerHTML = `<p>Blog not Found</p>`;
  }
}

function showBlogDetail(b) {
  return `
    <div class="card-blog card-wrapper article">
      ${b.detail}
    </div>
    `;
}

window.addEventListener('DOMContentLoaded', displayBlogDetail);
