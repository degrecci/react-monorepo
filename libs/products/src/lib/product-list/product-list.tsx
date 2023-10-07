import { Container } from '@react-monorepo/shared-ui';

/* eslint-disable-next-line */
export interface ProductListProps {}

export function ProductList(props: ProductListProps) {
  return (
    <Container>
      <h1>Welcome to ProductList!</h1>
      <p>This is a change. 👋</p>
    </Container>
  );
}

export default ProductList;
