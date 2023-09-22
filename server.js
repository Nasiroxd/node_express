const app = require('./app');
const { getUsers } = require('./fetch-json');
const port = 3000;


app.use("/api/contacts", require("./Controllerrouter"));

app.listen(port, async ()  =>{
    console.log(`Server is the running .........http:localhost: ${port}`)
    await getUsers();

});