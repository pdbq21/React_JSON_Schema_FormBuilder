import React, {Component} from 'react';
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
          "first_name": {
            "type": "string",
            "title": "First Name"
          },
          "last_name": {
            "type": "string",
            "title": "Last Name"
          },
          "age": {"type": "integer", "title": "Age"},
          "password": {"type": "string", "title": "Password", "minLength": 3},
          "address": {
            "title": "Address title",
            "type": "object",
            "properties": {
              "street_1": {
                "type": "string",
                "title": "Street 1"
              },
              "street_2": {
                "type": "string",
                "title": "Street 2"
              },
              "city": {
                "type": "string",
                "title": "City"
              },
              "state": {
                "type": "string",
                "title": "State",
                "enum": ["AL", "AK", "AS", "AZ", "AR", "CA", "CO", "CT", "DE",
                  "DC", "FM", "FL", "GA", "GU", "HI", "ID", "IL", "IN", "IA",
                  "KS", "KY", "LA", "ME", "MH", "MD", "MA", "MI", "MN", "MS",
                  "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND",
                  "MP", "OH", "OK", "OR", "PW", "PA", "PR", "RI", "SC", "SD",
                  "TN", "TX", "UT", "VT", "VI", "VA", "WA", "WV", "WI", "WY"]
              },
              "zip_code": {
                "type": "string",
                "title": "ZIP Code"
              }
            }
          },
          "notes": {
            "type": "string",
            "title": "Notes"
          },
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

      },
      "uiSchema": {
        "rootField": {
          /*
          ! helper
          ! items (for type: array)
          ! root container (form)
          ! control (yesno, no, delok, ...)

          - order (Array [])
          - type (object, array, string, integer, number, boolean, ...):
            - object:
              - title (String)
                - attributes (...)
                - style
                - widget
              - description (String)
                - attributes (...)
                - style
                - widget
              - properties (children)
                - widget
                - style
              - widget
            - string:
              - title (String)
                - widget
                - style
                - attribute
              - type (text, password, number, ...)
              - validation attributes (minLength, maxLength, ...)
              - widget
              - attributes
              - style
              - enum
              - description
            - integer/number/float:
              - widget
              - title
              - validation attributes (minLength, maxLength, ...)
              - style
              - type (number)
              - attributes
              - description
              - enum
            - boolean:
              - widget (checkbox, radio, ...)
              - style
              - title
              - description
            - array:
              - title
              - description
              - widget
              - style
              -


          */
        },
        "firstName": {
          "ui:autofocus": true,
          "ui:emptyValue": ""
        },
        "age": {
          "ui:widget": "updown",
          "ui:title": "Age of person",
          "ui:description": "(earthian year)"
        },
        "bio": {
          "ui:widget": "textarea"
        },
        "password": {
          "ui:widget": "password",
          "ui:help": "Hint: Make it strong!"
        },
        "date": {
          "ui:widget": "alt-datetime"
        },
        "telephone": {
          "ui:options": {
            "inputType": "tel"
          }
        }
      }
    }
  }

  render() {
    const {schema} = this.state;
    return (
      <div className="App">
        <header className="App-header">
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
