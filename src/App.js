import './App.css';
import { students } from './students';
import List from './components/List'
import Navbar from './components/Navbar';
import Layout from './components/Layout'
import Footer from './components/Footer';
import { header } from './header';

function App() {
  return (
    <Layout>
      <Navbar/>
      <List students={students} header={header}/>
      <Footer />
    </Layout>
  );
}

export default App;
