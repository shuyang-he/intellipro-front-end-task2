import PropTypes from 'prop-types';
import containerCreator from '../hoc/containerCreator';

const style = {
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
  flexBasis: '20%',
  backgroundColor: 'lightgray'
};

const Top = ({ children }) => {
  return containerCreator({
    id: 'top',
    style,
    children
  });
};

Top.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.array
  ])
};

export default Top;
