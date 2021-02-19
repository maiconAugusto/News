import React from 'react';
import {Pressable} from 'react-native';
import {Container, Card} from './styles';
import Text from '../../components/text';

const NewComponent = ({navigation, route}) => {
  const {title, author, id, text} = route.params;
  return (
    <Container>
      <Card>
        <Pressable
          onPress={() =>
            navigation.navigate('EditNewSpaper', {
              title: title,
              author: author,
              id: id,
              text: text,
            })
          }>
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
        </Pressable>
      </Card>
    </Container>
  );
};
export default NewComponent;
