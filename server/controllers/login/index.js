import bcrypt from 'bcrypt'
import { MongoClient, ServerApiVersion } from 'mongodb'
import jwt from 'jsonwebtoken';

const login = async (req, res) => {
  const { username, password } = req.body
  
  const url = "mongodb://localhost:27017";  

  const secret = 'mysecretsshhh'; // this MUST be changed and MUST be an env variable (its a secret)


  const client = new MongoClient(url,  {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
  }
  );

  await client.connect();
  const database = await client.db("users_database")
  const collection = await database.collection("users");

  const user = await collection.findOne({ username: username.toLowerCase() })

  if (user && await bcrypt.compare(password, user.password)) {
    // Issue token
    const payload = { username: user.username };
    const token = jwt.sign(payload, secret, {
      expiresIn: '1h'
    });

    res.cookie('token', token, { httpOnly: true })
      .status(200)
      .send(payload)


    // res.send({
    //   username: user.username
    // })
  } else {
    res.status(401).json({
      error: 'Incorrect email or password'
    });
  }

}

export default login