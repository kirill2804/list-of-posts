
import {RouterProvider, createBrowserRouter} from 'react-router-dom';

import styles from './App.module.css';

import PagePostsList from '../../pages/PagePostsList';
import PagePostSingle from '../../pages/PagePostSingle';


const router = createBrowserRouter([
    {
      path:'/',
      element: <PagePostsList />
    },

    {
      path:'/post/:id',
      element: <PagePostSingle/>,
    }

])



function App() {


  return (
    <div className="App">
        <div className={styles.containerOuter}>
          <RouterProvider router={router} />
        </div>
    </div>
  );
}

export default App;
