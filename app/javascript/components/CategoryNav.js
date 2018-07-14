import React from "react"
import PropTypes from "prop-types"

class CategoryNav extends React.Component {
  render() {
    return (
      <React.Fragment>
        <li className="col-xs-2">
          <a href={this.props.path}>{this.props.name}</a>
        </li>
      </React.Fragment>
    );
  }
}

CategoryNav.propTypes = {
  name: PropTypes.string,
  path: PropTypes.string,
};

export default CategoryNav