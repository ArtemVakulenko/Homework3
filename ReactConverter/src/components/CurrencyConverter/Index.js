import { connect } from 'react-redux';
import CurrencyConverter from './CurrencyConverter';
import { sendMoneyRequest } from '../../store/moneyReducer/actions';
import { getCurrencies } from '../../store/moneyReducer/selectors';

const mapStateToProps = (state) => ({
    currencies: getCurrencies(state),
});

const mapDispatchToProps = {
    sendMoneyRequest,
};

export default connect(mapStateToProps, mapDispatchToProps)(CurrencyConverter);
