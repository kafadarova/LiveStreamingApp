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

  onSubmit(formValues) {
    console.log(formValues);
  }

  render() {
    // console.log(this.props);
    return (
      <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
        <Field name="title" component={this.renderInput} label="Enter Title"/>
        <Field name="description" component={this.renderInput} label="Enter Description"/>
        <button className="ui button primary">Submit</button>
      </form>
    );
  }
}

const validate = (formValues) => {
  const errors = {};
    if (!formValues.title) {
      errors.title = 'You must enter a title';
    }
    if (!formValues.description) {
      errors.description = 'You must enter a description';
    }
    // return the object
    return errors;
}

export default reduxForm({
  form: 'streamCreate'
})(StreamCreate);
