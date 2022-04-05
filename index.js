module.exports = function(app) {
    app.get('/', function (req, res) {
        const DNAME = 'localhost';
        res.sendFile('index.html', {root: __dirname});
    });
};
