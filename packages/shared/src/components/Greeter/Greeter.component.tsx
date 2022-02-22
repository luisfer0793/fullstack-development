import React, {FC} from 'react';

interface GreeterProps {
  message: string
}

const Greeter: FC<GreeterProps> = ({message}) => {
  return (
    <h1>Hello {message}</h1>
  )
}

export default Greeter;