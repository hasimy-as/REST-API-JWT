const tech = require('../models/tech');

module.exports = {
  getById: function (req, res, next) {
    console.log(req.body);
    tech.findById(req.params.techId, function (err, techInfo) {
      if (err) {
        next(err);
      } else {
        res.json({ status: "success", message: "Technology founded.", data: { tech: techInfo } });
      }
    });
  },
  getAll: function (req, res, next) {
    let techList = [];
    tech.find({}, function (err, tech) {
      if (err) {
        next(err);
      } else {
        for (let tech of tech) {
          techList.push({ id: tech._id, name: tech.name, released_on: tech.released_on });
        }
        res.json({ status: "success", message: "Technology list has been found.", data: { tech: techList } });

      }
    });
  },
  updateById: function (req, res, next) {
    tech.findByIdAndUpdate(req.params.techId, { name: req.body.name }, function (err, techInfo) {
      if (err)
        next(err);
      else {
        res.json({ status: "success", message: "Technology has been updated.", data: null });
      }
    });
  },
  deleteById: function (req, res, next) {
    tech.findByIdAndRemove(req.params.techId, function (err, techInfo) {
      if (err)
        next(err);
      else {
        res.json({ status: "success", message: "Technology has been deleted.", data: null });
      }
    });
  },
  create: function (req, res, next) {
    tech.create({ name: req.body.name, released_on: req.body.released_on }, function (err, result) {
      if (err)
        next(err);
      else
        res.json({ status: "success", message: "Technology has been added.", data: null });

    });
  },
}