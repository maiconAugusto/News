import React from 'react';
import {Icon} from 'react-native-elements';
import {Container, Card, View} from './styles';
import Text from '../../components/text';

const NewComponent = ({navigation, route}) => {
  const {title, author, id, text} = route.params;
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
