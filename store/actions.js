import * as types from './mutations-types';
import API from '../config';

// Todas las acciones que llaman al objeto API, y a medida que se ejecutan se dispachan las acciones con valores o no, y cambian el estado de la app. Con commit dispachamos las acciones
export default {
  // Fetch con AJAX de los tableros del usuario
  fetchBoards ({ commit }, { user }) {
    commit(types.FETCH_BOARDS_REQUEST);

    API.getBoardsByUser(user).then(snap => commit(types.FETCH_BOARDS_SUCCESS, { boards: snap.val()})).catch(error => commit(types.FETCH_BOARDS_FAILURE, { error }))
  },
  // Fetch de las listas asociadas al tablero
  fetchLists ({ commit }, { board }) {
    commit(types.FETCH_LISTS_REQUEST);

    API.getListsFromBoard(board).then(snap => commit(types.FETCH_LISTS_SUCCESS, { lists: snap.val()})).catch(error => commit(types.FETCH_LISTS_FAILURE, { error }))
  },
  fetchTasks ({ commit }, { list }) {
    commit(types.FETCH_TASKS_REQUEST);

    API.getTasksFromList(list).then(snap => commit(types.FETCH_TASKS_SUCCESS, { task: snap.val()})).catch(error => commit(types.FETCH_TASKS_FAILURE, { error }));
  },
  addBoard ({ commit }, { name }) {
    API.postBoard(name).then(board => commit(types.ADD_BOARD, { board }));
  },
  addColumn ({ commit }, { board, name}) {
    API.postList(board, name).then((column) => commit(types.ADD_COLUMN, { column }));
  },
  addTask ({ commit }, { list, title } ) {
    API.postTask(list, title).then((task) => commit(types.ADD_TASK, { task }));
  },
  deleteTask ({ commit }, { taskId }) {
    let id = taskId;
    API.deleteTask(taskId).then(() => commit(types.DELETE_TASK, { taskId: id }));
  },
  maskAsCompleted ({ commit }, { task }) {
    API.maskAsCompleted(task.id).then(() => commit(types.MARK_AS_COMPLETED, { task }));
  }
 }
