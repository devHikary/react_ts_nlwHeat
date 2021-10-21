import style from './Login.module.scss'
import { VscGithubInverted } from 'react-icons/vsc'

export function LoginBox() {

  return (
    <div className={style.loginBoxWrapper}>
      <strong>Entre e compartilhe sua mensagem</strong>
      <a className={style.signWithGithubButton}>
      <VscGithubInverted size={24} />
        Entrar com Github
      </a>
    </div>
  )
}