# Money Handling

A lightweight package for money handling

## Quick Examples:

### V1
```typescript
import Money from 'money-handling';

// Add operation syntax:
const balanceAfterAddition = Money.add('0.00', '3750.00');

// Subtract operation syntax:
const balanceAfterSubtraction = Money.subtract(balanceAfterAddition, '1000.00');

// Percentage operation syntax:
const balanceAfterPercentage = Money.percentage(balanceAfterSubtraction, '10.00%');
```

### V2
```typescript
import {MoneyV2} from 'money-handling';

const money = new MoneyV2('0.00');

// Add operation syntax:
money.add('3750.00');

// Subtract operation syntax:
money.subtract('1000.00');

console.log(money.getAmount());
```

## Changelog

**2.1.0** - MoneyV2 percentage operation

**2.0.1** - Fix get amount with only decimal values in MoneyV2

**2.0.0** - Add class MoneyV2 with operation chaining

**1.1.0** - Add comparation functions

**1.0.0** - Add typescript

**0.2.0** - Fixed float precision

**0.1.2** - Add round flag on operations

**0.1.0** - Remove number rounding

**0.0.7** - Percentage operations

**0.0.5** - Readme

**0.0.3** - Fixed nodeJS module definition

**0.0.1** - First release