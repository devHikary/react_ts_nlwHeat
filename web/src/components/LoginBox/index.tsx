import style from './Login.module.scss'
import { VscGithubInverted } from 'react-icons/vsc'
import { useEffect } from 'react'
import { api } from '../../services/api'

type AuthResponse = {
  token: string;
  user: {
    id: string;
    avatar_url: string;
    name: string;
    login: string;
  }
}

export function LoginBox() {

  const signInUrl = `https://github.com/login/oauth/authorize?scope=user&client_id=6076d78208f33bd20ec4`

  async function signIn(githubCode: string){
    const response = await api.post<AuthResponse>('authenticate',{
      code: githubCode,
    })
    console.log(response);
    const { token, user } = response.data

    localStorage.setItem('@dowhile:token', token)

    console.log(user)
  }

  useEffect(() =>{
    const url = window.location.href;
    const hasGithubCode = url.includes("?code=");

    if (hasGithubCode){
      const [urlWithoutCode, githubCode] = url.split('?code=');

      window.history.pushState({}, '', urlWithoutCode);

      console.log({ urlWithoutCode, githubCode})
      signIn(githubCode);
    }
  },[])

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