export const fetchOpenAi = (prompt) => {
  const data = {
    prompt: prompt,
    temperature: 0.5,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
   };
   

  return fetch('https://api.openai.com/v1/engines/text-curie-001/completions', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_SECRET}`,
    },
    body: JSON.stringify(data),
  }).then(response => {
    if(!response.ok) {
      throw new Error();
    } else {
      return response.json()
    }
  })
}