const { GoogleGenAI } = require("@google/genai");

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

async function genAi(promt) {
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    contents: promt,
  });
  return response.text;
}

module.exports = {genAi}