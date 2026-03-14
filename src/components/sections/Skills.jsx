import SectionHeader from '../common/SectionHeader';
import SkillCategory from '../common/SkillCategory';
import { skills } from '../../data/skills';

const skillCategories = [
    { title: 'Backend', data: skills.backend },
    { title: 'Frontend', data: skills.frontend },
    { title: 'Infrastructure', data: skills.infrastructure },
    { title: 'Automation', data: skills.automation },
];

const Skills = () => (
    <section id="skills" className="py-16 section-padding">
        <div className="max-w-6xl mx-auto">
            <SectionHeader subtitle="Engineering Toolkit" title="Skills" />

            <div className="grid md:grid-cols-2 gap-8">
                {skillCategories.map((cat, i) => (
                    <SkillCategory key={cat.title} title={cat.title} skills={cat.data} index={i} />
                ))}
            </div>
        </div>
    </section>
);

export default Skills;
