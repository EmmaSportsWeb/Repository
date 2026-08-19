import {
    CalendarDays,
    ShieldCheck,
    Clock3,
    Users,
    Code2,
    Database,
    Server,
    LayoutDashboard,
    UserRound,
    Smartphone,
    Globe,
} from 'lucide-react';

const projects = [
    {
        id: 1,
        slug: 'reserva-canchas',

        title: 'Reserva de Canchas',

        shortTitle: 'Reserva de Canchas',

        type: 'Full Stack',

        category: 'Web',

        featured: true,

        status: 'Proyecto desarrollado y funcional',

        description:
            'Aplicación web Full Stack para la gestión y reserva de canchas deportivas de pádel y futbolito.',

        fullDescription:
            'Sistema web desarrollado para gestionar canchas deportivas y permitir a los usuarios realizar reservas de horarios. La plataforma incorpora autenticación, roles, gestión de usuarios, administración de canchas y control de disponibilidad.',

        technologies: [
            'React',
            'JavaScript',
            'Tailwind CSS',
            'Laravel',
            'PHP',
            'MySQL',
            'REST API',
            'Git',
            'GitHub',
        ],

        architecture: [
            {
                icon: Code2,
                title: 'Frontend',
                value: 'React',
                color: 'blue',
            },
            {
                icon: Server,
                title: 'Backend',
                value: 'Laravel',
                color: 'purple',
            },
            {
                icon: Database,
                title: 'Database',
                value: 'MySQL',
                color: 'cyan',
            },
        ],

        features: [
            {
                icon: ShieldCheck,
                title: 'Autenticación y roles',
                description: 'Acceso diferenciado para usuarios y administradores.',
            },
            {
                icon: CalendarDays,
                title: 'Sistema de reservas',
                description: 'Reserva de canchas seleccionando fecha y horario.',
            },
            {
                icon: Clock3,
                title: 'Disponibilidad',
                description: 'Control de horarios disponibles y ocupados.',
            },
            {
                icon: Users,
                title: 'Gestión de usuarios',
                description: 'Administración de usuarios y perfiles.',
            },
        ],

        images: Array.from(
            { length: 10 },
            (_, index) => `/images/projects/reserva-canchas/img${index + 1}.webp`
        ),

        mobileImages: [],

        github: 'https://github.com/EmmaSportsWeb/Reserva-App',

        demo: null,

        architectureDescription:
            'Frontend desarrollado con React y Tailwind CSS, conectado a una API REST desarrollada con Laravel y una base de datos MySQL.',
    },
];

export default projects;
