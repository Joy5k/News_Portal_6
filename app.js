const getCategoryName = () => {
    fetch(`https://openapi.programming-hero.com/api/news/categories`)
        .then(res => res.json())
        .then(data => displayCategoryName(data.data.news_category))
        .catch(error=>console.log(error))
}
const displayCategoryName = (allData) => {
    
    const categoriesContainer = document.getElementById('catergory-container');
    allData.forEach(data => {
     
        const { category_name } = data;
  
        
        const createLi = document.createElement('li');
        createLi.innerHTML = `
        <li class="nav-item px-2  font-medium">
        <a onclick="showTheNews(${data.category_id}) " class="nav-link active " aria-current="page" href="#"
          >${category_name}</a
        >
      </li>`
      
        categoriesContainer.appendChild(createLi)

    });
}


const showTheNews = (news) => {
    spinner(false)
    fetch(` https://openapi.programming-hero.com/api/news/category/0${news}`)
        .then(res => res.json())
        .then(data => displayClickedItem(data.data))
        .catch(error=>console.log(error))
    
}
                    //news feed--- catagories items  -----

const displayClickedItem = (categories) => {
   
    const categoryLength = document.getElementById('count-catergory');
    if (categories.length === 0) {
        categoryLength.innerText = `Oops! No Data found`;
    }
    else {
        categoryLength.innerText = `
     ${categories.length} :Items-Found`;
    }
   
    const cardContainer = document.getElementById('card-container');
    cardContainer.innerHTML = '';
    categories.forEach(category => {
        const { thumbnail_url, title, details,author,total_view,_id } =category ;
       
        const createCard = document.createElement('div');
  
      
        
        createCard.innerHTML = `
        <div onclick="modalFunction('${category._id}')" class=" w-full flex flex-col md:flex-row md:max-w-xl rounded-lg bg-white shadow-lg" 
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
    spinner(true);
   
    
}
// spinner---function--
const spinner = (result) => {
    
     if (result === false) {
      document.getElementById('spinner-id').classList.remove('hidden');
     }
     else if (result === true) {
         document.getElementById('spinner-id').classList.add('hidden');
         console.log('hi Iam working');
    };
    return result;
}
 
// -------------------modal function-------------------
const modalFunction = (id) => {
    fetch(`https://openapi.programming-hero.com/api/news/${id}`)
        .then(res => res.json())
        .then(data => displayDetails(data.data))
        .catch(error=>console.log(error))
    
}
const displayDetails = (allData) => {   
    const description = document.getElementById('description');
    const modalTitle = document.getElementById('exampleModalLabel');
    const imageContainer = document.getElementById('img-container');
    const publishedDate = document.getElementById('publish-date');

    allData.forEach(data => {
        console.log(data.length);
          
    const {  title, details,image_url } = data;
 
        modalTitle.innerText = `${title}
    `;
        description.innerText = `${details}`;
        imageContainer.innerHTML = `
        <img src="${image_url}" alt="">
        `;
        publishedDate.innerText = ` 
        Publish Time: ${data.author.published_date?data.author.published_date:'no data available'}`
        

})
}


modalFunction();

// /-------------------add ---spinner------------------



getCategoryName();
// --------------------main function or home page-----------
const loadData = () => {
    fetch('https://openapi.programming-hero.com/api/news/category/08')
        .then(res => res.json())
        .then(data => displayLoadData(data.data))
        .catch(error=>console.log(error))
}
const displayLoadData = (allData) => {
    spinner(true)
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


