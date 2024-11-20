import { RouterProvider } from 'react-router-dom';
import './css/style.scss';
import router from './routes/router';
function App() {
    return <RouterProvider router={router} />;
}

export default App;
