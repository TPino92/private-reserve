const searchFormHandler = async function(event) {
    window.alert('press this button!');
    
    event.preventDefault();
  
      await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(function(response) {
          console.dir(response)
      })
      .catch(err => console.log(err));
  
};
  
document.querySelector('#search-btn').addEventListener('click', searchFormHandler);