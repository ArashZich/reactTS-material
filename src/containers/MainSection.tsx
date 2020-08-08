import { connect } from "react-redux";
import * as TodoActions from "../actions";
import { bindActionCreators } from "redux";
import MainSection from "../components/MainSection";
import { getCompletedTodoCount } from "../selectors";

interface state {
  books: any;
  completedBooks: number;
}

const mapStateToProps = (state: state) => {
  // todosCount: state.todos.length,
  // completedCount: getCompletedTodoCount(state),
  return {
    books: state.books.books,
    completedBooks: state.books.completedBooks,
  };
};

const mapDispatchToProps = (dispatch: any) => ({
  actions: bindActionCreators(TodoActions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(MainSection);
