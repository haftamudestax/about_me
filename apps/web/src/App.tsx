import "./App.css";
import { HeroSection } from "./components/Hero/HeroSection";
import { Navbar } from "./components/Navbar/Navbar";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <main className="flex flex-col w-full">
        <Navbar />
        <HeroSection />
        <Footer />
      </main>
    </>
  );
}

export default App;
