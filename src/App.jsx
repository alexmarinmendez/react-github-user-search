import ThemeContextProvider from "./contexts/ThemeContext";
import Home from "./components/Home";
import { useState } from 'react';
import styled from "styled-components";

const App = () => {
  const [user, setUser] = useState(null);

  const setUserData = (user) => {
    setUser(user);
  }

  return (
    <ThemeContextProvider>
      <Container>
        <Home setUser={setUserData} />
      </Container>
    </ThemeContextProvider>
  )
}

export default App;

const Container = styled.main`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${props => props.theme.colors.background};
  padding: 3.1rem 2.4rem;
  @media (min-width: 768px) {
    padding: 3.1rem 7rem;
  }
`;
