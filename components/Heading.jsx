import PropTypes from 'prop-types';

const Heading = props => {
  const { children, level } = props;

  const Element = `h${level}`;

  return <Element>{children}</Element>;
};

Heading.propTypes = {
  children: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
};

export default Heading;
