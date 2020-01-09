import React, { useState } from 'react';
import styled from 'styled-components';
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';
import bgImage from '../img/bg.png';
import { usePlayer } from '../hooks/usePlayer';
import { useStage } from '../hooks/useStage';


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
  const [dropTime, setDropTime] = useState(null);
  const [gameOver, setGameOver] = useState(false);
  
  const [player] = usePlayer();
  const [stage, setStage] = useStage(player)
  
  return (
    <TetrisWrapper>
      <TetrisContainer>
        <Stage stage={stage} />
        <aside>
          {gameOver ? (
            <Display gameOver={gameOver} text='Game Over' />
          ) : (
            <div>
              <Display text='Score' />
              <Display text='Rows' />
              <Display text='Level' />
            </div>
          )}
        </aside>
        <StartButton />
      </TetrisContainer>
    </TetrisWrapper>
  );
};

export default Tetris;