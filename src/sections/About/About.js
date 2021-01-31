import React from 'react';
import Layout from '../../components/Layout/Layout';
import profile from "../../images/photo.jpg"
import config from "../../config/config";

const technologies = ["React", "Node.js", "Express.js", "MongoDB", "MySQL", "Gatbsy", "Jest", "Expo"]

const About = ({ c }) => {
    return (
        <section id="about">
            <Layout title="About">
                <div className="py-4 md:pb-40 flex flex-col items-center md:flex-row-reverse">
                    <div className="bg-primary rounded-full w-4/5 max-w-xs mb-4">
                        <img className="transition duration-300 rounded-full opacity-40 hover:opacity-100" src={profile} alt="profile" />
                    </div>
                    <div className="md:w-4/5 md:pr-12">
                        <p>{c("about.first")} <span className="text-primary">{c("about.second")}</span> {c("about.third")}</p>
                        <p className="mt-2">
                            <span>{c("aboutP2")}</span>
                            <ul className="list-disc col-count-2 mt-2">
                                {technologies.map(tech => (
                                    <li>{tech}</li>
                                ))}
                            </ul>
                        </p>
                    </div>
                </div>
            </Layout>
        </section>
    );
}

export default config(About);