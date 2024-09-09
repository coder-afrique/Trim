import Navbar from './components/Navbar';
import Hero from './components/Hero';

function App() {
  return (
    <div className="flex flex-col min-h-screen w-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <Hero />
    </div>
  );
}

export default App;
