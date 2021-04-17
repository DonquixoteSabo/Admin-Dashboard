import { fireEvent, screen } from '@testing-library/react';
//helpers
import { renderWithProviders } from 'helpers/renderWithProviders';
//componets
import { Navigation } from 'components/organism/Navigation';
import { MainTemplate } from 'components/templates/MainTemplate';
import { Routes } from 'routes/Routes';

describe('Navigation', () => {
  it('renders navigation', () => {
    renderWithProviders(<Navigation />);
    screen.getByText(/Dashboard/);
  });
  it('property adds and removes active class', () => {
    renderWithProviders(<Navigation />);
    const ticketLink = screen.getByText('Tickets');
    const overviewLink = screen.getByText('Overview');
    fireEvent.click(ticketLink);
    expect(ticketLink).toHaveClass('active');

    fireEvent.click(overviewLink);
    expect(overviewLink).toHaveClass('active');
    expect(ticketLink).not.toHaveClass('active');
  });
  it('redirect user to main page after clicking on logo', () => {
    renderWithProviders(
      <MainTemplate>
        <Routes />
      </MainTemplate>
    );
    fireEvent.click(screen.getByText('Dashboard Kit'));
    screen.getByText('Overview page');
  });
  it('property renders content depending on clicked element', () => {
    renderWithProviders(
      <MainTemplate>
        <Routes />
      </MainTemplate>
    );
    fireEvent.click(screen.getByText('Overview'));
    screen.getByText('Overview page');

    fireEvent.click(screen.getByText('Tickets'));
    screen.getByText('Tickets Page');
  });
});
