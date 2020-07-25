import { connect } from "react-redux";
import { bindActionCreators, Dispatch, AnyAction } from "redux";
import * as TodoActions from "../actions";
import BookList from "../components/BookList";
import { getVisibleBookList } from "../selectors";

const mapStateToProps = (state: any) => ({
  filteredTodos: getVisibleBookList(state),
});

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => ({
  actions: bindActionCreators(TodoActions, dispatch),
});

const VisibleBookList = connect(mapStateToProps, mapDispatchToProps)(BookList);

export default VisibleBookList;
