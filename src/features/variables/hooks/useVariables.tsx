import { useQuery } from '@tanstack/react-query';
import { fetchVariables } from '../services/variableService';

export const useVariables = () => useQuery({ queryKey: ['variables'], queryFn: fetchVariables });
