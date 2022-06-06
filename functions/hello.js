/**
 * function handler
 * @param {*} event
 * @param {*} context
 * @returns object
 */
exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: "hello",
  };
};
