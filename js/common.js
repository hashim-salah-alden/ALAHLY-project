let newsName,titlesName,newsCategories=[...document.querySelectorAll(".news .categories li")],news=[...document.querySelectorAll(".news .all")],titlesCategories=[...document.querySelectorAll(".titles .categories li")],titles=[...document.querySelectorAll(".titles .titles-container")];function createFiliter(e,t,s){e.forEach(i=>{i.onclick=(a=>{i.classList.contains("active")||(t=a.target.getAttribute("data-type"),e.map(e=>e.classList.remove("active")),a.target.classList.add("active"),changeCategory(t,s),console.log(t))})})}function changeCategory(e,t){t.forEach(t=>{t.classList.add("hidden"),t.classList.contains(e)&&t.classList.remove("hidden")})}createFiliter(newsCategories,newsName,news),createFiliter(titlesCategories,titlesName,titles);