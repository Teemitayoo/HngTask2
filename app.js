const express =require('express');
const cors = require('cors');
const gg = require('./routes/detailsRoutes');
const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });

const app = express();
app.use(express.json());

app.use(cors({
  origin: '*'
}));
//ROUTE

app.use('/details', gg);



const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Running on port ${port}..`);
});
