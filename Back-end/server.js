
let express = require('express')
let config = require('./config/config');
let dbUri = require('./config/db.config')
let uriDb = dbUri.url
let path=require('path')
let postRouter = require('./routes/postRoutes')
let commentRouter = require('./routes/commentRoutes')
let userRouter = require('./routes/userRoutes')
let forumRouter = require('./routes/formRoutes')
let themeRouter = require('./routes/themeRoutes')
let bodyParser = require('body-parser');
let logger = require('morgan');
let mongoose =require('mongoose')
let app = express();

const PORT = process.env.PORT || config.PORT;
mongoose.connect(uriDb,{useNewUrlParser: true, useUnifiedTopology: true },()=>{
    console.log("connected to data base succefully");
},error=>{
    console.log("error connected to db " + error);
})
app.use('/',express.static(path.join(__dirname,'public')));


app.get('', (req, res) => {
  res.sendFile(path.join(__dirname, 'public','index.html'));
});
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
});
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(forumRouter);
app.use(themeRouter);
app.use(postRouter);
app.use(commentRouter);
app.use(userRouter);
app.listen(process.env.PORT || config.PORT );
