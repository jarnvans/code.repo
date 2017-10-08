// var arcadeElement = document.querySelector('.arcade');
// var temp = '';
// var temp2 = '';
// var temp3 = '';
// for (var i = 0; i < 8; i++){
//     for (var j = 0; j < 4; j++){
//         var colorNotColor = Math.round(Math.random());
//         if (colorNotColor == 1){
//             temp2 += '0';
//         }
//         else {
//             temp2 += '*';
//         }
//     }
//     temp3 = temp2.split("").reverse().join("");
//     temp2 += temp3;
    
//     temp += temp2 + '<br>'
//     temp2 = '';
//     temp3 = '';
// }

// arcadeElement.innerHTML = temp;

var arcadeElement = document.querySelector('.arcade');
var btn = document.querySelector('.btn');

btn.addEventListener('click', function(e) {
    e.preventDefault;
    var temp = [];
    var temp2 = [];
    var temp3 = [];
    //var temp2 = '';
    //var temp3 = '';
    for (var i = 0; i < 8; i++){
        for (var j = 0; j < 4; j++){
            var colorNotColor = Math.round(Math.random());
            if (colorNotColor == 1){
                temp.push('<div class="on"></div>');
            }
            else {
                temp.push('<div class="off"></div>');
            }
        }
            
        temp2 = temp.slice().reverse();
        temp += temp2;
        temp3 += temp.toString().replace(/,/g,'');
        temp3 += '<br>';
        //console.log(temp3);
        temp = [];
        temp2 = [];
    }
    
    arcadeElement.innerHTML = temp3;
    
})

