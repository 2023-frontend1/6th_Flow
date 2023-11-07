import { useNavigate, useParams } from 'react-router-dom'
import * as Style from '../components'

const PrintNumberPage = () => {
  const { number } = useParams()
  const navigate = useNavigate()
  const changeVariable = (number) => {
    navigate(`/number/${number}`)
  }
  return (
    <>
      <h1>/number/{number}</h1>
      <Style.Container $direction="row">
        {Array(10)
          .fill(0)
          .map((_, idx) => (
            <Style.CustomButton
              key={idx}
              onClick={() => {
                changeVariable(idx + 1)
              }}
            >
              {idx + 1}
            </Style.CustomButton>
          ))}
      </Style.Container>
    </>
  )
}

export default PrintNumberPage
