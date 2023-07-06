
require('dotenv').config();
const app=require('./app');
const connectionDB=require('./database');
//connection
connectionDB();
const port=process.env.PORT;
app.listen(port,()=>{
console.log(`Server is listening at port ${port}`);
})
