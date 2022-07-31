const mongoose  = require('mongoose');


var schema =new mongoose.Schema({
    name:{
        type:[String],
        required:true
    
    },
    calories:{

        
       
    },

    proteins:{

        
        
        
    },
    vitamins:{

        
    }

})

const Fooddb=mongoose.model('fooddb',schema);
module.exports=Fooddb;