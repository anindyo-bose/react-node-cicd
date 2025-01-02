const express = require('express');
const app = express();
app.get('/names',(req,res)=>{
    res.send("Anindyo Bose (A.K.A Pritam)");
})

app.listen(8080, () => {
    console.log("Server is running at port 5000");
});
