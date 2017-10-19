// IFFE
(function() {
    var App = {
        init: function() {
            console.log("1. Initialize the application");
            /*const stickyNote = new StickyNote();
            stickyNote.message = "Ik moet pampers halen voor Lester.";
            stickyNote.createdDate = new Date().getTime();
            stickyNote.id = new Date().getTime() + Math.round(Math.random()*new Date().getTime());

            const stickyNoteJsonString = JSON.stringify(stickyNote);
            
            if(window.localStorage) {
                window.localStorage.setItem('maya', stickyNoteJsonString);
            }

            const mayaJsonString = window.localStorage.getItem('maya');
            console.log(mayaJsonString);
            const mayaObject = JSON.parse(mayaJsonString);
            console.log(mayaObject);*/

            this._applicationDbContext = ApplicationDbContext; // Reference the ApplicationDbContext Literal Object
            this._applicationDbContext.init('ahs-nmd-stickynote'); // Call the init function from the previous object
        }
    };

    App.init();
})();