import Amount from './Amount';

describe('Instantiate amount', () => {
  test('when amount with decimals and without commas works', () => {
    expect(() => {
      new Amount('5000.00');
    }).toBeTruthy();
  });

  test('when amount with commas throw error', () => {
    expect(() => {
      new Amount('5,000.00');
    }).toThrow();
  });

  test('when amount with commas throw error', () => {
    expect(() => {
      new Amount('5,000.00');
    }).toThrow();
  });

  test('when amount without decimals throw error', () => {
    expect(() => {
      new Amount('5,00000');
    }).toThrow();
  });

  test('when amount with one decimal case throw error', () => {
    expect(() => {
      new Amount('5000.0');
    }).toThrow();
  });

  test('when amount with more than 2 decimals cases throw error', () => {
    expect(() => {
      new Amount('5000.000');
    }).toThrow();
  });

  test('when not currency format throw error', () => {
    expect(() => {
      new Amount('$5,000.00');
    }).toThrow();
  });
});

describe('Transform currency to number in cents ', () => {
  test('when valid amount return amount number in cents', () => {
    const amount = new Amount('5000.00');

    expect(amount.getCents()).toBe(500000);
  });
});
