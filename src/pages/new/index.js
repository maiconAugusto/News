import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Icon} from 'react-native-elements';
import {Container, Card, View} from './styles';
import Text from '../../components/text';
import {Alert} from 'react-native';

const NewComponent = ({navigation, route}) => {
  const {title, author, id, text} = route.params;
  const data = useSelector((state) => state.news.news);
  const dispatch = useDispatch();

  function removeItem() {
    dispatch({type: 'remove', payload: data.filter((item) => item.id !== id)});
    navigation.reset({index: 0, routes: [{name: 'MainTabs'}]});
    Alert.alert('Parabéns', 'Notícia removida com sucesso!');
  }
  return (
    <Container>
      <View style={{marginTop: 30}}>
        <Text
          data="Notícia"
          styles={{fontSize: 18, fontFamily: 'Quicksand-Bold'}}
        />
      </View>
      <Card>
        <Text
          data={title}
          styles={{
            marginBottom: 12,
            fontSize: 18,
            fontFamily: 'Quicksand-Bold',
          }}
        />
        <Text
          data={text}
          styles={{
            fontSize: 17,
            color: '#454545',
            fontFamily: 'Quicksand-Light',
          }}
        />
        <Text
          data={`Por ${author}, Portal de notícias.`}
          styles={{marginTop: 14, fontSize: 15, color: '#393939'}}
        />
      </Card>
      <View>
        <Icon
          raised
          size={30}
          name="trash-outline"
          type="ionicon"
          color="red"
          onPress={() => removeItem()}
        />
        <Icon
          raised
          size={30}
          onPress={() => {
            navigation.navigate('Editar notícia', {
              title: title,
              author: author,
              id: id,
              text: text,
            });
          }}
          name="create-outline"
          type="ionicon"
          color="#FF9F1A"
        />
      </View>
    </Container>
  );
};
export default NewComponent;
