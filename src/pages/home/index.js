/* eslint-disable react-hooks/rules-of-hooks */
import React, {useState, useEffect} from 'react';
import {Pressable} from 'react-native';
import {useSelector} from 'react-redux';
import {Searchbar} from 'react-native-paper';
import Fuse from 'fuse.js';
import {Container, Header, Body, Card} from './styles';
import Text from '../../components/text';

const options = {
  keys: ['title', 'author', 'text'],
};

const Home = ({navigation}) => {
  const [newSpapers, setNewSpapers] = useState(
    useSelector((state) => state.news.news.reverse()),
  );

  const [newSpapersCopy] = useState(
    useSelector((state) => state.news.news.reverse()),
  );

  function Filter(name) {
    if (name === '') {
      setNewSpapers(newSpapersCopy);
    } else {
      const fuse = new Fuse(newSpapers, options);
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
              key={item.id}
              onPress={() =>
                navigation.navigate('Visualizar notícia', {
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
