import types from '../../action_types';

const initialState = [
  {id: 1, task : 'task 1',isCompleted: true},
  {id: 2, task : 'task 2',isCompleted: false},
  {id: 3, task : 'task 3',isCompleted: false}
];

const todoItem = (state = {}, action ) => {
  switch(action.type){
    case types.CREATE_TODO :
      return { ...state, id: (new Date() / 1), task : action.payload , isCompleted : false };
    default:
      return state;
  }
}

export default function (state = initialState , action)  {
  switch(action.type){
    case types.CREATE_TODO :
      return [...state,  todoItem(state, action)];
    default:
      return state;
  }
}


