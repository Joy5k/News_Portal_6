const getCategoryName = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data=>displayCategoryName(data.data.news_category))
}
const displayCategoryName = (allData) => {
    const categoriesContainer = document.getElementById('catergory-container');
    allData.forEach(data => {
        // console.log(data.category_name);
        const { category_name } = data;
        console.log(category_name);
        
        const createLi = document.createElement('li');
        createLi.innerHTML = `
        <li class="nav-item px-2  font-medium">
        <a class="nav-link active " aria-current="page" href="#"
          >${category_name}</a
        >
      </li>`
        categoriesContainer.appendChild(createLi)

    });
}
getCategoryName()