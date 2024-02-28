import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { useVariables } from 'features/variables/hooks/useVariables';
import { Variable } from 'features/variables/types';

export default function VariableDetailPage() {
  const [variableData, setVariableData] = useState<Variable | null>(null);

  const params = useParams();
  const fullPath = params['*']; // This captures the wildcard part of the URL

  const { data: variables, isLoading, error } = useVariables();

  useEffect(() => {
    if (!variables || !variables.length) {
      return;
    }

    variables.forEach((variable) => {
      if (variable.id === fullPath) {
        setVariableData(variable);
      }
    });
  }, [variables, fullPath]);

  if (isLoading) return <div>Variable is loading...</div>;
  if (error) return <div>Error occurred</div>;

  return (
    <div style={{ margin: '10px', padding: '10px', border: '1px solid #ddd' }}>
      <h2>{variableData?.name}</h2>
      <p>
        ID:
        {variableData?.id}
      </p>
      <p>
        Placeholder Name:
        {variableData?.placeholderName}
      </p>
      <p>
        Show Value Type:
        {variableData?.showValueType}
      </p>
      {/* Render other details as needed */}
    </div>
  );
}
