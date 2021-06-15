import { connect } from 'react-redux';
import BooksControlPanel from './BooksControlPanel.jsx';
import { booksGetRequest } from '../../store/books/asyncActions';
import { booksPostRequest, bookPutRequest } from '../../store/booksCrudActions/asyncActions';
import { clearFields } from '../../store/booksCrudActions/actions.js';
import { getStatusPostOrPut } from '../../store/booksCrudActions/selectors';

const mapStateToProps = (state) => ({
    flagPost: getStatusPostOrPut(state),
});

const mapDispatchToProps = (dispatch) => ({
    booksGetRequest: () => dispatch(booksGetRequest()),
    booksPostRequest: () => dispatch(booksPostRequest()),
    bookPutRequest: () => dispatch(bookPutRequest()),
    clearFields: () => dispatch(clearFields()),
});

export default connect(mapStateToProps, mapDispatchToProps)(BooksControlPanel);
