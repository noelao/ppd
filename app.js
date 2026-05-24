const express = require('express');
const path = require('path');
const app = express();


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(express.static(path.join(__dirname, 'public')));



const indexRouter = require('./routes/index');
const templateRouter = require('./routes/template');
app.use('/', indexRouter); 
app.use('/template', templateRouter); 



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server jalan di port ${PORT}`));

module.exports = app;