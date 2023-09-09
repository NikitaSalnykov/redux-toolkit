import { Container, Header, SearchForm, Section, Text } from 'components';
import { Grid } from 'components/Grid/Grid';
import { useSelector } from 'react-redux';
import { getTodos } from 'redux/selectors';

export const App = () => {
  const todos = useSelector(getTodos);

  return (
    <>
      <Header />
      <Section>
        <Container>
          <SearchForm />

          {todos.length === 0 && (
            <Text textAlign="center">There are no any todos ... </Text>
          )}

          <Grid />
        </Container>
      </Section>
    </>
  );
};
