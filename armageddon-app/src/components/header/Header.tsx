import {Link} from "react-router-dom";
import styles from "./Header.module.css"
import {getUserKey} from "../utils/getUserKey";
import {memo, useState} from "react";

export const Header = memo(()=>{

    const [inputOpened, setInputOpened] = useState(false)

    return (
      <div className={styles.container}>
        <div>
          <div>
            <h1>ARMAGEDDON V</h1>
          </div>
          <div>
            Сервис мониторинга и уничтожения астероидов, опасно подлетающих к
            земле.
          </div>
        </div>
        <div>
          <Link className={styles.button_type_visual} to={"/asteroids"}>Астероиды</Link>
          <Link className={styles.button_type_visual_destoyment} to={"/destroyment"}>Уничтожение</Link>
        </div>

        <div>
          {getUserKey() === "DEMO_KEY" ? (
            <button className={styles.button_type_visual_un} onClick={()=>setInputOpened(!inputOpened)}>Unauthorized</button>) : (<div>Api key provided</div>
          )}
        </div>
          {inputOpened ? <input onChange={(ev)=>{
            // eslint-disable-next-line @typescript-eslint/no-unused-expressions
            if (ev.target.value.length == 40) {
              localStorage.setItem("API_KEY", ev.target.value);
              setInputOpened(false)
            }
          }}/> : null}
      </div>
    );
})

Header.displayName = "Header";