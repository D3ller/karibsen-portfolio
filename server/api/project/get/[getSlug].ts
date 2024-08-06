import {PrismaClient} from '@prisma/client';

const prisma = new PrismaClient();

export default eventHandler(async (event) => {

    const {slug}: string = await readBody(event);
    if (!slug) {
        throw createError({status: 400, message: 'No slug provided'});
    }

    let project: Object = prisma.project.findUnique({
        where: {
            slug: slug
        },
        select: {
            title: true,
            desc: true,
            url: true,
            devLanguages: {
                select: {
                    devLanguage: {
                        select: {
                            icon: true,
                            name: true
                        }
                    }
                }
            },
            ProjectImage: {
                select: {
                    url: true,
                },
                orderBy: {
                    id: 'asc'
                }
            }
        }
    });

    if (!project) {
        throw createError({status: 404, message: 'Project not found'});
    }

    return project;

})