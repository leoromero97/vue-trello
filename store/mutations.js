import * as types from './mutations-types';

export default {
  // Fetch de los tableros existentes
  [types.FETCH_BOARDS_REQUEST] (state) {
    state.fetchingData = true;
    state.error = null;
  },
  [types.FETCH_BOARDS_SUCCESS] (state, { boards }) {
    state.fetchingData = false;
    state.error = null;
    state.boards = { ...boards }
  },
  [types.FETCH_BOARDS_FAILURE] (state, { error }) {
    state.fetchingData = false;
    state.error = error;
  },
  // Fetch de las listas de un tablero
  [types.FETCH_LISTS_REQUEST] (state) {
    state.fetchingData = true;
    state.error = null;
  },
  [types.FETCH_LISTS_SUCCESS] (state, { lists }) {
    state.fetchingData = false;
    state.error = null;
    state.lists = { ...lists }
  },
  [types.FETCH_LISTS_FAILURE] (state, { error }) {
    state.fetchingData = false;
    state.error = error;
  },
  // Fetch de las tareas de una lista
  [types.FETCH_TASKS_REQUEST] (state) {
    state.fetchingData = true;
    state.error = null;
  },
  [types.FETCH_TASKS_SUCCESS] (state, { tasks }) {
    state.fetchingData = false;
    state.error = null;
    // En las tareas del state uso assign que recibe 2 parametros, el target vacio en este caso y que haga una copia en state.task con las tasks que lleguen como parametro
    state.tasks = Object.assign({}, state.tasks, tasks)
  },
  [types.FETCH_TASKS_FAILURE] (state, { error }) {
    state.fetchingData = false;
    state.error = error;
  },
  // Crear un nuevo tablero, dentro del objeto boards
  [types.ADD_BOARD] (state, { board }) {
    Vue.set(state.boards, board.id, board)
  },
  [types.ADD_COLUMN] (state, { column }) {
    Vue.set(state.lists, column.id, column)
  },
  [types.ADD_TASK] (state, { task }) {
    Vue.set(state.tasks, task.id, task)
  },
  // Modificar el objeto tareas del estado con filter para que devuelva todas las tareas cuyo id no sea igual al que pasamos por parametro
  [types.DELETE_TASK] (state, { taskId }) {
    state.tasks = Object.values(state.tasks).filter(task => task.id !== taskId);
  },
  [types.MARK_AS_COMPLETED] (state, { task }) {
    task.completed = !task.completed;
  }
 }
