import { useState, useMemo } from 'react';
import { ArrowRight, Search } from 'lucide-react';
import { skills } from '../data/skills';

export default function SkillsGrid({ onSkillSelect }: { onSkillSelect: (skillId: string) => void }) {
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredSkills = useMemo(() => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return skills;

    return skills.filter(skill => 
      skill.name.toLowerCase().includes(query) ||
      skill.description.toLowerCase().includes(query) ||
      skill.topics.some(topic => topic.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          What Skill Do You Want To Get Certified In?
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Select the skill you are interested in
        </p>

        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto">
          <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search skills, topics, or keywords..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent transition-colors shadow-sm"
          />
        </div>
      </div>

      {filteredSkills.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-600 dark:text-gray-400">
            No skills found matching "{searchQuery}"
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((skill) => {
            const Icon = skill.icon;
            const isHovered = hoveredSkill === skill.id;

            return (
              <div
                key={skill.id}
                className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
                onMouseEnter={() => setHoveredSkill(skill.id)}
                onMouseLeave={() => setHoveredSkill(null)}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-white/0 dark:from-white/10" />
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{
                    background: `linear-gradient(45deg, ${skill.color}15, ${skill.color}05)`
                  }}
                />
                
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div 
                      className="p-3 rounded-lg"
                      style={{
                        background: `linear-gradient(45deg, ${skill.color}20, ${skill.color}10)`
                      }}
                    >
                      <Icon 
                        className="w-6 h-6 transition-colors duration-300"
                        style={{ color: skill.color }}
                      />
                    </div>
                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                  </div>

                  <p className="text-gray-600 dark:text-gray-400 mb-6 line-clamp-2">
                    {skill.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {skill.topics.map((topic) => (
                      <span
                        key={topic}
                        className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => onSkillSelect(skill.id)}
                    className="w-full relative group/btn flex items-center justify-center gap-2 px-4 py-2 rounded-lg text-white transition-all duration-300 overflow-hidden"
                    style={{
                      background: `linear-gradient(45deg, ${skill.color}, ${skill.color}dd)`
                    }}
                  >
                    <span className="relative z-10">Get Certificate</span>
                    <ArrowRight 
                      className={`w-4 h-4 relative z-10 transition-all duration-300 ${
                        isHovered ? 'translate-x-1 opacity-100' : 'opacity-0 -ml-4'
                      }`}
                    />
                    <div className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 bg-white/20" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}