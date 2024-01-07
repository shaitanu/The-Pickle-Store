import PaginationBar from '@/components/PaginationBar';
import ProductCard from '@/components/ProductCard';
import Slider from '@/components/Slider';
import prisma from '@/lib/db/prisma';
import Image from 'next/image';
//it exported on the server

export default async function Home() {
  return (
    <div>
      <Slider />
    </div>
  );
}
