import { GoogleGenerativeAI } from "@google/generative-ai";

const generateResultFromPrompt = async (promptText) => {
  // Fetch your API_KEY
  const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;
  // Access your API key (see "Set up your API key" above)
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: "gemini-pro" });

  const result = await model.generateContent(promptText);
  const response = result.response;
  console.log("Gemini Response - ", response);
  if (response.text().length > 1) {
    return response.text();
  }
};

const markdownRules = `Create a professional and well-structured Markdown document with the following features:

Title: Use a top-level heading (#) for the document's title.
Subtitle or Description: Include a brief description or subtitle under the title, formatted in italics.
Headings and Subheadings: Use multiple heading levels (##, ###, etc.) to organize the content logically.
Lists:
Include both ordered (1., 2.) and unordered (-, *) lists as needed.
Tables: Incorporate tables with at least three columns.
Code Blocks: Use fenced code blocks for any technical instructions or examples.
Emphasis: Use bold and italic text for emphasis where appropriate.
Horizontal Rules: Use horizontal rules (---) to separate sections when necessary.
Notes or Warnings: Highlight important notes or warnings using custom formatting like >.`

export const generateSummary = async (promptType, book_title, book_author) => {
  console.log(`book - ${book_title}, author - ${book_author}`);

  let promptText = "";
  if (book_title !== undefined) {
    if (promptType === "summary") {
      promptText = `Task: Create an overall summary and chapterwise birds-view for the book "${book_title}" by "${book_author}". The summary should:
          Be detailed and at least 1000 words long.
          Include structured sections like an introduction, key themes, notable characters, and critical analysis. ${markdownRules}`;
    } else if (promptType === "review") {
      promptText = `Summarize the collective sentiment expressed in online reviews for the book "${book_title}" by "${book_author}" and provide a conclusive overview. Additionally, offer a succinct reasons to read and reasons not to read the book. ${markdownRules}`;
    } else if (promptType === "analysis") {
      promptText = `As a distinguished scholar and academician, kindly offer a comprehensive analysis of the book in atleast 1000 words - "${book_title}" by "${book_author}. ${markdownRules}"`;
    }
  }

  return await generateResultFromPrompt(promptText);
};

export const generatedRecommendedBooks = async (topic) => {
  let promptText = `Could you please provide a list of five prominent books on ${topic}? These books should be considered essential readings for anyone interested in gaining a comprehensive understanding of the subject. keep the result in a markdown format with heading as - ## Top five books on ${topic}. ${markdownRules}`;
  console.log(topic, "--> ", promptText);
  return await generateResultFromPrompt(promptText);
};

export const getAvgTimeToRead = async (bookName) => {
  let promptText = `Please provide the average time it takes to read '${bookName}' in hours as available on the internet, and only give the number without any additional explanation or context. if it is not available return 'NA'`;
  return await generateResultFromPrompt(promptText);
};

export const getMoviesNames = async (bookName) => {
  let promptText = `Is there a movie adaptation for the book '${bookName}'? Please provide the names in an array format, like [a, b, c], and only return the names without any additional explanation or context.`;
  return await generateResultFromPrompt(promptText);
};