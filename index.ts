import express from 'express';
//import tweetsRoutes from './src/routes/tweets'
import dataRoutes from './src/routes/data'


const app = express();
app.use(express.json());

app.use('/api', dataRoutes);


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running ${PORT}`))