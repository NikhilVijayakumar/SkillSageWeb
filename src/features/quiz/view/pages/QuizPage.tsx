//path src\features\quiz\view\pages\QuizPage.tsx

import QuizView from '../components/QuizView'
import useQuiz from 'skill_sage_interactor/src/features/quiz/hooks/useQuiz'
import { useLanguage } from 'harmony_interactor_kit/src/common/localization/languageContext'
import { useAuth } from '../../../../common/auth/authContext'
import { UrlList } from '../../../../common/routes/UrlList'
import { useNavigate } from 'react-router-dom'

const QuizPage: React.FC = () => {
  const { literal } = useLanguage()
  const {
    appstate,
    fetchQuiz,
    handleRadioChange,
    handleRestart,
    handleSubmit,
  } = useQuiz(literal)
  const { user } = useAuth()
  const navigate = useNavigate()
  if (user === null || user === undefined) {
    console.log('unauthorized token is null')
    navigate(UrlList.LOGIN)
  }
  return (
    <div>
      <QuizView
        appstate={appstate}
        literal={literal}
        fetchQuiz={fetchQuiz}
        handleRadioChange={handleRadioChange}
        handleRestart={handleRestart}
        handleSubmit={handleSubmit}
      />
    </div>
  )
}

export default QuizPage
