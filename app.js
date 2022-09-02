const getCategoryName = () => {
    fetch(`https://openapi.programming-hero.com/api/news/categories`)
        .then(res => res.json())
        .then(data => displayCategoryName(data.data.news_category))
        .catch(error=>console.log(error))
}
const displayCategoryName = (allData) => {
    const categoriesContainer = document.getElementById('catergory-container');
    allData.forEach(data => {
        console.log(data.category_id);
        const { category_name } = data;
        // console.log(category_name);
        
        const createLi = document.createElement('li');
        createLi.innerHTML = `
        <li class="nav-item px-2  font-medium">
        <a onclick="showTheNews(${data.category_id})" class="nav-link active " aria-current="page" href="#"
          >${category_name}</a
        >
      </li>`
        categoriesContainer.appendChild(createLi)

    });
}


const showTheNews = (news) => {
    fetch(` https://openapi.programming-hero.com/api/news/category/0${news}`)
        .then(res => res.json())
        .then(data=>displayClickedItem(data.data))
    
}
                    // catagories items selected here-----

const displayClickedItem = (categories) => {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';
    categories.forEach(category => {
        const { thumbnail_url, title, details,author,total_view,_id } =category ;
        // console.log(category);
        const createCard = document.createElement('div');

        
        createCard.innerHTML = `
        <div onclick="modalFunction('${category._id}')" class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg" 
        data-bs-toggle="modal" data-bs-target="#staticBackdrop">
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


getCategoryName();
const loadData = () => {
    fetch('https://openapi.programming-hero.com/api/news/category/08')
        .then(res => res.json())
        .then(data => displayLoadData(data.data))
}
const displayLoadData = (allData) => {
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';
    allData.forEach(data => {
        // console.log(data._id);
        const { thumbnail_url, title, details,author,total_view,_id } = data;
        const createCard = document.createElement('div');

        
        createCard.innerHTML = `
        <div onclick="modalFunction('${data._id}')" class="flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg" 
        data-bs-toggle="modal" data-bs-target="#staticBackdrop">
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
        .then(data => displayDetails(data.data))
    
}
const displayDetails = (allData) => {   
    const description = document.getElementById('description');
    const modalTitle = document.getElementById('exampleModalLabel');
    const imageContainer = document.getElementById('img-container');
    const publishedDate = document.getElementById('publish-date');

    allData.forEach(data => {
        console.log(data.length);
          
    const { published_date, title, details, author, total_view, _id,image_url } = data;
 
        modalTitle.innerText = `${title}
    `;
        description.innerText = `${details}`;
        imageContainer.innerHTML = `
        <img src="${image_url}" alt="">
        `;
        publishedDate.innerText = ` 
        Publish Time: ${data.author.published_date}`
        

})
}


modalFunction();


