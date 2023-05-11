import { useState } from "react";
import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {

    const [num, setNum] = useState(0);

    const onClickButton = () => {
        setNum((prev) => prev + 1);
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
            <p>{ num }</p>
        </>
    );
};
