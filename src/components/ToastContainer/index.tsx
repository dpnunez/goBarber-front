import React from 'react';

import { useTransition } from 'react-spring';
import { Container } from './styles';
import Toast from './Toast';

import { ToastMessage, useToast } from '../../contexts/toast';

interface ContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ContainerProps> = ({ messages }) => {
  const messagesWithAnimation = useTransition(messages, message => message.id, {
    from: { right: '-120%', opacity: 0 },
    enter: { right: '0%', opacity: 1 },
    leave: { right: '-120%', opacity: 1 },
  });
  return (
    <Container>
      {messagesWithAnimation.map(({ item, key, props }) => (
        <Toast key={key} style={props} message={item} />
      ))}
    </Container>
  );
};

export default ToastContainer;
