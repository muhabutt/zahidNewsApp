import React, {Component} from 'react';
import {Animated} from 'react-native';
import PropTypes from 'prop-types';

class Fade extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: props.visible,
    };
    this._visibility = new Animated.Value(0);
  }
  componentDidMount() {
    this._visibility = new Animated.Value(this.props.visible ? 1 : 0);
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    if (this.props.visible === true && prevProps.visible === false) {
      this.setState({visible: true});
    }
    Animated.timing(this._visibility, {
      toValue: this.props.visible ? 1 : 0,
      duration: 500,
      useNativeDriver: true,
    }).start(() => {
      if (this.props.visible === false && prevProps.visible === true) {
        this.setState({visible: false});
      }
    });
  }

  render() {
    const {visible, style, children, ...rest} = this.props;

    const containerStyle = {
      opacity: this._visibility,
    };

    const combinedStyle = [containerStyle, style];
    return (
      <Animated.View
        style={this.state.visible ? combinedStyle : containerStyle}
        {...rest}>
        {this.state.visible ? children : null}
      </Animated.View>
    );
  }
}
Fade.propType = {
  visibile: PropTypes.bool.isRequired,
};
export default Fade;
