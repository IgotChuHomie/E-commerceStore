/**
 * function handler
 * @param {*} event
 * @param {*} context
 * @returns object
 */
// fixing the issue is a must 
exports.handler = async function (event, context) {
  return {
    statusCode: 200,
    body: "hello",
  };
};
