import { connect } from 'react-redux';
import Input from './Input.jsx';
import { changeFieldPost, changeFieldPut } from '../../../store/booksCrudActions/actions.js';
import { getCreateFieldState, getStatusPostOrPut, getUpdateFieldState } from '../../../store/booksCrudActions/selectors';

const mapStateToProps = (state, props) => ({
    valuePost: getCreateFieldState(state, props),
    valuePut: getUpdateFieldState(state, props),
    post: getStatusPostOrPut(state),
});

const mapDispatchToProps = {
    changeFieldPost, changeFieldPut,
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
