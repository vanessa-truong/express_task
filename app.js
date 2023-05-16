import express from "express";

// import fetch from "node-fetch";

const app = express();
const port = 3000;

app.get("/status", (req, res) => {
    res.status(200).send("OK");
})

app.listen(port, () => {
    console.log("Example app listening on port {port}");
})


// LVL 2

app.get("/posts", (req, res) => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(response => response.json())
        .then(posts => {
            res.json(posts);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({ error: "Fehler beim laden der Seite" })
        });
});


// LVL 3


// app.get("posts/:id", (req, res) => {
//     const postId = req.params.id;
//     fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
//         .then(response => response.json())
//         .then(post => {
//             res.json(post);
//         })
//         .catch(error => {
//             console.log(error);
//             res.status(500).json({ error: "Fehler beim laden des Posts" })
//         });
// });

// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);
// });

// ---------> Keine Daten im Browser ausgespuckt bekommen - Skip



//LVL 4

