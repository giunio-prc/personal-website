import ContactMe from './ContactMe';
import userEvent from '@testing-library/user-event';
import { render, screen } from '@testing-library/react';
import { FakeEmailSender } from '../../adapters/services/fakeEmailSender';
import { UseCaseContext } from '../../useCaseContext';

describe('ContactMe', () => {
  const emailSender = new FakeEmailSender();

  const renderWithContext = (ui: React.ReactNode) => {
    return render(
      <UseCaseContext.Provider value={{ emailSender }}>
        {ui}
      </UseCaseContext.Provider>
    );
  };
  beforeEach(() => {
    vi.useFakeTimers({ shouldAdvanceTime: true });
    renderWithContext(<ContactMe />);
  });
  afterEach(() => {
    vi.clearAllTimers();
    vi.useRealTimers();
  });

  it('when user hover on the accept terms checkbox, it should show the tooltip', async () => {
    const user = userEvent.setup();
    const checkbox = screen.getByRole('checkbox');
    let tooltip = screen.queryByText(/By submitting this form/i);

    expect(tooltip).toBeNull();

    await user.hover(checkbox);
    tooltip = screen.queryByText(/By submitting this form/i);

    expect(tooltip).toBeVisible();

    await user.unhover(checkbox);
    vi.advanceTimersByTime(200);
    tooltip = screen.queryByText(/By submitting this form/i);

    expect(tooltip).not.toBeVisible();
  });
});
