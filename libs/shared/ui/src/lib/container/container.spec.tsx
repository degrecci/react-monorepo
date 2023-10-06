import Container from './container';
import { render } from '@testing-library/react';

describe('Container', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <Container>
        <h1>Header</h1>
      </Container>
    );
    expect(baseElement).toBeTruthy();
  });
});
