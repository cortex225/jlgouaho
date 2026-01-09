'use client';

import React from 'react';
import { 
    Code, ArrowLeft, ExternalLink, Github
} from 'lucide-react';
import { getData } from '@/data/resume';
import Link from 'next/link';
import Image from 'next/image';
import { ModeToggle } from '@/components/mode-toggle';

import { ProjectModal } from '@/components/project-modal';

export default function ProjectsPage({ params: { locale } }: { params: { locale: string } }) {
    const DATA = getData(locale as 'en' | 'fr');
    const [selectedCategories, setSelectedCategories] = React.useState<string[]>(['All']);
    const [selectedProject, setSelectedProject] = React.useState<any>(null);

    const categories = React.useMemo(() => {
        const techs = new Set<string>();
        DATA.projects.forEach(project => {
            (project.technologies as readonly string[]).forEach(tech => techs.add(tech));
        });
        return ['All', ...Array.from(techs)].sort();
    }, [DATA.projects]);

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
        return DATA.projects.filter(project => 
            selectedCategories.every(cat => (project.technologies as readonly string[]).includes(cat))
        );
    }, [DATA.projects, selectedCategories]);

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
                        <span className="font-bold">Back to Profile</span>
                    </Link>
                    <ModeToggle />
                </div>

                <div className="text-center mb-10">
                     <div className="inline-flex items-center justify-center w-16 h-16 rounded-3xl bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 mb-6 shadow-lg shadow-indigo-500/20">
                        <Code size={32} />
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">All Projects</h1>
                    <p className="text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
                        A complete collection of my work, experiments, and open source contributions.
                    </p>
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => toggleCategory(category)}
                            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 border ${
                                selectedCategories.includes(category)
                                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-lg shadow-indigo-500/30 scale-105'
                                    : 'bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800'
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {filteredProjects.map((project, i) => (
                        <div 
                            key={i} 
                            onClick={() => setSelectedProject(project)}
                            className="group bg-white dark:bg-slate-900 rounded-[2rem] p-6 border border-white dark:border-slate-800 shadow-sm hover:shadow-xl hover:shadow-indigo-500/5 transition-all duration-300 flex flex-col h-full animate-in fade-in zoom-in duration-500 fill-mode-both cursor-pointer" 
                            style={{ animationDelay: `${i * 100}ms` }}
                        >
                            
                            {project.images && project.images.length > 0 ? (
                                    <div className="rounded-xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-800 mb-6 group-hover:scale-[1.02] transition-transform duration-500 h-48 relative">
                                    <Image 
                                        src={project.images[0]} 
                                        alt={project.title} 
                                        fill
                                        className="object-cover object-top"
                                    />
                                </div>
                            ) : (
                                <div className="h-48 rounded-xl bg-slate-100 dark:bg-slate-800 mb-6 flex items-center justify-center text-slate-300 dark:text-slate-600">
                                    <Code size={48} />
                                </div>
                            )}

                            <div className="flex justify-between items-start mb-4">
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">{project.title}</h3>
                                <div className="flex gap-2">
                                    {project.links.map((link, k) => (
                                        <div key={k} onClick={(e) => e.stopPropagation()} className="contents">
                                            <a href={link.href} target="_blank" rel="noopener noreferrer" className="p-2 bg-slate-50 dark:bg-slate-800 rounded-full text-slate-400 hover:bg-indigo-100 hover:text-indigo-600 dark:hover:bg-indigo-900/50 dark:hover:text-indigo-400 transition-colors">
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
                        </div>
                    ))}
                </div>

                {/* Footer CTA */}
                <div className="mt-20 text-center">
                    <p className="text-slate-500 dark:text-slate-400 mb-6">Have an idea for a project?</p>
                     <button 
                        onClick={() => window.open(`mailto:${DATA.contact.email}`)}
                        className="bg-indigo-600 hover:bg-indigo-500 text-white text-lg font-bold py-4 px-8 rounded-full shadow-xl shadow-indigo-500/20 hover:shadow-indigo-500/30 hover:-translate-y-1 transition-all"
                    >
                        Let&apos;s Discuss
                    </button>
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
