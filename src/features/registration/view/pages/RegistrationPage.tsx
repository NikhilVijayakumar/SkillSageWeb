// src/features/registration/pages/RegistrationPage.tsx
import RegistrationForm from '../components/RegistrationForm'
import useRegistration from 'skill_sage_interactor/src/features/registration/hooks/useRegistration'
import { useLanguage } from 'harmony_interactor_kit/src/common/localization/languageContext'

const RegistrationPage = () => {
  const { literal } = useLanguage()
  const { appstate, handleRegistration, setState } = useRegistration(literal)

  return (
    <>
      <RegistrationForm
        appstate={appstate}
        handleRegistration={handleRegistration}
        setState={setState}
        literal={literal}
      />
    </>
  )
}

export default RegistrationPage
