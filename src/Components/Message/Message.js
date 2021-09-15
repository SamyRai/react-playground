import message from "./Message.module.css"

const Message = ({text}) => {
    return (
        <div className={message.text}>Hello, {text}</div>
    )
}

export default Message;