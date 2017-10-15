(function(){
    var App = {
        init: function() {
            console.log("1. Initialize the application");
            
            //Create sticky note
            const sn = new StickyNote();
            sn.id = new Date().getTime() + Math.round(Math.random() * new Date().getTime());
            sn.message = "Ik moet straks supernatural kijken #newepisode";
            sn.createdDate = new Date().getTime();

            //Creating string out of object
            const snJsonString = JSON.stringify(sn);

            //Saving string to local storage
            if (window.localStorage){
                window.localStorage.setItem("sn", snJsonString);
            }

            //Read local storage
            const stickyJsonString =  window.localStorage.getItem("sn");
            console.log(stickyJsonString);

            //Parsing string to object
            const stickyObject =  JSON.parse(stickyJsonString);
            console.log(stickyObject);

        }
    } 
    ;

    App.init();
})();