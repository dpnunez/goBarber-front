import React, {
  InputHTMLAttributes,
  forwardRef,
  useState,
  useCallback,
} from 'react';
import { IconBaseProps } from 'react-icons';
import { FiAlertCircle } from 'react-icons/fi';
import { Container, Error } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ icon: Icon, error, ...rest }, inputRef) => {
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
      <Container hasError={!!error} isFocused={isFocused} isFilled={isFilled}>
        {Icon && <Icon size={24} />}
        <input
          type="text"
          {...rest}
          onFocus={handleFocus}
          onBlur={handleBlur}
          ref={inputRef}
        />
        {error && (
          <Error title={error}>
            <FiAlertCircle color="#c53030" />
          </Error>
        )}
      </Container>
    );
  },
);

export default Input;
