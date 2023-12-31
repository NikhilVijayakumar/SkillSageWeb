//src/features/login/pages/LoginPage.tsx
import LoginForm from '../components/LoginForm'
import useLogin from 'skill_sage_interactor/src/features/login/hooks/useLogin'
import { useLanguage } from 'harmony_interactor_kit/src/common/localization/languageContext'
import { useAuth } from '../../../../common/auth/authContext'

const LoginPage = () => {
  const { literal } = useLanguage()
  const { appstate, handleLogin, setState } = useLogin(literal)
  const { setUser } = useAuth()
  return (
    <LoginForm
      appstate={appstate}
      handleLogin={handleLogin}
      literal={literal}
      setState={setState}
      setUser={setUser}
    />
  )
}

export default LoginPage
