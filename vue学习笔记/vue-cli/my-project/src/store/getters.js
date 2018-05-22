export default {

    doneTodos:(state) => {
        return [1,2,3];
    },
    doneTodosCount: (state, getters) => {
        let count = state.count + getters.doneTodos.length
        return count
    },
    getTodoById: (state) => (id) => {
        return id*state.count
    }

}