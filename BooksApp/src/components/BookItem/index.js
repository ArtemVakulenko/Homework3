import { connect } from 'react-redux';
import { booksDeleteRequest, setFieldPut } from '../../store/booksCrudActions/actions';

import BookItem from './BookItem.jsx';

const mapDispatchToProps = { 
    booksDeleteRequest, setFieldPut,
};

export default connect(null, mapDispatchToProps)(BookItem);
