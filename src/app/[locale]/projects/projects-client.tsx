'use client';

import React from 'react';
import {
    Code, ArrowLeft, ExternalLink, Github, LayoutGrid, Waypoints
} from 'lucide-react';
import { getData } from '@/data/resume';
import Link from 'next/link';
import Image from 'next/image';
import { ModeToggle } from '@/components/mode-toggle';
import { useI18n } from '@/app/locales/client';

import { ProjectModal } from '@/components/project-modal';
import { TechGraph } from '@/components/tech-graph';
import { expandStack } from '@/data/tech-graph';

export default function ProjectsClient({ params: { locale } }: { params: { locale: string } }) {
    const t = useI18n();
    const DATA = getData(locale as 'en' | 'fr');
    const [selectedCategories, setSelectedCategories] = React.useState<string[]>(['All']);
    const [selectedProject, setSelectedProject] = React.useState<any>(null);
    const [view, setView] = React.useState<'grid' | 'graph'>('grid');
    const isFrench = locale === 'fr';
    const openProject = React.useCallback((project: any) => setSelectedProject(project), []);

    // Stacks with implied technologies (Next.js ⇒ React ⇒ JavaScript…), shared
    // by the grid filters and the graph so both agree on what "uses JavaScript" means.
    const stacks = React.useMemo(
        () => DATA.projects.map(project => expandStack(project.technologies)),
        [DATA.projects]
    );

    // Only technologies shared by at least two projects make useful filters;
    // "All" always comes first, then by frequency.
    const categories = React.useMemo(() => {
        const counts = new Map<string, number>();
        stacks.forEach(stack => stack.forEach(tech => counts.set(tech, (counts.get(tech) ?? 0) + 1)));
        const shared = Array.from(counts.entries())
            .filter(([, n]) => n >= 2)
            .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
            .map(([tech]) => tech);
        return ['All', ...shared];
    }, [stacks]);

    const toggleCategory = (category: string) => {
        setSelectedCategories(prev => {
            if (category === 'All') return ['All'];

            // If currently All, clicking a category switches to just that category
            if (prev.includes('All')) return [category];

            const isSelected = prev.includes(category);
            let newCategories;

            if (isSelected) {
                newCategories = prev.filter(c => c !== category);
                // If nothing left, default back to All
                if (newCategories.length === 0) return ['All'];
            } else {
                newCategories = [...prev, category];
            }

            return newCategories;
        });
    };

    const filteredProjects = React.useMemo(() => {
        if (selectedCategories.includes('All')) return DATA.projects;

        // AND logic: Project must contain ALL selected categories
        return DATA.projects.filter((_, i) =>
            selectedCategories.every(cat => stacks[i].includes(cat))
        );
    }, [DATA.projects, stacks, selectedCategories]);

    const selectedTechs = React.useMemo(
        () => selectedCategories.filter(c => c !== 'All'),
        [selectedCategories]
    );
    // Stable identity on purpose: toggleCategory only uses functional setState,
    // and a new callback would reset the graph layout on every render.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const toggleTech = React.useCallback((tech: string) => toggleCategory(tech), []);

    return (
        <div className="min-h-screen w-full bg-slate-50 dark:bg-slate-950 font-sans relative selection:bg-indigo-100 selection:text-indigo-900">

            <div className="fixed inset-0 animated-bg z-0 pointer-events-none"></div>

            <div className="w-full max-w-7xl mx-auto p-4 md:p-8 lg:p-12 relative z-10">

                {/* Header */}
                <div className="mb-12 flex items-center justify-between">
                     <Link
                        href={`/${locale}`}
                        className="group flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors bg-white/40 dark:bg-slate-900/40 backdrop-blur-sm px-4 py-2 rounded-xl border border-white dark:border-slate-800 shadow-sm"
                    >
                        <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                        <span className="font-bold">{t('projectsPage.backToProfile')}</span>
                    </Link>
                    <ModeToggle />
                </div>

                <div className="text-center mb-10">
                     <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mb-6 shadow-lg shadow-indigo-500/20">
                        <Code size={32} />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">{t('projectsPage.allProjects')}</h1>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        {t('projectsPage.description')}
                    </p>
                </div>

                {/* View switcher */}
                <div role="tablist" aria-label={isFrench ? 'Affichage' : 'View'} className="flex justify-center mb-8">
                    <div className="inline-flex p-1 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm">
                        {([
                            { id: 'grid', icon: LayoutGrid, label: isFrench ? 'Grille' : 'Grid' },
                            { id: 'graph', icon: Waypoints, label: 'Constellation' },
                        ] as const).map(({ id, icon: Icon, label }) => (
                            <button
                                key={id}
                                type="button"
                                role="tab"
                                aria-selected={view === id}
                                onClick={() => setView(id)}
                                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold transition-all ${
                                    view === id
                                        ? 'bg-indigo-600 text-white shadow-md shadow-indigo-500/30'
                                        : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
                                }`}
                            >
                                <Icon size={16} /> {label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Filters (shared by both views) */}
                <div role="group" aria-label={locale === 'fr' ? 'Filtrer par technologie' : 'Filter by technology'} className="flex flex-wrap justify-center gap-2 mb-4">
                    {categories.map((category) => (
                        <button
                            key={category}
                            type="button"
                            aria-pressed={selectedCategories.includes(category)}
                            onClick={() => toggleCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                                selectedCategories.includes(category)
                                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-500/30 scale-105'
                                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
                            }`}
                        >
                            {category === 'All' ? t('projectsPage.filterAll') : category}
                        </button>
                    ))}
                </div>

                <p className="text-center text-xs font-semibold text-slate-400 mb-10" aria-live="polite">
                    {filteredProjects.length} {locale === 'fr' ? (filteredProjects.length > 1 ? 'projets' : 'projet') : (filteredProjects.length > 1 ? 'projects' : 'project')}
                </p>

                {view === 'graph' && (
                    <section aria-label="Constellation" className="mb-12 animate-in fade-in duration-500">
                        <p className="text-center text-sm text-slate-500 dark:text-slate-400 max-w-2xl mx-auto mb-6">
                            {isFrench
                                ? 'Carrés : projets. Cercles : technologies, d\'autant plus grands qu\'elles sont utilisées dans de projets (Next.js compte aussi React et JavaScript). Clique un projet pour ouvrir sa fiche, une techno pour filtrer.'
                                : 'Squares: projects. Circles: technologies, larger the more projects use them (Next.js also counts React and JavaScript). Click a project to open it, a technology to filter.'}
                        </p>
                        <TechGraph
                            projects={DATA.projects}
                            locale={locale}
                            selectedTechs={selectedTechs}
                            onToggleTech={toggleTech}
                            onSelectProject={openProject}
                        />
                    </section>
                )}

                <div className={view === 'graph' ? 'hidden' : ''}>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {filteredProjects.map((project, i) => (
                        <article
                            key={project.title}
                            role="button"
                            tabIndex={0}
                            aria-labelledby={`project-card-${i}`}
                            onClick={() => setSelectedProject(project)}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault();
                                    setSelectedProject(project);
                                }
                            }}
                            className="group bg-white dark:bg-slate-900 rounded-[2rem] p-6 border border-white dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 flex flex-col h-full animate-in fade-in zoom-in duration-500 fill-mode-both cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                            style={{ animationDelay: `${Math.min(i, 8) * 80}ms` }}
                        >

                            {(project as any).video ? (
                                    <div className="rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 mb-6 group-hover:scale-[1.02] transition-transform duration-500 h-48 relative">
                                    <video
                                        src={(project as any).video}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        preload="metadata"
                                        aria-label={`${project.title} : ${locale === 'fr' ? 'démo vidéo' : 'video demo'}`}
                                        className="w-full h-full object-cover object-top"
                                    />
                                </div>
                            ) : project.images && project.images.length > 0 ? (
                                    <div className="rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 mb-6 group-hover:scale-[1.02] transition-transform duration-500 h-48 relative">
                                    <Image
                                        src={project.images[0]}
                                        alt={`${project.title} : ${locale === 'fr' ? 'aperçu' : 'preview'}`}
                                        fill
                                        sizes="(min-width: 1024px) 400px, (min-width: 768px) 50vw, 100vw"
                                        className="object-cover object-top"
                                    />
                                </div>
                            ) : (
                                <div className="h-48 rounded-xl bg-slate-100 dark:bg-slate-800 mb-6 flex items-center justify-center text-slate-300 dark:text-slate-600">
                                    <Code size={48} />
                                </div>
                            )}

                            <div className="flex justify-between items-start mb-4">
                                <h3 id={`project-card-${i}`} className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                                <div className="flex gap-2">
                                    {project.links.map((link, k) => (
                                        <div key={k} onClick={(e) => e.stopPropagation()} className="contents">
                                            <a href={link.href} target="_blank" rel="noopener noreferrer" aria-label={`${project.title} : ${link.type}`} className="p-2 bg-slate-50 dark:bg-slate-800 rounded-full text-slate-400 hover:bg-indigo-100 hover:text-indigo-600 dark:hover:bg-indigo-900/50 dark:hover:text-indigo-400 transition-colors">
                                                {link.type.includes('Github') ? <Github size={16} /> : <ExternalLink size={16} />}
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <p className="text-slate-600 dark:text-slate-300 text-sm mb-6 flex-1 leading-relaxed line-clamp-3">{project.description}</p>

                            <div className="flex flex-wrap gap-2 mt-auto">
                                {project.technologies.slice(0, 4).map((tech, j) => (
                                    <span key={j} className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                                        {tech}
                                    </span>
                                ))}
                                {project.technologies.length > 4 && (
                                     <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-[10px] font-bold uppercase tracking-wider bg-slate-50 dark:bg-slate-800 text-slate-400 border border-slate-200 dark:border-slate-700">
                                        +{project.technologies.length - 4}
                                    </span>
                                )}
                            </div>
                        </article>
                    ))}
                </div>

                </div>

                {/* Footer CTA */}
                <div className="mt-20 text-center">
                    <p className="text-slate-500 dark:text-slate-400 mb-6">{t('projectsPage.haveIdea')}</p>
                     <a
                        href={`mailto:${DATA.contact.email}`}
                        className="inline-block bg-indigo-600 hover:bg-indigo-500 text-white text-lg font-bold py-4 px-8 rounded-full shadow-xl shadow-indigo-500/20 hover:shadow-indigo-500/30 hover:-translate-y-1 transition-all"
                    >
                        {t('projectsPage.letsDiscuss')}
                    </a>
                </div>

                <ProjectModal
                    project={selectedProject}
                    open={!!selectedProject}
                    onClose={() => setSelectedProject(null)}
                />

            </div>
        </div>
    );
}
