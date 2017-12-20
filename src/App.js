import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from './lib'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "schema": {
        "title": "A Title form",
        "description": "A form description.",
        "type": "object",
        "properties": {
          "first_name": {"type": "string"},
          "last_name": {"type": "string"},
          "age": {"type": "integer", "title": "Age"},
          "password": {"type": "string", "title": "Password", "minLength": 3},
          "address": {
            "type": "object",
            "properties": {
              "street_1": {"type": "string"},
              "street_2": {"type": "string"},
              "city": {"type": "string"},
              "state": {
                "type": "string",
                "enum": ["AL", "AK", "AS", "AZ", "AR", "CA", "CO", "CT", "DE",
                  "DC", "FM", "FL", "GA", "GU", "HI", "ID", "IL", "IN", "IA",
                  "KS", "KY", "LA", "ME", "MH", "MD", "MA", "MI", "MN", "MS",
                  "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND",
                  "MP", "OH", "OK", "OR", "PW", "PA", "PR", "RI", "SC", "SD",
                  "TN", "TX", "UT", "VT", "VI", "VA", "WA", "WV", "WI", "WY"]
              },
              "zip_code": {"type": "string"}
            }
          },
          "notes": {"type": "string"},
          "phone_numbers": {
            "type": "array",
            "items": {
              "type": "object",
              "properties": {
                "type": {"type": "string", "enum": ["cell", "home", "work"]},
                "number": {"type": "string"}
              },
              "required": ["type", "number"]
            }
          }
        },
        "required": ["last_name"]
      }
    }
  }

  render() {
    const {schema} = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
        </header>
        <Form
          schema={schema}
          //uiSchema
          //formData
          //onChange={console.log("changed")}
          //onSubmit={console.log("submitted")}
          //onError={console.log("errors")}
        />
      </div>
    );
  }
}

export default App;
