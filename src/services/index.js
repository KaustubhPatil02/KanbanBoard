// for update delete of list

import prisma from "@/lib/Prisma-Client/db";
import { auth } from "@clerk/nextjs/dist/types/server"
import { revalidatePath } from "next/cache";

export const  createList = async (data) => {
    const {userId} = auth();

    if(!userId) {
        return {
            error: "User not found"
        }
    }

    const {title} = data;
    let list;

    try {
        const lastListIndex = await prisma.list.findFirst({
            orderBy: {
                order: "desc"
            },
            select:{order: true},
        })
        const newOrder  = lastListIndex ? lastListIndex?.order +1 : 1;

        list = await prisma.list.create({
            data: {
                title,
                order: newOrder,
                // userId
            },
        })
    } catch (error) {
        return {
            error: "List not created",
        };
    }

    revalidatePath("/")
    return {
        data: list,
    }
    // return list as data obj
}


export const  UpdateList = async (data) => {

}


export const DeleteList = async (data) => {


}