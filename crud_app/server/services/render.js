const axios =require('axios');


exports.homeRoutes=(req,res)=>{
    //make a get request to api/foodlist
    axios.get('http://localhost:3000/api/foodlist')
    .then(function(response){
        

        res.render('crud-index',{foodlist:response.data});
    })
    .catch(err=>{
        res.send(err);
    })
    
}


exports.add_food=(req,res)=>{
    res.render('add_food');
}


exports.update_food=(req,res)=>{
 res.render('update_food');
}