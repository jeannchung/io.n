module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Employees', {
    id: DataTypes.INTEGER,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    full_name: DataTypes.STRING,
    title: DataTypes.STRING
  })
}