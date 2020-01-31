import PropTypes from 'prop-types';

const FormInput = props => {
  const { label, type } = props;

  return (
    <label data-type="input">
      <p>{label}</p>
      <input name={label} type={type} />
    </label>
  );
};

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};

export default FormInput;
