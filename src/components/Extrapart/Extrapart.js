import React from 'react';
import img4 from '../../extra.jpg'
import '../Extrapart/Extrapart.css'

const Extrapart = () => {
    return (
        <div className='container section'>
            <img className='img' src={img4} alt="" />

            <div className='text'>

                <div className="blue-bg"></div>
                <div className="white-bg shadow"></div>
                <div className="content">
                    <h1>Slanted & Enchanted</h1>
                    <p>QUT also offers graduate certificates and short courses. Select from these specialisations or build your own course with units of your choice. Master of Education - Choice of Units. Master of Education - Early Childhood Specialisation. Master of Education - Educational Leadership Specialisation.</p>

                    <p>Praesent eu arcu convallis, faucibus turpis eu, rutrum nisi. Integer rutrum ipsum at aliquam consequat. In dignissim lorem nibh, nec iaculis est fermentum vitae. Maecenas sodales, nunc eget lacinia volutpat, nibh mi lobortis leo, id varius urna tellus
                        ut magna. Sed porttitor nunc et luctus efficitur. Nam sit amet congue nulla. Praesent dapibus erat arcu, at scelerisque arcu faucibus vel. Morbi blandit venenatis elit. Nam feugiat bibendum suscipit. Donec viverra eu lorem eu venenatis.</p>
                </div>



            </div>

        </div >

    );
};

export default Extrapart;