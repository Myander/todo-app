import { TodosState } from './todos/types';
import { AuthState } from './auth/types';
import { SettingsState } from './settings/types';

export interface RootState {
  auth: AuthState;
  todos: TodosState;
  settings: SettingsState;
}
