/**
 * function handler
 * @param {*} event
 * @param {*} context
 * @returns object
 */
exports.handler = async function (event, context) {
  if (event.body) {
    const { cart, shipping_fee, total_amount } = JSON.parse(event.body);
    console.log(cart);
    return {
      statusCode: 200,
      body: JSON.stringify(cart),
    };
  } else {
    return {
      statusCode: 200,
      body: "please create payement",
    };
  }
};
