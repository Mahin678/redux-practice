import * as Types from "../Action/Type";
const int = [];
const createTodo = (state = int, action) => {
  switch (action.type) {
    case Types.CREATE_TODO:
      return [...state, { id: action.id, text: action.text, completed: false }];
    default:
      return state;
  }
};
export default createTodo;

// import * as Type from '../Action/Type';
// const int = {
// 	id: '',
// };
// const createTodo = (state = int, action) => {
// 	switch (action.types) {
// 		case Type.CREATE_TODO:
// 			return {
// 				...state,
// 				id: action.payload,
// 				text: state.text,
// 				completed: false,
// 			};
// 		default:
// 			return state;
// 	}
// };
// export default createTodo;
