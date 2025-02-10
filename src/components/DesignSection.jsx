function DesignSection() {
    const designItems = [
      {
        title: "Product Design",
        description: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com.",
        bgColor: "bg-red-300",
        lineColor: "bg-black",
      },
      {
        title: "Visual Design",
        description: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com.",
        bgColor: "bg-red-500",
        lineColor: "bg-black",
      },
      {
        title: "Art Direction",
        description: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com.",
        bgColor: "bg-green-500",
        lineColor: "bg-black",
      },
    ];
  
    return (
      <section className="py-16 bg-white">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
          {designItems.map((item, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Icon Section */}
              <div
                className={`relative w-20 h-20 ${item.bgColor} rounded-tl-[50%] rounded-tr-[50%] rounded-bl-[50%] flex items-center justify-center`}
              >
                {/* Vector Line */}
                <div className="absolute w-8 h-0.5 rotate-45 bg-black top-[50%] left-[30%]"></div>
                <div className="absolute w-2 h-2 rounded-full bg-black top-[50%] left-[25%]"></div>
                <div className="absolute w-2 h-2 rounded-full bg-black top-[40%] left-[50%]"></div>
              </div>
  
              {/* Text Section */}
              <h3 className="text-xl font-bold text-gray-900 mt-6">{item.title}</h3>
              <p className="text-gray-600 mt-2 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    );
  }
  
  export default DesignSection;
  