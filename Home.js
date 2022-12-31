 import Movies from './Movies';
import Search from "./Search";


const Home = () => {
    //const name=useContext(AppContext);
    
  return (
    <>
    <div className='container'>
    <Search />
    <Movies />
    </div>
    </>
  );
};

export default Home;
