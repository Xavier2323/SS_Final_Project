import React from 'react';

import Overview from './overview.js';
import Page1 from './page1.js';
import Page2 from './page2.js';
import Page3 from './page3.js';
import Page4 from './page4.js';
import Page5 from './page5.js';
import Verify from './verify.js';
import TagPage from './tagpage.js';
import Launch from './launchpage.js';
import PostEdit from './posteditpage.js';


import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default class JioJioScreen extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = this.initialState();
    }
    initialState = () => {
        const nowTime = new Date();
        nowTime.setSeconds(0);
        const threeHoursTime = new Date();
        threeHoursTime.setHours(threeHoursTime.getHours() + 3);
        threeHoursTime.setSeconds(0);

        return {
            userid: this.props.userid,
            postid: 0,
            sport: "",
            place: "",
            from: nowTime,
            to: threeHoursTime,
            people: "1",
            tag: [],
            memo: "",
            tagpageBack:0,
            valid:0,
            update:0,
            editing:0
        }
    }


    render() {
        return (
            <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='overview'>
                <Stack.Screen name="overview">
                    {(props) => <Overview {...props} stat={this.state} setUpdate={this.setUpdate.bind(this)} setEditing={this.setEditing.bind(this)} finishSelectSport={this.finishSelectSport.bind(this)} finishSelectPlace={this.finishSelectPlace.bind(this)} setAll={this.setAll.bind(this)} />}
                </Stack.Screen>
                <Stack.Screen name="page1">
                    {(props) => <Page1 {...props} stat={this.state} reset={this.reset.bind(this)} finishSelectSport={this.finishSelectSport.bind(this)} setTagpageBack={this.setTagpageBack.bind(this)}/>}
                </Stack.Screen>
                <Stack.Screen name="page2">
                    {(props) => <Page2 {...props} stat={this.state} reset={this.reset.bind(this)} finishSelectPlace={this.finishSelectPlace.bind(this)} setTagpageBack={this.setTagpageBack.bind(this)}/>}
                </Stack.Screen>
                <Stack.Screen name="page3">
                    {(props) => <Page3 {...props} stat={this.state} reset={this.reset.bind(this)} finishSelectTime={this.finishSelectTime.bind(this)} setTagpageBack={this.setTagpageBack.bind(this)}/>}
                </Stack.Screen>
                <Stack.Screen name="page4">
                    {(props) => <Page4 {...props} stat={this.state} reset={this.reset.bind(this)} finishSelectPeople={this.finishSelectPeople.bind(this)} setTagpageBack={this.setTagpageBack.bind(this)}/>}
                </Stack.Screen>
                <Stack.Screen name="page5">
                    {(props) => <Page5 {...props} stat={this.state} reset={this.reset.bind(this)} setTagpageBack={this.setTagpageBack.bind(this)} finishSelectTagMemo={this.finishSelectTagMemo.bind(this)}/>}
                </Stack.Screen>
                <Stack.Screen name="verify">
                    {(props) => <Verify {...props} stat={this.state} reset={this.reset.bind(this)} finishSelectTagMemo={this.finishSelectTagMemo.bind(this)} setTagpageBack={this.setTagpageBack.bind(this)} updateValid={this.updateValid.bind(this)} forceUpdate={this.setUpdate.bind(this)}/>}
                </Stack.Screen>
                <Stack.Screen name="tagpage">
                    {(props) => <TagPage {...props} stat={this.state} reset={this.reset.bind(this)} finishEditTag={this.finishEditTag.bind(this)} setTagpageBack={this.setTagpageBack.bind(this)}/>}
                </Stack.Screen>
                <Stack.Screen name="launch">
                    {(props) => <Launch {...props} stat={this.state} reset={this.reset.bind(this)}/>}
                </Stack.Screen>
                <Stack.Screen name="postedit">
                    {(props) => <PostEdit {...props} stat={this.state} reset={this.reset.bind(this)} finishSelectTagMemo={this.finishSelectTagMemo.bind(this)} setTagpageBack={this.setTagpageBack.bind(this)} updateValid={this.updateValid.bind(this)} forceUpdate={this.setUpdate.bind(this)}/>}
                </Stack.Screen>
            </Stack.Navigator>
        );
    }
    reset = () => {
        this.setState(this.initialState());
    }

    setAll = async (props) => {
        const from = new Date(`${props.starttime}:00`);
        const to = new Date(`${props.endtime}:00`);
        this.setState({
            sport:props.sport,
            place:props.place,
            from:from,
            to:to,
            people:props.people.toString(),
            tag:props.tag,
            memo:props.memo,
            postid:props.postid
        })
    }

    setEditing = (num) => {
        this.setState({ ...this.state, editing: num});
    }

    setUpdate = (num) => {
        this.setState({ ...this.state, update: num});
    }

    updateValid = (num) => {
        this.setState({ ...this.state, valid: num});
    }

    finishSelectSport = (id) => {
        this.setState({ ...this.state, sport: id });
    }

    finishSelectPlace = (place) => {
        this.setState({ ...this.state, place: place });
    }

    finishSelectTime = (from, to) => {
        this.setState({ ...this.state, from: from, to: to });
    }

    finishSelectPeople = (people) => {
        this.setState({ ...this.state, people: people });
    }

    finishSelectTagMemo = (tag, memo) => {
        this.setState({ ...this.state, tag: tag, memo: memo });
    }

    finishEditTag = (tag) => {
        this.setState({ ...this.state, tag: tag});
    }

    setTagpageBack = (num) => {
        this.setState({ ...this.state, tagpageBack: num});
    }
}