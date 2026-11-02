import publicUrl from '../../utils/public-url';

const createProject = (service, project, imageCount, location, extension = 'jpeg') => ({
    name: `Proyecto ${project}`,
    location,
    images: Array.from({ length: imageCount }, (_, index) => (
        publicUrl(`/assets/assets/reformas/${service}/${project}/image${index + 1}.${extension}`)
    )),
});

const services = [
    {
        id: 'cocina',
        title: 'Reformas de cocina',
        description: 'Renovamos cocinas para aprovechar mejor el espacio, mejorar su funcionalidad y conseguir una estética cuidada hasta el último detalle.',
        projects: [
            createProject('cocina', 1, 2, 'Olot, 2024'),
            createProject('cocina', 2, 3, 'Besalú, 2026'),
            createProject('cocina', 3, 4, 'Santa Pau, 2025'),
        ],
    },
    {
        id: 'suelos',
        title: 'Suelos y pavimentos',
        description: 'Instalamos y renovamos suelos con precisión, cuidando la nivelación, las juntas y cada encuentro para conseguir un acabado uniforme y duradero.',
        projects: [
            createProject('suelos', 1, 3, 'Les Preses, 2025', 'webp'),
            createProject('suelos', 2, 2, 'La Vall d’en Bas, 2024', 'webp'),
            createProject('suelos', 3, 4, 'Castellfollit de la Roca, 2026'),
            createProject('suelos', 4, 3, 'Sant Joan les Fonts, 2024'),
            createProject('suelos', 5, 4, 'Tortellà, 2025'),
            createProject('suelos', 6, 3, 'Montagut i Oix, 2026'),
        ],
    },
    {
        id: 'banos',
        title: 'Reformas de baños',
        description: 'Transformamos baños para hacerlos más cómodos y actuales, cuidando la distribución, los revestimientos y cada acabado.',
        projects: [
            createProject('baños', 1, 3, 'Mieres, 2026'),
            createProject('baños', 2, 3, 'Sant Feliu de Pallerols, 2025'),
            createProject('baños', 3, 4, 'Argelaguer, 2024'),
        ],
    },
    {
        id: 'puertas',
        title: 'Puertas y carpintería',
        description: 'Instalamos y renovamos puertas con atención a los ajustes, los materiales y los acabados para integrarlas en cada espacio.',
        projects: [
            createProject('puertas', 1, 3, 'Maià de Montcal, 2024'),
            createProject('puertas', 2, 4, 'Riudaura, 2026'),
            createProject('puertas', 3, 4, 'Sant Jaume de Llierca, 2025'),
        ],
    },
    {
        id: 'otros',
        title: 'Otros trabajos',
        description: 'Realizamos reformas y mejoras en distintos espacios, incluidas terrazas, adaptándonos a las necesidades de cada proyecto.',
        projects: [
            createProject('otros', 1, 2, 'Sales de Llierca, 2025'),
            createProject('otros', 2, 4, 'Olot, 2026'),
            createProject('terrazas', 1, 4, 'Santa Pau, 2024'),
        ],
    },
];

export default services;
