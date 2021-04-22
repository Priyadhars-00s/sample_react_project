import React from "react";
import { connect } from "react-redux";

import { fetchPhoto } from '../action/photo';

const mapState = state => {
  return {
    photo: state.photo.data
  };
};

const mapDispatch = {
  fetchPhoto
};

class Redux extends React.Component {
  componentDidMount() {
    const { fetchPhoto } = this.props;

    fetchPhoto();
  }

  render() {
    const { photo, fetchPhoto } = this.props;

    return (
      <div>
        <div>
          <button onClick={fetchPhoto}>Fetch Photo</button>
        </div>
        <div>
          {photo ? (
            <div>
              <img src={photo} alt="" />
            </div>
          ) : (
            <h2>No photo</h2>
          )}
        </div>
      </div>
    );
  }
}

export default connect(
  mapState,
  mapDispatch
)(Redux);
