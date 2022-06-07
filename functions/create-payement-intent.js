/**
 * function handler
 * @param {*} event
 * @param {*} context
 * @returns object
 */
exports.handler = async function (event, context) {
  if (event.body) {
    console.log(cart);
    const { cart, shipping_fee, total_amount } = JSON.parse(event.body);
    return {
      statusCode: 200,
      body: "hello",
    };
  } else {
    return {
      statusCode: 200,
      body: "please craete payement",
    };
  }
};
