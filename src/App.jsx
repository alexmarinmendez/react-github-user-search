import ThemeContextProvider from "./contexts/ThemeContext";
import Home from "./components/Home";

const App = () => {
  return (
    <ThemeContextProvider>
      <Home />
    </ThemeContextProvider>
  )
}

export default App;