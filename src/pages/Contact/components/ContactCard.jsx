import React from 'react';
import { Mail, Phone, MapPin, MessageCircle, BriefcaseBusiness } from 'lucide-react';

export default function ContactCard() {
    const contactItems = [
        {
            label: 'Correo electrónico',
            value: 'e.esteban.eb@gmail.com',
            icon: Mail,
            color: 'blue',
        },
        {
            label: 'Teléfono',
            value: '+56 9 6442 2478',
            icon: Phone,
            color: 'cyan',
        },
        {
            label: 'Ubicación',
            value: 'San Fernando, Chile',
            icon: MapPin,
            color: 'purple',
        },
    ];

    const colorStyles = {
        blue: 'bg-blue-500/10 text-blue-400',
        cyan: 'bg-cyan-500/10 text-cyan-400',
        purple: 'bg-purple-500/10 text-purple-400',
    };

    return (
        <div className="relative flex items-center justify-center">
            {/* CARD GLOW */}

            <div className="absolute h-72 w-72 rounded-full bg-blue-600/20 blur-[100px]" />

            {/* CARD */}

            <div className="relative w-full max-w-md rounded-3xl border border-slate-800/80 bg-slate-900/70 p-7 shadow-2xl shadow-black/40 backdrop-blur-xl md:p-8">
                {/* HEADER */}

                <div className="mb-7 flex items-center gap-4">
                    <div className="rounded-2xl bg-blue-500/10 p-4">
                        <MessageCircle size={24} className="text-blue-400" />
                    </div>

                    <div>
                        <p className="text-xs font-medium tracking-[0.2em] text-blue-400 uppercase">
                            Contacto
                        </p>

                        <h2 className="mt-1 text-xl font-bold">Información directa</h2>
                    </div>
                </div>

                {/* CONTACT INFO */}

                <div className="space-y-3">
                    {contactItems.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.label}
                                className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-950/50 p-4"
                            >
                                <div className={`rounded-xl p-3 ${colorStyles[item.color]}`}>
                                    <Icon size={19} />
                                </div>

                                <div className="min-w-0">
                                    <p className="text-xs text-slate-500">{item.label}</p>

                                    <p className="mt-1 text-sm font-medium text-slate-200">
                                        {item.value}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* DIVIDER */}

                <div className="my-6 h-px bg-slate-800" />

                {/* STATUS */}

                <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10">
                        <BriefcaseBusiness size={19} className="text-emerald-400" />
                    </div>

                    <div>
                        <p className="text-xs text-slate-500">Estado actual</p>

                        <p className="mt-1 text-sm font-semibold text-slate-200">
                            Disponible para trabajar
                        </p>
                    </div>
                </div>

                {/* FOOTER */}

                <div className="mt-6 rounded-2xl border border-blue-500/10 bg-blue-500/5 p-4">
                    <p className="text-sm leading-relaxed text-slate-400">
                        Abierto a oportunidades donde pueda aportar mis conocimientos en desarrollo
                        de software y seguir creciendo profesionalmente.
                    </p>
                </div>
            </div>
        </div>
    );
}
