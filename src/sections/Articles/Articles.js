import React from 'react';
import Article from '../../components/Article/Article';
import Layout from '../../components/Layout/Layout';

const Articles = () => {
    return (
        <section id="articles">
            <Layout title="Articles">
                <div className="py-8">
                    <Article
                        href={"google.com"}
                        title={"Composition over Inheritance"}
                        desc={"Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo"}
                    />
                </div>
            </Layout>
        </section>
    );
}

export default Articles;