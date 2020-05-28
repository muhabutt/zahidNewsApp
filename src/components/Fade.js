import React, { PureComponent } from 'react'
import { Animated } from 'react-native';

class Fade extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            visible: props.visible,
        };
        this._visibility = 0;
    };

    componentDidMount() {
        this._visibility = new Animated.Value(this.state.visible ? 1 : 0);
     }


    componentDidUpdate(prevProps, prevState) {
        if (this.props.visible && !prevProps.visible) {
            this.setState({ visible: true})
        }
        Animated.timing(this._visibility, {
            toValue: this.state.visible ? 1 : 0,
            duration: 1000,
            useNativeDriver: true
        }).start(this.setState({ visible: this.props.visible }));
    }

    render() {
        const { visible, style, children, ...rest } = this.props;

        const containerStyle = {
            opacity: this._visibility
        };

        const combinedStyle = [containerStyle, style];
        return (
            <Animated.View style={this.state.visible ? combinedStyle : containerStyle} {...rest}>
                {this.state.visible ? children : null}
            </Animated.View>
        );
    }
}
export default Fade