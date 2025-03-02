import styled from 'styled-components'
import colors from '../../utils/style/colors'

const ErrorWrapper = styled.div`
  margin: 30px;
  display: flex;
  flex-direction: column;
  background-color: ${colors.background};
  align-items: center;
`

const ErrorTitle = styled.h1`
  font-weight: 300;
`

const ErrorSubtitle = styled.h2`
  font-weight: 300;
  color: ${colors.secondary};
`

const Illustration = styled.img`
  max-width: 400px;
`

function Error() {
  return (
    <ErrorWrapper>
      <ErrorTitle>Oups...</ErrorTitle>
      <Illustration src="https://cdn.sanity.io/images/599r6htc/regionalized/dd4fc49d62e53911409d96f8b1cf11731279b813-2800x2800.png" />
      <ErrorSubtitle>
        Il semblerait que la page que vous cherchez n’existe pas
      </ErrorSubtitle>
    </ErrorWrapper>
  )
}

export default Error