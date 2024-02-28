import { Link } from 'react-router-dom';

import { RoutePaths } from 'src/app/router/config';

import { useVariables } from 'features/variables/hooks/useVariables';

export default function VariableListPage() {
  const { data: variables, isLoading, error } = useVariables();

  if (isLoading) return <div>Variables are loading...</div>;
  if (error) return <div>Error occurred</div>;
  return (
    <div>
      <ul>
        {variables
          && Array.from(variables).map((variable) => (
            <li key={variable.id}>
              <Link
                to={RoutePaths.VariableDetail(
                  variable.id,
                )}
              >
                {variable.name}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
}
