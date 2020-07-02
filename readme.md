# Money Handling

A lightweight package for money handling

## Quick Examples:

```javascript
// Add operation syntax:
const balanceAfterAddition = Money.add('0.00', '3750.00');

// Subtract operation syntax:
const balanceAfterSubtraction = Money.subtract(balanceAfterAddition, '1000.00');

// Percentage operation syntax:
const balanceAfterPercentage = Money.subtract(balanceAfterSubtraction, '10.00%');
```

## Changelog

**0.2.0** - Fixed float precision

**0.1.2** - Add round flag on operations

**0.1.0** - Remove number rounding

**0.0.7** - Percentage operations

**0.0.5** - Readme

**0.0.3** - Fixed nodeJS module definition

**0.0.1** - First release