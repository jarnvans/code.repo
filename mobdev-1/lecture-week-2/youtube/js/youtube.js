var button = document.querySelector('.btn');
var searchElement = document.querySelector('.search');

button.addEventListener('click', function(ev){
    ev.preventDefault();
    var searchTerm = searchElement.value;
    var url = 'https://www.googleapis.com/youtube/v3/search?type=video&q=' + searchTerm + '&part=snippet&maxResults=25&key=AIzaSyBt3HbsGL2U741TWPxC5axsoVD6IXepH9g';
    getJsonPByPromise(url)
    .then(
        function(data){
            var tempStr = '';
            var resultsElement = document.querySelector('.results');
            var tempStr;

            
            data.items.forEach(function(element) {
                console.log(element.snippet.title)
                tempStr += `
                    <div class="video">
                        <img class="video__thumbnail" src=${element.snippet.thumbnails.medium.url}></img>
                        <h3 class="video__title">${element.snippet.title}</h3>
                    </div>
               `
                resultsElement.innerHTML = tempStr;

            }, this);
        }
    )
    .catch(
        function(error){
            console.log(error)
        }
    )   
}, false);