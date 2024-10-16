import express from 'express'
import cors from 'cors'
// import https from 'https'
import routes from './routes/index.js'
import cookieParser from 'cookie-parser'
import jwt from 'jsonwebtoken';

const secret = 'mysecretsshhh'; // this MUST be changed and MUST be an env variable (its a secret)

const app = express();

const withAuth = (req, res, next) => {
  const { token } = req.cookies
  console.log(req)

  if (token) {
    jwt.verify(token, secret, (err, decoded) => {
      if (err) {
        res.status(401).send('Unauthorized: Invalid token');
      } else {
        req.email = decoded.email;
        next();
      }
    });
  } else {
    res.status(401).send('Unauthorized: No token provided');
  }
}

app.use(express.json());

app.use(cors({
  credentials: true,
  origin: 'http://localhost:5173',
}));

app.use(cookieParser());

app.use((_, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173');
  res.header('Access-Control-Allow-Credentials', true);
  res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

app.listen(3333, () =>
  console.log(`Server started on port ${3333}...`),
);

app.use('/api', routes);

app.get('/api/authed-only-endpoint', withAuth, (req, res) => {
  res.send('The password is potato');
});

