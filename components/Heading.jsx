import PropTypes from 'prop-types';

const Heading = props => {
  const { content, level } = props;

  const Element = `h${level}`;

  return <Element>{content}</Element>;
};

Heading.propTypes = {
  content: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
};

export default Heading;
