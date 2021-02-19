/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {Alert} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Container, View} from './styles';
import Input from '../../components/input';
import Text from '../../components/text';
import Button from '../../components/buttom';

const NewSpaper = ({navigation, route}) => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');
  const [isUpdate, setIsUpdate] = useState(false);
  const data = useSelector((state) => state.news.news);
  const [error, setError] = useState(false);

  useEffect(() => {
    if (route.params !== undefined) {
      setTitle(route.params.title);
      setText(route.params.text);
      setAuthor(route.params.author);
      setIsUpdate(true);
    }
  }, []);

  function addNewSpaper() {
    if (title === '' || text === '' || author === '') {
      setError(true);
      return Alert.alert('', 'Preencha todos os campos!');
    } else {
      const id = Math.floor(Math.random() * 100);
      data.push({title, text, author, id});
      dispatch({type: 'add', payload: data});
      setTitle('');
      setText('');
      setAuthor('');
      setError(false);
      navigation.reset({index: 0, routes: [{name: 'MainTabs'}]});
    }
  }

  return (
    <Container>
      <View>
        <Text
          data={isUpdate ? 'Atualizar notícia' : 'Criar nova notícia'}
          styles={{fontSize: 18, fontFamily: 'Quicksand-Bold'}}
        />
      </View>
      <Input
        value={title}
        setValue={setTitle}
        numberOfLines={1}
        style={{margin: 10}}
        maxLength={100}
        error={error}
        label="Titulo"
        returnKeyType="done"
        autoFocus={true}
      />
      <Input
        value={text}
        setValue={setText}
        label="Digite aqui"
        keyboardType="default"
        returnKeyType="default"
        numberOfLines={4}
        multiline={true}
        error={error}
        style={{height: 200, margin: 10, color: '#2A2A2A'}}
      />
      <Input
        value={author}
        numberOfLines={1}
        setValue={setAuthor}
        style={{margin: 10}}
        maxLength={100}
        error={error}
        label="Autor"
        returnKeyType="done"
      />
      <Button
        data={isUpdate ? 'Atualizar' : 'Publicar'}
        color="white"
        style={{
          backgroundColor: 'green',
          marginTop: 40,
          marginLeft: 10,
          marginRight: 10,
        }}
        onPress={() => addNewSpaper()}
      />
    </Container>
  );
};
export default NewSpaper;
