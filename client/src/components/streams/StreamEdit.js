import React from "react";
import { connect } from "react-redux";
import { fetchStream } from "../../actions";

class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }
  render() {
    console.log(this.props);
    if (!this.props.stream) {
      return <div>Loading</div>;
    }
    return <div>{this.props.stream.title}</div>;
  }
}

// ownProps = the props of StreamEdit (what we got from Route Component)
const mapStateToProp = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
};

export default connect(
  mapStateToProp,
  { fetchStream }
)(StreamEdit);
