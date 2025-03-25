import {Link} from "react-router-dom";
import styles from "./Header.module.css"

export const Header = ()=>{
    return <div className={styles.container}>
        <div>
            <div>
                <h1>ARMAGEDDON V</h1>
            </div>
            <div>Сервис мониторинга и уничтожения астероидов, опасно подлетающих к земле.</div>
        </div>
        <div>
            <Link to={"/asteroids"}>Астероиды</Link>
            <Link to={"/destroyment"}>Уничтожение</Link>
        </div>
    </div>
}