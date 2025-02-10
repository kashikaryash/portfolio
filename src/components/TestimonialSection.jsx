import { FaStar, FaRegStar } from "react-icons/fa";
import PropTypes from 'prop-types';

const testimonials = [
    { id: 1, name: "Yash Kashikar", text: "This service is outstanding! It exceeded my expectations.", rating: 5 },
    { id: 2, name: "Prajwal Vaychal", text: "Amazing experience, highly recommended!", rating: 4 },
    { id: 3, name: "Bhavna Charate", text: "Great quality and excellent support.", rating: 5 },
    { id: 4, name: "Vaishnavi Bhosale", text: "Very satisfied with the results!", rating: 4 },
    { id: 5, name: "Vaishnavi Shigvan", text: "Fast delivery and top-notch service!", rating: 5 },
    { id: 6, name: "Juhi Thakur", text: "Will definitely work with them again.", rating: 4 },
];

const StarRating = ({ rating }) => {
    return (
        <div className="flex text-yellow-500">
            {[...Array(5)].map((_, index) => (
                index < rating ? <FaStar key={index} /> : <FaRegStar key={index} />
            ))}
        </div>
    );
};

StarRating.propTypes = {
    rating: PropTypes.number.isRequired,
};

const TestimonialSection = () => {
    return (
        <section id="testimonials" className="py-12 bg-gray-50">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl font-bold text-center mb-8">What Our Clients Say</h2>

                <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-6">
                    {testimonials.map((testimonial, index) => (
                        <div 
                            key={testimonial.id} 
                            className={`bg-white shadow-lg rounded-lg p-6 text-center 
                            ${index >= testimonials.length - 2 ? 'md:col-span-2' : ''}`}
                        >
                            {testimonial.image && (
                                <img src={testimonial.image} alt={testimonial.name} className="w-16 h-16 rounded-full mx-auto mb-4" />
                            )}
                            <h3 className="font-semibold text-lg">{testimonial.name}</h3>
                            <p className="text-gray-600 mt-2">{testimonial.text}</p>
                            <div className="mt-3">
                                <StarRating rating={testimonial.rating} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TestimonialSection;
