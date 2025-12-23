import { BrowserRouter } from 'react-router-dom';
import RoutesConfig from './routes/RoutesConfig';

const App = () => {
  return (
    <div className="bg-white dark:bg-darkSurface min-h-screen transition-colors">
      <BrowserRouter>
        <RoutesConfig />
      </BrowserRouter>
    </div>
  );
};

export default App;
