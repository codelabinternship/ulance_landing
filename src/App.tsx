import Navbar from './assets/components/navbar';
import Hero from './assets/components/hero';
import Services from './assets/components/services';
import  Team from './assets/components/team';
import Gallery from './assets/components/gallery'; 
import Form from './assets/components/form';
import Footer from './assets/components/footer';
// import { useEffect } from 'react';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

function App() {
//  useEffect(() => {
//     AOS.init({
//       duration: 1000, // animation duration
//       once: true,     // whether animation should happen only once
//     });
//   }, []);
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
