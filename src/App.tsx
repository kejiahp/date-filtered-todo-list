import GlobalStateContext from "./context/GlobalStateContext";
import HomePage from "./pages/HomePage";
import ToastContext from "./providers/ToastProvider";

function App() {
  return (
    <>
      <ToastContext />
      <GlobalStateContext>
        <main>
          <HomePage />
        </main>
      </GlobalStateContext>
    </>
  );
}

export default App;
