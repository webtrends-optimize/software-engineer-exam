import React, {createRef} from "react";
import "./App.css";
import New from "../src/components/new"

const fields = [
  { name: "field_name", label: "Name", type: "text" },
  { name: "field_username", label: "User", type: "text" },
  { name: "field_date", label: "Date", type: "date" },
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.inputRef = fields.reduce((acc, field) => {
      acc[field.name] = createRef();
      return acc;
    }, {});

    this.state = {
      newText: "hello"
    }
  }

  handleLabelClick = (fieldname) => {
    this.inputRef[fieldname].current.focus();
  };

  render() {
    return (
      <div>
        <h1>Webtrends Optimize Software Engineer exam</h1>
        <form>
          {fields.map((field, index) => (
            <div key={index}>
              <label htmlFor={field.name}>{field.label}</label>
              <input
                type={field.type}
                name={field.name}
                id={field.name}
              />
            </div>
          ))}
        </form>

        <New  text={this.state.newText} />
      </div>
    );
  }
}

export default App;
