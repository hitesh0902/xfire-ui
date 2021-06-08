import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../types';
import { changeNumber, changeNumberAsync } from '../slice/ExampleSlice';
import XFButton from '../components/Core/XFButton';
import XFTextField from '../components/Core/XFTextField';
import XFRadioButton from '../components/Core/XFRadioButton';

interface ExampleRouteProps {}

const ExampleRoute: React.FC<ExampleRouteProps> = () => {
  const [name, setName] = useState('No Name');

  const [sport, setSport] = useState('Nothing');

  const dispatch = useDispatch();
  const id = useSelector((state: RootState) => state.example.id);

  const setNameEvent = (event: any) => {
    setName(event.target.value);
  };

  const sportsSelected = (event: any) => {
    setSport(event.target.value);
  };

  return (
    <div>
      <p>Hello</p>
      <p>My name is {name}</p>
      <p>My Fav sport is {sport}</p>
      <p>Current ID = {id}</p>
      <XFButton
        variant='primary'
        onClick={() => dispatch(changeNumber(id + 1))}
      >
        Add
      </XFButton>
      <XFButton
        variant='secondary'
        onClick={() => dispatch(changeNumber(id - 1))}
      >
        Subtract
      </XFButton>
      <XFButton
        variant='primary'
        onClick={() => dispatch(changeNumberAsync(id + 1))}
      >
        Add
      </XFButton>
      <XFButton
        variant='secondary'
        onClick={() => dispatch(changeNumberAsync(id - 1))}
      >
        Subtract
      </XFButton>
      <XFTextField
        label='name'
        placeHolder='Enter your name'
        onChange={setNameEvent}
      />
      <XFRadioButton
        groupName='sports'
        values={['football', 'basketball', 'cricket', 'volleyball']}
        onChange={sportsSelected}
      />
    </div>
  );
};

export default ExampleRoute;