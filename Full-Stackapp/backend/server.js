import exoress from "express";

const app = exoress();

app.use(exoress.static("dist"));

const port = process.env.PORT || 3000;

// app.get("/", (req, res) => {
//   res.send("Server is ready now!!!!!");
// });

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A joke",
      content:
        "Why don't scientists trust atoms? Because they make up everything!",
    },
    {
      id: 2,
      title: "Funny Story",
      content:
        "I told my wife she should embrace her mistakes... She gave me a hug.",
    },
    {
      id: 3,
      title: "Pun Time",
      content:
        "I'm reading a book on anti-gravity. It's impossible to put down!",
    },
    {
      id: 4,
      title: "Laugh Out Loud",
      content:
        "Why did the scarecrow win an award? Because he was outstanding in his field!",
    },
    {
      id: 5,
      title: "Light Humor",
      content: "Why was the math book sad? Because it had too many problems.",
    },
    {
      id: 6,
      title: "Joke Hour",
      content:
        "I told my computer I needed a break. Now it won't stop sending me vacation ads.",
    },
    {
      id: 7,
      title: "Comic Relief",
      content:
        "I'm reading a book about anti-gravity. It's impossible to put down!",
    },
    {
      id: 8,
      title: "Hilarious Moment",
      content:
        "I'm reading a book on the history of glue. I just can't seem to put it down.",
    },
    {
      id: 9,
      title: "Jovial Jokes",
      content:
        "Why don't skeletons fight each other? They don't have the guts!",
    },
    {
      id: 10,
      title: "Comedy Time",
      content: "What do you call fake spaghetti? An impasta!",
    },
    {
      id: 11,
      title: "Witty Banter",
      content:
        "Why don't scientists trust atoms? Because they make up everything!",
    },
    {
      id: 12,
      title: "Silly Jokes",
      content:
        "Why don't skeletons fight each other? They don't have the guts!",
    },
    {
      id: 13,
      title: "Comedic Relief",
      content:
        "What did the janitor say when he jumped out of the closet? Supplies!",
    },
    {
      id: 14,
      title: "Funny Ha-Ha",
      content: "Why did the bicycle fall over? It was two-tired!",
    },
    {
      id: 15,
      title: "Amusing Anecdote",
      content: "I used to play piano by ear, but now I use my hands.",
    },
  ];

res.send(jokes)
});



app.listen(port, () => {
  console.log(`Server at https://localhost${port}`);
});
