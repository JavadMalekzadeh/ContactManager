import React from "react";
import propstype from "prop-types";
import classnames from "classnames";
const TextInputGroup = ({
  label,
  type,
  name,
  id,
  placeholder,
  value,
  onChange,
  error
}) => {
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <input
        type={type}
        name={name}
        id={id}
        className={classnames("form-control form-control-lg", {
          "is-invalid": error
        })}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};
export default TextInputGroup;
TextInputGroup.propstype = {
  label: propstype.string.isRequired,
  type: propstype.string.isRequired,
  name: propstype.string.isRequired,
  id: propstype.string.isRequired,
  placeholder: propstype.string.isRequired,
  value: propstype.string.isRequired,
  onChange: propstype.func.isRequired,
  error: propstype.string
};
TextInputGroup.defaultProps = {
  type: "text"
};
