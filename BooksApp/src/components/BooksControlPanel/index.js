import { connect } from 'react-redux';
import BooksControlPanel from './BooksControlPanel.jsx';
import { booksGetRequest } from '../../store/books/asyncActions';
import { booksPostRequest } from '../../store/booksCrudActions/asyncActions';

// const mapStateToProps = (state) => {

// }
const mapDispatchToProps = (dispatch) => ({
    booksGetRequest: () => dispatch(booksGetRequest()),
    booksPostRequest: () => dispatch(booksPostRequest()),
});

export default connect(null, mapDispatchToProps)(BooksControlPanel);
