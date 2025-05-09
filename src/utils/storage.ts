import AsyncStorage from '@react-native-async-storage/async-storage';

export const storeData = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    throw e;
  }
};

export const getData = async (key: string) => {
  try {
    const data = await AsyncStorage.getItem(key);
    return data;
  } catch (e) {
    throw e;
  }
};
