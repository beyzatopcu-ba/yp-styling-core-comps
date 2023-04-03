import { StatusBar } from 'expo-status-bar';
import { Text, View, Dimensions, Image, StyleSheet } from 'react-native';

const windowDimensions = Dimensions.get('window');
// const width = windowDimensions.width;
// const height = windowDimensions.height;

const { width, height } = windowDimensions;

const measure = (size: number) => size * (width / 360); // Responsive olması için

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'rgba(255,255,0,0.1)',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    flex: 1, // İçinde bulunduğu alanın ne kadarını kaplayacağını ifade eder.
    flexDirection: 'column', // İçindeki elemanları yatay (row) veya dikey (column) yerleştirir.
    // justifyContent: 'center', // Flex doğrultusunda hizalar.
    // alignItems: 'center', // Flex doğrultusuna dik hizalar.
    justifyContent: 'space-evenly',
    margin: measure(20),
    padding: measure(20),
  },
  gaaImage: {

  },
  gaaImageContainer: {

  },
});

export default function App() {
  return (
    <View style={styles.container} >
      {/* Flex */}
      {/* <View style={{
        backgroundColor: 'blue',
        flexGrow: 1, // Parent'a diyor ki, tüm çocuklarını yerleştirdikten sonra kalan alanın şu kadarını bana ayır
      }}>
        <Text>Metin 1!</Text>
      </View>
      <View style={{
        flexShrink: 1, // Parent'a diyor ki, tüm çocuklarını yerleştirdikten sonra taşan miktarın şu kadarını benden kes
        backgroundColor: 'yellow',
      }}>
        <Text numberOfLines={1} >Enim harum recusandae est quis ex et. BEnim harum recusandae est quis ex et. CEnim harum recusandae est quis ex et.</Text>
      </View>
      <Text>Metin 3!</Text> */}


      {/* Shadow, margin, padding */}
      {/* <View style={{
        width: 200,
        height: 200,
        backgroundColor: 'yellow',
        // padding: 20,
        elevation: 10, // Android gölge
        shadowColor: 'black', // Shadow ile başlayanların tümü iOS gölge
        shadowOffset: {width: 0, height: 0},
        shadowOpacity: 0.5,
        shadowRadius: 10,
        borderRadius: 1000,
        overflow: 'hidden', // Çocuklarım benim alanımın dışına çıkıyorsa, dışarı taşan kısımları gizle
        opacity: 0.2, // Benim ve çocuklarımın opaklık seviyesi
      }}>
        <View style={{
          flex: 1,
          backgroundColor: 'blue',
          margin: 20,
          opacity: 0.5,
        }} />
      </View> */}


      {/* Çocukların hizalanması */}
      {/* <View
        style={{
          backgroundColor: 'yellow',
          // flexGrow: 1,
          width: 100,
          height: 100,
        }} />
      <View
        style={{
          backgroundColor: 'blue',
          width: 100,
          height: 100,
        }} />
      <View
        style={{
          backgroundColor: 'green',
          width: 100,
          height: 100,
        }} /> */}

        {/* Text stili */}
      {/* <View style={{height: 200}}>
        <Text style={{
          color: 'red',
          fontSize: measure(20),
          fontStyle: 'italic',
          fontWeight: 'bold',
          letterSpacing: 10,
          lineHeight: 50,
          textAlign: 'center',
        }}>neural-net Bike Pants In autem dolorum sed natus velit molestias quidem ut sunt.</Text>
      </View> */}

      {/* Image stili */}
      <View style={{
        width: 150,
        height: 150,
        padding: 20,
        backgroundColor: 'pink',
      }}>
        <Image source={require('./gelecege.png')} style={{
          width: '100%',
          height: '90%',
          resizeMode: 'cover',
        }}/>
      </View>
    </View>
  );
}
