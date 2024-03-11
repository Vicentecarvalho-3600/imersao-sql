import { Routes, Route } from "react-router-dom";
import Clientes from "./pages/Clientes";
import Vendas from "./pages/Vendas";
import Produtos from "./pages/Produtos";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <main>
        <Routes>
          {/* As rotas so vao existir aqui */}
          <Route path="/" element={<Clientes />} />
          <Route path="/produtos" element={<Produtos />} />
          <Route path="/vendas" element={<Vendas />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
