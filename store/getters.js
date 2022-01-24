export default {
  // curring llama a funciones anidadas
  getListByBoard: (state) => (boardId) => {
    return Object.values(state.lists).filter(list => list.board === boardId);
  },
  getTasksFromList: (state) => (listId) => {
    return Object.values(state.tasks).filter(task => task.list === listId);
  }
}
