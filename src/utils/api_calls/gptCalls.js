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
  if (book_title !== undefined) {
    if (promptType === "summary") {
      promptText = `Imagine you're creating a markdown format summary for the book "${book_title}" by "${book_author}". Your task is to craft a concise summary of the book in atleast 1000 words.`;
    } else if (promptType === "review") {
      promptText = `Summarize the collective sentiment expressed in online reviews for the book "${book_title}" by "${book_author}" and provide a conclusive overview. Additionally, offer a succinct reasons to read and reasons not to read the book.`;
    } else if (promptType === "analysis") {
      promptText = `As a distinguished scholar and academician, kindly offer a comprehensive analysis of the book in atleast 1000 words - "${book_title}" by "${book_author}"`;
    }
  }

  return await generateResultFromPrompt(promptText);
};

export const generatedRecommendedBooks = async (topic) => {
  let promptText = `Could you please provide a list of five prominent books on ${topic}? These books should be considered essential readings for anyone interested in gaining a comprehensive understanding of the subject. keep the result in a markdown format with heading as - ## Top five books on ${topic}`;
  console.log(topic, "--> ", promptText);
  return await generateResultFromPrompt(promptText);
};
