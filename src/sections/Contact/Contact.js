import React from 'react';
import Button from '../../components/Button/Button';
import ContactForm from '../../components/ContactForm/ContactForm';
import Layout from '../../components/Layout/Layout';
import SocialRow from '../../components/SocialRow/SocialRow';

const Contact = () => {
    return (
        <section className="pt-80" id="contact">
            <Layout title="Contact">
                <div className="flex flex-col lg:flex-row">
                    <div className="mt-6 lg:mt-0 lg:w-5/12">
                        <p>I am always looking for new opportunities to connect with new people and being part of amazing projects. If you have an idea in mind that you want to make true with code do not hesitate to contact me.</p>
                        <div className="my-6 md:my-12" >
                            <SocialRow />
                        </div>
                        <Button onClick={() => window.open("mailto:raulstuf@gmail.com")}>Send Email</Button>
                    </div>
                    <p className="py-8 lg:hidden">Or you could fill this form</p>
                    <div className="lg:w-7/12 lg:pl-6">
                        <ContactForm />
                    </div>
                </div>
            </Layout>
        </section>
    );
}

export default Contact;