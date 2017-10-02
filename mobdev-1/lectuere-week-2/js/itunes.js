function getJSONByCallbacks(url, succesHandler, errorHandler) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('GET', url, true);
    xhr.onload = function() {
        if(xhr.status == 200) {
            var data = (!xhr.responseType)?JSON.parse(xhr.response):xhr.response;
            succesHandler && succesHandler(data)
        }
        else {
            errorHandler && errorHandler(`Error:${xhr.status}`);
        }
    }
    xhr.onerror = function() {
        errorHandler && errorHandler('Network Error!');
    }
    xhr.send(null);
}

getJSONByCallbacks('https://itunes.apple.com/search?term=sabaton&entity=album',
function(data){
    console.log(data);
    var tempStr= '';
    data.foreach(function(album) {
        tempStr += `
        <div class="artist__album">
            <h3 class="artist__album-name>${album.collectionName}</h3>
        </div>

        `
    }, this);
},
function(error) {
    console.log(error);
});