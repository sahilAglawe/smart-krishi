const { genAi } = require("../utils/gemini.js");

exports.geminiResult = async (req, res) => {
  try {
    const { prompt } = req.query;

    const result = await genAi(prompt);
    return res.send(result);
  } catch (err) {
    return res.send("err" + err.message);
  }
};

