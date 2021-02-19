/* eslint-disable react-hooks/exhaustive-deps */
import React, {useState, useEffect} from 'react';
import {Container, View} from './styles';
import Input from '../../components/input';
import Text from '../../components/text';
import Button from '../../components/buttom';

const NewSpaper = ({navigation, route}) => {
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [author, setAuthor] = useState('');
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    if (route.params !== undefined) {
      setTitle(route.params.title);
      setText(route.params.text);
      setAuthor(route.params.author);
      setIsUpdate(true);
    }
  }, []);

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
        style={{height: 200, margin: 10, color: '#2A2A2A'}}
      />
      <Input
        value={author}
        setAuthor={setAuthor}
        numberOfLines={1}
        style={{margin: 10}}
        maxLength={100}
        label="Autor"
        returnKeyType="done"
        autoFocus={true}
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
      />
    </Container>
  );
};
export default NewSpaper;
