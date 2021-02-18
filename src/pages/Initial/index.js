import React from 'react';
import {Container, Form} from './styles';
import Input from '../../components/input';
import Button from '../../components/buttom';
import Text from '../../components/text';

const Initial = ({navigation}) => {
  return (
    <Container>
      <Text
        data="Portal de notícias"
        styles={{color: 'white', fontSize: 24, fontFamily: 'Quicksand-Bold'}}
      />
      <Form>
        <Input
          value="admin@.com.br"
          numberOfLines={1}
          style={{margin: 10}}
          label="E-mail"
          mode="outlined"
        />
        <Input
          value="admin@.com.br"
          numberOfLines={1}
          style={{margin: 10}}
          label="Senha"
          mode="outlined"
          secureTextEntry={true}
        />
        <Button
          data="Acessar"
          color="white"
          style={{backgroundColor: '#4529FF', margin: 10}}
        />
      </Form>
    </Container>
  );
};
export default Initial;
