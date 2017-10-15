/* models.js
   ===========================
   set of different models
*/

// StickyNote Class (Object Constructor)

function StickyNote(){
    let _id;
    let _message;

    let _createdDate = null;
    let _modifiedDate = null;
    let _deletedDate = null;

    function toString(){
        return _message;
    }
    
    return {
        get id(){
            return _id;
        },
        set id(value){
            _id = value;
        },
        get message(){
            return _message;
        },
        set message(value){
            _message = value;
        },
        get createdDate(){
            return _createdDate;
        },
        set createdDate(value){
            _createdDate = value;
        },
        get modifiedDate(){
            return _modifiedDate;
        },
        set id(value){
            _modifiedDate = value;
        },
        get deletedDate(){
            return _deletedDate;
        },
        set id(value){
            _deletedDate = value;
        },
        toString: toString
    }
}
