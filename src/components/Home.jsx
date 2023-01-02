import { useContext, useState, useRef } from "react";
import { ThemeContext } from "../contexts/ThemeContext";
import styled from "styled-components";

const Home = ({ setUser }) => {
    const { mode, changeTheme } = useContext(ThemeContext);
    const [empty, setEmpty] = useState(false);
    const [notFound, setNotFound] = useState(false);
    const usernameRef = useRef(null);
    const [inputUser] = useState("octocat");

    return (
        <Container>
            <ThemeArea>
            <ChangeThemeBtn type="button" onClick={changeTheme}>
                {
                    (mode === 'dark')
                    ? (<>
                        DARK
                        <img src="/assets/icon-moon.svg" alt="dark mode" />
                        </>)
                    : (<>
                        LIGHT
                        <img src="/assets/icon-sun.svg" alt="light mode" />
                        </>)
                }
                </ChangeThemeBtn>
            </ThemeArea>
        </Container>
    )
}

export default Home;

const Container = styled.header`
  width: 100%;
  max-width: 73.3rem;
`;

const ThemeArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ChangeThemeBtn = styled.button`
  display: flex;
  align-items: center;
  border: none;
  background: none;
  font-weight: bold;
  font-size: 1.6rem;
  line-height: 1.9rem;
  letter-spacing: 0.25rem;
  color: ${(props) => props.theme.colors.themeBtn};
  cursor: pointer;
  img {
    margin-left: 1.6rem;
  }
`;