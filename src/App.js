import './App.css';
import { students } from './students';
import Titles  from './title';
import Table from './components/Table'
import Navbar from './components/Navbar';
import Layout from './components/Layout'
import Footer from './components/Footer';

function App() {
  return (
    <Layout>
      <Navbar/>
      <Table students={students}>
        <Titles />
      </Table>
      <Footer />
    </Layout>
  );
}

export default App;
