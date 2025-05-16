import React, {useEffect, useState} from 'react';
import {FlatList, View} from 'react-native';
import {ListScreenStyles as styles} from '../styles';
import {ListItem} from '../modals';
import {getProducts} from '../services/products.service';
import ListCard from '../components/list-item';

interface ListScreenProps {
  navigation: any;
  route: any;
}

const ListScreen = (props: ListScreenProps) => {
  const [list, setList] = useState<ListItem[]>([]);
  const getProductList = async () => {
    try {
      const response = await getProducts();
      console.log('respnse', response);
      setList(response.data);
      //   const _sections = response.data.reduce((acc, crr) => {
      //     return acc.map(i => {
      //       if (i.title === crr.category) {
      //         return {...i, items: [...i.items, crr]};
      //       }
      //       return i;
      //     });
      //   }, []);
      //   setList(_sections);
    } catch (e) {}
  };
  useEffect(() => {
    getProductList();
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        data={list}
        renderItem={({item}) => (
          <ListCard
            item={item}
            onPress={_item =>
              props.navigation.navigate('details-screen', {item: _item})
            }
          />
        )}
        keyExtractor={item => `${item.id}`}
      />
    </View>
  );
};

export default ListScreen;
