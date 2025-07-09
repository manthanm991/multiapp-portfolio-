const dotenv = require('dotenv');
dotenv.config({ path: __dirname + '/.env' });

const requiredEnvVars = ['MONGO_URI', 'JWT_SECRET', 'GOOGLE_CLIENT_ID', 'MAIL_USERNAME', 'MAIL_PASSWORD', 'RECAPTCHA_SECRET_KEY'];
requiredEnvVars.forEach(envVar => {
  if (!process.env[envVar]) {
    console.error(`Missing: ${envVar}`);
    process.exit(1);
  }
});

const express = require('express');
const cors = require('cors');
const connectToMongo = require('./config/database');
const authRoutes = require('./routes/auth');
const contactRoutes = require('./routes/contact');

connectToMongo();
const PORT = process.env.PORT || 5000;
const app = express();

app.use(cors({
    origin: process.env.FRONTEND_URL || 'http://localhost:3000',
    credentials: true
}));

app.use(express.json());
app.use('/api/auth', authRoutes);
app.use('/api/portfolio', contactRoutes);

app.get('/',(req, res)=>{ res.send("Multiapp Backend Service"); })

app.listen(PORT, () => { console.log(`Multiapp backend service listening on port http://localhost:${PORT}`) });