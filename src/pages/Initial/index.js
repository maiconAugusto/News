import React, {useState} from 'react';
import {Container, Form} from './styles';
import Input from '../../components/input';
import Button from '../../components/buttom';
import Text from '../../components/text';

const Initial = ({navigation}) => {
  const [email, setEmail] = useState('admin@.com.br');
  const [password, setPassword] = useState('123456');

  function Login() {
    navigation.reset({index: 0, routes: [{name: 'MainTabs'}]});
  }
  return (
    <Container>
      <Text
        data="Portal de notícias"
        styles={{color: 'white', fontSize: 24, fontFamily: 'Quicksand-Bold'}}
      />
      <Form>
        <Input
          value={email}
          setValue={setEmail}
          numberOfLines={1}
          style={{margin: 10}}
          label="E-mail"
          mode="outlined"
        />
        <Input
          value={password}
          setValue={setPassword}
          numberOfLines={1}
          style={{margin: 10}}
          label="Senha"
          mode="outlined"
          secureTextEntry={true}
        />
        <Button
          onPress={() => Login()}
          data="Acessar"
          color="white"
          style={{backgroundColor: 'green', margin: 10}}
        />
      </Form>
    </Container>
  );
};
export default Initial;
