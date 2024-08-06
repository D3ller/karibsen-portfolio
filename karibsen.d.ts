interface project {
    id: number;
    title: string;
    desc: string;
    url: string;
    slug: string;
    devLanguages: devLanguage[];
    ProjectImage: projectImage[];
}

interface devLanguage {
    id: number;
    icon: string;
    name: string;
}

interface projectImage {
    id: number;
    url: string;
}