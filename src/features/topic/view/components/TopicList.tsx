//path src\features\topic\view\components\TopicList.tsx
import { useContext } from 'react'
import {
  TopicList,
  TopicListProps,
  Topic,
} from 'skill_sage_interactor/src/features/topic/repo/data/topicData'
import GenericList from 'harmony_web_kit/src/common/components/list/GenericList'
import Paper from '@mui/material/Paper'
import CircularProgress from '@mui/material/CircularProgress'
import Alert from '@mui/material/Alert'
import { useState, useEffect } from 'react'
import { StateType } from 'harmony_interactor_kit/src/common/state/stateType'
import { useNavigate } from 'react-router-dom'
import { UrlList } from '../../../../common/routes/UrlList'
import FormFooter from 'harmony_web_kit/src/common/components/form/FormFooter'
import { lightTheme, darkTheme } from '../../../../themes/appTheme'
import { ThemeContext } from 'harmony_interactor_kit/src/common/theme/themeContext'

export default function TopicList({ appstate, literal }: TopicListProps) {
  const [renderedContent, setRenderedContent] = useState<JSX.Element | null>(
    null,
  )
  const themeContext = useContext(ThemeContext)
  const navigate = useNavigate()
  const handleItemClick = (item: Topic) => {
    const { name, types } = item
    navigate(`${UrlList.EXAM}/${name}/${types.join(',')}`)
  }

  useEffect(() => {
    let topicList = appstate.data
    if (appstate.state == StateType.LOADING) {
      setRenderedContent(<CircularProgress />)
    } else if (
      appstate.state == StateType.COMPLETED &&
      appstate.isSuccess &&
      (topicList == null || topicList.length == 0)
    ) {
      setRenderedContent(
        <Paper>
          <Alert severity="warning">No List found</Alert>
        </Paper>,
      )
    } else {
      if (appstate.isError) {
        setRenderedContent(
          <Paper>
            <Alert severity="error">{appstate.statusMessage}</Alert>
          </Paper>,
        )
      } else if (
        appstate.isSuccess &&
        appstate.state == StateType.COMPLETED &&
        topicList != null
      ) {
        setRenderedContent(
          <Paper>
            <GenericList
              subheaderText={literal['topic_list']}
              data={topicList}
              onItemClick={handleItemClick}
            />
          </Paper>,
        )
      } else {
        setRenderedContent(
          <Paper>
            <Alert severity="error">Something went wrong</Alert>
          </Paper>,
        )
      }
    }
  }, [
    appstate.state,
    appstate.data,
    appstate.isError,
    appstate.statusMessage,
    appstate.selectedData,
    appstate.event,
  ])

  return (
    <>
      {renderedContent}
      <FormFooter
        themeContext={themeContext}
        lightTheme={lightTheme}
        darkTheme={darkTheme}
      />
    </>
  )
}
