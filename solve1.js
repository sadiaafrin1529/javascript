
function  calculateMoney( ticket_sold)
{
    if (typeof ticket_sold !== 'number' || ticket_sold < 0) {
        return "Invalid input";
      }
  const  ticket_price=120;
  const   guard_salary=500;
  const   total_staff=8;
  const  staff_lunch_cost=50;
   
const    total_income = ticket_sold * ticket_price
  
    const    total_expense = guard_salary + (staff_lunch_cost * total_staff)
        
      
      const  net_income = total_income - total_expense
        
        return net_income;
}

console.log(calculateMoney(10));
