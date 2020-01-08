import _ from 'lodash';
import React from "react";
import { connect } from "react-redux";
import { fetchStream, editStream } from "../../actions";
import StreamForm from './StreamForm'

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues) => {
    console.log(formValues);
  }
  render() {
    console.log(this.props);
    if (!this.props.stream) {
      return <div>Loading</div>;
    }
    return (
      <div>
        <h3>Edit a Stream</h3>
        <StreamForm
        initialValues={_.pick(this.props.stream, 'title', 'description')}
        onSubmit={this.onSubmit} />
      </div>
    );
  }
}

// ownProps = the props of StreamEdit (what we got from Route Component)
const mapStateToProp = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProp,
  { fetchStream, editStream }
)(StreamEdit);
