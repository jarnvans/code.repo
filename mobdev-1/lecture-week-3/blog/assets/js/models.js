//Post Model via Object Constructor

function Post() {
    this.id;

    this.title;
    this.summary;
    this.story;
    
    this.category;
    this.tags;

    this.createdDate;
    this.modifiedDate;
    this.deletedDate;
}

//Category Model via Object Constructor
function Category() {
    this.id;

    this.name;
    this.descripstion;

    this.createdDate;
    this.modifiedDate;
    this.deletedDate;

    this.parentCategoryId;
    this.childCategories;
}

//Tags Model via Object Constructor
function Tag() {
    this.id;
    this.name;

    this.createdDate;
    this.modifiedDate;
    this.deletedDate;
}
