const mongoose = require('mongoose');
mongoose.connect(
'mongodb+srv://test:test123@blockchain-ecommerce.p3ppw.mongodb.net/test',
 {useNewUrlParser: true, useUnifiedTopology: true}
);

const paymentScheme = new mongoose.Schema({
    id: String,
    itemId: String,
    paid: Boolean
});

const Payment = mongoose.model('Payment', paymentScheema);

module.exports = {
    Payment
};
