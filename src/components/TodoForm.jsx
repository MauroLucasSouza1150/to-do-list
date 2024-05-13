import { useState } from 'react'

const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [category, setcategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value || !category) return;
    addTodo(value, category);
    setValue("");
    setcategory("");
  };

  return (
    <div className="todo-form">
        <h2>Criar Tarefa:</h2>
        <form onSubmit={handleSubmit}>
            <input type="text" value={value} placeholder="Digite um Título" 
            onChange={(e) => setValue(e.target.value)} />
            <select value={category} onChange={(e) => setcategory(e.target.value)} >
                <option value="">Selecione a Categoria</option>
                <option value="trabalho">Trabalho</option>
                <option value="estudos">Estudos</option>
                <option value="pessoal">Pessoal</option>
            </select>
            <button type="submit">Criar Tarefa</button>
        </form>
    </div>
  )
}

export default TodoForm