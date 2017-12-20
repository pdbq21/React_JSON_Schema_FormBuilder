import React, {Component} from 'react';


function renderFields(schema, key) {

  console.log(schema, schema.type);
  const {type, description, title, properties} = schema;
  if (type === 'object') {
    const orderedProperties = Object.keys(properties);
    return (<fieldset key={key}>
      {title && (<h3>{title}</h3>)}
      {description && (<p>{description}</p>)}
      {orderedProperties.map(prop => renderFields(properties[prop], prop))}
    </fieldset>);
  } else if (type === 'string') {
    return (
      <div
      key={key}
      >
        {title && (<label htmlFor={title}>{title}</label>)}
        <input type="text"/>
      </div>)
  } else if (type === 'integer') {
    return (
      <div key={key}>
        {title && (<label htmlFor={title}>{title}</label>)}
        <input type="number"/>
      </div>)
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
