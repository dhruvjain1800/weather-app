import * as React from 'react';
import {Text, View, StyleSheet, Image, Pressable} from 'react-native';
import {ListItem} from '../modals';

interface ListItemProps {
  item: ListItem;
  onPress: (item: ListItem) => void;
}

const ListCard = ({item, onPress}: ListItemProps) => {
  return (
    <Pressable
      style={styles.container}
      onPress={() => onPress(item)}
      testID="LIST-ITM">
      <Image
        source={{uri: item.image}}
        style={{height: 50, width: 50}}
        resizeMode="stretch"
      />
      <View style={styles.detailsContainer}>
        <Text>{item.title}</Text>
        <Text>{item.price}</Text>
      </View>
    </Pressable>
  );
};

export default ListCard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'flex-start',
  },
  detailsContainer: {
    marginLeft: 10,
  },
});
