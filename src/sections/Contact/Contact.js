import React from 'react';
import ContactForm from '../../components/ContactForm/ContactForm';
import Layout from '../../components/Layout/Layout';

const Contact = () => {
    return (
        <section className="pt-80" id="contact">
            <Layout title="Contact">
                <ContactForm />
            </Layout>
        </section>
    );
}

export default Contact;