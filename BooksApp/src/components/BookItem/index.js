import { connect } from 'react-redux';
import { bookDeleteRequest } from '../../store/booksCrudActions/asyncActions.js';
import { setFieldPut } from '../../store/booksCrudActions/actions.js';
import BookItem from './BookItem.jsx';

const mapDispatchToProps = { 
    bookDeleteRequest, setFieldPut,
};

export default connect(null, mapDispatchToProps)(BookItem);
