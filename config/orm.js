const connection = require('./connection.js')

const selectAll = () => {
  return new Promise ((resolve, reject) => {
    connection.query(
      'SELECT id, burger_name, devoured FROM burgers', (err, data) => {
        if (err) reject(err)
        resolve(data)
      }
    )
  })
}

const insertOne = (burgerName) => {
  return new Promise ((resolve, reject) => {
    connection.query(
      'INSERT INTO burgers (burger_name, devoured) VALUES (?, false)', [burgerName], (err, data) => {
        if (err) reject(err)
        if (data.affectedRows !== 1) reject('Error: No data entered')
        resolve(data)
      }
    )
  })
}

const updateOne = (id, colToChange, newValue) => {
  return new Promise((resolve, reject) => {
      connection.query(
        'UPDATE burgers SET ?? = ? WHERE id = ?', [colToChange, newValue, id], (err, data) => {
          if (err) reject(err)
          if (data.changedRows !== 1) reject('Burger not found.')
          resolve(data)
        }
      )
    }
  )
}

const deleteOne = (id) => {
  return new Promise((resolve, reject) => {
      connection.query(
        'DELETE FROM burgers WHERE id = ?', [id], (err, data) => {
          if (err) reject(err)
          if (data.affectedRows !== 1) reject('Burger not found.')
          resolve(data)
        }
      )
    }
  )
}

// insertOne('Steak N Shake Double Patty Melt').then(data => console.log(data.affectedRows))
// updateOne(3, 'devoured', true).then(data => console.log(data))
// deleteOne(4).then(data => console.log(data))
// selectAll().then(data => console.log(data))


module.exports = {
  selectAll,
  insertOne,
  updateOne,
  deleteOne
}