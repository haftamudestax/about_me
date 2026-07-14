import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <main className="flex flex-col items-center justify-center gap-4 px-6 py-24">
        <Navbar />
      </main>
    </>
  );
}

export default App;
