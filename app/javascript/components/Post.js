import React from "react"
import PropTypes from "prop-types"

class Post extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="card">
          <div className="card-category">
            <h3>{this.props.category}</h3>
          </div>
          <div className="card-description">
            <a href={this.props.path}>{this.props.title}</a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Post.propTypes = {
  title: PropTypes.string,
  path: PropTypes.string,
  category: PropTypes.string
};

export default Post