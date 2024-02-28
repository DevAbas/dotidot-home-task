import axios from 'axios';
import { Variable } from '../types';

interface VariablesResponse {
  data: { variables: { variables: Variable[] } };
}

export const fetchVariables = async (): Promise<Variable[]> => {
  const { data } = await axios.get<VariablesResponse>(
    import.meta.env.VITE_API_BASE_URL,
  );
  return data.data.variables.variables;
};

// export const fetchVariableDetails = async () => {
//   const response = await axios.get(API_URL);
//   return response.data;
// };
