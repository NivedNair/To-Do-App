import "./MainContainer.css"
const MainContainer = (props) => {
    return (

        <div className="login">
            <div className="addtodo">
                {props.addTodo}
            </div>
            <div className="vl"></div>
            <div className="rightpart">
                {props.rightPart}
            </div>
        </div>
    );
}
export default MainContainer;