import React from 'react';
import useFetchData from '../../hooks/useFetchData';
import Service from '../Service/Service';

const Services = () => {
    const [services, ] = useFetchData("services.json");
    return (
        <section className='py-8'>
            <div className="mx-auto w-5/6">
                <h2 className="text-4xl mb-10 text-center section-title" data-aos="zoom-in" data-aos-duration="500">What I do</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        services.map(service => <Service key={service.id} service={service}/>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;