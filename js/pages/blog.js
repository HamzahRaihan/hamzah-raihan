// * show blog list
const blogContainer = document.querySelector('.blog');
const cardArticles = blog.map((item) => blogList(item)).join('');

if (blogContainer !== null && blogContainer !== undefined) {
  blogContainer.innerHTML = cardArticles;
}

// if (blogContainer !== null && blogContainer !== undefined) {
//   blogContainer.addEventListener('click', (event) => {
//     const card = event.target.closest('.card-blog');
//     const close = event.target.closest('.exit-button');
//     if (card) {
//       const blogId = card.dataset.blogId;
//       const blogDetail = getBlogDetail(blogId);
//       if (blogContainer) {
//         blogContainer.innerHTML = blogDetail;
//       }
//     }
//     if (close) {
//       blogContainer.innerHTML = cardArticles;
//     }
//   });
// }

// function getBlogDetail(blogId) {
//   const blogItem = blog.find((b) => b.blogId == blogId);
//   return showBlogDetail(blogItem);
// }

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
