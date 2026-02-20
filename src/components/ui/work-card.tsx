'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, CheckCircle } from 'lucide-react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface WorkCardProps {
    job: {
        company: string;
        title: string;
        start: string;
        end: string;
        description: string;
        logoUrl: string;
        badges: readonly string[];
    };
}

export const WorkCard: React.FC<WorkCardProps> = ({ job }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div 
            className="group bg-white dark:bg-slate-900 rounded-[2rem] p-6 md:p-8 border border-white dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 cursor-pointer"
            onClick={() => setIsExpanded(!isExpanded)}
        >
            <div className="flex flex-col md:flex-row gap-6 md:items-start">
                <div className="shrink-0">
                    <div className="w-16 h-16 rounded-2xl overflow-hidden bg-white shadow-sm border border-slate-100 dark:border-slate-800 relative">
                        <Image src={job.logoUrl} alt={job.company} fill className="object-cover" />
                    </div>
                </div>
                <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">{job.company}</h3>
                            <p className="text-indigo-600 dark:text-indigo-400 font-medium">{job.title}</p>
                        </div>
                        <div className="flex items-center gap-3 mt-3 md:mt-0">
                             <span className="text-sm font-semibold text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-3 py-1 rounded-full w-fit">
                                {job.start} - {job.end}
                            </span>
                            <span className="text-slate-400 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                                {isExpanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                            </span>
                        </div>
                    </div>

                    <AnimatePresence>
                        {isExpanded && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.2 }}
                                className="overflow-hidden"
                            >
                                <div 
                                    className="text-slate-600 dark:text-slate-300 leading-relaxed mb-4 prose dark:prose-invert max-w-none text-sm pt-4 border-t border-slate-100 dark:border-slate-800 mt-4"
                                    dangerouslySetInnerHTML={{ __html: job.description }}
                                />
                                {job.badges && job.badges.length > 0 && (
                                    <div className="flex flex-wrap gap-2 pb-2">
                                        {job.badges.map((badge, j) => (
                                                <span key={j} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold border border-emerald-100 dark:border-emerald-800">
                                                <CheckCircle size={12} />
                                                {badge}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                     {!isExpanded && (
                        <p className="text-xs text-slate-400 mt-2 italic">Click to view details...</p>
                    )}
                </div>
            </div>
        </div>
    );
};
