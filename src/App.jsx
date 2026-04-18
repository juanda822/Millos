import { useState } from "react";
import "./App.css";

function App() {
  const [tipo, setTipo] = useState("rapida");
  const [comida, setComida] = useState(null);
  const [historial, setHistorial] = useState([]);

  const comidas = {
    rapida: [
      { nombre: "Pizza", img: "https://source.unsplash.com/400x300/?pizza" },
      { nombre: "Hamburguesa", img: "https://source.unsplash.com/400x300/?burger" },
      { nombre: "Perro caliente", img: "https://source.unsplash.com/400x300/?hotdog" },
    ],
    saludable: [
      { nombre: "Ensalada", img: "https://source.unsplash.com/400x300/?salad" },
      { nombre: "Salmón", img: "https://source.unsplash.com/400x300/?salmon" },
      { nombre: "Fruta", img: "https://source.unsplash.com/400x300/?fruit" },
    ],
    barata: [
      { nombre: "Arroz con huevo", img: "https://source.unsplash.com/400x300/?rice" },
      { nombre: "Pasta", img: "https://source.unsplash.com/400x300/?pasta" },
      { nombre: "Arepa", img: "https://source.unsplash.com/400x300/?arepa" },
    ],
  };

  const recomendar = () => {
    const lista = comidas[tipo];
    const random = lista[Math.floor(Math.random() * lista.length)];
    setComida(random);
    setHistorial([random.nombre, ...historial]);
  };

  return (
    <div className="container">
      <h1>🍽️ ¿Qué como hoy?</h1>

      <select onChange={(e) => setTipo(e.target.value)}>
        <option value="rapida">Comida rápida</option>
        <option value="saludable">Saludable</option>
        <option value="barata">Económica</option>
      </select>

      <button onClick={recomendar}>Recomendar</button>

      {comida && (
        <div className="card">
          <h2>{comida.nombre}</h2>
          <img src={comida.img} alt={comida.nombre} />
        </div>
      )}

      <h3>Historial</h3>
      <ul>
        {historial.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;