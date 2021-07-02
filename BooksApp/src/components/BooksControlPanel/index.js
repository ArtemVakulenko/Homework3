import { connect } from 'react-redux';
import BooksControlPanel from './BooksControlPanel.jsx';
import { booksPostRequest, clearFields, booksPutRequest } from '../../store/booksCrudActions/actions';

import { getStatusPostOrPut } from '../../store/booksCrudActions/selectors';

const mapStateToProps = (state) => ({
    flagPost: getStatusPostOrPut(state),
});

const mapDispatchToProps = (dispatch) => ({
    booksPostRequest: () => dispatch(booksPostRequest()),
    booksPutRequest: () => dispatch(booksPutRequest()),
    clearFields: () => dispatch(clearFields()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksControlPanel);
