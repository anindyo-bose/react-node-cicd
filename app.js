const express = require('express');
const app = express();
app.get('/names',(req,res)=>{
    res.send("Anindyo");
})

app.listen(5000, () => {
    console.log("Server is running at port 5000");
});
