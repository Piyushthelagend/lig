
import { MongoClient } from "mongodb";
import React from 'react'
const uri = "mongodb://localhost:27017"
const client = new MongoClient(uri)
try{
// console.log("Connecting to to the data base")
await client.connect()
}
catch(e){
console.log(e)
}
const db = client.db("Levizr")
const Levizr_Hosting = await db.collection("Levizr_Hosting")

export default Levizr_Hosting




  