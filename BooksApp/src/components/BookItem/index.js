import { connect } from 'react-redux';
import { bookDeleteRequest } from '../../store/booksCrudActions/asyncActions.js';
import BookItem from './BookItem.jsx';

const mapDispatchToProps = { 
    bookDeleteRequest,
};

export default connect(null, mapDispatchToProps)(BookItem);
