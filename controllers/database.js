var mongodb = require('mongodb');
var mongoDBURI = 'mongodb://jmednikov:Boom1234.@ds247619.mlab.com:47619/heroku_x8ctph3l';

module.exports.getAllOrders = function(req, res) {
    mongodb.MongoClient.connect(mongoDBURI, function(err, client) {
        if (err)
            throw err;

        var db = client.db('heroku_x8ctph3l')
        var orders = db.collection('ORDERS');
        var data = orders.find().toArray(function(err, docs) {
            res.render('getAllOrders', {results: docs});

            client.close(function(err) {
                if (err)
                    throw err;
            });
        });
    });
}
