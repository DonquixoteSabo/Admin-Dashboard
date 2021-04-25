import { fireEvent, screen, waitFor } from '@testing-library/react';
import { setupServer } from 'msw/node';
//helpers
import { renderWithProviders } from 'helpers/renderWithProviders';
//components
import { TasksList } from './index';
import { handlers } from 'mocks/handlers';

const server = setupServer(...handlers);

describe('Tasks List', () => {
  beforeAll(() => server.listen());
  afterEach(() => server.resetHandlers());
  afterAll(() => server.close());

  it('renders TasksList', async () => {
    renderWithProviders(<TasksList />);
    expect(await screen.findByText('Finish ticket update')).toBeInTheDocument();
  });
});
