
import { StatusBar } from 'expo-status-bar';
import { ImageBackground, TouchableOpacity, SafeAreaView, StyleSheet,Dimensions, Text, View, ScrollView, TouchableWithoutFeedback } from 'react-native';
//import {  SafeAreaView} from 'react-navigation'

export default function App() {
  const image = { uri: "https://images.pexels.com/photos/8892/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500" };
  
  return (
    <ScrollView style={styles.container}>
      <SafeAreaView>
        <View style={styles.wrapperStyle}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>

          <Text style={styles.titleStyle}>
            The UI Kit has different ways to make fully customizable UI required
            to build a chat application.
          </Text>
          <Text style={styles.subTitleStyle}>
            The UI Kit has been developed to help developers of different levels
            of experience to build a chat application in a few minutes to a
            couple of hours.
          </Text>

          <View style={styles.componentStyle}>
            <View style={styles.boxStyle}>
              <View style={styles.boxContent}>
                <View style={styles.titleWrapperStyle}>
                  <Text style={styles.componentTitleStyle}>CometChatUI</Text>
                </View>
                <View style={styles.descWrapperStyle}>
                  <Text>
                    The <Text style={styles.descTextColor}>CometChatUI</Text>{' '}
                    component launches a fully working chat application.
                  </Text>
                </View>
                <View style={styles.linkContainer}>
                  <TouchableOpacity
                    style={styles.linkWrapperStyle}
                    onPress={() => {
                      props.navigation.navigate('CometChatUI');
                    }}>
                    <Text style={styles.linkStyle}>Launch</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.componentStyle}>
            <View style={styles.boxStyle}>
              <View style={styles.boxContent}>
                <View style={styles.titleWrapperStyle}>
                  <Text style={styles.componentTitleStyle}>Conversations</Text>
                </View>
                <View style={styles.descWrapperStyle}>
                  <Text>
                    The{' '}
                    <Text style={styles.descTextColor}>
                      CometChatConversationListWithMessages
                    </Text>{' '}
                    component launches a Conversation list with messaging.
                  </Text>
                </View>
                <View style={styles.linkContainer}>
                  <TouchableOpacity
                    style={styles.linkWrapperStyle}
                    onPress={() => {
                      props.navigation.navigate('Conversation');
                    }}>
                    <Text style={styles.linkStyle}>Launch</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <View style={styles.componentStyle}>
            <View style={styles.boxStyle}>
              <View style={styles.boxContent}>
                <View style={styles.titleWrapperStyle}>
                  <Text style={styles.componentTitleStyle}>Groups</Text>
                </View>
                <View style={styles.descWrapperStyle}>
                  <Text>
                    The
                    <Text style={styles.descTextColor}>
                      {' '}
                      CometChatGroupListWithMessages
                    </Text>{' '}
                    component launches a Group list with messaging.
                  </Text>
                </View>
                <View style={styles.linkContainer}>
                  <TouchableOpacity
                    style={styles.linkWrapperStyle}
                    onPress={() => {
                      props.navigation.navigate('Group');
                    }}>
                    <Text style={styles.linkStyle}>Launch</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={styles.componentStyle}>
              <View style={styles.boxStyle}>
                <View style={styles.boxContent}>
                  <View style={styles.titleWrapperStyle}>
                    <Text style={styles.componentTitleStyle}>Users</Text>
                  </View>
                  <View style={styles.descWrapperStyle}>
                    <Text>
                      The{' '}
                      <Text style={styles.descTextColor}>
                        CometChatUserListWithMessages
                      </Text>{' '}
                      component launches a User list with messaging.
                    </Text>
                  </View>
                  <View style={styles.linkContainer}>
                    <TouchableOpacity
                      style={styles.linkWrapperStyle}
                      onPress={() => {
                        props.navigation.navigate('Users');
                      }}>
                      <Text style={styles.linkStyle}>Launch</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.componentStyle}>
            <View style={styles.boxStyle}>
              <View style={styles.boxContent}>
                <View style={styles.titleWrapperStyle}>
                  <Text style={styles.componentTitleStyle}>
                    Conversation List
                  </Text>
                </View>
                <View style={styles.descWrapperStyle}>
                  <Text>
                    The{' '}
                    <Text style={styles.descTextColor}>
                      CometChatConversationList
                    </Text>{' '}
                    component launches Conversation list.
                  </Text>
                </View>
                <View style={styles.linkContainer}>
                  <TouchableOpacity
                    style={styles.linkWrapperStyle}
                    onPress={() => {
                      props.navigation.navigate('ConversationComponent');
                    }}>
                    <Text style={styles.linkStyle}>Launch</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.componentStyle}>
            <View style={styles.boxStyle}>
              <View style={styles.boxContent}>
                <View style={styles.titleWrapperStyle}>
                  <Text style={styles.componentTitleStyle}>Group List</Text>
                </View>
                <View style={styles.descWrapperStyle}>
                  <Text>
                    The{' '}
                    <Text style={styles.descTextColor}>CometChatGroupList</Text>{' '}
                    component launches Group list.
                  </Text>
                </View>
                <View style={styles.linkContainer}>
                  <TouchableOpacity
                    style={styles.linkWrapperStyle}
                    onPress={() => {
                      props.navigation.navigate('GroupComponent');
                    }}>
                    <Text style={styles.linkStyle}>Launch</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.componentStyle}>
            <View style={styles.boxStyle}>
              <View style={styles.boxContent}>
                <View style={styles.titleWrapperStyle}>
                  <Text style={styles.componentTitleStyle}>User List</Text>
                </View>
                <View style={styles.descWrapperStyle}>
                  <Text>
                    The{' '}
                    <Text style={styles.descTextColor}>CometChatUserList</Text>{' '}
                    component launches User list.
                  </Text>
                </View>
                <View style={styles.linkContainer}>
                  <TouchableOpacity
                    style={styles.linkWrapperStyle}
                    onPress={() => {
                      props.navigation.navigate('UsersComponent');
                    }}>
                    <Text style={styles.linkStyle}>Launch</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={styles.logoutBtn}
            onPress={() => props.dispatch(actions.logout())}>
            <Text style={styles.btnText}>Logout</Text>
          </TouchableOpacity>
          </ImageBackground>

        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const dheight = Dimensions.get('window').height;
const dwidth = Dimensions.get('window').width;

export const heightRatio = dheight / 667;
export const widthRatio = dwidth / 375;
export const calc = () => {
  return dheight - 100 * heightRatio;
};
export const calcWidth = (width) => {
  return dwidth - width * widthRatio;
};
const styles = StyleSheet.create({
    image:{
      flex:0,
      width: '100%',
      justifyContent: "center"
    },
    wrapperStyle: {
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
    },
    titleStyle: {
      textAlign: 'center',
      color: 'rgb(67, 171, 255)',
      fontSize: 14 * heightRatio,
      width: '100%',
      paddingTop: 0,
      paddingBottom: 16 * heightRatio,
      paddingHorizontal: 10,
    },
    subTitleStyle: {
      textAlign: 'center',
      color: '#AAA',
      width: '100%',
      paddingTop: 0,
      paddingBottom: 16 * heightRatio,
      paddingHorizontal: 10,
      fontSize: 12 * heightRatio,
    },
    helpTextStyle: {
      fontSize: 12 * heightRatio,
      textAlign: 'center',
      width: '100%',
      color: '#333',
      paddingTop: 0,
      paddingBottom: 16 * heightRatio,
    },
    componentStyle: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 15,
      // paddingBottom: 25,
      // paddingLeft: 50,
      // paddingRight: 50,
      width: '100%',
    },
    boxStyle: {
      // marginTop: 10 * heightRatio,
      // marginBottom: 10 * heightRatio,
      marginRight: 20 * widthRatio,
      marginLeft: 20 * widthRatio,
      padding: 10 * widthRatio,
      paddingVertical: 15 * widthRatio,
      //boxShadow: "0 0 10px #bbb",
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      minWidth: 300 * widthRatio,
      borderWidth: 1,
      borderColor: '#ddd',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 5.84,
      // elevation: 5,
    },
    boxContent: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    titleWrapperStyle: {
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 8 * heightRatio,
    },
    thumbnailWrapperStyle: {
      width: 34 * widthRatio,
      height: 34 * heightRatio,
    },
    componentTitleStyle: {
      width: '100%',
      // alignSelf: 'center',
      paddingBottom: 8 * widthRatio,
      fontSize: 18 * heightRatio,
      fontWeight: '600',
      paddingLeft: 10 * widthRatio,
    },
    descWrapperStyle: {
      width: '100%',
      color: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      borderBottomWidth: 1,
      paddingBottom: 16 * heightRatio,
      borderBottomColor: '#ddd',
    },
    linkContainer: {
      //width:260*widthRatio,
      alignItems: 'center',
    },
    linkWrapperStyle: {
      borderTopWidth: 0.3 * widthRatio,
      borderTopColor: '#e8e8e8',
      //borderTop: "0.3px solid #e8e8e8",
      padding: 10 * widthRatio,
    },
    linkStyle: {
      color: 'rgb(67, 171, 255)!important',
      fontWeight: '600',
      fontSize: 12 * heightRatio,
    },
    logoutBtn: {
      // outline: "none",
      backgroundColor: '#333',
      borderRadius: 10,
      color: 'white',
      paddingTop: 8 * heightRatio,
      paddingBottom: 8 * heightRatio,
      paddingLeft: 22 * widthRatio,
      paddingRight: 22 * widthRatio,
      marginTop: 15,
    },
    btnText: {
      color: 'white',
    },
    descTextColor: {
      backgroundColor: 'rgba(0,0,0,0.04)',
      color: 'red',
    },
  });
