import SectionHeader from '../common/SectionHeader';
import SkillCategory from '../common/SkillCategory';
import { skills } from '../../data/skills';

const skillCategories = [
    { title: 'Programming Languages', data: skills.programmingLanguages },
    { title: 'Backend Development', data: skills.backend },
    { title: 'Frontend Development', data: skills.frontend },
    { title: 'Data Management Systems', data: skills.databases },
    { title: 'Scraping and Automation', data: skills.scraping },
];

const Skills = () => (
    <section id="skills" className="py-16 section-padding">
        <div className="max-w-6xl mx-auto">
            <SectionHeader subtitle="Explore My" title="Skills" />

            <div className="grid md:grid-cols-2 gap-8">
                {skillCategories.map((cat, i) => (
                    <SkillCategory key={cat.title} title={cat.title} skills={cat.data} index={i} />
                ))}
            </div>

            {/* Tools — full-width row */}
            <div className="mt-8">
                <SkillCategory
                    title="Tools & Technologies"
                    skills={skills.tools}
                    index={skillCategories.length}
                />
            </div>
        </div>
    </section>
);

export default Skills;
