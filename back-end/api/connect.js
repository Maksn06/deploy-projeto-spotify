// JavaScript Assincrono
// await async
// Fullfilled
import { MongoClient } from "mongodb";

const URI = 
"mongodb+srv://Sigurd06:Sigurd06@cluster0.pwfe6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

const client = new MongoClient(URI)

export const db = client.db("spotifyAula")
//  const songCollection = await db.collection("songs").find({}).toArray()

//  console.log(songCollection)