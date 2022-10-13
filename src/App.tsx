import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { QueryClient, QueryClientProvider } from "react-query";
import { Home } from "./pages/Home";
import { Store } from "./pages/Store";

import { Navbar } from "./components/Navbar";
import { CartProvider } from "./context/CartContext";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <CartProvider>
        <Navbar />
        <Container className="mb-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
          </Routes>
        </Container>
      </CartProvider>
    </QueryClientProvider>
  );
}

export default App;
