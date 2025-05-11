const express = require('express');
const bodyParser = require('body-parser');
const Todo = require('./models/todo'); 

const app = express();
app.set('view engine', 'pug');
app.set('views', 'views');
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', async (req, res) => {
  try {
    const todos = await Todo.findAll(); 
    res.render('todo', { todos: todos.map(todo => todo.item) });
  } catch (err) {
    console.error(err);
    res.status(500).send('Error fetching todos');
  }
});

app.post('/add', async (req, res) => {
  const { item } = req.body;
  try {
    if (item) await Todo.create({ item }); 
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error adding todo');
  }
});


app.post('/delete', async (req, res) => {
  const { taskid } = req.body;
  try {
    const todos = await Todo.findAll(); 
    const todoToDelete = todos[taskid];
    if (todoToDelete) {
      await todoToDelete.destroy(); 
    }
    res.redirect('/');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error deleting todo');
  }
});

app.listen(3000, () => console.log('Server running on port 3000'));