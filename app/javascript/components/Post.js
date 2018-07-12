import React from "react"
import PropTypes from "prop-types"

class Post extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="card-description">
          <a href={this.props.path}>{this.props.title}</a>
        </div>
      </React.Fragment>
    );
  }
}

Post.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string
};

export default Post