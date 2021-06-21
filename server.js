// Dependencies
const express = require('express');


const app = express();
const PORT = process.env.PORT || 5500;

// Sets up the Express app to handle data parsing
// Middle wear. Lets you accept post requests. 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


require('./routes/htmlRoutes')(app);
require('./routes/apiRoutes')(app);


app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));

