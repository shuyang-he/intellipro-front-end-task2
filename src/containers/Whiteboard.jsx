import PropTypes from 'prop-types';
import containerCreator from '../hoc/containerCreator';

const style = {
  height: '100%',
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-around',
  flexBasis: '75%'
};

const Whiteboard = ({ children }) => {
  return containerCreator({
    id: 'whiteboard',
    style,
    children
  });
};

Whiteboard.propTypes = {
  children: PropTypes.array
};

export default Whiteboard;
