import { InputDefault } from 'components/common/InputDefault';
import * as Fa from 'react-icons/fa';
import { FaShoppingBag } from 'react-icons/fa';
import {
  Brand,
  Card,
  Container,
  Content,
  ContentInputSearch,
  ContentNavBar,
  Shoping,
  Signin
} from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <Brand>
          <FaShoppingBag /> eSHOP
        </Brand>
        <ContentInputSearch>
          <InputDefault isIconRight placeholder='Search' type='search' />
        </ContentInputSearch>
        <ContentNavBar>
          <Signin>
            <p>Hello Guest</p>
            <strong>Sign In</strong>
          </Signin>
          <Shoping>
            <p>Hello</p>
            <strong>Shop</strong>
          </Shoping>
          <Card>
            <Fa.FaShoppingBasket /> 0
          </Card>
        </ContentNavBar>
      </Content>
    </Container>
  );
}
