import React from 'react';
import { Field, reduxForm } from 'redux-form'

class StreamCreate extends React.Component {
  renderInput(formProps) {
    // console.log(formProps);
    return (
      <div className="field">
        <label>{formProps.label}</label>
      {/* take all key-value pairs and add them as prop to the input element*/}
        <input {...formProps.input} />
      </div>
    )
  }

  render() {
    return (
      <form className="ui form">
        <Field name="title" component={this.renderInput} label="Enter Title"/>
        <Field name="description" component={this.renderInput} label="Enter Description"/>
      </form>
    )
  }
}

export default reduxForm({
  form: 'streamCreate'
})(StreamCreate);
