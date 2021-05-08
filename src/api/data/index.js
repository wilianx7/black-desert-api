const mongoose = require('mongoose');
const url = `mongodb+srv://admin:dc7MrbFQ8DEJZqbr@cluster0.7mcdn.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

mongoose.connect(url, { useNewUrlParser: true });

mongoose.connection.on('connected', (() => {
    console.log('Conectado ao MongoDB');
}));

mongoose.connection.on('disconnected', (() => {
    console.log('Desconectado do banco...');
}));

module.exports = mongoose;