var Fooddb=require('../model/model');


//create and save new user

exports.create=(req,res)=>{
    //validate request
    if(!req.body){
        res.status(400).send({message:"content can not be empty"});
        return;
     }
//new user
     const food =new Fooddb({
        name:req.body.name,
        calories:req.body.calories,
        proteins:req.body.proteins,
        vitamins:req.body.vitamins
        
    })

    //save user in database
    food
      .save(food)
      .then(data=>{
       // res.send(data)
       res.redirect('/add-food')
        
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message || "some error while creating a create operation"
        });
    });
}

exports.find=(req,res)=>{

  if(req.query.id)
  {
    const id=req.query.id;
    Fooddb.findById(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message:"not found user with id"+id})
        }
        else{
            res.send(data);
        }
    })
    .catch(err=>{
        res.status(500).send({message:"error retriving user with id="+id})
    })
  } 
  else
  {
    Fooddb.find()
    .then(food=>{
        res.send(food)
    })
    .catch(err=>{
        res.status(500).send({message:err.message || "error occured while retriving information"})
    })
  }



   
    
}

exports.update=(req,res)=>{
    if(!req.body){
        return res.status(400)
        .send({message:"data to update can not be empty"})
    }
    const id=req.params.id;
    Fooddb.findByIdAndUpdate(id,req.body,{useFindAndModify:false})
    .then(data=>{
        if(!data){
            res.status(404).send({message:`cannot update user with ${id},maybe user  not found`})
        }
        else
        {
            res.send(data)
        }
    })
    .catch(er=>{
        res.status(500).send({message:"error update user info"})
    })
}

exports.delete=(req,res)=>{
    const id=req.params.id;

    Fooddb.findByIdAndDelete(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message:`cannot delete with ${id},maybe id is wrong`})
        }
        else{
            res.send({
                message:"user was deleted successfully"
            })
        }
    })
    .catch(err=>{
        res.status(500).send({
            message:"could not delete user with id="+id
                });
    });
}