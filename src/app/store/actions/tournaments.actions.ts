import { createAction, props } from '@ngrx/store';
import { ITournaments } from '../../shared/interfaces/store.interface';

export const loadTournaments = createAction('[Main Component] Load Tournaments');
export const loadTournamentsSuccess = createAction(
  '[Tournaments Effect] Load Tournaments Success',
  props<{ tournaments: ITournaments }>()
);
export const loadTournamentsFailure = createAction(
  '[Tournaments Effect] Load Tournaments Failure',
  props<{ error: string }>()
);
