
const array = [
    { title: "1", views: 100, publishDate: 1 }, // publish date = 1 hour ago
    { title: "2", views: 400, publishDate: 2 }, // publish date = 2 hour ago
    { title: "3", views: 300, publishDate: 3} // publish date = 3 hour ago
  ];
  
  
  const sortByTrending = array.sort((a, b) => a.views- b.views  / 
  Math.pow(a.publishDate, 1.8));
  
  console.log(sortByTrending);
  
  // Output:
  