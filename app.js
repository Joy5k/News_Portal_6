const getCategoryName = () => {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => displayCategoryName(data.data.news_category))
        .catch(error=>console.log(error))
}
const displayCategoryName = (allData) => {
    const categoriesContainer = document.getElementById('catergory-container');
    allData.forEach(data => {
        // console.log(data.category_name);
        const { category_name } = data;
        // console.log(category_name);
        
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


getCategoryName();
const loadData = () => {
    fetch('https://openapi.programming-hero.com/api/news/category/01')
        .then(res => res.json())
        .then(data => displayLoadData(data.data))
}
const displayLoadData = (allData) => {
     const cardContainer = document.getElementById('card-container');
    allData.forEach(data => {
        const { thumbnail_url, title, details,author,total_view,_id } = data;
        const createCard = document.createElement('div');
        
        createCard.innerHTML = `
        <div onclick="modalFunction('${data._id}')" class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg">
        <img class="  w-full h-96 md:h-auto object-cover md:w-48 rounded-t-lg md:rounded-none md:rounded-l-lg" src="${thumbnail_url}" alt="" />
        <div class="p-6 flex flex-col justify-start">
          <h5 class="text-gray-900 text-xl font-medium mb-2">${title}
          </h5>
          <p class="text-gray-700 text-base mb-4">${details.slice(0,150)}...</p>
          
          
 <div class="text-sm inline-grid grid-cols-2 gap-2">
 <div><img class="w-10 h-10 inline-grid  rounded-full " src="${author.img}">
 <span class="font-semibold">${author.name?author.name:'no data available'}</span></div>
 <div><p class="font-semibold mt-2">View: ${total_view?total_view:'no data available'}</p></div>
         
      </div>
         
        </div>
        <div class="flex items-center">
      
      
    </div>
      </div>`
        cardContainer.appendChild(createCard);
    })
    
}
loadData();

const modalFunction = (id) => {
    fetch(`https://openapi.programming-hero.com/api/news/${id}`)
        .then(res => res.json())
        .then(data => displayDetails(data))
    
}
const displayDetails = () => {
    const modalContainer = document.getElementById('modal-container');
}


modalFunction();


