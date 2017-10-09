var pol = {
    init: function() {

    }
};


(function() {
    //object literal notation
    var app = {
        init: function() {
            console.log("1. Initialize the application");

            //Cache DOM-elements
            this.arcadeCharacterElement = document.querySelector('.arcade-character');
            
            //Call creatArcadeCharacterMatrix function
            this.creatArcadeCharacterMatrix();

            //Call randomArcadeCharacter function
            this.randomArcadeCharacter();
        },

        creatArcadeCharacterMatrix: function(){
            var row = 8;
            var col = 8;
            var tempStr = '';
            for(var i=0; i < row; i++){
                for(var j=0; j < col; j++){
                    tempStr += `<div class="led" data-row="${i}" data-col="${j}"></div>`;
                }
            }
            this.arcadeCharacterElement.innerHTML = tempStr;
        },

        randomArcadeCharacter: function() {
            var pattern = '';
            for (var i = 0; i < 8; i++){
                var tempStr = '';
                for (var j = 0; j < 4; j++){
                    tempStr += Math.round(Math.random());

                }
                tempStr = tempStr + tempStr.split('').reverse().join('');
                pattern += tempStr;
                
            }

            for (var i = 0; i < 8; i++){
                var tempStr = '';
                for (var j = 0; j < 8; j++){
                    var bit = pattern.charAt((i*8)+j);
                    var ledClass = (bit == '0')? "led--on" : "led-off";
                    document.querySelector(`.led[data-row="${i}"][data-col="${j}"]`).classList.add(ledClass);
                }
            }


            var arcadeCharacterLEDElement = this.arcadeCharacterElement.querySelector('.led');
            console.log(pattern);
        }
    };
    app.init(); //Call the init() function from the object literal
})();