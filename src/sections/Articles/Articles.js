import React from 'react';
import Article from '../../components/Article/Article';
import Layout from '../../components/Layout/Layout';
import { articles } from "./articlesList";
import Button from "../../components/Button/Button";

const Articles = () => {
    return (
        <section id="articles">
            <Layout title="Articles">
                <div className="py-8 flex flex-col sm:flex-row flex-wrap w-100">
                    {articles.map(({ href, title, desc }) => (
                        <Article
                            href={href}
                            title={title}
                            desc={desc}
                        />
                    ))}
                </div>
                <Button
                    className="m-auto center-horizontal"
                    onClick={() => window.open("http://dev.to/rjchirinos/", "_blank")}
                >
                    View more
                </Button>
            </Layout>
        </section>
    );
}

export default Articles;