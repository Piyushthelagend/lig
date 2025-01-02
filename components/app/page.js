import React from 'react';
import Hero from '@/components/ImageGenUi';
import SampleImages from '@/components/SampleImages';
import { getAllImages } from './utils/DataBase';
import getSession from './utils/session';


export default async function App() {
  const images = await getAllImages(); // Fetch images from database
  
  // Transform the data into plain JSON objects
  const transformedData = images.map((item) => ({
    ...item,
    _id: item._id.toString(), // Convert ObjectId to string
    timestamp: item.timestamp.toISOString(), // Convert Date to ISO string
  }));

  return (
    <div>
      <Hero />
      <SampleImages sampleImageUrls={transformedData} />
    </div>
  );
}
