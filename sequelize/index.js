const Sequelize = require('sequelize')
const sequelize = new Sequelize('NodeTest', 'root', 'password', {dialect: 'mysql'})
sequelize.query('select * from test_table').spread((results, metadata) => {
  console.log(results)
  sequelize.close()
})
