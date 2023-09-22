const fs = require("fs");


const getUsersInfo = async ()=>{

    try {
        const data = fs.readFileSync('user.json', 'utf-8');
        const datajson = JSON.parse(data);

        datajson.map(use =>{
            console.log('id : ' , use.id);
            

        })
        
    } catch (error) {
        
    }



}

const getUsers = async () =>{
   try {
    const data = fs.readFileSync('user.json', 'utf-8');
    const jsonData = JSON.parse(data);

    jsonData.map(usr =>{
        console.log('Id  : ' , usr.id);
        console.log('FastName : ' , usr.fastName);
        console.log('Versity' , usr.Versity);
        console.log('Email :' ,usr.email);
    })

    
   } catch (error) {
    console.log(error);
    
   }
}

module.exports = {getUsers};