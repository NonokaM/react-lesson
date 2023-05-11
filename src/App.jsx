import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
    const onClickButton = () => {
        alert();
    };

    const contentPinkStyle = {
        color: "pink",
        fontSize: "20px"
    };

    return (
        <>
            <h1>Hi </h1>
            <ColoredMessage color="blue">お元気ですか？</ColoredMessage>
            <ColoredMessage color="pink">元気です！</ColoredMessage>
            <button onClick={onClickButton}>button </button>
        </>
    );
};
