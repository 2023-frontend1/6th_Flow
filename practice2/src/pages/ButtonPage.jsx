import { useNavigate } from 'react-router-dom'
import * as Style from '../components'

const ButtonPage = () => {
  const navigate = useNavigate()

  const GoPathVariablePage = () => {
    alert('아 왜요?')
    navigate('/number/12')
  }
  const GoQueryParamPage = () => {
    navigate('/number')
  }
  return (
    <Style.Container>
      <Style.CustomButton onClick={GoPathVariablePage}>
        /number/:number 로 전달
      </Style.CustomButton>
      <Style.CustomButton onClick={GoQueryParamPage}>
        /number?number= 로 전달
      </Style.CustomButton>
    </Style.Container>
  )
}

export default ButtonPage
