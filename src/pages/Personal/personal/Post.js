import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, Image, FlatList, Button, TouchableOpacity, SafeAreaView } from 'react-native';

import Tag from './Tag';
import DetailTab from './DetailTab';
import {get_img} from '../../utility/utility_img';

export const getPic = sport => {
    if (sport == "羽球") return require('../../../images/badminton.png');
    else if (sport == "籃球") return require("../../../images/basketball.png");
    else if (sport == "排球") return require("../../../images/volleyball.png");
    else if (sport == "足球") return require("../../../images/soccer.png");
    else if (sport == "棒球") return require("../../../images/baseball.png");
    else if (sport == "桌球") return require("../../../images/pingpong.png");
    else if (sport == "網球") return require("../../../images/tennis.png");
    else if (sport == "游泳") return require("../../../images/swim.png");
    else return "";
}

export default class Post extends React.Component {

    constructor(props) {
        super(props);
        this.index=0;
    }

    render() {
        const tags=(this.props.tags==null?<View></View>:this.props.tags.map((item,index)=>{return index>2?<View></View>:<Tag title={item}/>}))
        return (
            <View style={styles.container}>
                <View style={{flex: 5, alignSelf: 'center'}}>
                    <View style={{flexDirection:'row', alignItems: 'center'}}>
                        <Image style={{borderRadius: 100, height: 60, width: 60}} source={this.pfp()}/>
                        <View style={{paddingLeft: 10}}>
                            <View style={{flexDirection: 'row', alignItems: 'center'}}>
                                <Image style={styles.sportIcon} source={getPic(this.props.sport)}></Image>
                                <Text style={{alignSelf: 'center'}}>{this.props.sport}</Text>
                            </View>
                            <Text>{`地點: ${this.props.place}`}</Text>
                            <Text>{`時間: ${this.props.start_time} ~ ${this.props.end_time}`}</Text>
                            <Text>{`人數: ${this.props.participant.length}/${this.props.people}`}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        <Text>tags : </Text>
                        {tags}
                    </View>
                </View>
                <View style={{flex: 3, justifyContent: 'center', alignItems: 'flex-end'}}>
                    <DetailTab title={'詳情'} color={'#989898'}/>
                </View>
            </View> 
        );
    }
    pfp(){
        uri=get_img(this.props.posteravatar);
        return { uri: uri };
    }
}

const styles = StyleSheet.create({
    container: {
        marginBottom: 10,
        padding: 10,
        borderRadius: 10,
        flexDirection: 'row',
        backgroundColor: '#FBF1D6'
    },
    sportIcon:{
        width:30,
        height:30
    }
});