import Navbar from './assets/components/navbar';
import Hero from './assets/components/hero';
import Services from './assets/components/services';
import Team from './assets/components/team';
import Gallery from './assets/components/gallery'; 
import Form from './assets/components/form';
import Footer from './assets/components/footer';

function App() {
  return (
    <div className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <Navbar />
      <Hero />
      <Services />
      <Team />
      <Gallery />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
