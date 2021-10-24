import style from './Login.module.scss'
import { VscGithubInverted } from 'react-icons/vsc'
import { useContext, useEffect } from 'react'
import { api } from '../../services/api'
import { AuthContext } from '../../context/auth'



export function LoginBox() {
  const {signInUrl, user} = useContext(AuthContext);
  
  return (
    <div className={style.loginBoxWrapper}>
      <strong>Entre e compartilhe sua mensagem</strong>
      <a href={signInUrl} className={style.signWithGithubButton}>
      <VscGithubInverted size={24} />
        Entrar com Github
      </a>
    </div>
  )
}