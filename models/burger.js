const orm = require('../config/orm.js')

const burger = {
  selectAll: cb => {
    orm.selectAll()
      .then(data => cb(data))
  },
  insertOne: (burgerName, cb) => {
    orm.insertOne(burgerName)
      .then(data => cb(data))
  },
  updateOne: (id, colToChange, newValue, cb) => {
    orm.updateOne(id, colToChange, newValue)
      .then(data => cb(data))
  },
  deleteOne: (id, cb) => {
    orm.deleteOne(id)
      .then(data => cb(data))
  }
}


module.exports = burger