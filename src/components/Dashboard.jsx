import "./Dashboard.css"
const Dashboard = (props) => {
    return (
        <div className="login">
            <div className="addtodo">
                {props.addTodo}
            </div>
            
            <div className="rightpart">
                {props.rightPart}

            </div>
        </div>

    );
}
export default Dashboard;