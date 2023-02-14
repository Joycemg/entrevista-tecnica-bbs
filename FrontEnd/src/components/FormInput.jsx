import { useState } from 'react';

const FormInput = ({ setSearch }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    setSearch(input);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="inputBox">
        <input className="input" type="text" placeholder="Buscar por nombre o código de producto" value={input} onChange={(e) => setInput(e.target.value)} />
        <button className="button">Buscar</button>
      </div>
    </form>
  );
};

export default FormInput;
