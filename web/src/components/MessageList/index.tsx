import style from "./MessageList.module.scss";
import logoImg from "../../assets/logo.svg";

export function MessageList() {
  return (
    <div className={style.messageListWrapper}>
      <img className={style.logo} src={logoImg} alt="DoWhile 2021" />

      <ul className={style.messageList}>
        <li className={style.message}>
          <p className={style.messageContent}>Estou muito animada!!!</p>
          <div className={style.messageUser}>
            <div className={style.userImage}>
              <img
                src="https://github.com//devHikary.png"
                alt="foto de perfil"
              />
            </div>
            <span>Dev Hikary</span>
          </div>
        </li>
      </ul>
    </div>
  );
}
