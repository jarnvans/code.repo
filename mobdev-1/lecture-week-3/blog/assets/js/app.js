(function() {
    var app = {
        init: function() {
            console.log("1. Initialize the application");

            this.tags = [];
            
            var tag = new Tag();
            tag.id = new Date().getTime() + Math.round(random()*1000);
            tag.name = 'rpi';
            tag.createdDate = new Date().getTime();
            this.tags.push(tag);
            

            tag = new Tag();
            tag.id = new Date().getTime() + Math.round(random()*1000);
            tag.name = 'minecraft';
            tag.createdDate = new Date().getTime();
            this.tags.push(tag);


            this.categories = [];
            var category = new Tag();
            category.id = new Date().getTime() + Math.round(random()*1000);
            category.name = 'rpi';
            category.createdDate = new Date().getTime();
            category.parentCategoryId = null;
            this.tags.push(tag);
            

            category = new Category();
            tag.id = new Date().getTime() + Math.round(random()*1000);
            tag.name = 'minecraft';
            tag.createdDate = new Date().getTime();
            this.tags.push(tag);

            console.log(this.categories);
        }
    }
    app.init();
    
})();