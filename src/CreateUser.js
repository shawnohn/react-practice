import React, { useContext, useRef } from 'react';
import useInputs from './hooks/useInputs';
import { UserDispatch } from './App';

const CreateUser = () => {
  const [{ username, email }, onChange, reset] = useInputs({
    username: '',
    email: '',
  });
  const nextID = useRef(4);
  const dispatch = useContext(UserDispatch);
  const onCreate = () => {
    dispatch({
      type: 'CREATE_USER',
      user: {
        id: nextID.current,
        username,
        email,
      },
    });
    reset();
    nextID.current += 1;
  };
  return (
    <div>
      <input name="username" placeholder="Name" onChange={onChange} value={username} />
      <input name="email" placeholder="Email" onChange={onChange} value={email} />
      <button onClick={onCreate}>Register</button>
    </div>
  );
};

export default React.memo(CreateUser);
