async function t(t){const o=await fetch(`https://books-backend.p.goit.global/books/${t}`);if(!o.ok)throw new Error(o.status);return await o.json()}const o=document.querySelector(".list-categories");o.insertAdjacentHTML("afterbegin",'<li><a href="#category-title" class="js-cat-link category__link-all current-category">All category</a></li>'),async function(){const e=await t("category-list"),s=[];for(const{list_name:t}of e)s.push(t);const a=s.sort(((t,o)=>t.localeCompare(o))).map((t=>`<li class="category__item"><a href="#category-title" class="js-cat-link category__link">${t}</a></li>`)).join("");o.insertAdjacentHTML("beforeend",a)}();const e=document.getElementById("scrollToTopBtn");window.addEventListener("scroll",(()=>{window.pageYOffset>100?e.classList.add("show"):e.classList.remove("show")})),e.addEventListener("click",(()=>{window.scrollTo({top:0,behavior:"smooth"})}));
//# sourceMappingURL=index.a39a8f6a.js.map
