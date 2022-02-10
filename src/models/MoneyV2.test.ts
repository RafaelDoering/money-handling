import MoneyV2 from './MoneyV2';

describe('Instantiate', () => {
  test('when amount with decimals and without commas works', () => {
    expect(() => {
      new MoneyV2('5000.00');
    }).toBeTruthy();
  });

  test('when amount with commas throw error', () => {
    expect(() => {
      new MoneyV2('5,000.00');
    }).toThrow();
  });

  test('when amount with commas throw error', () => {
    expect(() => {
      new MoneyV2('5,000.00');
    }).toThrow();
  });

  test('when amount without decimals throw error', () => {
    expect(() => {
      new MoneyV2('5,00000');
    }).toThrow();
  });

  test('when amount with one decimal case throw error', () => {
    expect(() => {
      new MoneyV2('5000.0');
    }).toThrow();
  });

  test('when amount with more than 2 decimals cases throw error', () => {
    expect(() => {
      new MoneyV2('5000.000');
    }).toThrow();
  });

  test('when not currency format throw error', () => {
    expect(() => {
      new MoneyV2('$5,000.00');
    }).toThrow();
  });
});

describe('Get amount', () => {
  test('when called return amount', () => {
    const amount = new MoneyV2('5000.00');

    expect(amount.getAmount()).toBe('5000.00');
  });
});

describe('Get amount in cents', () => {
  test('when valid amount return amount number in cents', () => {
    const amount = new MoneyV2('5000.00');

    expect(amount.getAmountInCents()).toBe(500000);
  });
});

describe('Add amount', () => {
  test('when valid amount return updated instance', () => {
    const amount = new MoneyV2('10.00');
    const newAmount = amount.add('2.34').getAmount();

    expect(newAmount).toBe('12.34');
  });
});

describe('Subtract amount', () => {
  test('when valid amount return updated instance', () => {
    const amount = new MoneyV2('10.00');
    const newAmount = amount.subtract('0.01').getAmount();

    expect(newAmount).toBe('9.99');
  });
});
