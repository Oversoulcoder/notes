import mongoose from "mongoose";

const MONGODB_URL = `mongodb+srv://socratesmecaros:mJXOnC3RBjyF2G0j@socdb.js4hiss.mongodb.net/?retryWrites=true&w=majority`;

mongoose.set("strictQuery", false);
mongoose.connect(MONGODB_URL);

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
});

const Note = mongoose.model("Note", noteSchema);

// Saving data to database

// const note1 = new Note({
//   content: "HTML is Easy",
//   important: true,
// });

// note1.save().then(result => {
//     console.log(result);
//     console.log("note saved!");
//     mongoose.connection.close();
// });

// Saving data to database

// const note2 = new Note({
//   content: "CSS is Hard",
//   important: false,
// });

// note2.save().then((result) => {
//   console.log(result);
//   console.log("note saved!");
//   mongoose.connection.close();
// });

 // Fetching data from database

// Note.find({}).then((result)=> {
//     result.forEach((note)=> {
//         console.log(note);
//     });
//     mongoose.connection.close();
// });

// Note.find({ import: true }).then((result)=> {
//     result.forEach((note)=> {
//         console.log(note);
//     });
//     mongoose.connection.close();
//});

// Fetching specific data from database

// Note.findById("657d176cb50a6c1ff6bdb734").then((result)=>{
//     console.log(result);
//     mongoose.connection.close();
// });

// Deleate specific data from database

// Note.findByIdAndDelete("657d176cb50a6c1ff6bdb734").then((result) => {
//   console.log("note has been deleted");
//   mongoose.connection.close();
// });

// Update specific data from database
// const newNote = {
//   content: "Easy lang yung HTML pow",
//   important: true,
// };

//  Note.findByIdAndUpdate("657d130196a70bd5f46718fe", newNote, {new: true}).then(
//   (result)=>{
//    console.log(result);
//    console.log("Mayroong update nah pow!");
//    mongoose.connection.close();
//   });