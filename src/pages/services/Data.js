const createProject = (service, project, imageCount, extension = 'jpeg') => ({
    name: `Proyecto ${project}`,
    images: Array.from({ length: imageCount }, (_, index) => (
        `/assets/assets/reformas/${service}/${project}/image${index + 1}.${extension}`
    )),
});

const services = [
    {
        id: 'cocina',
        title: 'Reformas de cocina',
        description: 'Renovamos cocinas para aprovechar mejor el espacio, mejorar su funcionalidad y conseguir una estética cuidada hasta el último detalle.',
        projects: [
            createProject('cocina', 1, 2),
            createProject('cocina', 2, 3),
            createProject('cocina', 3, 4),
        ],
    },
    {
        id: 'suelos',
        title: 'Suelos y pavimentos',
        description: 'Instalamos y renovamos suelos con precisión, cuidando la nivelación, las juntas y cada encuentro para conseguir un acabado uniforme y duradero.',
        projects: [
            createProject('suelos', 1, 3, 'webp'),
            createProject('suelos', 2, 2, 'webp'),
            createProject('suelos', 3, 4),
            createProject('suelos', 4, 3),
            createProject('suelos', 5, 4),
            createProject('suelos', 6, 3),
        ],
    },
    {
        id: 'banos',
        title: 'Reformas de baños',
        description: 'Transformamos baños para hacerlos más cómodos y actuales, cuidando la distribución, los revestimientos y cada acabado.',
        projects: [
            createProject('baños', 1, 3),
            createProject('baños', 2, 3),
            createProject('baños', 3, 4),
        ],
    },
    {
        id: 'puertas',
        title: 'Puertas y carpintería',
        description: 'Instalamos y renovamos puertas con atención a los ajustes, los materiales y los acabados para integrarlas en cada espacio.',
        projects: [
            createProject('puertas', 1, 3),
            createProject('puertas', 2, 4),
            createProject('puertas', 3, 4),
        ],
    },
    {
        id: 'otros',
        title: 'Otros trabajos',
        description: 'Realizamos reformas y mejoras en distintos espacios, incluidas terrazas, adaptándonos a las necesidades de cada proyecto.',
        projects: [
            createProject('otros', 1, 2),
            createProject('otros', 2, 4),
            createProject('terrazas', 1, 4),
        ],
    },
];

export default services;
