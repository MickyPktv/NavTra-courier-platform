const express = require ('express');
const bodyParser = require ('body-parser')
const app = express();
const mongoose = require ('mongoose');
const cors = require ('cors');
const cookieParser = require ('cookie-parser');
const { requireAuth, checkUser } = require('./middleware/authMiddleware');


app.use(
    cors({
        credentials: true,
        origin: `http://localhost:3000`,
        SameSite: "Lax"
    })
);
app.use(cookieParser());
app.use(express.json());

//connect to MongoDB
mongoose.connect('mongodb://localhost/ordergo');
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

// initialize routes
app.get('*', checkUser);
app.use('/api/', require('./routes/authRoutes'));
app.use('/api/', require('./routes/ordersRoutes'));
app.get('/track-your-item', requireAuth, (req, res) => res.render('track-your-item'));

// //error handling
// app.use(function(err, req, res, next){
//     res.status(422).send({error: err.message})
// })


app.listen(3535, ()=>console.log('Listening for port 3535'));

