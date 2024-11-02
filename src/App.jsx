import { useState } from 'react';
import './App.css';

function App() {
  const [isLight, setLight] = useState(false);
  const [todos, setTodos] = useState([]);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');

  const handleClick = () => {
    setLight(prev => !prev);
    document.body.className = isLight ? 'dark' : 'light';
  };

  const handleAddTodo = () => {
    if (name && description && image) {
      setTodos([...todos, { name, description, image, showName: true }]);
      setImage('');
    }
  };

  const handleDeleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  const handleToggleName = (index) => {
    const newTodos = todos.map((todo, i) => {
      if (i === index) {
        return { ...todo, showName: !todo.showName };
      }
      return todo;
    });
    setTodos(newTodos);
  };

  return (
    <>
      <div className={isLight ? 'light' : 'dark'}>
        <button onClick={handleClick}>
          Toggle to {isLight ? 'Dark' : 'Light'}
        </button>

        <div className="todoforma">
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="text"
            placeholder="Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <button onClick={handleAddTodo}>Add Todo</button>
        </div>

        <ul className="todosia">
          {todos.map((todo, index) => (
            <li key={index} className="todocardi">
              <button onClick={() => handleToggleName(index)}>
                {todo.showName ? 'Hide Name' : 'Show Name'}
              </button>
              {todo.showName && <h3>{todo.name}</h3>}
              <p>{todo.description}</p>
              {todo.image && <img src={todo.image} alt={todo.name} />}
              <button onClick={() => handleDeleteTodo(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
