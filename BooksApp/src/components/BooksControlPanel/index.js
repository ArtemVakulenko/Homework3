import { connect } from 'react-redux';
import BooksControlPanel from './BooksControlPanel.jsx';
import { booksGetRequest } from '../../store/books/asyncActions';
import { booksPostRequest } from '../../store/booksCrudActions/asyncActions';
import { clearFields } from '../../store/booksCrudActions/actions.js';

// const mapStateToProps = (state) => {

// }
const mapDispatchToProps = (dispatch) => ({
    booksGetRequest: () => dispatch(booksGetRequest()),
    booksPostRequest: () => dispatch(booksPostRequest()),
    clearFields: () => dispatch(clearFields()),
});

export default connect(null, mapDispatchToProps)(BooksControlPanel);
