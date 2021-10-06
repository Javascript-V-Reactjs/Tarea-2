import './App.css';
import { students } from './students';
import titles from './titles';
import List from './components/List'
import TableHeaders from './components/TableHeaders'
import Navbar from './components/Navbar';
import Layout from './components/Layout'
import Footer from './components/Footer';

function App() {
  return (
    <Layout>
      <Navbar/>
      <List students={students}>
        <TableHeaders titles={titles}></TableHeaders>
      </List>
      <Footer />
    </Layout>
  );
}

export default App;
