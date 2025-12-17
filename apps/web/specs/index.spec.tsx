import { render, screen } from '@testing-library/react';

import Page from '../app/page';

// Mock the foo-dal module
jest.mock('@org/foo-dal', () => ({
  fooList: jest.fn().mockResolvedValue([{ id: 1, name: 'Test Item' }]),
}));

describe('Page', () => {
  it('should render successfully', async () => {
    render(await Page());
    expect(await screen.findByText('Counter')).toBeDefined();
  });
});
