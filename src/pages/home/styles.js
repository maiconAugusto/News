import styled from 'styled-components/native';

export const Container = styled.View`
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: white;
`;
export const Header = styled.View`
  flex: 1;
`;
export const Body = styled.ScrollView`
  flex: 7;
  height: 80%;
`;

export const Card = styled.View.attrs({
  shadowColor: '#434343',
  shadowOffset: {
    width: 0,
    height: 3,
  },
  shadowOpacity: 0.29,
  shadowRadius: 4.65,

  elevation: 1,
})`
  display: flex;
  margin: 10px;
  padding: 10px;
  min-height: 50px;
  background-color: white;
  border-radius: 4px;
`;
