import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Popup } from 'semantic-ui-react';

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

  border: '5px solid #3F51B5FF',
  borderRadius: K_HEIGHT,
  backgroundColor: 'white',
  textAlign: 'center',
  color: '#3f51b5',
  fontSize: 10,
  padding: 4,
};

const ReactComponent = () => <div style={greatPlaceStyle}>

    </div>;

class Pins extends React.Component {

  render() {
      return (
          <ReactComponent>
              lat={this.props.lat}
              lng={this.props.lng}
              text={this.props.reports.animal}
              buttonEl={this.props.buttonEl}
              popupActive={this.props.popupActive}
          </ReactComponent>

      );
  }
}

/** Require a document to be passed to this component. */
Pins.propTypes = {
  reports: PropTypes.object.isRequired,
  search: PropTypes.string,
  filter: PropTypes.string,
  buttonEl: PropTypes.object,
  popupActive: PropTypes.bool,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
};

/** Wrap this component in withRouter since we use the <Link> React Router element. */
export default withRouter(Pins);
