const express=require('express');
const route=express.Router();


const services=require('../services/render');
const controller=require('../controller/controller')


route.get('/',services.homeRoutes);

route.get('/add-food',services.add_food);


route.get('/update-food',services.update_food);

//api
route.post('/api/foodlist',controller.create);
route.get('/api/foodlist',controller.find);
route.put('/api/foodlist/:id',controller.update);
route.delete('/api/foodlist/:id',controller.delete);


module.exports=route