import React from "react";
import heroImage from "../assets/heroImage2.png";

const HeroSection = () => {
    return (
        <section
            className="relative w-full h-[80vh] bg-cover bg-center flex items-center justify-start px-10 md:px-20"
            style={{
                zIndex:"-100",
                marginTop:"-55px",
                backgroundImage: `url(${heroImage})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                filter: "contrast(1.15)", 
            }}
        >
            <div className="mt-6">
                <button
                    className=" mt-67 ml-38 w-full bg-[#264d9cd5] hover:bg-[#001b739f] text-white px-6 py-3 rounded-full font-semibold shadow-md transition-all duration-300"
                >
                    Contact Us
                </button>
            </div>
        </section>
    );
};

export default HeroSection;
