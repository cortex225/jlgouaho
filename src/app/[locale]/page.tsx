'use client';

import React, { useState, useEffect } from 'react';
import {
    Mail, Linkedin, Github, Share2, QrCode, X, Languages, Lightbulb,
    Code, Briefcase, MapPin, ExternalLink, GraduationCap, ArrowRight,
    ChevronDown, ChevronUp, Download, Phone, Quote, BookOpen,
    Hammer, GanttChart, CheckCircle2,
    Twitter,
    Instagram,
    Award
} from 'lucide-react';
import { SocialIcon } from '@/components/ui/social-icon';
import { WorkCard } from '@/components/ui/work-card';
import { getData } from '@/data/resume';
import Link from 'next/link';
import { ModeToggle } from '@/components/mode-toggle';
import Image from 'next/image';
import { useI18n } from '@/app/locales/client';
import { ProjectModal } from '@/components/project-modal';
import { ContactForm } from '@/components/contact-form';
import { Terminal } from '@/components/terminal';
import { TestimonialsSlider } from './TestimonialsSlider';

export default function Page({ params: { locale } }: { params: { locale: string } }) {
    const t = useI18n();
    const DATA = getData(locale as 'en' | 'fr');
    const [showQR, setShowQR] = useState(false);
    const [isWorkExpanded, setIsWorkExpanded] = useState(false);
    const [selectedProject, setSelectedProject] = useState<any>(null);

    const handleShare = async () => {
        if (typeof navigator !== 'undefined' && navigator.share) {
            try {
                await navigator.share({
                    title: DATA.name,
                    text: `${DATA.summary.title} - ${DATA.name}`,
                    url: DATA.businessUrl || window.location.href,
                });
            } catch (err) {
                console.log('Error sharing:', err);
                setShowQR(true);
            }
        } else {
            setShowQR(true);
        }
    };

    // Show only first 2 work items initially
    const visibleWork = isWorkExpanded ? DATA.work : DATA.work.slice(0, 3);
    
    // Show only first 3 projects
    const visibleProjects = DATA.projects.slice(0, 3);

    return (
        <div className="min-h-screen w-full bg-slate-50 dark:bg-slate-950 font-sans relative selection:bg-indigo-100 selection:text-indigo-900">

            <div className="fixed inset-0 animated-bg z-0 pointer-events-none"></div>

            <div className="w-full max-w-7xl mx-auto p-4 md:p-8 lg:p-12 relative z-10 flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">

                {/* --- LEFT COLUMN: PROFILE CARD --- */}
                <aside className="w-full lg:w-[400px] shrink-0 lg:sticky lg:top-8 self-start h-fit">
                    <div className="glass-card rounded-[2.5rem] p-6 pb-8 overflow-hidden transition-all duration-300 dark:bg-slate-900/60 dark:border-slate-800">
                        
                        {/* Toolbar */}
                        <div className="flex justify-between items-center mb-6">
                             <Link 
                                href={`/${locale === 'fr' ? 'en' : 'fr'}`}
                                className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-md px-3 py-2 rounded-full shadow-sm border border-white dark:border-slate-700 text-xs font-bold text-slate-600 dark:text-slate-300 flex items-center gap-1.5 hover:bg-white dark:hover:bg-slate-800 transition-colors"
                            >
                                <Languages size={14} /> {locale.toUpperCase()}
                            </Link>
                            <button 
                                onClick={handleShare}
                                className="bg-white/60 dark:bg-slate-800/60 backdrop-blur-md p-2 rounded-full shadow-sm border border-white dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-indigo-400 hover:bg-white dark:hover:bg-slate-800 transition-colors"
                            >
                                <Share2 size={18} />
                            </button>
                            <ModeToggle />
                        </div>

                        {/* Status Badge */}
                        <div className="flex justify-center mb-6">
                            <div className="inline-flex items-center gap-2 bg-emerald-50 dark:bg-emerald-900/30 border border-emerald-100 dark:border-emerald-800 px-4 py-1.5 rounded-full shadow-sm">
                                <span className="relative flex h-2.5 w-2.5">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                                </span>
                                <span className="text-[11px] font-bold text-emerald-700 dark:text-emerald-400 tracking-wide uppercase">{t('hero.status')}</span>
                            </div>
                        </div>

                        {/* Identity */}
                        <div className="text-center mb-8">
                            <div className="relative inline-block mb-5">
                                <div className="w-32 h-32 rounded-full shadow-2xl border-[6px] border-white dark:border-slate-800 mx-auto overflow-hidden bg-slate-100 dark:bg-slate-800 relative">
                                    <Image src={DATA.avatarUrl} alt={DATA.name} fill className="object-cover" />
                                </div>
                                <div className="absolute bottom-1 right-1 bg-white dark:bg-slate-800 p-2 rounded-full shadow-lg">
                                    <Lightbulb size={20} className="text-indigo-600 dark:text-indigo-400" />
                                </div>
                            </div>
                            
                            <h1 className="text-2xl font-bold text-slate-900 dark:text-white leading-tight mb-2">{DATA.name}</h1>
                            <p className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-2 flex items-center justify-center gap-1">
                                <MapPin size={12} /> {DATA.location}
                            </p>
                            <p className="text-slate-500 dark:text-slate-400 text-sm font-medium px-4">{DATA.summary.title}</p>
                        </div>

                        {/* Tech Stack (Tags) - Expanded */}
                        <div className="mb-8">
                            <p className="text-xs font-bold text-slate-400 uppercase tracking-widest text-center mb-4">{t('hero.techStack')}</p>
                            <div className="flex flex-wrap justify-center gap-2">
                                {DATA.skills.map((tech, index) => (
                                    <span key={index} className="px-3 py-1 bg-slate-100/50 dark:bg-slate-800/50 text-slate-600 dark:text-slate-300 rounded-lg text-[11px] font-semibold border border-slate-200/50 dark:border-slate-700/50">
                                        {tech.name}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="grid grid-cols-2 gap-3 mb-4">
                            <button
                                onClick={() => window.location.href = `mailto:${DATA.contact.email}`}
                                className="bg-slate-900 hover:bg-slate-800 dark:bg-white dark:hover:bg-slate-200 dark:text-slate-900 text-white py-4 px-4 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-xl shadow-slate-900/10 group"
                            >
                                <Mail size={18} className="group-hover:-translate-y-0.5 transition-transform" />
                                <span className="text-sm font-bold">{t('common.email')}</span>
                            </button>
                            <button
                                onClick={() => window.open(DATA.contact.social.LinkedIn.url, '_blank', 'noopener,noreferrer')}
                                className="bg-indigo-600 hover:bg-indigo-500 text-white py-4 px-4 rounded-2xl flex items-center justify-center gap-2 transition-all active:scale-95 shadow-xl shadow-indigo-600/20 group"
                            >
                                <Linkedin size={18} className="group-hover:-translate-y-0.5 transition-transform" />
                                <span className="text-sm font-bold">{t('common.connect')}</span>
                            </button>
                        </div>
                        {/* CV Download Button */}
                        {/* <a
                            href="https://cwxxwhrcxhafmhhqszgm.supabase.co/storage/v1/object/public/video/MyResume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full mb-5 flex items-center justify-center gap-2 py-3 px-4 rounded-2xl border-2 border-dashed border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-indigo-400 hover:text-indigo-600 dark:hover:border-indigo-500 dark:hover:text-indigo-400 transition-all text-sm font-semibold group"
                        >
                            <Download size={16} className="group-hover:-translate-y-0.5 transition-transform" />
                            {locale === 'fr' ? 'Télécharger mon CV' : 'Download Resume'}
                        </a> */}

                        {/* Availability */}
                        {/* <div className="mb-6 rounded-2xl bg-slate-50 dark:bg-slate-800/40 border border-slate-200/80 dark:border-slate-700/50 p-4 space-y-2.5">
                            <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">{t('sections.availability.title')}</p>
                            <div className="flex items-center gap-2">
                                <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                                <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">{t('sections.availability.availableNow')}</span>
                            </div>
                            <div className="space-y-1.5 text-xs text-slate-500 dark:text-slate-400">
                                <div className="flex justify-between">
                                    <span className="font-medium">{t('sections.availability.typeLabel')}</span>
                                    <span>{t('sections.availability.types')}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-medium">{t('sections.availability.modeLabel')}</span>
                                    <span>{t('sections.availability.modes')}</span>
                                </div>
                                <div className="flex justify-between">
                                    <span className="font-medium">{t('sections.availability.languagesLabel')}</span>
                                    <span>{t('sections.availability.languages')}</span>
                                </div>
                            </div>
                        </div> */}

                        {/* Social Footer */}
                        <div className="pt-6 border-t border-slate-200/50 dark:border-slate-700/50 flex justify-center gap-5">
                            <SocialIcon href={DATA.contact.social.blog.url} icon={<BookOpen size={20} />} />
                            <SocialIcon href={DATA.contact.social.GitHub.url} icon={<Github size={20} />} />
                            <SocialIcon href={DATA.contact.social.X.url} icon={<Twitter size={20} />} />
                            <SocialIcon href={DATA.contact.social.Instagram.url} icon={<Instagram size={20} />} />
                            <SocialIcon href={`tel:${DATA.contact.tel}`} icon={<Phone size={20} />} />
                            <button
                                onClick={() => setShowQR(true)}
                                className="text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors p-2 hover:scale-110"
                            >
                                <QrCode size={20} />
                            </button>
                        </div>
                    </div>
                </aside>

                {/* --- RIGHT COLUMN: DETAILED CONTENT --- */}
                <main className="flex-1 w-full space-y-12 lg:space-y-12  pb-24">
                    
                    {/* About Section */}
                    <section className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-md rounded-[2rem] p-6 md:p-10 border border-white dark:border-slate-800 shadow-sm">
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-3">
                            <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 p-2 rounded-xl"><Lightbulb size={24} /></span>
                            {DATA.summary.title}
                        </h2>
                        <div className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg space-y-4 mb-8">
                            {DATA.summary.description.split('\n\n').map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                    
                    </section>

                    {/* Currently */}
                    {/* <section className="bg-white/60 dark:bg-slate-900/60 backdrop-blur-md rounded-[2rem] p-6 md:p-8 border border-white dark:border-slate-800 shadow-sm">
                        <h2 className="text-xl font-bold text-slate-800 dark:text-white mb-6 flex items-center gap-3">
                            <span className="bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 p-2 rounded-xl"><GanttChart size={22} /></span>
                            {t('sections.currently.title')}
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            <div className="space-y-2">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                                    <Award size={10} /> {t('sections.currently.certificationLabel')}
                                </p>
                                {DATA.currently.certifications.map((cert, i) => (
                                    <div key={i} className="flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse shrink-0" />
                                        <span className="text-sm font-semibold text-slate-700 dark:text-slate-300">{cert}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="space-y-2">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                                    <Hammer size={10} /> {t('sections.currently.buildingLabel')}
                                </p>
                                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">{locale === 'fr' ? DATA.currently.building.fr : DATA.currently.building.en}</p>
                            </div>
                            <div className="space-y-2">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 flex items-center gap-1.5">
                                    <BookOpen size={10} /> {t('sections.currently.readingLabel')}
                                </p>
                                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">{DATA.currently.reading}</p>
                            </div>
                        </div>
                    </section> */}

                    {/* Work Experience */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-8 ml-4 flex items-center gap-3">
                             <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 p-2 rounded-xl"><Briefcase size={24} /></span>
                            {t('sections.work.title')}
                        </h2>
                        <div className="space-y-4">
                            {visibleWork.map((job, i) => (
                                <WorkCard key={i} job={job} />
                            ))}
                        </div>
                        
                        {DATA.work.length > 2 && (
                            <div className="flex justify-center mt-6">
                                <button 
                                    onClick={() => setIsWorkExpanded(!isWorkExpanded)}
                                    className="flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-300 font-semibold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-all shadow-sm"
                                >
                                    {isWorkExpanded ? (
                                        <>{locale === 'fr' ? 'Voir moins' : 'Show Less'} <ChevronUp size={16} /></>
                                    ) : (
                                        <>{locale === 'fr' ? 'Voir plus' : 'Show More'} <ChevronDown size={16} /></>
                                    )}
                                </button>
                            </div>
                        )}
                    </section>

                    {/* Projects */}
                    <section>
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-8 ml-4 flex items-center gap-3">
                             <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 p-2 rounded-xl"><Code size={24} /></span>
                            {t('sections.projects.title')}
                        </h2>
                        <div className="grid grid-cols-1 gap-6">
                            {visibleProjects.map((project, i) => (
                                <div 
                                    key={i} 
                                    onClick={() => setSelectedProject(project)}
                                    className="group bg-white dark:bg-slate-900 rounded-[2rem] p-6 md:p-8 border border-white dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 overflow-hidden relative cursor-pointer"
                                >
                                    
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                                        <div className="flex gap-2">
                                            {project.links.map((link, k) => (
                                                <div key={k} onClick={(e) => e.stopPropagation()} className="contents">
                                                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-100 dark:bg-slate-800 rounded-full text-slate-600 dark:text-slate-400 hover:bg-indigo-100 hover:text-indigo-600 dark:hover:bg-indigo-900/50 dark:hover:text-indigo-400 transition-colors">
                                                        {link.type.includes("Github") ? <Github size={16} /> : <ExternalLink size={16} />}
                                                    </a>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <p className="text-slate-600 dark:text-slate-300 mb-6">{project.description}</p>
                                    
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {project.technologies.slice(0, 5).map((tech, j) => (
                                            <span key={j} className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-medium bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200">
                                                {tech}
                                            </span>
                                        ))}
                                    </div>

                                    {project.images && project.images.length > 0 && (
                                         <div className="rounded-xl overflow-hidden shadow-md border border-slate-100 dark:border-slate-800 mt-4 group-hover:scale-[1.02] transition-transform duration-500">
                                            <Image 
                                                src={project.images[0]} 
                                                alt={project.title} 
                                                width={600} 
                                                height={300} 
                                                className="w-full h-48 object-cover object-top"
                                            />
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>

                         <div className="flex justify-center mt-8">
                             <Link
                                href={`/${locale}/projects`}
                                className="group flex items-center gap-2 px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-slate-900 font-bold hover:scale-105 transition-transform shadow-xl shadow-slate-900/10"
                            >
                                {t('common.viewAllProjects')} <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </section>

                    {/* Testimonials */}
                    {/* <section>
                        <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-8 ml-4 flex items-center gap-3">
                            <span className="bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 p-2 rounded-xl"><Quote size={24} /></span>
                            {t('sections.testimonials.title')}
                        </h2>
                        <TestimonialsSlider locale={locale} testimonials={DATA.testimonials} />
                    </section> */}

                     {/* Education */}
                     <section className="bg-slate-900 dark:bg-slate-950 text-slate-100 rounded-[2.5rem] p-8 md:p-12 overflow-hidden relative">
                         <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500 rounded-full blur-[100px] opacity-20 pointer-events-none"></div>
                         
                        <h2 className="text-2xl font-bold text-white mb-10 relative z-10 flex items-center gap-3">
                            <span className="bg-white/10 p-2 rounded-xl"><GraduationCap size={24} /></span>
                            {t('sections.education.title')}
                        </h2>
                        <div className="grid grid-cols-1 gap-8 relative z-10">
                            {DATA.education.map((edu, i) => (
                                <div key={i} className="relative pl-8 border-l-2 border-slate-700">
                                    <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-indigo-500 ring-4 ring-slate-900 dark:ring-slate-950"></span>
                                    <span className="text-indigo-400 font-mono text-xs font-bold tracking-widest mb-1 block">{edu.end}</span>
                                    <h3 className="font-bold text-lg text-white mb-2">{edu.school}</h3>
                                    <p className="text-slate-300 font-medium mb-1">{edu.degree}</p>
                                    <p className="text-slate-400 text-sm leading-relaxed">{edu.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>

                    {/* Certifications */}
                     <section className="bg-slate-900 dark:bg-slate-950 text-slate-100 rounded-[2.5rem] p-8 md:p-12 overflow-hidden relative">
                         <div className="absolute top-0 left-0 w-64 h-64 bg-emerald-500 rounded-full blur-[100px] opacity-10 pointer-events-none"></div>
                         
                        <h2 className="text-2xl font-bold text-white mb-10 relative z-10 flex items-center gap-3">
                            <span className="bg-white/10 p-2 rounded-xl"><Award size={24} /></span>
                            {t('sections.certifications.title')}
                        </h2>
                        <div className="grid grid-cols-1 gap-8 relative z-10">
                            {DATA.certifications.map((cert, i) => (
                                <div key={i} className="relative pl-8 border-l-2 border-slate-700">
                                    <span className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-emerald-500 ring-4 ring-slate-900 dark:ring-slate-950"></span>
                                    <span className="text-emerald-400 font-mono text-xs font-bold tracking-widest mb-2 block uppercase">{cert.date ?? cert.description}</span>
                                    
                                    <div className="flex items-center gap-4">
                                        {cert.logoUrl && (
                                            <div className="relative w-12 h-12 rounded-lg overflow-hidden bg-white shrink-0">
                                                <Image 
                                                    src={cert.logoUrl} 
                                                    alt={cert.name} 
                                                    fill 
                                                    className="object-contain p-1"
                                                />
                                            </div>
                                        )}
                                        <h3 className="font-bold text-lg text-white mb-1">
                                            <a href={cert.href} target="_blank" rel="noopener noreferrer" className="hover:text-emerald-400 transition-colors">
                                                {cert.name}
                                            </a>
                                        </h3>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>


                    {/* Footer */}
                    <div className="text-center py-6">
                        <p className="text-slate-500 dark:text-slate-400 text-sm">© {new Date().getFullYear()} {DATA.name}. {t('common.allRightsReserved')}</p>
                    </div>

                </main>

            </div>

            {/* QR Code Modal */}
            {showQR && (
                <div className="fixed inset-0 z-50 bg-slate-900/80 backdrop-blur-sm flex items-center justify-center p-4 animate-in fade-in duration-200">
                    <div className="bg-white dark:bg-slate-900 p-6 rounded-3xl shadow-2xl w-full max-w-xs relative text-center border border-white dark:border-slate-800">
                        <button 
                            onClick={() => setShowQR(false)}
                            className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 dark:hover:text-white"
                        >
                            <X size={24} />
                        </button>
                        
                        <div className="mb-4 mt-2">
                            <div className="w-12 h-12 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto text-indigo-600 dark:text-indigo-400 mb-3">
                                <QrCode size={24} />
                            </div>
                            <h3 className="font-bold text-slate-800 dark:text-white text-lg">{t('common.scanToContact')}</h3>
                            <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{DATA.name}</p>
                        </div>

                        <div className="bg-slate-50 dark:bg-white p-4 rounded-xl inline-block mb-4 border border-slate-100 dark:border-slate-200">
                            <img 
                                src={`https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=${encodeURIComponent(DATA.businessUrl || window.location.href)}&color=1e293b&bgcolor=f8fafc`}
                                alt="QR Code" 
                                className="w-48 h-48 mix-blend-multiply"
                                loading="lazy"
                            />
                        </div>
                        
                        <button 
                            onClick={() => setShowQR(false)}
                            className="w-full py-3 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-semibold text-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                        >
                            {t('common.close')}
                        </button>
                    </div>
                </div>
            )}
            <ProjectModal
                project={selectedProject}
                open={!!selectedProject}
                onClose={() => setSelectedProject(null)}
            />
            <Terminal
                locale={locale}
                data={{
                    name: DATA.name,
                    title: DATA.summary.title,
                    email: DATA.contact.email,
                    github: DATA.contact.social.GitHub.url,
                    linkedin: DATA.contact.social.LinkedIn.url,
                    projects: DATA.projects.map(p => p.title),
                    skills: DATA.skills.map(s => s.name),
                    cvUrl: "https://cwxxwhrcxhafmhhqszgm.supabase.co/storage/v1/object/public/video/MyResume.pdf",
                }}
            />
        </div>
    );
}
