var express =require("express");
var bodyParser=require("body-parser");
var mongoose=require("mongoose");

const app=express();

app.use(bodyParser.json());
app.use(express.static('public'))

app.use(bodyParser.urlencoded({
    extended:true
}))

mongoose.connect('mongodb://127.0.0.1:27017/mydb',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});

var db=mongoose.connection;

db.on('error',()=>{
    console.log("error in connecting to database");
})

db.once('open',()=>{
    console.log("connected to data base")
})


app.post("/addmore",(req,res)=>{
    var foodname = req.body.foodname;
    var calories = req.body.calories;

  var data={
    "foodname": foodname,
        "calories" : calories,
  }
  db.collection('food').insertOne(data,(err,collection)=>{
      if(err)
      {
          throw err;
      }
      console.log("Record inserted successfully");
  });
  return res.redirect("food-added.html");
});





app.get("/",(req,res)=>{
 
    res.set({
        "Allow-access-Allow-Origin": '*'
    })
    return res.redirect('addmore.html');
    


}).listen(3000);

console.log("listening on port 3000");