var express = require("express");
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/static", {
  index: false
}));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.get('/', function(request, response){
  response.render('index', {title: "my Express project"});
  // response.send("<h1>Hello Hiram</h1>");
  // console.log(request);
  // // console.log(response);
  // // console.log(express);
  // console.log(app);
});

app.post('/users', function (req, res){
    console.log("POST DATA \n\n", req.body)
    let postData = req.body;
    res.render("results", { postData});
});

app.get('/main', function(request, response){
  response.send
})

app.listen(8000, function(){
  console.log("Listening on port 8000");
})

app.get('/favicon.ico', function(req, res) {
    res.status(204);
});

app.get("/users/:id", function (req, res){
    console.log("The user id requested is:", req.params.id);
    // just to illustrate that req.params is usable here:
    res.send("You requested the user with id: " + req.params.id);
    // code to get user from db goes here, etc...
});

app.get("/users", function(request, response){
  var users_array = [
        {name: "Michael", email: "michael@codingdojo.com"},
        {name: "Jay", email: "jay@codingdojo.com"},
        {name: "Brendan", email: "brendan@codingdojo.com"},
        {name: "Andrew", email: "andrew@codingdojo.com"}
    ];
    response.render('users', {users: users_array});
})
