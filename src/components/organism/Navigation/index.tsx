//react-icons
import { BsFillPieChartFill } from 'react-icons/bs';
import { FaTicketAlt } from 'react-icons/fa';
//types
import { Route } from './types';
//styles
import { Wrapper, List, StyledLink } from './styles';
import { Logo } from 'components/atoms/Logo';

const links: Route[] = [
  {
    path: '/overview',
    title: 'Overview',
    icon: <BsFillPieChartFill />,
  },
  {
    path: '/tickets',
    title: 'Tickets',
    icon: <FaTicketAlt />,
  },
];
export const Navigation = () => {
  return (
    <Wrapper>
      <Logo />
      <List>
        {links.map(({ path, title, icon }) => (
          <StyledLink key={path} to={path}>
            {icon} {title}
          </StyledLink>
        ))}
      </List>
    </Wrapper>
  );
};
