import "./ListItems.css";
import { MdOutlineDelete, MdCheckCircle, MdSettingsBackupRestore, MdStarRate } from "react-icons/md";
import { setFav, setDel, setComp, setRestore } from "../firebase/service";


const ListItems = (props) => {
    const item = props.item;
    const completedstyle = {
        color: "green"
    }

    const incompletedstyle = {
        textDecoration: "none"
    }

    return (
        <div className="listitems">
            <div className="textpart">
                <h3 style={item.completed ? completedstyle : incompletedstyle}>{item.title}</h3>
                <p>{item.desc}</p>

            </div>
            <div className="icons">
                <MdCheckCircle onClick={() => setComp(item.id, item.completed)} color={item.completed ? "green" : "black"} />
                <MdStarRate onClick={() => setFav(item.id, item.favorite)} color={item.favorite ? "gold" : "black"} />
                {item.deleted && <MdSettingsBackupRestore onClick={() => setRestore(item.id)} />}
                {!item.deleted && <MdOutlineDelete onClick={() => setDel(item.id)} />}
                
                
            </div>
        </div>
    );

}
export default ListItems;