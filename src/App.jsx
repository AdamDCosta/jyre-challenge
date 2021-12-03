import styles from './App.module.scss';
import Home from "./containers/Home/Home";


const App = () => {
  return (
    <div className={styles.app}>
      
      <Home />
    </div>
  );
}

export default App;
