import { Route, Routes } from 'react-router-dom';

import routes from './routes';

export default function AppRouter() {
  return (
    <Routes>
      {routes.map(({ path, component }) => (
        <Route
          key={path}
          path={path}
          element={component}
        />
      ))}
    </Routes>
  );
}
