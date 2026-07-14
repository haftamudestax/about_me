import "./App.css";
import { HeroSection } from "./components/Hero/HeroSection";
import { Navbar } from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <main className="flex flex-col w-full">
        <Navbar />
        <HeroSection />
      </main>
    </>
  );
}

export default App;
