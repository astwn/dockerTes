const express = require('express'); 
const app = express(); 
const port = 3000; 

app.get('/', (req, res) => res.send('Welcome To Nodejs! X DockTes')); 
app.listen(3000, () => console.log(`Example app listening on port ${port}!`));