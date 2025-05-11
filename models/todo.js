const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './todo-app.sqlite', // SQLite database file
});

// Define the Todo model
const Todo = sequelize.define('Todo', {
  item: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Sync the database (create tables if they don't exist)
sequelize.sync()
  .then(() => console.log('Database synced'))
  .catch(err => console.error('Error syncing database:', err));

module.exports = Todo;