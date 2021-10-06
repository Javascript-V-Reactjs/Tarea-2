import './App.css';
import { students } from './students';
import List from './components/List'
import Navbar from './components/Navbar';
import Layout from './components/Layout'
import Footer from './components/Footer';
import Rows from './header';

function App() {
  return (
    <Layout>
      <Navbar/>
      <List students={students}>
        <Rows/>
      </List>  
      <Footer />
    </Layout>
  );
}

export default App;
