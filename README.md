
#### JSON Schema
```json
  "schema": {
    "title": "A Title form",
    "description": "A form description.",
    "type": "object",
    "properties": {
      "first_name": { "type": "string" },
      "last_name": { "type": "string" },
      "age": { "type": "integer", "title": "Age" },
      "password": { "type": "string", "title": "Password", "minLength": 3 },
      "address": {
        "type": "object",
        "properties": {
          "street_1": { "type": "string" },
          "street_2": { "type": "string" },
          "city": { "type": "string" },
          "state": {
            "type": "string",
            "enum": [ "AL", "AK", "AS", "AZ", "AR", "CA", "CO", "CT", "DE",
                "DC", "FM", "FL", "GA", "GU", "HI", "ID", "IL", "IN", "IA",
                "KS", "KY", "LA", "ME", "MH", "MD", "MA", "MI", "MN", "MS",
                "MO", "MT", "NE", "NV", "NH", "NJ", "NM", "NY", "NC", "ND",
                "MP", "OH", "OK", "OR", "PW", "PA", "PR", "RI", "SC", "SD",
                "TN", "TX", "UT", "VT", "VI", "VA", "WA", "WV", "WI", "WY" ]
          },
          "zip_code": { "type": "string" }
        }
      },
      "notes": { "type": "string" },
      "phone_numbers": {
        "type": "array",
        "items": {
          "type": "object",
          "properties": {
            "type": { "type": "string", "enum": [ "cell", "home", "work" ] },
            "number": { "type": "string" }
          },
          "required": [ "type", "number" ]
        }
      }
    },
    "required": [ "last_name" ]
  }
```
>Note: test structure.

#### Form Data
```json
"formData": {
    "first_name": "Jane",
    "last_name": "Doe",
    "age": 18,
    "password": "qwerty"
    "address": {
      "street_1": "123 Main St.",
      "city": "Las Vegas",
      "state": "NV",
      "zip_code": "89123"
    },
    "notes": "(This is an example of an uninteresting note.)",
    "phone_numbers": [
      { "type": "cell", "number": "702-123-4567" },
      { "type": "work", "number": "702-987-6543" }
    ]
  }
```

#### UISchema
>Note: todo