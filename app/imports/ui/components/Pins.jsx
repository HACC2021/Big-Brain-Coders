import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';

/** Renders a single row in the List Stuff table. See pages/ListStuff.jsx. */
const K_WIDTH = 40;
const K_HEIGHT = 40;

const greatPlaceStyle = {
  // initially any map object has left top corner at lat lng coordinates
  // it's on you to set object origin to 0,0 coordinates
  position: 'absolute',
  width: K_WIDTH,
  height: K_HEIGHT,
  left: -K_WIDTH / 2,
  top: -K_HEIGHT / 2,

  border: '5px solid #f44336',
  borderRadius: K_HEIGHT,
  backgroundColor: 'white',
  textAlign: 'center',
  color: '#3f51b5',
  fontSize: 16,
  fontWeight: 'bold',
  padding: 4,
};

const ReactComponent = () => <div style={greatPlaceStyle}>

    </div>;

class Pins extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      makePin: true,
    };
  }

  render() {
    return (
        <ReactComponent
            lat={this.props.lat}
            lng={this.props.lng}
            text={this.props.reports.animal}
        />
    );
  }
}

/** Require a document to be passed to this component. */
Pins.propTypes = {
  reports: PropTypes.object.isRequired,
  search: PropTypes.string,
  filter: PropTypes.string,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Pins);