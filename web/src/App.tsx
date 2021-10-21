import style from './App.module.scss'
import { LoginBox } from './components/LoginBox'
import { MessageList } from './components/MessageList'

export function App() {

  return (
    <main className="contentWrapper">
      <MessageList />
      <LoginBox />
    </main>
  )
}

