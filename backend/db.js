const mongoose = require('mongoose');

mongoose.connect(
'mongodb+srv://Parth:parth@mongo@cluster0.zvbyt.mongodb.net/Blockchain-Ecommerce?retryWrites=true&w=majority',
 {useNewUrlParser: true, useUnifiedTopology: true}
);

const paymentSchema = new mongoose.Schema({
    id: String,
    itemId: String,
    paid: Boolean
});

const Payment = mongoose.model('Payment', paymentSchema);

module.exports = {
    Payment
};