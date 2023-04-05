import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center', 
        flex: 1,
    },
});

function TextExample() {
    return (
        <View style={styles.container}>
            <Text
                numberOfLines={3}
                textBreakStrategy='balanced'
                selectable={true}
                selectionColor={'pink'}
            >
                Quibusdam et excepturi odit aliquid rerum culpa doloribus. Ut et quis libero est qui. Itaque nostrum sit consequatur.

                Voluptatem odio totam dolorum explicabo expedita voluptate est saepe eius. Fuga impedit quae et quia impedit sint. Dolor iure alias ut. Repudiandae nam qui eius ut ea eum tenetur officiis error. Illo labore at impedit commodi. Explicabo aliquid dolorum itaque incidunt iusto rerum id eaque placeat.

                In eos et incidunt et et et. Praesentium quisquam aut sit et sint est ipsum. Est facilis quae est voluptatem quidem enim. Nostrum libero non non quis saepe et praesentium non. Sit ut cupiditate ea rerum fugit sed dolore delectus laboriosam.
            </Text>
        </View>
    );
}

function TextInputExample() {
    return (
        <View style={styles.container}>
            <TextInput
                style={{
                    backgroundColor: 'grey',
                    height: 100,
                    marginHorizontal: 20,
                    color: 'white',
                    fontSize: 20,
                }}
                autoCapitalize='none'
                autoFocus={true}
                multiline={true}
                blurOnSubmit={true}
                // editable={false}
                // inputMode='numeric'
                numberOfLines={2}
                placeholder='Adını yaz'
                placeholderTextColor={'lightgrey'}
                selectionColor={'pink'}

                onChangeText={text => console.log(text)}
            />
        </View>
    );
}

function TouchableExample() {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor='pink' style='dark' translucent/>
            <TouchableOpacity 
                activeOpacity={0.5} // Basıldığındaki opacity
                // disabled 
                onPress={() => console.log('pressed')}
                delayLongPress={5000} // 5 saniye
                onLongPress={() => console.log('long pressed')} >
                <Text>Bir Button</Text>
                <TouchableOpacity
                    style={{ flexDirection: 'row' }}
                    onPress={() => console.log('iç pressed')}>
                    <Text>İç touchable</Text>
                    <ActivityIndicator />
                </TouchableOpacity>
            </TouchableOpacity>
        </View>
    );
}

// iOS'ta sadece: Çocuklarının çentikli alanların dışında kalmasını sağlar.
const SafeAreaViewExample = () => {
    return (
        <View style={[styles.container, { justifyContent: 'flex-start', backgroundColor: 'pink'}]}>
            <Text>aksjdka</Text>
            <Text>aksjdka</Text>
            <Text>aksjdka</Text>
            <Text>aksjdka</Text>
            <SafeAreaView style={{flex: 1}}>
                <View style={{ paddingTop: 50, flex: 1, backgroundColor: 'yellow', justifyContent: 'flex-end' }}>
                    <Text>aksjdka</Text>
                </View>
            </SafeAreaView>
        </View>
    );
}

const ScrollViewExample = () => {
    return (
        <View style={styles.container}>
            <ScrollView
                
                showsVerticalScrollIndicator={false}
                // bounces={false}
                contentContainerStyle={{
                    padding: 50,
                    flex: 1,
                }}
                style={{ backgroundColor: 'pink' }}

            >
                {/* <TouchableExample />
                <TextInputExample />
                <TouchableExample />
                <TextInputExample />
                <TouchableExample />
                <TextInputExample />
                <TouchableExample />
                <TextInputExample />
                <TouchableExample />
                <TextInputExample />
                <TouchableExample />
                <TextInputExample />
                <TouchableExample />
                <TextInputExample />
                <TouchableExample />
                <TextInputExample />
                <TouchableExample />
                <TextInputExample /> */}
                <View style={{flex: 0.5, width: 100, backgroundColor: 'green'}} />
            </ScrollView>
        </View>
    );
}

const listData = [
    {
        id: 1,
        name: 'Batuhan',
    }, 
    {
        id: 2,
        name: 'Mehmet',
    },
    {
        id: 3,
        name: 'Muhammet',
    },
];

const FlatListExample = () => {

    const _renderItem = ({ item }: { item: { id: number, name: string } }) => {
        console.log(item);
        if (item.id === 3) {
            return (
                <Text style={{ color: 'blue' }}>{item.name}</Text>
            )
        }
        return (
            <Text>{item.name}</Text>
        )
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={listData}
                renderItem={_renderItem}
            />
        </SafeAreaView>
    );
}

const App = FlatListExample;

export default App;