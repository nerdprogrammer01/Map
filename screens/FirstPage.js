
import React,{Component} from 'react';
import { Button,StyleSheet,TouchableOpacity, View,TextInput, Text, SafeAreaView,Modal } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';

import
 MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';
import moment from 'moment/moment';
import
FontAwesome5
from 'react-native-vector-icons/FontAwesome5';

import
MaterialIcons
from 'react-native-vector-icons/MaterialIcons';
import RNMaterialLetterIcon from 'react-native-material-letter-icon';
import ActionButton from 'react-native-action-button';

class FirstPage extends Component {
    constructor(props){
        super(props);
        this.state={
            result_data:[],
            filterd_result_data:[],
            filt_ModelData:[],
            Search:'',
            modalVisible: false,
            f_status:''

        }
    }
    componentDidMount=()=>{
        this.Api_call();
    }
    Api_call=()=>{

              
          const request_option={
             method :'GET'
          }
          
          fetch("https://run.mocky.io/v3/82f1d43e-2176-4a34-820e-2e0aa4566b5c", request_option)
          .then(async response =>{
              const data =await response.json();
              console.log("data yee"+(data.length));
          const result = (data);
               this.setState({
                   result_data:result,
                   filterd_result_data:result
               })
            //  console.log("result_data",(this.state.result_data))
              let ids = data.map(o => o.status)
              let filtered = data.filter(({status}, index) => !ids.includes(status, index+1));
              // let obj=[]
              //  for(let i ;i>=filtered.length; i++){
              //   obj = filterd[i]['status'].push 
                
              //  }
              // console.log("filterd",obj)
              this.setState({
                 filt_ModelData:filtered
              })

          }).catch(error => {
            this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });
            }

            
        

             searchFilterFunction = (text) => {
              // Check if searched text is not blank
            //  let newData =[this.state.result_data]
              console.log("text",text)
              if (text != '') {
                // Inserted text is not blank
                // Filter the masterDataSource
                // Update FilteredDataSource
             
              const newData = this.state.result_data.filter(
                  function (item) {
                    const itemData = item.title
                      ? item.title.toUpperCase()
                      : ''.toUpperCase();
                    const textData = text.toUpperCase();
                    return itemData.indexOf(textData) > -1;
                });
                //console.log("newdata",newData)
                this.setState({
                  filterd_result_data:newData,
                  Search:text
                })
                // setFilteredDataSource(newData);
                // Search(text);
              } else {
                // Inserted text is blank
                // Update FilteredDataSource with masterDataSource
                this.setState({
                  filterd_result_data:this.state.result_data,
                  Search:text
                })
                // setFilteredDataSource(masterDataSource);
                // setSearch(text);
              }
            };
          


static navigationOptions=({ navigation})=>{
  return{
  title: 'First Page', //Set Header Title
  headerStyle: {
    backgroundColor: '#f4511e', //Set Header color
  },
  headerTintColor: '#fff', //Set Header text color
  headerTitleStyle: {
    fontWeight: 'bold', //Set Header text style
  },
  headerRight: () =>
   <TouchableOpacity onPress={()=>{ navigation.navigate('ThirdPage')}}> 
   <MaterialCommunityIcons
  name="map"
 style={{fontSize:40,marginRight:20,color:'white'}}/>
 </TouchableOpacity>
 }
}

mFilter=()=>{
  let data =  this.state.result_data;
  let filt_opt =  this.state.f_status;
  var newArray = [];
  if(filt_opt != ''){
 data.map(function(mainObject) {
     for (let i=0; i<data.length; i++){
          if(data[i]['status'] ===filt_opt){
             newArray.push(data[i]);
          }
     }
  }
)
}

  let ids = newArray.map(o => o.id)
  let filtered = data.filter(({id}, index) => !ids.includes(id, index+1));
  console.log(filtered);
}
cloes_modal=(visible)=>{
  this.setState({ modalVisible: !visible });
}

navi=()=>{
  this.props.navigation.navigate('ThirdPage',{all_data:this.state.result_data})
}

setModalVisible = (visible) => {
  this.setState({ modalVisible: visible });
}

    render(){
      const { modalVisible } = this.state;
        return (
          
      <View style={{flexDirection:'column'}}>

      <LinearGradient colors={['#EC8705','#f4511e']}  start={{x: 1, y: 0}}  end={{x: 0, y: 0}} style={{height:65,backgroundColor: '#f4511e',flexDirection:'row'}}>
        <Text style={{marginLeft:20,marginTop:16,fontSize:22,color:'white'}}>Assigned to Me</Text>
        <View style={{width:230 ,flexDirection:'row'}}> 
        <TouchableOpacity onPress={()=>{ this.props.navigation.navigate('ThirdPage'),{data:this.state.result_data}}}> 
   <FontAwesome5
  name="map-marked-alt"
 style={{fontSize:25,marginTop:13,marginLeft:'85%',color:'white'}}/>
 </TouchableOpacity>
 </View>

      </LinearGradient>
          <View style={{flexDirection:'row', justifyContent: 'center', alignItems: 'center'}}>
            <View style={{ flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 0.5,
    width:'80%',
    borderColor: '#000',
    height: 40,
    borderRadius: 5,
    margin: 10}}>
            <MaterialCommunityIcons
                name="magnify"
               style={{fontSize:24}}
              />
            <TextInput
                style={{ flex: 1 }}
                placeholder="Enter Your Name Here"
                underlineColorAndroid="transparent"
                onChangeText={(text)=>this.searchFilterFunction(text)}
            />
         
        </View>
        <TouchableOpacity  onPress={() => {this.setModalVisible(true)}} style={{backgroundColor:'#FF7733',borderRadius:5}}>
        <View style={{flexDirection:'row',height:40,width:48,marginRight:10}}>
       
        <View style={{marginTop:'15%',marginLeft:5}}>
        <Text style={{color:'white'}}>Filter</Text>
        </View>
       
             
              <View style={{marginTop:'13%'}}>
        <MaterialIcons
                name="filter-alt"
               style={{fontSize:22,color:'white'}}
              />
              </View>
              </View>
              </TouchableOpacity>
                {/* <TouchableOpacity onPress={this.navi}> 
             <MaterialCommunityIcons
            name="map"
           style={{fontSize:24,color:'black'}}/>
           </TouchableOpacity> */}
        </View>

         <FlatList
      data={ this.state.filterd_result_data }
      ItemSeparatorComponent = {this.ItemSeparatorLine}
      keyExtractor={(item, index) => index}
  renderItem={({item}) => 
   <TouchableOpacity>
   <View style={styles.rect}>
        <View style={styles.loremIpsumRow}>
        <RNMaterialLetterIcon
      size={45}
      initialsNumber={1}
      border={false}
      borderColor={"#dd2c00"}
      shapeColor={"gray"}
      letter={item.title}
      borderSize={2}

      />
          <View style={styles.loremIpsum5Column}>
            <Text style={styles.loremIpsum5}>{item.title}</Text>
            <Text style={styles.loremIpsum6}>{item.subtitle}</Text>
          </View>
          {/* <Text style={styles.loremIpsum8}>{item.status}</Text> */}
        </View>
        <View style={styles.rect2}>
          <View style={styles.loremIpsum11Row}>
          <MaterialCommunityIcons
                name="calendar-arrow-right"
               style={{fontSize:22}}
              />
            <Text style={styles.loremIpsum12}>Created:</Text>
            <Text style={styles.loremIpsum13}>{moment(item.created).format('DD MMM YYYY')}</Text>
            {/* <Text style={styles.abv3}>abv</Text> */}
          </View>
        </View>
        <View style={styles.abvRow}>
        <MaterialCommunityIcons
                name="format-list-bulleted-square"
               style={{fontSize:22}}
              />
          <Text style={styles.loremIpsum16}>{item.short_desc}</Text>
        </View>
        <View style={styles.abv1Row}>
        <MaterialCommunityIcons
                name="clipboard-text"
               style={{fontSize:22}}
              />
          <Text style={styles.loremIpsum17}>{item.long_desc}</Text>
        </View>
        <Text style={styles.abv2}>V</Text>
      </View>

</TouchableOpacity>
}

/>

      <ActionButton buttonColor="#FF7733"  style={{marginBottom: 110}}>
          {/*Inner options of the action button*/}
          {/*Icons here
             https://infinitered.github.io/ionicons-version-3-search/
           */}
        
        </ActionButton>
    

<Modal
          
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
             
               <View style={{backgroundColor:'#E6E2E0',width:'100%',height:'15%'}}>
               <Text style={styles.modalText}>CHOOSE OPTION FROM BELOW</Text>
               </View>

               <FlatList
      data={ this.state.filt_ModelData }
      ItemSeparatorComponent = {this.ItemSeparatorLine}
      keyExtractor={(item, index) => index}
  renderItem={({item}) => 
                <TouchableOpacity 
                // onPress={()=>this.mFilter(this.setState({f_status:item.status}))
                onPress={()=> {this.setModalVisible(false)}}
                 
                
                
                >
                <View style={{borderBottomColor:'black',borderBottomWidth:1,width:300,marginBottom:30}}>
               <Text style={styles.modalText1}>{item.status}</Text>
               </View>
               </TouchableOpacity>
             
                 }/>
            </View>
          </View>
        </Modal>
      </View>

      
        
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1
    },
    rect: {
      width: 380,
      height: 198,
      backgroundColor: "#E6E6E6",
      marginRight: 15,
      marginLeft: 15,marginTop:15,backgroundColor:'white'
    },
    loremIpsum: {
      fontFamily: "roboto-regular",
      color: "#121212",
      height: 39,
      width: 60,
      marginTop: 8
    },
    loremIpsum5: {
      fontFamily: "roboto-regular",
      color: "#121212",
      fontWeight: "bold"
    },
    loremIpsum6: {
      fontFamily: "roboto-regular",
      color: "#121212",
      marginTop: 4
    },
    loremIpsum5Column: {
      width: 147,
      marginTop: 2,
      marginBottom: 3,marginLeft:10
    },
    loremIpsum8: {
      fontFamily: "roboto-regular",
      color: "#121212",
      marginLeft: 15
    },
    loremIpsumRow: {
      height: 47,
      flexDirection: "row",
      marginTop: 11,
      marginLeft: 22,
      marginRight: 15
    },
    rect2: {
      width: 380,
      height: 44,
      backgroundColor: "white",
      borderBottomWidth: 1,borderTopWidth:1,
      borderColor: "rgba(145,126,126,1)",
      flexDirection: "row",
      marginTop: 8,
      marginLeft: 2
    },
    loremIpsum11: {
      fontFamily: "roboto-regular",
      color: "#121212"
    },
    loremIpsum12: {
      fontFamily: "roboto-regular",
      color: "#121212",
      marginLeft: 9
    },
    loremIpsum13: {
      fontFamily: "roboto-regular",
      color: "#121212",
      marginLeft: 7
    },
    abv3: {
      fontFamily: "roboto-regular",
      color: "#121212",
      marginLeft: 15
    },
    loremIpsum11Row: {
      height: 16,
      flexDirection: "row",
      flex: 1,
      marginRight: 2,
      marginLeft: 13,
      marginTop: 14
    },
    abv: {
      fontFamily: "roboto-regular",
      color: "#121212"
    },
    loremIpsum16: {
      fontFamily: "roboto-regular",
      color: "#121212",
      marginLeft: 10
    },
    abvRow: {
      height: 16,
      flexDirection: "row",
      marginTop: 18,
      marginLeft: 14,
      marginRight: 22
    },
    abv1: {
      fontFamily: "roboto-regular",
      color: "#121212"
    },
    loremIpsum17: {
      fontFamily: "roboto-regular",
      color: "#121212",
      marginLeft: 17
    },
    abv1Row: {
      height: 16,
      flexDirection: "row",
      marginTop: 8,
      marginLeft: 14,
      marginRight: 15
    },
    abv2: {
      fontFamily: "roboto-regular",
      color: "white",
      marginTop: 7,
      marginLeft: 170
    },  centeredView: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      marginTop: 22
    },
    modalView: {
      width:'80%',borderColor:'black',borderWidth:1,height:'35%',
      backgroundColor: "white",
      alignItems: "center",
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      //elevation: 5
    },
    openButton: {
      backgroundColor: "#F194FF",
      borderRadius: 20,
      padding: 10,
      elevation: 2
    },
    textStyle: {
      color: "white",
      fontWeight: "bold",
      textAlign: "center"
    },
    modalText: {
      marginBottom: 8,marginTop:6,marginLeft:5,fontSize:12
    },
     modalText1: {
     fontSize:15
    }
  });
  

export default FirstPage;
