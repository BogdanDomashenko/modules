const User = require('./models/UserModel.js');

const users = [
    {name: 'Domashenko', age:'18'},
    {name: 'user002', age:'322'}
];

module.exports = function (app) {
    app.get("/", (req, res) => {
        User.find((err, users) => {
            if (err)
              res.send(err);

            res.json(users);
          }); 
    });

    app.post("/", (req, res) => {
        res.send(users);
    });
}