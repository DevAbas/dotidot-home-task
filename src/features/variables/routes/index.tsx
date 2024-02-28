import { RoutePaths } from 'app/router/config';
import { AppRoute } from 'shared/types';
import VariableListPage from 'features/variables/pages/VariableListPage';
import VariableDetailPage from 'features/variables/pages/VariableDetailPage';

const variableRoutes: AppRoute[] = [
  {
    path: RoutePaths.Variables(),
    component: <VariableListPage />,
  },
  {
    path: RoutePaths.VariableDetail('*'),
    component: <VariableDetailPage />,
  },
];

export default variableRoutes;
