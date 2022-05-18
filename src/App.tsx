// Providers
import MUIProvider from "./providers/MUIProvider";

// Screens
import Home from "./screens/Home";

const App = () => {
  return (
    <MUIProvider>
      <Home />
    </MUIProvider>
  );
};

export default App;
