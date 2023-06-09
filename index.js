const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const db = require('./config/mongoose');
const port = 5000;
const app = express();


app.use(cors());
app.use(express.json());
app.use(helmet());


app.use('/', require('./routes'));


app.listen(port, (err) => {
    
    if(err){
        console.log(`Error in running server: ${err}`);
        return;
    }
    console.log(`Server is running on port: ${port}`);
});