import './App.css';
import { students } from './students';
import { headers } from './headers';
import List from './components/List'
import Navbar from './components/Navbar';
import Layout from './components/Layout'
import Footer from './components/Footer';


function App() {
  return (
    <Layout>
      <Navbar/>
      <List students={students} headers={headers} />
      <Footer />
    </Layout>
  );
}

export default App;
