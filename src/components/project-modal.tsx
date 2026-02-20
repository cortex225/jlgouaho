'use client';

import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Github, Calendar, Layers } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useI18n } from '@/app/locales/client';

interface ProjectModalProps {
    project: any;
    open: boolean;
    onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, open, onClose }) => {
    const t = useI18n();
    const [activeImageIndex, setActiveImageIndex] = React.useState<number | null>(null);

    // Lock body scroll when modal is open
    useEffect(() => {
        if (open) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
             document.body.style.overflow = 'unset';
        };
    }, [open]);

    const mediaList = React.useMemo(() => {
        if (!project) return [];
        const list: { type: 'video' | 'image', src: string }[] = [];
        if (project.video) {
            list.push({ type: 'video', src: project.video });
        }
        if (project.images && Array.isArray(project.images)) {
            list.push(...project.images.map((src: string) => ({ type: 'image', src })));
        }
        return list;
    }, [project]);

    // Handle keyboard navigation for slider
    useEffect(() => {
        if (activeImageIndex === null) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') setActiveImageIndex(null);
            if (e.key === 'ArrowRight') handleNextImage();
            if (e.key === 'ArrowLeft') handlePrevImage();
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [activeImageIndex, mediaList]);

    if (!open || !project) return null;

    const handleNextImage = () => {
        if (mediaList.length === 0) return;
        setActiveImageIndex((prev) => 
            prev === null ? null : (prev + 1) % mediaList.length
        );
    };

    const handlePrevImage = () => {
        if (mediaList.length === 0) return;
        setActiveImageIndex((prev) => 
            prev === null ? null : (prev - 1 + mediaList.length) % mediaList.length
        );
    };

    return (
        <AnimatePresence>
            {open && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100] cursor-pointer"
                    />

                    {/* Modal Container - Centered */}
                    <div className="fixed inset-0 z-[101] flex items-center justify-center p-4 sm:p-6 pointer-events-none">
                        
                        {/* Modal Content */}
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 20 }}
                            transition={{ type: "spring", duration: 0.5 }}
                            className="bg-white dark:bg-slate-950 w-full max-w-5xl max-h-[90vh] rounded-[2rem] shadow-2xl overflow-hidden flex flex-col pointer-events-auto border border-white/20 dark:border-slate-800"
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 z-10 p-2 bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 backdrop-blur-md rounded-full text-slate-900 dark:text-white transition-colors"
                            >
                                <X size={20} />
                            </button>

                            {/* Scrollable Content Area */}
                            <div className="overflow-y-auto flex-1 custom-scrollbar">
                                
                                {/* Hero Image / Media */}
                                <div 
                                    className="relative h-64 md:h-96 w-full bg-slate-100 dark:bg-slate-900 shrink-0 cursor-zoom-in group"
                                    onClick={() => setActiveImageIndex(0)}
                                >
                                    {project.video ? (
                                        <video
                                            src={project.video}
                                            autoPlay
                                            loop
                                            muted
                                            playsInline
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                    ) : project.images && project.images.length > 0 ? (
                                        <Image
                                            src={project.images[0]}
                                            alt={project.title}
                                            fill
                                            className="object-cover transition-transform duration-700 group-hover:scale-105"
                                            priority
                                        />
                                    ) : (
                                        <div className="w-full h-full flex items-center justify-center bg-indigo-50 dark:bg-indigo-900/20 text-indigo-200 dark:text-indigo-800">
                                            <Layers size={64} />
                                        </div>
                                    )}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 pointer-events-none">
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            {project.technologies.slice(0, 5).map((tech: string, i: number) => (
                                                <span key={i} className="px-2.5 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-semibold rounded-md border border-white/10">
                                                    {tech}
                                                </span>
                                            ))}
                                            {project.technologies.length > 5 && (
                                                <span className="px-2.5 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-semibold rounded-md border border-white/10">
                                                    +{project.technologies.length - 5}
                                                </span>
                                            )}
                                        </div>
                                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-2">{project.title}</h2>
                                        {project.dates && (
                                            <div className="flex items-center gap-2 text-white/80 text-sm font-medium">
                                                <Calendar size={16} /> {project.dates}
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Main Content Layout */}
                                <div className="p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-3 gap-10">
                                    
                                    {/* Left Column: Details */}
                                    <div className="lg:col-span-2 space-y-10">
                                        
                                        {/* Overview */}
                                        {project.overview && (
                                            <section>
                                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                                    <span className="w-8 h-1 bg-indigo-600 rounded-full"></span> 
                                                    {t('common.overview')}
                                                </h3>
                                                <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                                                    {project.overview}
                                                </p>
                                            </section>
                                        )}

                                        {/* Features */}
                                        {project.features && (
                                            <section>
                                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                                    <span className="w-8 h-1 bg-emerald-500 rounded-full"></span>
                                                    {t('common.features')}
                                                </h3>
                                                <div 
                                                    className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed [&>ul]:list-disc [&>ul]:pl-5 [&>ul>li]:mb-2"
                                                    dangerouslySetInnerHTML={{ __html: project.features }}
                                                />
                                            </section>
                                        )}
                                        
                                        {/* Challenges */}
                                        {project.challenges && (
                                            <section>
                                                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                                    <span className="w-8 h-1 bg-amber-500 rounded-full"></span>
                                                    {t('common.challenges')}
                                                </h3>
                                                <div 
                                                    className="prose dark:prose-invert max-w-none text-slate-600 dark:text-slate-300 leading-relaxed"
                                                    dangerouslySetInnerHTML={{ __html: project.challenges }}
                                                />
                                            </section>
                                        )}

                                        {/* Conclusion */}
                                        {project.conclusion && (
                                            <section className="bg-slate-50 dark:bg-slate-900/50 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                                                <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3">{t('common.conclusion')}</h3>
                                                <p className="text-slate-700 dark:text-slate-300 italic">
                                                    "{project.conclusion}"
                                                </p>
                                            </section>
                                        )}
                                    </div>

                                    {/* Right Column: Sidebar / Images / Actions */}
                                    <div className="space-y-8">
                                        
                                        {/* Links */}
                                        <div className="flex flex-col gap-3">
                                            {project.links && project.links.map((link: any, i: number) => (
                                                <Link 
                                                    key={i} 
                                                    href={link.href}
                                                    target="_blank"
                                                    className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:opacity-90 transition-opacity"
                                                >
                                                    {link.type.includes("Github") ? <Github size={20} /> : <ExternalLink size={20} />}
                                                    {link.type}
                                                </Link>
                                            ))}
                                            {(!project.links || project.links.length === 0) && (
                                                <div className="p-4 bg-slate-100 dark:bg-slate-900 rounded-xl text-center text-sm text-slate-500">
                                                    {t('common.noLinks')}
                                                </div>
                                            )}
                                        </div>

                                        {/* Extra Images Grid */}
                                        {mediaList.length > 1 && (
                                            <div className="space-y-4">
                                                <h4 className="font-bold text-slate-900 dark:text-white">{t('common.gallery')}</h4>
                                                <div className="grid grid-cols-1 gap-4">
                                                    {mediaList.slice(1).map((media, i: number) => (
                                                        <div 
                                                            key={i} 
                                                            className="relative aspect-video rounded-xl overflow-hidden border border-slate-100 dark:border-slate-800 shadow-sm cursor-zoom-in hover:ring-2 ring-indigo-500 transition-all"
                                                            onClick={() => setActiveImageIndex(i + 1)}
                                                        >
                                                            {media.type === 'video' ? (
                                                                <video
                                                                    src={media.src}
                                                                    autoPlay
                                                                    loop
                                                                    muted
                                                                    playsInline
                                                                    className="w-full h-full object-cover pointer-events-none"
                                                                />
                                                            ) : (
                                                                <Image
                                                                    src={media.src}
                                                                    alt={`${project.title} screenshot ${i + 2}`}
                                                                    fill
                                                                    className="object-cover pointer-events-none"
                                                                />
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Image Slider Overlay */}
                    <AnimatePresence>
                        {activeImageIndex !== null && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                className="fixed inset-0 z-[105] bg-black/95 flex items-center justify-center p-4 sm:p-8 backdrop-blur-xl"
                            >
                                {/* Close Button */}
                                <button
                                    onClick={() => setActiveImageIndex(null)}
                                    className="absolute top-4 right-4 z-20 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors"
                                >
                                    <X size={24} />
                                </button>

                                {/* Controls */}
                                <button 
                                    onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}
                                    className="absolute left-4 z-20 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors hidden md:block"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
                                </button>
                                
                                <button 
                                    onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
                                    className="absolute right-4 z-20 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors hidden md:block"
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m9 18 6-6-6-6"/></svg>
                                </button>

                                {/* Main Image */}
                                <div className="relative w-full h-full max-w-7xl max-h-[85vh]">
                                    <motion.div
                                        key={activeImageIndex}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        exit={{ opacity: 0, x: -20 }}
                                        className="w-full h-full relative"
                                    >
                                        {mediaList[activeImageIndex].type === 'video' ? (
                                            <video
                                                src={mediaList[activeImageIndex].src}
                                                autoPlay
                                                loop
                                                muted
                                                playsInline
                                                className="w-full h-full object-contain"
                                            />
                                        ) : (
                                            <Image
                                                src={mediaList[activeImageIndex].src}
                                                alt={`Slide ${activeImageIndex}`}
                                                fill
                                                className="object-contain"
                                                priority
                                            />
                                        )}
                                    </motion.div>
                                    
                                    {/* Pagination Dots */}
                                    <div className="absolute -bottom-12 left-0 right-0 flex justify-center gap-2">
                                        {mediaList.map((_: any, idx: number) => (
                                            <button
                                                key={idx}
                                                onClick={() => setActiveImageIndex(idx)}
                                                className={`w-2 h-2 rounded-full transition-all ${
                                                    idx === activeImageIndex ? "bg-white w-6" : "bg-white/30 hover:bg-white/50"
                                                }`}
                                            />
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </>
            )}
        </AnimatePresence>
    );
};
