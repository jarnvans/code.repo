var searchElement = document.querySelector('.search');
var btn = document.querySelector('.btn');


btn.addEventListener('click', function(ev){
    var search = searchElement.value;
    var url = `https://itunes.apple.com/search?term=${search}&entity=album&country=BE`;

    getJsonPByPromise(url).then(
        function(data){
            var tempStr= '';
            
            var artistElement = document.querySelector('.artist');
            tempStr = `<h1 class="artist-name">Results for: ${search}</h1>`;
            console.log(data.collectionName);
            data.results.forEach(function(album) {
                tempStr += `
                <div class="artist__album">
                    <img src="${album.artworkUrl100}" class="artist__album-artwork"></img>
                    <h3 class="artist__name">${album.artistName}</h3>
                    <h4 class="artist__album-name">${album.collectionName}</h4>
                    <div class="artist__album-genre">${album.primaryGenreName}</div>           
                    <div class="artist__album-release">${album.releaseDate}</div>
                    <div class="artist__album-price">${album.collectionPrice + " " + album.currency}</div>
                </div>
                `
            }, this);
        
            artistElement.innerHTML = tempStr;
        }
    )
    .catch(
        function(error) {
            console.log(error);
        }
    );

}, false);