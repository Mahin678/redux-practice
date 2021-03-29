import React from 'react';
import { connect } from 'react-redux';
import createTodo from '../../Redux/Action/TodoAction';
// const stateDispatchToProps = (dispatch) => {
// 	return {
// 		createTodo: (data) => dispatch(createTodo(data)),
// 	};
// };

const Header = (props) => {
	return (
		<div>
			<button onClick={() => props.createTodo('1')}>add</button>
			<h1>{props.id}</h1>
		</div>
	);
};

export default connect(
	(state) => ({
		id: state.createTodo.id,
	}),
	{ createTodo }
)(Header);

// connect((state) => ({}), { createTodo })(Header)
// import React from 'react';
// import { connect } from 'react-redux';
// import createTodo from '../../Redux/Action/TodoAction';
// import { useDispatch } from 'react-redux';

// // const stateDispatchToProps = (dispatch) => {
// // 	return {
// // 		createTodo: (data) => dispatch(createTodo(data)),
// // 	};
// // };
// // const mapDispatchToProps = (dispatch) => {
// // 	return {
// // 		createTodo: (data) => dispatch(createTodo(data)),
// // 	};
// // };

// // const mapStateToProps = (state) => {
// // 	return {
// // 		buyerDataPost: state.buyerDataPost,
// // 	};
// // };

// const Header = (props) => {
// 	console.log(props);
// 	return (
// 		<div>
// 			<button onClick={() => props.createTodo('5')}>add</button>
// 		</div>
// 	);
// };
// const mapStateToProps = (state) => {
// 	return {
// 		id: state.createTodo.id,
// 	};
// };

// export default connect(mapStateToProps, createTodo)(Header);
