
import React, {Component} from 'react';
import {View} from 'react-native';
import {ViewStyle}  from './AllStyleSheet';

class StyleView extends Component{
    
    render(){
        return(
            <View style={ViewStyle.Container}>
                {this.props.children}
            </View>
        );
    }

}

export {
    StyleView as View
}
