/*
ApplicationDbContext
====================
1) Database transactions: CRUD-operations
2) Cache for loaded data or content
*/
var ApplicationDbContext = {
    init: function(connectionStr) {
        this._connectionStr = connectionStr; // Connection String = the key in the local storage
        this._dbData = {
            "stickynotes": []
        }; // The data saved as value in the local storage via the connection string aka key
        // Check if the key exists in the local storage
        // If so --> assign the value as value of the variable _dbData
        // Otherwise --> set the value of the variable _dbData as value for the specified key
        if(window.localStorage.getItem(connectionStr)) {
            this._dbData = JSON.parse(window.localStorage.getItem(connectionStr));
        } else {
            window.localStorage.setItem(connectionStr, JSON.stringify(this._dbData));
        }
    },
    // Get all the sticky notes from the local storage
    getStickyNotes: function() {        
    },
    // Get a specific sticky note by id
    getStickyNoteById: function() {        
    },
    addStickyNote: function(stickyNote) {        
    },
    updateStickyNote: function(stickyNote) {        
    },
    deleteStickyNoteById: function(id) {        
    },
    softDeleteStickyNoteById: function(id) {        
    },
    softUnDeleteStickyNoteById: function(id) {        
    }
};