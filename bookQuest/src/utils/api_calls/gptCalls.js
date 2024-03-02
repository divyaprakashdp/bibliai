import { GoogleGenerativeAI } from "@google/generative-ai";

export const generateSummary = async (promptType, book_title, book_author) => {
  console.log(`book - ${book_title}, author - ${book_author}`);
  let promptText = "";
  if (promptType === "summary") {
    promptText = `Imagine you're creating a markdown format shortform-style summary for the book "${book_title}" by "${book_author}". Your task is to craft a concise summary of the key ideas, insights, and actionable takeaways from the book, all while adhering to the style and formatting guidelines of Blinkist. Your HTML summary should be visually appealing, engaging, and informative, providing readers with a clear understanding of the author's message and how they can apply it to their lives. Ensure that the summary reflects the essence of the book while maintaining a balance between brevity and depth, capturing the most important aspects without overwhelming the reader with unnecessary detail.`;
  }
  // Fetch your API_KEY
  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
  console.log(API_KEY);
  // Access your API key (see "Set up your API key" above)
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const result = await model.generateContent(promptText);
  const response = await result.response;
  const text = response.text();
  return text;
};

export const generateSummary2 = (promptType, book_title, book_author) => {
  let prompt = "";
  if (promptType === "summary") {
    prompt = `Imagine you're creating an HTML-formatted Blinkist-style summary for the book "${book_title}" by "${book_author}". Your task is to craft a concise summary of the key ideas, insights, and actionable takeaways from the book, all while adhering to the style and formatting guidelines of Blinkist. Your HTML summary should be visually appealing, engaging, and informative, providing readers with a clear understanding of the author's message and how they can apply it to their lives. Ensure that the summary reflects the essence of the book while maintaining a balance between brevity and depth, capturing the most important aspects without overwhelming the reader with unnecessary detail.`;
  }

  console.log(import.meta.env.VITE_OPENAI_API_KEY);

  try {
    const response = fetch("https://api.openai.com/v1/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: "Say this is a test!" }],
        temperature: 0.7,
      }),
    });

    const data = response.json();
    return data.choices[0].text.trim();
  } catch (error) {
    console.error("Error:", error);
  }
};
