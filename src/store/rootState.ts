import { TodosState } from './todos/types';
import { AuthState } from './auth/types';

export interface RootState {
  auth: AuthState;
  todos: TodosState;
}
