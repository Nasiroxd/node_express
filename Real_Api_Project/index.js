require("dotenv").config();
const app = require("./App");
const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log(`Server is the stated : https:/localhost ${PORT}`);
});