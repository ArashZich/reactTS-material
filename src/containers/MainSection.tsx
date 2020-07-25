import { connect } from "react-redux";
import * as TodoActions from "../actions";
import { bindActionCreators } from "redux";
import MainSection from "../components/MainSection";
import { getCompletedTodoCount } from "../selectors";

const mapStateToProps = (state: { todos: any }) => ({
  todosCount: state.todos.length,
  completedCount: getCompletedTodoCount(state),
});

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(TodoActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainSection);
