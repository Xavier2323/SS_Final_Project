
import React from 'react';
import { View, Image, StyleSheet, ImageBackground, Text, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

export default class Map extends React.Component{
    constructor(props){
        super(props);
        this.state={
          selected:""
        }
        this.handlestate_tennis.bind(this);
    }

    render(){

        const tennis = this.state.selected == "清大網球場" ? 
        (<View>
          <TouchableOpacity 
            style={styles.button_tennis} 
            
          >
            <View style={styles.place}>
                <Image 
                    style={styles.imageColumn} 
                    source={require('../../images/PlaceTennis.png')} 
                />
                <View style={styles.textColumn}>
                    <Text style={styles.placetext}>網球場</Text>
                    <Text style={styles.placetext}>尚無揪揪</Text>
                    <TouchableOpacity style={styles.placebutton} onPress={() => {this.props.navigate_tennis()}}>
                        <Text>查看揪揪</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
        </View>) : (<View></View>);
        const baseball = this.state.selected == "清大棒球場" ? 
        (<View>
          <TouchableOpacity 
            style={styles.button_baseball} 
            
          >
            <View style={styles.place}>
                <Image 
                    style={styles.imageColumn} 
                    source={require('../../images/PlaceTennis.png')} 
                />
                <View style={styles.textColumn}>
                    <Text style={styles.placetext}>棒球場</Text>
                    <Text style={styles.placetext}>尚無揪揪</Text>
                    <TouchableOpacity style={styles.placebutton} onPress={() => {this.props.navigate_baseball()}}>
                        <Text>查看揪揪</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
        </View>) : (<View></View>);

        const basketball = this.state.selected == "清大籃球場" ? 
        (<View>
          <TouchableOpacity 
            style={styles.button_basketball} 
            
          >
            <View style={styles.place}>
                <Image 
                    style={styles.imageColumn} 
                    source={require('../../images/PlaceTennis.png')} 
                />
                <View style={styles.textColumn}>
                    <Text style={styles.placetext}>籃球場</Text>
                    <Text style={styles.placetext}>尚無揪揪</Text>
                    <TouchableOpacity style={styles.placebutton} onPress={() => {this.props.navigate_basketball()}}>
                        <Text>查看揪揪</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
        </View>) : (<View></View>);
        const badminton = this.state.selected == "校友體育館" ? 
        (<View>
          <TouchableOpacity 
            style={styles.button_badminton} 
            onPress={() => {this.props.navigate()}}
          >
            <View style={styles.place}>
                <Image 
                    style={styles.imageColumn} 
                    source={require('../../images/PlaceTennis.png')} 
                />
                <View style={styles.textColumn}>
                    <Text style={styles.placetext}>校友體育館</Text>
                    <Text style={styles.placetext}>尚無揪揪</Text>
                    <TouchableOpacity style={styles.placebutton} onPress={() => {this.props.navigate_badminton()}}>
                        <Text>查看揪揪</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
        </View>) : (<View></View>);
        const volleyball = this.state.selected == "清大排球場" ? 
        (<View>
          <TouchableOpacity 
            style={styles.button_volleyball} 
            
          >
            <View style={styles.place}>
                <Image 
                    style={styles.imageColumn} 
                    source={require('../../images/PlaceTennis.png')} 
                />
                <View style={styles.textColumn}>
                    <Text style={styles.placetext}>排球場</Text>
                    <Text style={styles.placetext}>尚無揪揪</Text>
                    <TouchableOpacity style={styles.placebutton} onPress={() => {this.props.navigate_volleyball()}}>
                        <Text>查看揪揪</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
        </View>) : (<View></View>);
        const soccer = this.state.selected == "清大田徑場" ? 
        (<View>
          <TouchableOpacity 
            style={styles.button_soccer} 
            
          >
            <View style={styles.place}>
                <Image 
                    style={styles.imageColumn} 
                    source={require('../../images/PlaceTennis.png')} 
                />
                <View style={styles.textColumn}>
                    <Text style={styles.placetext}>田徑場</Text>
                    <Text style={styles.placetext}>尚無揪揪</Text>
                    <TouchableOpacity style={styles.placebutton} onPress={() => {this.props.navigate_soccer()}}>
                        <Text>查看揪揪</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
        </View>) : (<View></View>);
        
        const swim = this.state.selected == "清大游泳館" ? 
        (<View>
          <TouchableOpacity 
            style={styles.button_swim} 
           
          >
            <View style={styles.place}>
                <Image 
                    style={styles.imageColumn} 
                    source={require('../../images/PlaceTennis.png')} 
                />
                <View style={styles.textColumn}>
                    <Text style={styles.placetext}>游泳館</Text>
                    <Text style={styles.placetext}>尚無揪揪</Text>
                    <TouchableOpacity style={styles.placebutton} onPress={() => {this.props.navigate_swim()}}>
                        <Text>查看揪揪</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
        </View>) : (<View></View>);
        const pingpong = this.state.selected == "清大桌球館" ? 
        (<View>
          <TouchableOpacity 
            style={styles.button_B_V} 
            
          >
            <View style={styles.place}>
                <Image 
                    style={styles.imageColumn} 
                    source={require('../../images/PlaceTennis.png')} 
                />
                <View style={styles.textColumn}>
                    <Text style={styles.placetext}>桌球館</Text>
                    <Text style={styles.placetext}>尚無揪揪</Text>
                    <TouchableOpacity style={styles.placebutton} onPress={() => {this.props.navigate_tabletennis()}}>
                        <Text>查看揪揪</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
        </View>) : (<View></View>);
        const B_V = this.state.selected == "清大體育館" ? 
        (<View>
          <TouchableOpacity 
            style={styles.button_B_V} 
            
          >
            <View style={styles.place}>
                <Image 
                    style={styles.imageColumn} 
                    source={require('../../images/PlaceTennis.png')} 
                />
                <View style={styles.textColumn}>
                    <Text style={styles.placetext}>體育館</Text>
                    <Text style={styles.placetext}>尚無揪揪</Text>
                    <TouchableOpacity style={styles.placebutton} onPress={() => {this.props.navigate_B_V()}}>
                        <Text>查看揪揪</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableOpacity>
        </View>) : (<View></View>);
        return(
          <View style={{flexDirection:'column'}}>

                                

          
                  <View style={{backgroundColor:'white',zIndex:2,borderRadius:30,flexDirection:'row',justifyContent:'space-between'}}>
                                        <TouchableOpacity style={styles.Notification} onPress={()=>{this.props.navigate_No()}}>
                                          <Image source={require('../../images/bell.png')}/>
                                        </TouchableOpacity>
                                        <Text style={{fontSize:25,color:'orange',alignContent:'center',justifyContent:'center',marginTop:'2%'}}>運動揪揪</Text>
                                        <TouchableOpacity style={styles.Notification} onPress={()=>{this.props.navigate_Per()}}>
                                          <Image source={require('../../images/Person.png')}/>
                                        </TouchableOpacity>

                                        {/* <ImageBackground 
                                            source={require('../../images/Top_app_bar.png')} 
                                            style={styles.ContainerTop}
                                            resizeMode="cover"
                                        >
                                            <View style={styles.topBar}>
                                                <TouchableOpacity style={styles.Notification} onPress={()=>{this.props.navigate_No()}}>
                                                    <Image source={require('../../images/bell.png')}/>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={styles.Notification} onPress={()=>{this.props.navigate_Per()}}>
                                                    <Image source={require('../../images/Person.png')}/>
                                                </TouchableOpacity>
                                            </View>
                                        </ImageBackground> */}
                  </View>
                
                <View style={{height:'86%'}}>
                <ScrollView>
                  <ScrollView horizontal={true}>
                  {/* <TouchableOpacity  onPress={this.handlestate_zero.bind(this)}> */}
                    <ImageBackground style={{width:600,height:900}} source={require('../../images/map.png')}>
                          
                          <TouchableOpacity style={{marginLeft:40,marginTop:5}} onPress={this.handlestate_tennis.bind(this)}>
                                      <Image 
                                          style={{position:'absolute',top:58,left:10,right:250}}
                                          source={require('../../images/place_n.png')} 
                                      />
                            </TouchableOpacity> 
                            
                            <TouchableOpacity style={{marginLeft:40,marginTop:5}} onPress={this.handlestate_baseball.bind(this)}>
                                      <Image 
                                          style={{position:'absolute',top:150,left:235,right:250}}
                                          source={require('../../images/place_n.png')} 
                                      />
                            </TouchableOpacity>
                            <TouchableOpacity style={{marginLeft:40,marginTop:5}} onPress={this.handlestate_basketball.bind(this)}>
                                      <Image 
                                          style={{position:'absolute',top:172,left:375,right:250}}
                                          source={require('../../images/place_n.png')} 
                                      />
                            </TouchableOpacity> 
                            <TouchableOpacity style={{marginLeft:40,marginTop:5}} onPress={this.handlestate_swim.bind(this)}>
                                      <Image 
                                          style={{position:'absolute',top:435,left:372,right:250}}
                                          source={require('../../images/place_n.png')} 
                                      />
                            </TouchableOpacity> 
                            <TouchableOpacity style={{marginLeft:40,marginTop:5}} onPress={this.handlestate_volleyball.bind(this)}>
                                      <Image 
                                          style={{position:'absolute',top:718,left:274,right:250}}
                                          source={require('../../images/place_n.png')} 
                                      />
                            </TouchableOpacity> 
                            <TouchableOpacity style={{marginLeft:40,marginTop:5}} onPress={this.handlestate_badminton.bind(this)}>
                                      <Image 
                                          style={{position:'absolute',top:356,left:-20,right:250}}
                                          source={require('../../images/place_n.png')} 
                                      />
                            </TouchableOpacity> 
                            <TouchableOpacity style={{marginLeft:40,marginTop:5}} onPress={this.handlestate_soccer.bind(this)}>
                                      <Image 
                                          style={{position:'absolute',top:660,left:40,right:250}}
                                          source={require('../../images/place_n.png')} 
                                      />
                            </TouchableOpacity> 
                            <TouchableOpacity style={{marginLeft:40,marginTop:5}} onPress={this.handlestate_B_V.bind(this)}>
                                      <Image 
                                          style={{position:'absolute',top:718,left:452,right:250}}
                                          source={require('../../images/place_n.png')} 
                                      />
                            </TouchableOpacity> 
                            <TouchableOpacity style={{marginLeft:40,marginTop:5}} onPress={this.handlestate_tabletennis.bind(this)}>
                                      <Image 
                                          style={{position:'absolute',top:570,left:435,right:250}}
                                          source={require('../../images/place_n.png')} 
                                      />
                            </TouchableOpacity> 
                            {tennis}
                            {baseball}
                            {basketball}
                            {badminton}
                            {volleyball}
                            {soccer}
                            {swim}
                            {tennis}
                            {pingpong}
                            {B_V}

                                {/* <TouchableOpacity 
                                  style={styles.button1} 
                                  onPress={() => {this.props.navigate()}}
                                >
                                    <View style={styles.place}>
                                        <Image 
                                            style={styles.imageColumn} 
                                            source={require('../../images/PlaceTennis.png')} 
                                        />
                                        <View style={styles.textColumn}>
                                            <Text style={styles.placetext}>網球場</Text>
                                            <Text style={styles.placetext}>尚無揪揪</Text>
                                            <TouchableOpacity style={styles.placebutton}>
                                                <Text>發起揪揪</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </TouchableOpacity> */}
                            
                      </ImageBackground>
                      {/* </TouchableOpacity>  */}
                  </ScrollView>
                </ScrollView>
                </View>
          </View>

        );
                        
                        {/* <TouchableOpacity 
                            style={styles.button} 
                            onPress={() => {this.props.navigate()}}
                        >
                            <View style={styles.place}>
                                <Image 
                                    style={styles.imageColumn} 
                                    source={require('../../images/PlaceTennis.png')} 
                                />
                                <View style={styles.textColumn}>
                                    <Text style={styles.placetext}>網球場</Text>
                                    <Text style={styles.placetext}>尚無揪揪</Text>
                                    <TouchableOpacity style={styles.placebutton}>
                                        <Text>發起揪揪</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            
                        </TouchableOpacity> */}
                      }
                

                      handlestate_tennis = async () => {
                        if(this.state.selected!="清大網球場")
                        (this.setState({
                          selected:"清大網球場"
                        }))
                        else
                        (
                          (this.setState({
                            selected:""
                          }))
                        )
                        ;
                      }

                    handlestate_baseball = async () => {
                      if(this.state.selected!="清大棒球場")
                      (this.setState({
                        selected:"清大棒球場"
                      }))
                      else
                      (
                        (this.setState({
                          selected:""
                        }))
                      )
                      ;
                    }
                  
                    handlestate_basketball = async () => {
                      if(this.state.selected!="清大籃球場")
                      (this.setState({
                        selected:"清大籃球場"
                      }))
                      else
                      (
                        (this.setState({
                          selected:""
                        }))
                      )
                      ;
                  }
                    handlestate_badminton = async () => {
                      if(this.state.selected!="校友體育館")
                      (this.setState({
                        selected:"校友體育館"
                      }))
                      else
                      (
                        (this.setState({
                          selected:""
                        }))
                      )
                      ;
                  }
                  // handlestate_tennis = async () => {
                  //   if(this.state.selected!="校友體育館")
                  //   (this.setState({
                  //     selected:"校友體育館"
                  //   }))
                  //   else
                  //   (
                  //     (this.setState({
                  //       selected:""
                  //     }))
                  //   )
                  //   ;
                  // }
                  handlestate_swim = async () => {
                    if(this.state.selected!="清大游泳館")
                    (this.setState({
                      selected:"清大游泳館"
                    }))
                    else
                    (
                      (this.setState({
                        selected:""
                      }))
                    )
                    ;
                }
                handlestate_volleyball = async () => {
                  if(this.state.selected!="清大排球場")
                  (this.setState({
                    selected:"清大排球場"
                  }))
                  else
                  (
                    (this.setState({
                      selected:""
                    }))
                  )
                  ;
              }
              handlestate_soccer = async () => {
                if(this.state.selected!="清大田徑場")
                (this.setState({
                  selected:"清大田徑場"
                }))
                else
                (
                  (this.setState({
                    selected:""
                  }))
                )
                ;
            }
            handlestate_B_V = async () => {
              if(this.state.selected!="清大體育館")
              (this.setState({
                selected:"清大體育館"
              }))
              else
              (
                (this.setState({
                  selected:""
                }))
              )
              ;
          }
          handlestate_tabletennis = async () => {
            if(this.state.selected!="清大桌球館")
            (this.setState({
              selected:"清大桌球館"
            }))
            else
            (
              (this.setState({
                selected:""
              }))
            )
            ;
        }
}



const styles = StyleSheet.create({
  fixed:{
    //position:'absolute',
    //top:50,
    //right:50,
    //left:50,
  },
  map: {
    width:500,
    height: 500,
  },
  image: {
    flex: 1,
    width: null,
    height: '100%',
    //resizeMode: 'cover',
    //alignItems:'center',
    
  },
  top: {
    flex: 0,
    width: 390,
    height: 50,
    //resizeMode: 'cover',
    alignItems:'center',
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
    
  },
  /*
  left_of_top: {
    flex: 0,
    width: 390,
    height: 50,
    //resizeMode: 'cover',
    //alignItems:'center',
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
    
  },
  right_of_top: {
    flex: 0,
    width: 390,
    height: 50,
    //resizeMode: 'cover',
    alignItems:'center',
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
    
  },*/
  // blank: {
  //   //flex: 1,
  //   width: 390,
  //   height: 10,
  // },
  button_tennis: {
    position: 'absolute',
    top: '20%', 
    left: '5%', 
    transform: [{ translateX: -0.5 }, { translateY: -0.5 }],
    width:'70%',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 15,
    marginTop:70,
    marginLeft:0,
  },
  button_baseball: {
    position: 'absolute',
    top: '20%', 
    left: '5%', 
    transform: [{ translateX: -0.5 }, { translateY: -0.5 }],
    width:'70%',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 15,
    marginTop:160,
    marginLeft:50,
  },
  button_basketball: {
    position: 'absolute',
    top: '20%', 
    left: '5%', 
    transform: [{ translateX: -0.5 }, { translateY: -0.5 }],
    width:'70%',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 15,
    marginTop:190,
    marginLeft:250,
  },
  button_badminton: {
    position: 'absolute',
    top: '20%', 
    left: '5%', 
    transform: [{ translateX: -0.5 }, { translateY: -0.5 }],
    width:'70%',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 15,
    marginTop:160,
    marginLeft:50,
  },
  button_swim: {
    position: 'absolute',
    top: '20%', 
    left: '5%', 
    transform: [{ translateX: -0.5 }, { translateY: -0.5 }],
    width:'70%',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 15,
    marginTop:460,
    marginLeft:250,
  },
  button_volleyball: {
    position: 'absolute',
    top: '20%', 
    left: '5%', 
    transform: [{ translateX: -0.5 }, { translateY: -0.5 }],
    width:'70%',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 15,
    marginTop:600,
    marginLeft:150,
  },
  button_badminton: {
    position: 'absolute',
    top: '20%', 
    left: '5%', 
    transform: [{ translateX: -0.5 }, { translateY: -0.5 }],
    width:'70%',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 15,
    marginTop:400,
    marginLeft:-10,
  },
  button_soccer: {
    position: 'absolute',
    top: '20%', 
    left: '5%', 
    transform: [{ translateX: -0.5 }, { translateY: -0.5 }],
    width:'70%',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 15,
    marginTop:710,
    marginLeft:-10,
  },
  button_B_V: {
    position: 'absolute',
    top: '20%', 
    left: '5%', 
    transform: [{ translateX: -0.5 }, { translateY: -0.5 }],
    width:'70%',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 15,
    marginTop:627,
    marginLeft:233,
  },
  button_tabletennis: {
    position: 'absolute',
    top: '20%', 
    left: '5%', 
    transform: [{ translateX: -0.5 }, { translateY: -0.5 }],
    width:'70%',
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    borderRadius: 15,
    marginTop:415,
    marginLeft:233,
  },
  place: {
    flexDirection: 'row',
    backgroundColor: '#FBF1D6',
    borderRadius: 5,
    padding: 10,
    width: '80%',
    
  },
  placetext:{
    alignItems: 'flex-end',
  },
  placebutton: {
    backgroundColor: '#EB7943',
    borderRadius: 5,
    margin: 2,
    paddingHorizontal: 5,
    paddingVertical: 1,
    alignItems: 'center',
  },
  imageColumn: {
    flex: 1,
    resizeMode: 'cover',
  },
  textColumn: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  ContainerTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width:'100%',
    marginTop: '3%',
  },
  topBar: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10, 
},
placeNum:{
    //marginTop:'20%',
    //transform: [{ translateX: -0.5 }, { translateY: -0.5 }],
    //width:'70%',
}
});
