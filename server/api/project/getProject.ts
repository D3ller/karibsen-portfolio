import prisma from "~/lib/prisma";


export default eventHandler(async (event) => {
    try {
        const projects : {id: number, title: string, desc: string, url: string, slug:string}[] = await prisma.project.findMany();
        return projects;
    } catch (error) {
    }
});
