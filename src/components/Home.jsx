import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

const Home = () => {
    const { mode, changeTheme } = useContext(ThemeContext);
    const [empty, setEmpty] = useState(false);
    const [notFound, setNotFound] = useState(false);
    const usernameRef = useRef(null);
    const [inputUser] = useState("octocat");

    return (
        <div>
            <button onClick={changeTheme}>
                {
                    mode
                }
            </button>
        </div>
    )
}

export default Home;

const Container = styled.header`
  width: 100%;
  max-width: 73.3rem;
`;