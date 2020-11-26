import React, {
  InputHTMLAttributes,
  forwardRef,
  useState,
  useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ icon: Icon, ...rest }, inputRef) => {
    const [isFilled, setIsFilled] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const handleFocus = useCallback(() => {
      setIsFocused(true);
    }, []);

    const handleBlur = useCallback(event => {
      setIsFocused(false);
      setIsFilled(!!event.target.value);
    }, []);

    return (
      <Container isFocused={isFocused} isFilled={isFilled}>
        {Icon && <Icon size={24} />}
        <input
          type="text"
          {...rest}
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={inputRef}
        />
      </Container>
    );
  },
);

export default Input;
