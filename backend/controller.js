const db = require("./db"); 


exports.getAllEvents = (req, res) => {
    db.query("Select * from events", (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
};


exports.getById = (req, res) => {
    const id = req.params.id;
    db.query("select * from events where id = ?", [id], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
};

exports.addEvent = (req, res) => {
    db.query("Insert into events set ?", req.body, (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
};


exports.updateEvent = (req, res) => {
    const id = req.params.id;
    const body = req.body;
    db.query("update events set ? where id = ?", [body, id], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
};


exports.deleteEvent = (req, res) => {
    const id = req.params.id;
    db.query("delete from events where id = ?", [id], (err, data) => {
        if (err) return res.json(err);
        return res.json(data);
    });
};