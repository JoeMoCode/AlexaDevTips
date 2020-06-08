const helper = require("../helper");
const fetch = require("node-fetch");

function getItemByRecordId(base, table, recordId) {
  console.log(`<=== airtable/getItemByRecordId.js ===>`);
  const url = `https://api.airtable.com/v0/${base}/${table}?api_key=${process.env.airtable_api_key}&filterByFormula=AND(FIND(%22${recordId}%22%2C+RecordId)!%3D0)`;
  const options = {
    method: "GET",
  };

  return fetch(url, options)
    .then((res) => res.json())
    .then((r) => {
      const item = r.records[0];
      return item;
    });
}

module.exports = getItemByRecordId;
