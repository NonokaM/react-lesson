export const ColoredMessage = ({color, children}) => {

    // const { color, children } = props;  //分割代入する場合
    //　引数props, props.colorでも可

    const contentStyle = {
        color,
        fontSize: "20px"
    };

    return <p style={contentStyle}>{children}</p>;
};
