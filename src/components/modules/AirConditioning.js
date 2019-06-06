import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFan,
  faMinus,
  faPlus,
  faPowerOff,
} from '@fortawesome/free-solid-svg-icons';
import Card from './Card';
import styled from 'styled-components';

const AirConditioningModule = () => {
  const [powerState, setPowerState] = React.useState(false);
  const [temperature, setTemperature] = React.useState(20);

  const decreaseTemperature = () => setTemperature(temperature - 1);
  const increaseTemperature = () => setTemperature(temperature + 1);
  const switchPowerState = () => setPowerState(!powerState);

  return (
    <Card
      width={'45%'}
      color={4}
      title={'Ar-condicionado'}
      description=""
      scale=""
      sensorId=""
      sensorValue=""
      icon={faFan}
    >
      <StyledWrapper>
        <StyledPowerButton powerState={powerState} onClick={switchPowerState}>
          <FontAwesomeIcon icon={faPowerOff} />
        </StyledPowerButton>

        <div className="rangeButton">
          <FontAwesomeIcon icon={faMinus} onClick={decreaseTemperature} />
          <span>{temperature}ºC</span>
          <FontAwesomeIcon icon={faPlus} onClick={increaseTemperature} />
        </div>
      </StyledWrapper>
    </Card>
  );
};

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .rangeButton {
    background-color: rgba(255, 255, 255, 0.2);
    border-radius: 0.2em;
    padding: 0.5em 1em;
    display: flex;

    svg {
      color: white;
      font-size: 2.5em;
      padding: 6px;
      cursor: pointer;
    }

    span {
      color: white;
      font-size: 1.5em;
      padding: 0 0.5em;
    }
  }
`;

const StyledPowerButton = styled.div`
  color: ${props => (props.powerState ? '#00e38c' : '#e64356')};
  font-size: 3em;
  padding-bottom: 18px;
  cursor: pointer;
  transition: all 0.3s ease;
`;

export default AirConditioningModule;
