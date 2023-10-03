const {v4:  uuidv4} = require("uuid");

const users = [
    {
        id : uuidv4(),
        username: "Nasir uddin",
        email: "lalalala@yahoo.com",
    },
    {
        id : uuidv4(),
        username: "Sagor uddin",
        email: "lalalala@yahoo.com",
    },
];

module.exports = users;