'use client';

import React, { useId, useState } from 'react';
import { ChevronDown, CheckCircle, MapPin } from 'lucide-react';
import Image from 'next/image';

interface WorkCardProps {
    job: {
        company: string;
        href?: string;
        title: string;
        start: string;
        end: string;
        location?: string;
        description: string;
        logoUrl: string;
        badges: readonly string[];
    };
    locale: string;
    defaultExpanded?: boolean;
}

/**
 * Work experience card. The description is always rendered in the HTML
 * (crawlers and LLMs read it) and only visually collapsed via CSS.
 */
export const WorkCard: React.FC<WorkCardProps> = ({ job, locale, defaultExpanded = false }) => {
    const [isExpanded, setIsExpanded] = useState(defaultExpanded);
    const panelId = useId();
    const isFrench = locale === 'fr';
    const toggleLabel = isExpanded
        ? (isFrench ? 'Masquer les détails' : 'Hide details')
        : (isFrench ? 'Voir les détails' : 'View details');

    return (
        <article className="group bg-white dark:bg-slate-900 rounded-[2rem] p-6 md:p-8 border border-white dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300">
            <div className="flex flex-col md:flex-row gap-5 md:gap-6 md:items-start">
                <div className="shrink-0">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white shadow-sm border border-slate-100 dark:border-slate-800 relative">
                        <Image src={job.logoUrl} alt={`Logo ${job.company}`} fill sizes="64px" className="object-cover" />
                    </div>
                </div>
                <div className="flex-1 min-w-0">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3">
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                {job.href ? (
                                    <a
                                        href={job.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                                    >
                                        {job.company}
                                    </a>
                                ) : job.company}
                            </h3>
                            <p className="text-indigo-600 dark:text-indigo-400 font-medium">{job.title}</p>
                            {job.location && (
                                <p className="mt-1 inline-flex items-center gap-1 text-xs text-slate-400">
                                    <MapPin size={12} /> {job.location}
                                </p>
                            )}
                        </div>
                        <div className="flex items-center gap-3">
                            <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full w-fit whitespace-nowrap">
                                {job.start} - {job.end}
                            </span>
                            <button
                                type="button"
                                onClick={() => setIsExpanded((v) => !v)}
                                aria-expanded={isExpanded}
                                aria-controls={panelId}
                                aria-label={toggleLabel}
                                title={toggleLabel}
                                className="w-9 h-9 rounded-full flex items-center justify-center text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors"
                            >
                                <ChevronDown
                                    size={20}
                                    className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                                />
                            </button>
                        </div>
                    </div>

                    <div
                        id={panelId}
                        className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                            isExpanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                        }`}
                    >
                        <div className="overflow-hidden">
                            <div
                                className="text-slate-600 dark:text-slate-300 leading-relaxed prose dark:prose-invert max-w-none text-sm pt-4 border-t border-slate-100 dark:border-slate-800 mt-4"
                                dangerouslySetInnerHTML={{ __html: job.description }}
                            />
                            {job.badges && job.badges.length > 0 && (
                                <div className="flex flex-wrap gap-2 pt-4 pb-1">
                                    {job.badges.map((badge, j) => (
                                        <span key={j} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold border border-emerald-100 dark:border-emerald-800">
                                            <CheckCircle size={12} />
                                            {badge}
                                        </span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {!isExpanded && (
                        <button
                            type="button"
                            onClick={() => setIsExpanded(true)}
                            className="mt-3 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
                        >
                            {toggleLabel}
                        </button>
                    )}
                </div>
            </div>
        </article>
    );
};
