import React, {Component} from 'react';
import {
  TextField,
  TextFieldInput,
  TextFieldLabel,
  TextFieldLine,
  Elevation
} from 'react-mc-lite/lib'

function renderFields(schema, key) {

  console.log(schema, schema.type);
  const {type, description, title, properties} = schema;
  const required = Array.isArray(schema.required) && schema.required.indexOf(key) !== -1;
  console.log(required, schema)
  if (type === 'object') {
    const orderedProperties = Object.keys(properties);
    return (
      <Elevation
        elementType='fieldset'
        zSpace={2}
        key={key}
      >
        {title && (<h3>{title}</h3>)}
        {description && (<p>{description}</p>)}
        {orderedProperties.map(prop => renderFields(properties[prop], prop))}
      </Elevation>);
  } else if (type === 'string') {
    return (<div key={key}>
      <TextField>
        {title && (<TextFieldLabel htmlFor={title}>{title}</TextFieldLabel>)}
        <TextFieldInput type="text" required={required}/>
        <TextFieldLine/>
      </TextField></div>)
  } else if (type === 'integer') {
    return (<div key={key}>
      <TextField >
        {title && (<TextFieldLabel htmlFor={title}>{title}</TextFieldLabel>)}
        <TextFieldInput type="number" required={required}/>
        <TextFieldLine/>
      </TextField></div>)
  }
}


class Form extends Component {
  render() {
    const {schema} = this.props;
    return (<form>
      {renderFields(schema)}
    </form>)
  }
}

export default Form;
