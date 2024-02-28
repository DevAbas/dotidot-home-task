import { RouteProps } from 'react-router-dom';

/*
 * Router Types
 * */
export type AppRoute = RouteProps & {
  path: string;
  component: JSX.Element;
};
