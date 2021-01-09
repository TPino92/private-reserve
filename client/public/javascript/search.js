const searchFormHandler = async function(event) {
  // grab the searchterm
    var searchTerm = document.querySelector('#searchInput').value
    console.log(searchTerm)
   
    
    event.preventDefault();
  
      // await fetch(`/api/search/${searchTerm}`)
      // //parse the data using json, turn it into usable json data
      // .then(function(response){
      //   return response.json();
      // })
      // .then(function(response) {
      //     console.dir(response)
          
      // })
      // .catch(err => console.log(err));
      window.location.href=`/api/search/${searchTerm}`
};
  
document.querySelector('#search-btn').addEventListener('click', searchFormHandler);