var data = require("./model/sqlConnection");

var users = {
    getAll: function(req, res) {
        data('select * from m_role',users);
        res.json(users);
    }
}

module.exports = users;