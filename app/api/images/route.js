import { getAllImages } from '../../utils/DataBase';

export async function GET() {
  const Images = await getAllImages();
  return Response.json(Images)
}