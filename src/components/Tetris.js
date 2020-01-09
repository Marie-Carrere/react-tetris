import React from 'react';
import styled from 'styled-components';
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';
import { createStage } from '../gameHelpers';
import bgImage from '../img/bg.png';

const TetrisWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: url(${bgImage}) #000;
  background-size: cover;
  overflow: hidden;
`
const TetrisContainer = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 40px;
  margin: 0 auto;
  max-width: 900px;
  
  aside {
    width: 100%;
    max-width: 200px;
    display: block;
    padding: 0 20px
  }
`

const Tetris = () => {
  
  return (
    <TetrisWrapper>
      <TetrisContainer>
        <Stage stage={createStage()} />
        <aside>
          <Display text='Score' />
          <Display text='Rows' />
          <Display text='Level' />
        </aside>
        <StartButton />
      </TetrisContainer>
    </TetrisWrapper>
  );
};

export default Tetris;