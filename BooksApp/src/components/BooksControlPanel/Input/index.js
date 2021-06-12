import { connect } from 'react-redux';
import Input from './Input.jsx';
import { changeField, clearFields } from '../../../store/booksCrudActions/actions.js';
import { getCreateFieldState } from '../../../store/booksCrudActions/selectors';

const mapStateToProps = (state, props) => ({
    value: getCreateFieldState(state, props),
});

const mapDispatchToProps = {
    changeField,
};

export default connect(mapStateToProps, mapDispatchToProps)(Input);
