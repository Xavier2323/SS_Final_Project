import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import axios from 'axios';
import AsyncStorage from "@react-native-async-storage/async-storage";


import {get_img_by_id} from '../utility/utility_img';

const getPic = sport => {
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

export default class Post extends React.Component{
    constructor(props){
        super(props);
        this.state={
          success:0,
          imgsrc: require('../Personal/personal/images/default_pfp.png')
        }

        this.pfp();
    }
    
    render(){
      
      var temp=0;
      for(let i = 0; i < this.props.props.participant.length; i++){
      
        if(this.props.props.participant[i]==this.props.props.userid) temp=1;
      }

      const success= temp==1? ("已報名"):("報名");
      const startTime = this.props.props.start_time.substring(5);
      const endtime = this.props.props.end_time.split(' ');
      const taglist = this.props.props.tags == null ? <View></View> : this.props.props.tags.map((item,index) => {if (index>=2 || item == "") return <View></View>; else return(
          <View style={styles.tag}>
              <Text style={styles.tagText}>{item}</Text>
          </View>)});
      return(
          <View style={[{flexDirection:'column',alignItems:'flex-start'},styles.post]}>
              
              <View style={{flexDirection:'row'}}>
                  <TouchableOpacity style={{flex:2}} onPress={this.onPressOtherProfile.bind(this)}>
                    <Image style={{borderRadius: 100, height: 60, width: 60}} source={this.state.imgsrc}/>
                  </TouchableOpacity>
                  <View style={{flexDirection:'column',flex:4}}>
                      <View style={{flexDirection:'row'}}>
                          <Image style={styles.sporticon} source={getPic(this.props.props.sport)}></Image> 
                          <Text style={{fontSize:20}}>{this.props.props.sport}</Text>
                      </View>
                      <Text style={{marginLeft:8}}>{this.props.props.place}</Text>
                      <Text style={{marginLeft:8}}>{startTime} ~ {endtime[1]}</Text>
                      <Text style={{marginLeft:8}}>人數{this.props.props.participant.length}/{this.props.props.people}</Text>
                  </View>
                  <View style={{flexDirection:'column',justifyContent:'space-between',alignItems:'center'}}>
                      <TouchableOpacity style={styles.button1} onPress={this.onPressDetail.bind(this)} >
                          <Text style={{color:'white'}}>詳情</Text>
                      </TouchableOpacity>
                      <View style={{height:10}}>
                          <TouchableOpacity 
                              style={styles.button2} 
                              onPress={this.onSuccess.bind(this)}
                          >
                              <Text style={styles.ButtonText}>{success}</Text>
                          </TouchableOpacity>
                      </View>
                  </View>
              </View>

              <View style={{flexDirection:'row',marginTop:10}}>
                  <Text>Tags:</Text>
                  {taglist}
              </View>
          </View>
      )
  }

  onPressDetail = async () => {
      await this.props.f({...this.props.props,from:0});
      this.props.navigate();
  }

  pfp=async ()=>{
      imguri= await get_img_by_id(this.props.props.posteravatar);
      // console.log(imguri);
      this.setState({
        ...this.state,
        imgsrc: { uri: imguri }
      });
  }

  onSuccess = async() => {
      var temp=0;
      for(let i = 0; i < this.props.props.participant.length; i++){
        if(this.props.props.participant[i]==this.props.props.userid) temp=1;
      }
      if (temp == 0){
        const url = `http://sample.eba-2nparckw.us-west-2.elasticbeanstalk.com/applys/create?applicant=${this.props.props.userid}&postid=${this.props.props.postid}`;
        await axios.post(url).then(res => {console.log(res.data)})
        .catch(err => {console.log(err)});
        await this.props.update();
        this.props.navigate.navigate('success');
      }
      
  }
}


  //const [data, setData] = useState([]);
    /*
    useEffect(() => {
        const url = 'http://sample2.eba-mw3jxgyz.us-west-2.elasticbeanstalk.com/posts';
        axios.get(url)
            .then((response) => {
                console.log(response.data);
                setData(response.data.post);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);
    */
    
  

    

    PushPosts = async() => {
      const url = `http://JioJioServer.eba-8jp4gbmb.us-west-2.elasticbeanstalk.com/posts`;

          this.props.props.participant.push(this.props.props.userid);
      await axios.post(url,{
          params:{
              participant:this.props.props.userid,
              //userid:this.props.props.userid,
          }
      }).then(res => {
          
      }).catch(err => {console.log(err)});


  }
  




const styles = StyleSheet.create({
    sporticon: {
        width: 35,
        height:35,
    },
    sporttext:{
        fontSize:23,
    },
    Container: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        
        
        //width: '20%'
      },
  post: {
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#FBF1D6',
    borderRadius: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    
  },
  info: {
    flex: 1,
    marginHorizontal: 10,
  },
  tagContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
    //width: '20%'
  },
  tag: {
    backgroundColor: 'gray',
    borderRadius: 5,
    margin: 2,
    paddingHorizontal: 5,
    paddingVertical: 1,
  },
  tagText: {
    color: 'white',
  },
  button1: {
    backgroundColor: '#989898',
    borderRadius: 20,
    width:50,
    height:30,
    alignItems: 'center',
    justifyContent:'center',
    marginTop:20,
    color:'white',
  },
  button2: {
    backgroundColor: '#EB7943',
    borderRadius: 20,
    width:50,
    height:30,
    alignItems: 'center',
    justifyContent:'center'
  },
  tagbox:{
    width: 50,
  },
  ButtonText: {
    color: 'white',
    //fontSize: 25,
    textAlign:'center',
},
});


/*
//正常版本
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Post = ({ data }) => {
  
  console.log(data.avatar);
  return(
  <View style={styles.post}>
    <View style={styles.avatarContainer}>
      <Image
        style={styles.avatar}
        source={require('../assets/me2.png')}
        //source={require(data.avatar)}
      />

      <View style={styles.tagContainer}>
      <View style={styles.tag_main}>
          <Text style={styles.tagMain}>tag:</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagText}>新手</Text>
        </View>
        <View style={styles.tag}>
          <Text style={styles.tagText}>友善</Text>
        </View>
      </View>
      


    </View>
      
    <View style={styles.info}>
    
      <Text>{data.sportName }</Text>
      <Text>{data.location}</Text>
      <Text>{data.time}</Text>
      <Text>{data.participants}</Text>
    </View>
    <View >

      <View style={styles.button1}>
      <Text>{data.detailText}</Text>
    </View>

      <View style={styles.button2}>
      <Text>{data.joinText}</Text>
    </View>
    

    </View>
    
    
    
  </View>

  
  
  
);}

const styles = StyleSheet.create({
  post: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#FBF1D6',
    borderRadius: 10,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    
  },
  info: {
    flex: 1,
    marginHorizontal: 10,
  },
  tagContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  tag: {
    backgroundColor: 'gray',
    borderRadius: 5,
    margin: 2,
    paddingHorizontal: 5,
    paddingVertical: 1,
  },
  tagText: {
    color: 'white',
  },
  button1: {
    backgroundColor: '#989898',
    borderRadius: 5,
    margin: 2,
    paddingHorizontal: 5,
    paddingVertical: 1,
    alignItems: 'flex-end'
  },
  button2: {
    backgroundColor: '#EB7943',
    borderRadius: 5,
    margin: 2,
    paddingHorizontal: 5,
    paddingVertical: 1,
    alignItems: 'flex-end'
  },
  
});


export default Post;
*/

/*
//tag在下面的版本
import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Post = ({ data }) => (
  <View style={styles.post}>
    <View style={styles.infoRow}>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={require('../assets/me2.png')}
        />
      </View>

      <View style={styles.info}>
        <Text>{data.sportName}</Text>
        <Text>{data.location}</Text>
        <Text>{data.time}</Text>
        <Text>{data.participants}</Text>
      </View>

      <View>
        <View style={styles.button1}>
          <Text>{data.detailText}</Text>
        </View>
        <View style={styles.button2}>
          <Text>{data.joinText}</Text>
        </View>
      </View>
    </View>

    <View style={styles.tagContainer}>
      <View style={styles.tag_main}>
        <Text style={styles.tagMain}>tag:</Text>
      </View>
      <View style={styles.tag}>
        <Text style={styles.tagText}>新手</Text>
      </View>
      <View style={styles.tag}>
        <Text style={styles.tagText}>友善</Text>
      </View>
    </View>
  </View>
);

const styles = StyleSheet.create({
  post: {
    marginHorizontal: 20,
    marginVertical: 10,
    padding: 10,
    backgroundColor: '#FBF1D6',
    borderRadius: 10,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatarContainer: {
    flex: 1,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  info: {
    flex: 3,
    marginHorizontal: 10,
  },
  button1: {
    backgroundColor: '#989898',
    borderRadius: 5,
    margin: 2,
    paddingHorizontal: 5,
    paddingVertical: 1,
    alignItems: 'flex-end',
  },
  button2: {
    backgroundColor: '#EB7943',
    borderRadius: 5,
    margin: 2,
    paddingHorizontal: 5,
    paddingVertical: 1,
    alignItems: 'flex-end',
  },
  tagContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginVertical: 10,
  },
  tag: {
    backgroundColor: 'gray',
    borderRadius: 5,
    margin: 2,
    paddingHorizontal: 5,
    paddingVertical: 1,
  },
  tagText: {
    color: 'white',
  },
});

export default Post;



 */

