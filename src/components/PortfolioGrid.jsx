import project1 from "../assets/project1.jpg";
import project2 from "../assets/project3.jpg";
import project3 from "../assets/project4.jpg";

const projects = [
    { id: 1, title: "Project One", img: project1 },
    { id: 2, title: "Project Two", img: project2 },
    { id: 3, title: "Project Three", img: project3 },
];


  
  const PortfolioGrid = () => {
    return (
      <section id="portfolio" className="py-12 bg-gray-100">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Latest Work</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div key={project.id} className="bg-white shadow-lg rounded-lg p-4">
                <img src={project.img} alt={project.title} className="rounded-md" />
                <h3 className="mt-4 font-semibold">{project.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default PortfolioGrid;
  