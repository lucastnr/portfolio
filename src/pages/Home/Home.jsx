import React from 'react'
import styled, { css } from 'styled-components'
import Font from '../../components/Font/Font'
import colors from '../../styles/colors'
import me from '../../images/me.png'

const HomePage = styled.div`
  align-items: center;
  display: flex;
  height: calc(100vh - 48px);
  background-color: #393939;
  justify-content: center;
  padding-top: 48px;
`

const LeftContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 600px;
  height: 100%;

  @media (max-width: 1000px) {
    width: 460px;
  }
`

const RightContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  padding: 0 0 0 32px;
`

const WelcomeCss = css`
  font-size: 3.2rem;
  padding-bottom: 40px;
`

const BlocksContainer = styled.div`
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

const ImCss = css`
  margin-bottom: 10px;
`

const BlockColor = styled.div`
  display: flex;
  background-color: ${({ color }) => color};
  padding: 6px;
  margin-bottom: 10px;
`

const Image = styled.img`
  width: 190px;
  margin-bottom: 128px;
`

const Home = () => {
  return (
    <HomePage id='home-page'>
      <LeftContainer>
          <Font css={WelcomeCss}>Bem-vindo</Font>
        <BlocksContainer>
          <Font css={ImCss}>Sou</Font>
          <BlockColor color={colors.yellow}>
            <Font>Web Developer {'&'}</Font>
          </BlockColor>
          <BlockColor color={colors.green}>
            <Font>Cientista da Computação {'&'}</Font>
          </BlockColor>
          <BlockColor color={colors.pink}>
            <Font>Mobile Developer</Font>
          </BlockColor>
        </BlocksContainer>
      </LeftContainer>
      <RightContainer>
        <Image src={me} alt={'Foto de Lucas Tenório'}/>
      </RightContainer>
    </HomePage>
  )
}

export default Home