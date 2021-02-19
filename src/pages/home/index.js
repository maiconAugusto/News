import React, {useState, useEffect} from 'react';
import {Pressable} from 'react-native';
import {Searchbar} from 'react-native-paper';
import Fuse from 'fuse.js';
import {Container, Header, Body, Card} from './styles';
import Text from '../../components/text';

const data = [
  {
    id: 0,
    title: 'Covid-19',
    text:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    author: 'Gil',
  },
  {
    id: 1,
    title: 'Covid-19',
    text:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    author: 'Carlos Roupa Nova',
  },
  {
    id: 2,
    title: 'Covid-19',
    text:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
    author: 'Jean Dornelas',
  },
];

const options = {
  keys: ['title', 'author', 'text'],
};

const Home = ({navigation}) => {
  const [newSpapers, setNewSpapers] = useState([]);

  useEffect(() => {
    setNewSpapers(data);
  }, []);

  function Filter(name) {
    if (name === '') {
      setNewSpapers(data);
    } else {
      const fuse = new Fuse(data, options);
      const dataFiltered = [];
      const response = fuse.search(name);

      response.map((item) => {
        dataFiltered.push(item.item);
      });

      setNewSpapers(dataFiltered);
    }
  }
  return (
    <Container>
      <Header>
        <Searchbar
          placeholder="Procurar"
          style={{margin: 10, height: 70}}
          onChangeText={(text) => Filter(text)}
        />
      </Header>
      <Body>
        {newSpapers.map((item, index) => {
          return (
            <Pressable
              onPress={() =>
                navigation.navigate('new', {
                  title: item.title,
                  author: item.author,
                  text: item.text,
                  id: item.id,
                })
              }>
              <Card key={index}>
                <Text
                  data={item.title}
                  styles={{
                    marginBottom: 12,
                    fontSize: 18,
                    fontFamily: 'Quicksand-Bold',
                  }}
                />
                <Text
                  data={item.text}
                  styles={{
                    fontSize: 17,
                    color: '#454545',
                    fontFamily: 'Quicksand-Light',
                  }}
                />
                <Text
                  data={`Por ${item.author}, Portal de notícias.`}
                  styles={{marginTop: 14, fontSize: 15, color: '#393939'}}
                />
              </Card>
            </Pressable>
          );
        })}
      </Body>
    </Container>
  );
};
export default Home;
