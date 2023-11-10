//src/App.tsx
import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import routes from './common/routes/routes'
import { LanguageProvider } from 'harmony_interactor_kit/src/common/localization/LanguageProvider'
import { ThemeProvider } from 'harmony_interactor_kit/src/common/theme/ThemeProvider'
import { AuthProvider } from './common/auth/AuthProvider'
import  English  from './common/localization/locales/en.json'

const App: React.FC = () => {
  const allLanguages = []
  const english ={languageCode: 'en',
    literals: English }
  allLanguages.push(english)
  return (
    <LanguageProvider currentLanguageCode='en' allLanguages={allLanguages}>
      <ThemeProvider>
        <AuthProvider>
          <Router>
            <Routes>
              {routes.map((route) => (
                <Route
                  key={route.path}
                  path={route.path}
                  element={<route.element />}
                />
              ))}
            </Routes>
          </Router>
        </AuthProvider>
      </ThemeProvider>
    </LanguageProvider>
  )
}

export default App
