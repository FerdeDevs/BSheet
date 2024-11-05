import React, { useRef } from 'react';
import { View, Button, Text } from 'react-native';
import RBSheet from 'react-native-raw-bottom-sheet';

const index = () => {
    const refRBSheet = useRef();

    return (
        <View className="bg-slate-800">
            <Button title="Ouvrir le Bottom Sheet" onPress={() => refRBSheet.current.open()} />
            <Text className="text-red text-lg font-bold">Hello, NativeWind!</Text>
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown={true}
                closeOnPressMask={true}
                height={300}
                openDuration={250}
                customStyles={{
                    wrapper: {
                        backgroundColor: 'rgba(0,0,0,0.1)',
                    },
                    draggableIcon: {
                        backgroundColor: "#000",
                        paddingTop: 10
                    },
                    container: {
                        borderTopLeftRadius: 30,
                        borderTopRightRadius: 30
                    }
                }}
                customModalProps={{
                    animationType: 'fade',
                    statusBarTranslucent: true,
                }}
                customAvoidingViewProps={{
                    enabled: false,
                }}
            >
                <View style={{ padding: 20 }}>
                    <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Ceci est un Bottom Sheet</Text>
                    <Text>Vous pouvez y ajouter n'importe quel contenu.</Text>
                </View>
            </RBSheet>
        </View >
    );
};

export default index;
