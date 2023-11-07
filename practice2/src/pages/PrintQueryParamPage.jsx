import { useSearchParams } from 'react-router-dom'
import * as Style from '../components'

const PrintQueryParamPage = () => {
  const [queryParam, setQueryParam] = useSearchParams()
  const changeParam = (number) => {
    queryParam.set('number', number)
    setQueryParam(queryParam)
  }
  return (
    <>
      <h1>?number = {queryParam.get('number')}</h1>
      <Style.Container $direction="row">
        {Array(10)
          .fill(0)
          .map((_, idx) => (
            <Style.CustomButton
              key={idx}
              onClick={() => {
                changeParam(idx + 1)
              }}
            >
              {idx + 1}
            </Style.CustomButton>
          ))}
      </Style.Container>
    </>
  )
}

export default PrintQueryParamPage
