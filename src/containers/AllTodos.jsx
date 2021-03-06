import { connect } from 'react-redux';
import { addTodo, toggleTodo } from '../redux/actions';
import Todos from '../components/Todos';

const mapStateToProps = (state) => ({
  items: state.todos,
});

const mapDispatchToProps = (dispatch) => ({
  onAdd: (title) => {
    dispatch(addTodo(title));
  },
  onToggle: (title) => {
    dispatch(toggleTodo(title));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
