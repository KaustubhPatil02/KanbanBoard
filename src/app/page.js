import ListContainers from "@/components/Lists/ListContainers";
import prisma from "@/lib/Prisma-Client/db";
// import Image from "next/image";

export default async function Home() {

  const lists = await prisma.list.findMany({
    include:{
      cards:{
        orderBy:{
          order:'asc'
        }
      }
    },
    orderBy:{
      order:'asc'
    }
  })
  return (
    <div className="px-30 py-28 mt-15 h-screen overflow-x-auto" style={{ backgroundColor: '#020617' }}>
      <ListContainers lists={lists}/>

    </div>
  );
}