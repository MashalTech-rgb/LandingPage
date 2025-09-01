import Navbar from './components/Navbar';
import './App.css';
import Footer from './components/Footer';
import BlogSection from './assets/Sections/BlogSection';
import HeroSection from './assets/Sections/HeroSection';
import ClientsSection from './assets/Sections/ClientSection';
import StatsSection from './assets/Sections/StatsSection';

function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection/>
      <ClientsSection/>
      <StatsSection/>
      <BlogSection/>
      <Footer/>
    </div>
  );
}

export default App;