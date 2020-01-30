import PropTypes from 'prop-types';

const Image = props => {
  const { alt, height, source, width } = props;

  return <img src={source} alt={alt} width={width} height={height} />;
};

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
  source: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
};

export default Image;
