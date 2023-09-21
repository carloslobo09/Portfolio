import React, { useState } from 'react';
import styled from 'styled-components';
import { Button } from 'react-bootstrap';
import { Howl } from 'howler';
import crashSound from './sounds/crash.wav';

import CrashBoard from './CrashBoard';
import CrashControls from './CrashControls';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const crash = new Howl({
    src: [crashSound],
});

function CrashGame() {
    const [gameState, setGameState] = useState({
        multiplier: 1,
        cashedOut: false,
        betAmount: 0,
        roundInProgress: false,
        roundResult: null,
    });

    const handleBetAmountChange = (event) => {
        setGameState((prevState) => ({
            ...prevState,
            betAmount: parseFloat(event.target.value),
        }));
    };

    const handleMultiplierChange = (multiplier) => {
        setGameState((prevState) => ({
            ...prevState,
            multiplier,
        }));
    };

    const handleCashOut = () => {
        setGameState((prevState) => ({
            ...prevState,
            cashedOut: true,
        }));
    };

    const handleRoundStart = () => {
        setGameState((prevState) => ({
            ...prevState,
            roundInProgress: true,
        }))
    }
}