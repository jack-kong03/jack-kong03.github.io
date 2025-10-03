import React from "react";
import profilePic from '../../assets/profile.jpg';

export const About = () => {

    const frontendSkills = [
        "HTML", "CSS", "JavaScript", "React", "Vue.js", "Tailwind CSS", "Bootstrap"
    ];

    const backendSkills = [
        "Node.js", "Django", "Flask", "Ruby on Rails", "Spring Boot"
    ];

    const databaseSkills = [
        "MySQL", "PostgreSQL", "MongoDB", "Redis", "SQLite"
    ];

    const cloudSkills = [
        "Azure", "Google Cloud", "Docker", "Kubernetes"
    ];

    const aiMlSkills = [
        "Python", "TensorFlow", "PyTorch", "scikit-learn", "Pandas"
    ]; 

    return <section id="about" className="min-h-screen flex items-center justify-center py-20">
        <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
                About Me</h2>

                <div className="rounded-xl p-8 border-white/10 border hover:-translate-y-1 transition-all">
                    <div className="flex flex-col items-center mb-6">
                        <img 
                            src={profilePic} 
                            alt="Jack Kong" 
                            className="w-50 h-50 rounded-full object-cover shadow-lg mb-4"
                        />
                    </div>
                    <p className="text-gray-300 text-center justify-center mb-6">
                        First Class Honours graduate from the Sheffield Hallam University with a BSc in Computing (Smart Technologies).
                    </p>
                    <p className="text-gray-300 text-center justify-center mb-6">
                        A Passionate Developer with expertise in AI/ML, cloud computing, IoT, and full-stack development. 
                        I thrive on creating innovative, data-driven solutions that address real-world challenges. 
                        With a strong foundation in both front-end and back-end technologies, 
                        I build scalable and efficient applications that deliver exceptional user experiences.
                    </p>

                    <div className="gird grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="rounded-xl p-6 hover:-translate-y-1 transition-all">
                            <h3 className="text-xl font-bold mb-4">Technical Skills</h3>
                        </div>
                    </div>
                </div>
        </div>
    </section>
};