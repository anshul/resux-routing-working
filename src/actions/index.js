import types from '../action_types';
import AddUsers from './AddUsers';
import setContestant from './setContestant';
const markCell = cellId => ({
  type: types.MARK_CELL,
  payload: cellId,
});

const onTodoSubmit = todoName => ({
  type: 'CREATE_TODO',
  payload: todoName,
});

export { markCell, onTodoSubmit, AddUsers, setContestant };
