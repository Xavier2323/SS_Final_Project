import { StyleSheet, Text, View , ScrollView, Image, FlatList, Button, TouchableOpacity} from 'react-native';

export const getPic = sport => {
  if (sport == "羽球") return require('../../images/badminton.png');
  else if (sport == "籃球") return require("../../images/basketball.png");
  else if (sport == "排球") return require("../../images/volleyball.png");
  else if (sport == "足球") return require("../../images/soccer.png");
  else if (sport == "棒球") return require("../../images/baseball.png");
  else if (sport == "桌球") return require("../../images/pingpong.png");
  else if (sport == "網球") return require("../../images/tennis.png");
  else if (sport == "游泳") return require("../../images/swim.png");
  else return "";
}

const getProgressPic = (now,num) => {
  if (num == 1 && now > num) return require('../../images/one_black.png');
  else if (num == 1 && now == num) return require('../../images/one_orange.png');
  else if (num == 2 && now > num) return require('../../images/two_black.png');
  else if (num == 2 && now == num) return require('../../images/two_orange.png');
  else if (num == 2 && now < num) return require('../../images/two_grey.png');
  else if (num == 3 && now > num) return require('../../images/three_black.png');
  else if (num == 3 && now == num) return require('../../images/three_orange.png');
  else if (num == 3 && now < num) return require('../../images/three_grey.png');
  else if (num == 4 && now > num) return require('../../images/four_black.png');
  else if (num == 4 && now == num) return require('../../images/four_orange.png');
  else if (num == 4 && now < num) return require('../../images/four_grey.png');
  else if (num == 5 && now > num) return require('../../images/five_black.png');
  else if (num == 5 && now == num) return require('../../images/five_orange.png');
  else if (num == 5 && now < num) return require('../../images/five_grey.png');
  else if (num == 6 && now == num) return require('../../images/six_orange.png');
  else if (num == 6 && now < num) return require('../../images/six_grey.png');
  else return "";
}

const getEllipsis = (now,num) => {
  if (now <= num) return require('../../images/ellipsis_grey.png');
  else if (now > num) return require('../../images/ellipsis_black.png');
  else return "";
}

export const Card = ({sport}) => {
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <Image style={{ height: 80, width: 80 }} source={getPic(sport)}></Image>
      <Text>{sport}</Text>
    </View>
  );
};

export const Progresss = (props) => {
  return (
    <View style={{ justifyContent: 'center', alignItems:'center',flexDirection:'row'}}>
      <TouchableOpacity onPress={() => {props.pressnumber(props.now,1)}}>
        <Image source={getProgressPic(props.now,1)} />
      </TouchableOpacity>
      <Image source={getEllipsis(props.now,1)} />
      <TouchableOpacity onPress={() => {props.pressnumber(props.now,2)}}>
        <Image source={getProgressPic(props.now,2)} />
      </TouchableOpacity>
      <Image source={getEllipsis(props.now,2)} />
      <TouchableOpacity onPress={() => {props.pressnumber(props.now,3)}}>
        <Image source={getProgressPic(props.now,3)} />
      </TouchableOpacity>
      <Image source={getEllipsis(props.now,3)} />
      <TouchableOpacity onPress={() => {props.pressnumber(props.now,4)}}>
        <Image source={getProgressPic(props.now,4)} />
      </TouchableOpacity>
      <Image source={getEllipsis(props.now,4)} />
      <TouchableOpacity onPress={() => {props.pressnumber(props.now,5)}}>
        <Image source={getProgressPic(props.now,5)} />
      </TouchableOpacity>
      <Image source={getEllipsis(props.now,5)} />
      <TouchableOpacity onPress={() => {props.pressnumber(props.now,6)}}>
        <Image source={getProgressPic(props.now,6)} />
      </TouchableOpacity>
    </View>
  )
}

export const Tag = (props) => {
  if (props.title=="") return(<View></View>);
  else return (
    <View style={styles.tagContainer}>
      <Text style={styles.subtitle4}>{props.title}</Text>
      <TouchableOpacity onPress={() => {props.f(props.title)}} style={styles.xmarkcontainer}><Text style={styles.subtitle4}>x</Text></TouchableOpacity>
    </View>
  );
};

export const TagList = (props) => {
  if (props.name != "" && props.times != -1) return (
    <TouchableOpacity onPress={() => {props.f(props.name)}}>
      <View style={[styles.currentJioContainer,{justifyContent:'space-between',alignItems:'center',paddingHorizontal:25}]}>
        <Text style={styles.subtitle2}>{props.name}</Text>
        <View style={{width:100}}></View>
        <Text style={styles.subtitle3}>在貼文中找到{props.times}次</Text>
      </View>
    </TouchableOpacity>
  );
  else if (props.name != "" && props.times == -1) return (
    <TouchableOpacity onPress={() => {props.f(props.name)}}>
      <View style={[styles.currentJioContainer,{justifyContent:'space-between',alignItems:'center',paddingHorizontal:25}]}>
        <View style={{width:30}}></View>
        <Text style={styles.subtitle2}>創建一個"{props.name}"的Tag</Text>
        <View style={{width:30}}></View>
      </View>
    </TouchableOpacity>
  )
  else return (<View></View>)
}

export const PlaceItem = (props) => {
  return (
    <View style={styles.currentJioContainer}>
    <Image style={styles.sportIcon} source={getPic(props.sport)}></Image>
    <View style={[styles.currentJioContainer2,{justifyContent:'center'}]}>
    <Text style={styles.subtitle2}>{props.name}</Text>
    </View>
    </View>
  );

};

export const PastJioItem = ({sport,start_time,end_time,people}) => {
  const endhour = end_time.split(' ');
  return(
    <View style={styles.currentJioContainer}>
      <Image style={styles.sportIcon} source={getPic(sport)}></Image>
      <View style={styles.currentJioContainer2}>
        <Text style={styles.subtitle2}>{sport}</Text>
        <Text style={styles.subtitle3}>{start_time} ~ {endhour[1]} {people}人</Text>
      </View>
      <TouchableOpacity style={styles.launchAgain}
                        onPress={() => {}}>
        <Text style={styles.ButtonWord}>再次發起</Text>
      </TouchableOpacity>
    </View>
  );
}
  
export const CurrentJioItem = ({sport,start_time,end_time,people,posterid,userid}) => {
  const endhour = end_time.split(' ');
  if (userid == posterid) return(
    <View style={styles.currentJioContainer}>
      <Image style={styles.sportIcon} source={getPic(sport)}></Image>
      <View style={styles.currentJioContainer2}>
        <Text style={styles.subtitle2}>{sport}</Text>
        <Text style={styles.subtitle3}>{start_time} ~ {endhour[1]} {people}人</Text>
      </View>
      <TouchableOpacity style={styles.launchAgain}
                        onPress={() => {}}>
        <Text style={styles.ButtonWord}>編輯</Text>
      </TouchableOpacity>
    </View>
  );
  else return (
    <View style={styles.currentJioContainer}>
      <Image style={styles.sportIcon} source={getPic(sport)}></Image>
      <View style={styles.currentJioContainer2}>
        <Text style={styles.subtitle2}>{sport}</Text>
        <Text style={styles.subtitle3}>{start_time} ~ {endhour[1]} {people}人</Text>
      </View>
    </View>
  );
}

  

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      textAlign: 'center', 
      fontSize:35, 
      fontWeight: 'bold'
    },
    subtitle:{
      fontSize:22,
      fontWeight: 500,
      marginVertical:15
    },
    subtitle2:{
      fontSize:20
    },
    subtitle3:{
      fontSize:15,
      color: 'grey'
    },
    subtitle4:{
      fontSize:15,
      marginLeft:8,
      paddingTop:3
    },
    underOrangeLine:{
      height:6,
      width: 110,
      backgroundColor: '#FFC700',
      marginTop: 5
    },
    listStyle:{
      marginHorizontal: 30
    },
    sportIcon:{
      width:50,
      height:50
    },
    currentJioContainer:{
      flexDirection: 'row',
      paddingVertical:15,
      borderBottomColor: 'grey',
      borderBottomWidth:1
    },
    currentJioContainer2:{
      flexDirection: 'column',
      marginLeft:15
    },
    launchAgain:{
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'transparent',
      marginLeft: 'auto'
    },
    ButtonWord:{
      color: '#F5AC78'
    },
    tagContainer:{
      borderRadius:5,
      backgroundColor:'#AEAEAE',
      marginHorizontal:10,
      marginBottom:12,
      flexDirection:'row',
    }, 
    xmarkcontainer:{
      justifyContent:'center',
      alignItems:'center',
      paddingBottom:5,
      marginEnd:10
    }
  });