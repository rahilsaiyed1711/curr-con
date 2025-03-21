import Freecurrencyapi from '@everapi/freecurrencyapi-js';
const freecurrencyapi = new Freecurrencyapi(
  'fca_live_NMtwOMyv8QPxWxf7XmJwOeuROoPGoxHHXCj0aZt7'
);

console.log(convertCurrency("USD", "INR", 1))
export async function convertCurrency(from, to, units) {
  const res = await freecurrencyapi
    .latest({
      base_currency: from,
      currencies: to,
    })
    const mul = res.data[to];
    return mul * units;    
}
