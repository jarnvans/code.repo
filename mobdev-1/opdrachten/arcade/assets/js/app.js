var pol = {
    init: function() {

    }
};


(function() {
    //object literal notation
    var app = {
        init: function() {
            console.log("1. Initialize the application");

            //Constanten kolommen en rijen
            this.cols = 8;
            this.rows = 8;

            this.width

            //Cache DOM-elements
            this.arcadeCharacterElement = document.querySelector('.arcade-character');
            
            //Call creatArcadeCharacterMatrix function
            this.creatArcadeCharacterMatrix();

            //Call randomArcadeCharacter function
            this.randomArcadeCharacter();
        },

        creatArcadeCharacterMatrix: function(){
            var tempStr = '';

            for(var i=0; i < this.cols; i++){
                for(var j=0; j < this.rows; j++){
                    tempStr += `<div class="led" data-row="${i}" data-col="${j}"></div>`;
                }
            }
            this.arcadeCharacterElement.innerHTML = tempStr;
        },

        randomArcadeCharacter: function() {
            var pattern = '';
            for (var i = 0; i < this.rows; i++){
                var tempStr = '';
                for (var j = 0; j < this.cols/2; j++){
                    tempStr += Math.round(Math.random());

                }
                tempStr = tempStr + tempStr.split('').reverse().join('');
                pattern += tempStr;
                
            }

            for (var i = 0; i < this.rows; i++){
                for (var j = 0; j < this.cols; j++){
                    
                    if (this.cols % 2 == 0){
                        var bit = pattern.charAt((i*8)+j);
                        var ledClass = (bit == '1')? "led--on" : "led-off";
                        document.querySelector(`.led[data-row="${i}"][data-col="${j}"]`).classList.add(ledClass);
                    }
                    else {
                        if (Math.floor(this.cols / 2) == j){
                            console.log('skip');
                        }
                        else {
                            var bit = pattern.charAt((i*8)+j);
                            var ledClass = (bit == '1')? "led--on" : "led-off";
                            document.querySelector(`.led[data-row="${i}"][data-col="${j}"]`).classList.add(ledClass);
                        }
                    }
                }
            }
        }
    };
    app.init(); //Call the init() function from the object literal
})();