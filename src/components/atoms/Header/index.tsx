// styles
import { Wrapper } from './styles';

interface Props {
  children: string;
}

export const Header = ({ children }: Props) => {
  return <Wrapper>{children}</Wrapper>;
};
