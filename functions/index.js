const {onRequest} = require("firebase-functions/v2/https");
const admin = require("firebase-admin");
const cors = require("cors")({origin: true});

admin.initializeApp();

exports.countBooks = onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const booksCollection = admin.firestore().collection("books");
      const snapshot = await booksCollection.get();
      const count = snapshot.size;
      res.status(200).send({count});
    } catch (error) {
      console.error("Error counting books:", error.message);
      res.status(500).send("Error counting books");
    }
  });
});

exports.addBook = onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const {isbn, name} = req.body;

      const newBook = {
        isbn: isbn,
        name: name,
      };

      const bookCollection = admin.firestore().collection("books");
      await bookCollection.add(newBook);

      res.status(200).send({message: "Book added successfully!"});
    } catch (error) {
      console.error("Error adding book:", error.message);
      res.status(500).send("Error adding book");
    }
  });
});

exports.getJsonBooks = onRequest((req, res) => {
  cors(req, res, async () => {
    try {
      const booksCollection = admin.firestore().collection("books");
      const snapshot = await booksCollection.get();
      const books = snapshot.docs.map((doc) => ({
        ...doc.data(),
      }));
      res.status(200).json(books);
    } catch (error) {
      console.error("Error fetching books:", error.message);
      res.status(500).send("Error fetching books");
    }
  });
});
