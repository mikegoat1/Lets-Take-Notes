// DEPENDENCIES
// We need to include the path package to get the correct file path for our html


const data = require("../db/db.json"); 

// ROUTING
module.exports = (app) => {
    app.get('/api/notes', (req, res) => res.json(data));

    app.post('/api/notes', (req, res)=> {
        data.push(req.body); 
        console.log(res) 
    } )

}
