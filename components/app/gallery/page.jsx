import React from 'react';
import { ClientGallery } from '@/components/ClientGallery';
import { getAllImages } from '../utils/DataBase';
export default async function GalleryPage() {
  const images = await getAllImages();

  return <ClientGallery images={images} />;
}
