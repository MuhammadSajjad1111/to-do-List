const express= require("express");
const bodyParser=require("body-Parser")

const app=express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"))
// app.use("view engine", "ejs");

var items=["food", "samosy"];





app.get("/" , function(req, res){


    var date=new Date();
    

    var options= {
        day: "numeric" ,  weekday: "short" , year:"2-digit" , month: "numeric"  , hour: "numeric"
    }

    var today=date.toLocaleDateString("en-US", options);



    res.render("list" , {
        kindOfDay : today ,
        newListItems: items
    })




})


app.post("/" , function(req, res){
   var item=req.body.listItem;
    items.push(item)

    res.redirect("/");
})




app.listen(3000, function(){
    console.log("listening at port 3000")
})
