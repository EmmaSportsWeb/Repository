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
    Palette,
    Monitor,
    GraduationCap,
    BookOpen,
    WalletCards,
    Newspaper,
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
    {
        id: 2,
        slug: 'sistema-aula-virtual',

        title: 'Sistema de Aula Virtual',

        shortTitle: 'Aula Virtual',

        type: 'Frontend',

        category: 'Web',

        featured: true,

        status: 'Proyecto en desarrollo',

        description:
            'Plataforma web administrativa para la gestión y visualización de información académica.',

        fullDescription:
            'Sistema web desarrollado como interfaz administrativa para la gestión escolar. La plataforma cuenta con un dashboard general, gestión de estudiantes, cursos y asignaturas, calendario de eventos, módulo financiero, noticias y diferentes secciones orientadas a la administración de un establecimiento educacional. El proyecto está enfocado en ofrecer una interfaz clara, organizada y responsive para facilitar la administración y visualización de información.',

        technologies: [
            'React',
            'JavaScript',
            'Tailwind CSS',
            'Lucide React',
            'Vite',
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
                icon: Palette,
                title: 'UI',
                value: 'Tailwind CSS',
                color: 'cyan',
            },
            {
                icon: Monitor,
                title: 'Build Tool',
                value: 'Vite',
                color: 'purple',
            },
        ],

        features: [
            {
                icon: LayoutDashboard,
                title: 'Dashboard administrativo',
                description:
                    'Panel principal con estadísticas, gráficos, resumen de información y accesos a diferentes módulos.',
            },
            {
                icon: Users,
                title: 'Gestión de estudiantes',
                description:
                    'Interfaz para visualizar y administrar información de los estudiantes del establecimiento.',
            },
            {
                icon: GraduationCap,
                title: 'Gestión académica',
                description:
                    'Secciones destinadas a la organización de cursos, estudiantes y diferentes elementos académicos.',
            },
            {
                icon: BookOpen,
                title: 'Asignaturas y cursos',
                description:
                    'Visualización y organización de cursos y asignaturas mediante interfaces administrativas.',
            },
            {
                icon: CalendarDays,
                title: 'Calendario de eventos',
                description:
                    'Calendario para visualizar y gestionar eventos relevantes del establecimiento.',
            },
            {
                icon: WalletCards,
                title: 'Módulo financiero',
                description:
                    'Interfaz de visualización de información financiera mediante gráficos y tablas.',
            },
            {
                icon: Newspaper,
                title: 'Noticias',
                description:
                    'Sección para crear y visualizar noticias o comunicados dentro de la plataforma.',
            },
            {
                icon: Smartphone,
                title: 'Diseño responsive',
                description: 'Interfaz adaptable a diferentes tamaños de pantalla y dispositivos.',
            },
        ],

        images: Array.from(
            { length: 7 },
            (_, index) => `/images/projects/aula-virtual/img${index + 1}.webp`
        ),

        mobileImages: [],

        github: null,

        demo: null,

        architectureDescription:
            'Frontend desarrollado con React y Tailwind CSS, utilizando componentes reutilizables y una interfaz administrativa orientada a la gestión de información escolar. La aplicación utiliza Vite como herramienta de desarrollo y Lucide React para la iconografía.',
    },
    {
        id: 3,
        slug: 'sistema-ligas-futbol',

        title: 'Sistema de Ligas de Fútbol',

        shortTitle: 'Ligas de Fútbol',

        type: 'Full Stack',

        category: 'Web',

        featured: true,

        status: 'Proyecto en desarrollo',

        description: 'Plataforma web para la gestión completa de ligas de fútbol.',

        fullDescription:
            'Sistema web desarrollado para administrar ligas de fútbol amateur y profesional. Permite crear ligas, gestionar equipos, generar fixtures automáticos, registrar resultados, visualizar tablas de posiciones y generar reportes en PDF. La interfaz es limpia, responsive y orientada a organizadores y delegados de liga.',

        technologies: [
            'React',
            'JavaScript',
            'Tailwind CSS',
            'Laravel',
            'PHP',
            'MySQL',
            'REST API',
            'PDF',
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
                icon: Users,
                title: 'Gestión de ligas y equipos',
                description: 'Creación de ligas, registro de equipos y delegados con sus datos.',
            },
            {
                icon: CalendarDays,
                title: 'Generación de fixture',
                description:
                    'Generación automática de partidos por fecha, con validación de equipos repetidos.',
            },
            {
                icon: LayoutDashboard,
                title: 'Tablas de posiciones',
                description: 'Tabla actualizada con PJ, PG, PE, PP, GF, GC, DG y puntos.',
            },
            {
                icon: BookOpen,
                title: 'Registro de resultados',
                description:
                    'Carga de marcadores por partido y actualización automática de estadísticas.',
            },
            {
                icon: Newspaper,
                title: 'Reportes y PDF',
                description: 'Exportación de fixture, tabla de posiciones y programación en PDF.',
            },
            {
                icon: ShieldCheck,
                title: 'Validaciones',
                description:
                    'Control para evitar fixtures duplicados y alertas al generar nuevo fixture.',
            },
            {
                icon: Smartphone,
                title: 'Diseño responsive',
                description: 'Interfaz adaptable para gestión desde escritorio y móvil.',
            },
        ],

        images: Array.from(
            { length: 15 },
            (_, index) => `/images/projects/ligas-futbol/img${index + 1}.webp`
        ),

        mobileImages: [],

        github: null,

        demo: null,

        architectureDescription:
            'Frontend desarrollado con React y Tailwind CSS, conectado a una API REST en Laravel. Base de datos MySQL para almacenar ligas, equipos, partidos y resultados. Incluye generación de PDF para reportes de liga.',
    },
];

export default projects;
