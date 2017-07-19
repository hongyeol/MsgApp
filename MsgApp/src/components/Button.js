import React, {Component} from 'react';
import 
{Button
,Platform
,TouchableOpacity
,Text
,TouchableNativeFeedback,View} from 'react-native';
import {ButtonStyle} from './AllStyleSheet';


class StyleButton extends Component {

    render(){

        if(Platform.OS == "ios"){
            return(
                 <TouchableOpacity style={ButtonStyle.Container}
                 activeOpacity={0.3}
                 onPress={this.props.onPress}
                 >
                 <Text style={ButtonStyle.text}>{this.props.title}</Text>
                </TouchableOpacity>
            )

        }else{
            return(
                <TouchableNativeFeedback 
                onPress={this.props.onPress}
                background={TouchableNativeFeedback.SelectableBackground()}
                >
                <View style={ButtonStyle.Container}><Text style={ButtonStyle.text}>{this.props.title}</Text> 
                </View>
                </TouchableNativeFeedback>

            )
        }
    }
}

export {
    StyleButton as Button
}