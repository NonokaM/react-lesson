import { useState } from "react";
import { ColoredMessage } from "./components/ColoredMessage";

export const App = () => {
    console.log("レンダリング");

    const [num, setNum] = useState(0);

    const onClickButton = () => {
        setNum((prev) => prev + 1);
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
