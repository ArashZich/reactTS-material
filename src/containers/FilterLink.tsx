import { connect } from "react-redux";
import { setVisibilityFilter } from "../actions";
import Link from "../components/Link";

const mapStateToProps = (
  state: { visibilityFilter: any },
  ownProps: any[]
) => ({
  active: ownProps.filter === state.visibilityFilter,
});

const mapDispatchToProps = (
  dispatch: (arg0: { type: string; filter: any }) => void,
  ownProps: any[]
) => ({
  setFilter: () => {
    dispatch(setVisibilityFilter(ownProps.filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);
