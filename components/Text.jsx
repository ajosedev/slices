import PropTypes from 'prop-types';

const Text = props => {
  const { children } = props;

  return <p>{children}</p>;
};

Text.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Text;
