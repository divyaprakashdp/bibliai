import { GoogleGenerativeAI } from "@google/generative-ai";

const generateResultFromPrompt = async (promptText) => {
  // Fetch your API_KEY
  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
  console.log(API_KEY);
  // Access your API key (see "Set up your API key" above)
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const result = await model.generateContent(promptText);
  const response = await result.response;
  return response.text();
};

export const generateSummary = async (promptType, book_title, book_author) => {
  console.log(`book - ${book_title}, author - ${book_author}`);
  let promptText = "";
  if (promptType === "summary") {
    promptText = `Imagine you're creating a markdown format summary for the book "${book_title}" by "${book_author}". Your task is to craft a concise 2000 words summary of the key ideas, insights, and actionable takeaways from the book, all while adhering to the style and formatting guidelines of Blinkist. Your HTML summary should be visually appealing, engaging, and informative, providing readers with a clear understanding of the author's message and how they can apply it to their lives. Ensure that the summary reflects the essence of the book while maintaining a balance between brevity and depth, capturing the most important aspects without overwhelming the reader with unnecessary detail.`;
  } else if (promptType === "review") {
    promptText = `Summarize the collective sentiment expressed in online reviews for the book "${book_title}" by "${book_author}" and provide a conclusive overview. Additionally, offer a succinct TL;DR outlining reasons to read and reasons not to read the book.`;
  } else if (promptType === "analysis") {
    promptText = `As a distinguished scholar and academician, kindly offer a comprehensive analysis of the book "${book_title}" by "${book_author}"`;
  }

  return await generateResultFromPrompt(promptText);
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

export const generatedRecommendedBooks = async (topic) => {
  if (topic !== undefined || topic !== null) {
    let promptText = `Could you please provide a list of five prominent books on ${topic}? These books should be considered essential readings for anyone interested in gaining a comprehensive understanding of the subject. keep the result in a markdown format`;
    console.log(topic, "--> ", await generateResultFromPrompt(promptText));
    return await generateResultFromPrompt(promptText);
  } else {
    return "Facing some issue";
  }
};
