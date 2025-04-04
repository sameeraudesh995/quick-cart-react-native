//express
//body parser
//mongodb
//dotenv
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config()
const port = process.env.PORT || 3000;


const BookMarkRouter = require('./routes/BookMarkRoute');
const CartRouter = require('./routes/CartRoute');
const CategoryRouter = require('./routes/CategoryRoute');
const DealRouter = require('./routes/DealsRoute');
const OrderRouter = require('./routes/OrderRoute');
const PaymentRouter = require('./routes/PaymentRoute');
const PaymentMethodRouter = require('./routes/PaymentMethodRoute');
const ProductRouter = require('./routes/ProductRoute');
const RefundRouter = require('./routes/RefundRoute');
const ReturnRouter = require('./routes/ReturnRoute');
const RoleRouter = require('./routes/RoleRoute');
const ReviewRoute = require('./routes/ReviewRoute');
const UserRouter = require('./routes/UserRoute');
const VoucherDetailsRoute = require('./routes/VoucherDetailsRoute');
const VoucherRoute = require('./routes/VoucherRouter');

const app = express();
app.use(express.json());
mongoose.connect('mongodb://localhost:127.0.0.1.27017/quick_cart_db').then(()=>{
    console.log('MongoDB Connected');
}).catch(err=>{
    console.log(err);
})

app.use('/api/vi/bookmark',BookMarkRouter);
app.use('/api/v11/cart',CartRouter);
app.use('/api/v1/category',CategoryRouter);
app.use('/api/v1/deals',DealRouter);
app.use('/api/v1/order',OrderRouter);
app.use('/api/v1/payment',PaymentRouter);
app.use('/api/v1/paymentMethod',PaymentMethodRouter);
app.use('/api/v1/product',ProductRouter);
app.use('/api/v1/refund',RefundRouter);
app.use('/api/v1/Return',ReturnRouter);
app.use('/api/v1/review',ReviewRoute);
app.use('/api/v1/role', RoleRouter);
app.use('/api/v1/user',UserRouter);
app.use('/api/v1/voutureDetails',VoucherDetailsRoute);
app.use('/api/v1/vouture',VoucherRoute);

app.listen(port,()=>{
  console.log(`server up & running on port ${port}`)

})