
const models = require("../models");
const db = models.propertys;
const { Op } = require("sequelize");    
  
    exports.create = (req, res) => {    
        const body = { localization, floors, years, room, size, parkingspaces } = req.body;    
       
        db.create(body)
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message:
                err.message || "Some error occurred while creating the property."
            });
          });
      };

    exports.find = (req, res) => {  
        const limit = 10;
        const page = parseInt(req.query.page) || 1;
        const offset = (page - 1) * limit;
        db.findAndCountAll({ limit, offset}).then(result => res.json({       
            list: result.rows,
            totalPropertys: result.count,
            page,
            lastPage: result.rows.length < limit
        })
        )
     }

     exports.findById = (req, res) => {
        const id = req.params.id;
      
        db.findByPk(id)
          .then(data => {
            res.send(data);
          })
          .catch(err => {
            res.status(500).send({
              message: "Error retrieving property with id=" + id
            });
          });
      }

      exports.findWith = (req, res) => {
        const { room, size, parkingspaces } = req.query;

        db.findAll({
            where: {
              [Op.and]: [{room} || {size} ||{parkingspaces }],
              [Op.or]: [{room} || {size} || {parkingspaces }]               
            }
          }).then(result => res.json({       
            result
        }) 
        );  
      }

     exports.update = (req, res) => {
        const id = req.params.id;
      
        db.update(req.body, {
          where: { id: id }
        })
          .then(num => {
            if (num == 1) {
              res.send({
                message: "Property was updated successfully."
              });
            } else {
              res.send({
                message: `Cannot update propertywith id=${id}. Maybe Tutorial was not found or req.body is empty!`
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "Error updating property with id=" + id
            });
          });
      };

      exports.delete = (req, res) => {
        const id = req.params.id;
      
        db.destroy({
          where: { id: id }
        })
          .then(num => {
            if (num == 1) {
              res.send({
                message: "Property was deleted successfully!"
              });
            } else {
              res.send({
                message: `Cannot delete property with id=${id}. Maybe property was not found!`
              });
            }
          })
          .catch(err => {
            res.status(500).send({
              message: "Could not delete property with id=" + id
            });
          });
      };
