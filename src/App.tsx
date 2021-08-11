import { CartGlobalState } from "./components/CartContext";
import { Home } from "./components/pages/Home";
import "./styles/main.scss";

export function App() {
  return (
    <CartGlobalState>
      <Home />
    </CartGlobalState>
  );
}
