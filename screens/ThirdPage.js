// Import React
import React,{Component} from 'react';
// Import required components
import {SafeAreaView, StyleSheet,TouchableOpacity, Text,View} from 'react-native';
import
 MaterialCommunityIcons
from 'react-native-vector-icons/MaterialCommunityIcons';
import LinearGradient from 'react-native-linear-gradient';
// Import Map and Marker
import MapView, {Marker} from 'react-native-maps';
// const { navigation } = this.props;
// const [data,setApiData] = useState[''];

// const {all_data} = navigation.state.params;
//   setApiData = all_data;
//  console.log("data",data)
// mapMarkers = () => {
//   return this.state.reports.map((report) => <Marker
//     key={report.id}
//     coordinate={{ latitude: report.lat, longitude: report.lon }}
//     title={report.location}
//     description={report.comments}
//   >
//   </Marker >)
// }

class ThirdPage extends Component{
  constructor(props){
       super(props);
      //  this.state={
      //    Api_data:this.props.route.params.data
      //  }
  }


  render(){
  return (
    <SafeAreaView style={{flex: 1}}>
    
      <View style={styles.container}>
      

        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
          customMapStyle={mapStyle}>
          <Marker
            draggable
            coordinate={{
              latitude: 37.78825,
              longitude: -122.4324,
            }}
            onDragEnd={
              (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
            }
            title={'Test Marker'}
            description={'This is a description of the marker'}
          />
        </MapView>
      </View>
      <LinearGradient colors={['#EC8705','#f4511e']}  start={{x: 1, y: 0}}  end={{x: 0, y: 0}} style={{height:65,backgroundColor: '#f4511e',flexDirection:'row'}}>
        <Text style={{marginLeft:20,marginTop:16,fontSize:22,color:'white'}}>Assigned to Me</Text>
        <View style={{width:230 ,flexDirection:'row'}}> 
        <TouchableOpacity> 
   <MaterialCommunityIcons
  name="format-list-checkbox"
 style={{fontSize:30,marginTop:15,marginLeft:'80%',color:'white'}}/>
 </TouchableOpacity>
 </View>

      </LinearGradient>
    </SafeAreaView>
  );
}
};

export default ThirdPage;

const mapStyle = [
  {elementType: 'geometry', stylers: [{color: '#242f3e'}]},
  {elementType: 'labels.text.fill', stylers: [{color: '#746855'}]},
  {elementType: 'labels.text.stroke', stylers: [{color: '#242f3e'}]},
  
];

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  mapStyle: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});