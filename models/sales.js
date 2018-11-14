module.exports = (sequelize, DataTypes) => {
  const Sale = sequelize.define('Sales', {
    employee_name: DataTypes.STRING,
    employee_title: DataTypes.STRING,
    employee_id: DataTypes.INTEGER,
    transaction_date: DataTypes.DATEONLY,
    transaction_time: DataTypes.TIME,
    transaction_month: DataTypes.DATEONLY,
    beer_name: DataTypes.STRING,
    beer_id: DataTypes.INTEGER,
    beer_type: DataTypes.STRING,
    abv: DataTypes.FLOAT,
    product_type: DataTypes.STRING,
    total_oz: DataTypes.FLOAT,
    cpu: DataTypes.FLOAT,
    profit: DataTypes.FLOAT,
    cost: DataTypes.FLOAT
  })

  Sale.associate = models => {
    Sale.belongsTo(models.Employees, { foreignKey: { allowNull: false } })
    Sale.belongsTo(models.Products, { foreignKey: { allowNull: false } })
  }

  return Sale
}