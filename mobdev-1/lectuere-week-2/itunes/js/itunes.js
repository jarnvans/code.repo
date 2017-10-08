function getJSONPByCallbacks(url, successHandler, errorHandler){
    var name = 'jsonp' + new Date().getTime();
    if (url.match(/\?/)) url += '&callback='+name;
    else url += '?callback='+name;

    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    window[name] = function(data){
        document.getElementsByTagName('head')[0].removeChild(script);
        script = null;
        delete window[name];

        successHandler && successHandler(data);
    };

    document.getElementsByTagName('head')[0].appendChild(script);
}

var search = document.querySelector('search');
var btn = document.querySelector('btn');

getJSONPByCallbacks('https://itunes.apple.com/search?term=sabaton&entity=album&country=BE',
function(data){
    console.log(data.results);
    var albumPlace = data.results;
    var tempStr= '';
    
    var artistElement = document.querySelector('.artist');
    tempStr = `<h1 class="artist-name">${data.results[0].artistName}</h1>`;
    console.log(data.collectionName);
    data.results.forEach(function(album) {
        console.log(album.collectionName);
        tempStr += `
        <div class="artist__album">
            <img src="${album.artworkUrl100}" class="artist__album-artwork"></img>
            <h3 class="artist__album-name">${album.collectionName}</h3>
            <div class="artist__album-genre">${album.primaryGenreName}</div>           
            <div class="artist__album-release">${album.releaseDate}</div>
            <div class="artist__album-price">${album.collectionPrice + " " + album.currency}</div>
        </div>
        `
    }, this);

    artistElement.innerHTML = tempStr;
},
function(error) {
    console.log(error);
});