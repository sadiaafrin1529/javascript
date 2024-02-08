function monthlySavings(payments, livingCost) {
    if (!Array.isArray(payments) || typeof livingCost !== 'number') {
        return "invalid input";
    }
        const totalIncomeAfterTax = payments.reduce((total, current) => {
      if (current >= 3000) {
        return total + current - (current * 0.2);
      } else {
        return total + current;
      }
    }, 0);
    const savings= totalIncomeAfterTax - livingCost;
    return savings >= 0 ? savings : "earn more";
}
console.log(monthlySavings([ 1000 , 2000 , 3000 ] , 5400 ))