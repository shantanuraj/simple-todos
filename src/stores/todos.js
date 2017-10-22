/**
 * Todo actions / reducer
 */

const GET_TODOS = 'GET_TODOS';

const getTodos = () => ({
  type: GET_TODOS
});

const GET_TODOS_SUCCESS = 'GET_TODOS_SUCCESS';

const getTodosSuccess = (todos) => ({
  type: GET_TODOS_SUCCESS,
  todos,
});

const GET_TODOS_FAILURE = 'GET_TODOS_FAILURE';

const getTodosFailure = (message) => ({
  type: GET_TODOS_FAILURE,
  message,
});

export const fetchTodos = (token) => {
  return dispatch => {
    dispatch(getTodos())

    return fetch(`https://www.mocky.io/v2/59ecdb853100009601d24e61?token=${token}`)
      .then(res => res.json())
      .then(todos => dispatch(getTodosSuccess(todos)))
      .catch(err => dispatch(getTodosFailure(err.message)));
  }
}

export const todos = (state = {
  fetching: false,
  todos: [],
  message: null,
}, action) => {
  switch (action.type) {
    case GET_TODOS:
      return {...state, fetching: true};
    case GET_TODOS_SUCCESS:
      return {...state, fetching: false, todos: action.todos};
    case GET_TODOS_FAILURE:
      return {...state, fetching: false, message: action.message};
    default:
      return state;
  }
}
