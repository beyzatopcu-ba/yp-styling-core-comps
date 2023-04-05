import { StyleSheet, Text, View, Dimensions } from 'react-native';

const { width: windowWidth } = Dimensions.get('window');


const largeBallList = [
    {
        id: 1,
        color: 'pink',
    },
    {
        id: 2,
        color: 'black',
    },
    {
        id: 3,
        color: 'green',
    },
    {
        id: 4,
        color: 'blue',
    },
];


const smallBallList = [
    {
        id: 1,
        color: 'orange',
    },
    {
        id: 2,
        color: 'orange',
    },
    {
        id: 3,
        color: 'black',
    },
    {
        id: 4,
        color: 'orange',
    },
];

const App = () => {

    const _renderLargeBalls = () => {
        // Javascript .map metodu: detayını araştır
        const largeBallComponentList = largeBallList.map(largeBallItem => {
            return (
                <View
                    key={largeBallItem.id}
                    style={[styles.largeBall, { backgroundColor: largeBallItem.color }]} />
            );
        });

        return largeBallComponentList;
    }

    const _renderSmallBalls = () => {
        const smallBallComponentList = smallBallList.map(smallBallItem => {
            return (
                <View 
                    key={smallBallItem.id}
                    style={[styles.smallBall, { backgroundColor: smallBallItem.color }]}
                />
            )
        })

        return smallBallComponentList;
    }

    return (
        <View style={styles.container}>
            <View style={styles.row}>
                <View style={styles.leftContainer}>
                    {_renderLargeBalls()}
                </View>
                <View style={styles.rightContainer}>
                    <View style={styles.smallBallRow}>
                        {_renderSmallBalls()}
                    </View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: windowWidth * 0.05,
    },
    row: {
        flexDirection: 'row',
    },
    leftContainer: {
        flexDirection: 'row',
        flex: 0.7,
        justifyContent: 'space-between',
        alignItems: 'center',
        marginRight: windowWidth * 0.05,
    },
    rightContainer: {
        flex: 0.3,
        padding: windowWidth * 0.02,
    },
    largeBall: {
        width: windowWidth * 0.1,
        height: undefined,
        aspectRatio: 1,
        borderRadius: 500,
    },    
    smallBall: {
        width: windowWidth * 0.05,
        height: undefined,
        aspectRatio: 1,
        borderRadius: 500,
    },
    smallBallRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderWidth: 1,
        borderColor: 'black',
        borderRadius: 5,
        padding: 5,
    },
});

export default App;