import { useState } from "react";
import Navbar from "../components/navbar";
import chocklet from "../assets/images/chocklet.png";
import mango from "../assets/images/mango.png";
import smallmango from "../assets/images/samll-mango.png";
import smallchocklet from "../assets/images/small-chocklet.png";
import smallstawberry from "../assets/images/small-stawberry.png";
import pista from "../assets/images/pista.png";
import smallpista from "../assets/images/small-pista.png";
import stawberry from "../assets/images/stawberry.png";
import { ChevronLeft, ChevronRight, ShoppingCart, User } from "lucide-react";

const Mainpage = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const products = [
    {
      name: "Chocolate Flavour",
      image: chocklet,
      color: "from-[#69331e] via-[#ad5532] to-[#69331e]",
    },
    {
      name: "Mango Flavour",
      image: mango,
      color: "from-orange-500 via-orange-400 to-orange-500",
    },
    {
      name: "Pista Flavour",
      image: pista,
      color: "from-[rgb(124,158,57)] via-[#b3e64d] to-[rgb(124,158,57)]",
    },
    {
      name: "Strawberry Flavour",
      image: stawberry,
      color: "from-[#b62e1f] via-[#e23926] to-[#b62e1f]",
    },
  ];
  const smallproducts = [
    {
      name: "Choco Late",
      images: smallchocklet,
      color: "from-[#69331e] via-[#ad5532] to-[#69331e]",
    },
    {
      name: "Vanilla Dream",
      images: smallmango,
      color: "from-orange-500 via-orange-400 to-orange-500",
    },
    {
      name: "Strawberry Bliss",
      images: smallpista,
      color: "from-[rgb(124,158,57)] via-[#b3e64d] to-[rgb(124,158,57)]",
    },
    {
      name: "Strawberry Bliss",
      images: smallstawberry,
      color: "from-[#b62e1f] via-[#e23926] to-[#b62e1f]",
    },
  ];

  const handleSlideChange = (direction: "next" | "prev") => {
    if (isAnimating) return;

    setIsAnimating(true);
    if (direction === "next") {
      setCurrentSlide((prev) => (prev + 1) % products.length);
    } else {
      setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
    }

    setTimeout(() => setIsAnimating(false), 500);
  };

  return (
    <div
      className={`min-h-screen bg-linear-to-br  ${products[currentSlide].color} overflow-hidden relative transition-all duration-700`}
    >
      {/* Header */}
      <Navbar />

      {/* Main Content */}
      <main className="relative px-20 justify-self-center w-full py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div
            className={`space-y-6 relative z-10 transition-all duration-500 ${
              isAnimating
                ? "opacity-0 translate-x-10"
                : "opacity-100 translate-x-0"
            }`}
          >
            <h1 className="text-white text-7xl font-bold leading-tigh font-main">
              Day Fresh Milk
            </h1>

            <div className="space-y-2 text-white/90">
              <h3 className="text-2xl font-semibold">
                {products[currentSlide].name}
              </h3>
              <div className="flex gap-4 text-sm">
                <span className="font-semibold">Nutrition</span>
                <span>234 kcal</span>
                <span>443.57</span>
              </div>
              <p className="text-sm font-semibold leading-relaxed max-w-md">
                Day Fresh Milk is nature’s pure promise in every drop — fresh,
                clean, and full of life. Made for those who care about what they
                put in their bodies, it’s 100% pure milk, untouched by
                preservatives and rich in natural nutrients. Each sip nourishes
                your strength, fuels your energy, and keeps your day balanced.
                With Day Fresh, you’re not just choosing milk — you’re choosing
                a healthier, fresher way to live.
              </p>
            </div>

            <button className="px-8 py-3 bg-white text-gray-800 rounded-full font-medium hover:bg-gray-100 transition shadow-xl hover:shadow-none duration-500 cursor-pointer">
              Add to cart
            </button>

            <div className="text-white text-4xl font-bold pt-4">$34.50</div>
          </div>

          {/* Right Side - Product Image */}
          <div className="relative flex items-center justify-center">
            {/* Floating Chicklets */}
            <div
              className="absolute top-0 left-12 w-16 h-16 bg-white/20 backdrop-blur-sm rounded-lg transform -rotate-12 animate-float"
              style={{ animationDelay: "0s" }}
            ></div>
            <div
              className="absolute top-24 right-24 w-20 h-20 bg-white/20 backdrop-blur-sm rounded-lg transform rotate-12 animate-float"
              style={{ animationDelay: "0.5s" }}
            ></div>
            <div
              className="absolute bottom-32 left-24 w-12 h-12 bg-white/25 backdrop-blur-sm rounded-lg transform rotate-45 animate-float"
              style={{ animationDelay: "1s" }}
            ></div>
            <div
              className="absolute bottom-48 right-12 w-14 h-14 bg-white/20 backdrop-blur-sm rounded-lg transform -rotate-6 animate-float"
              style={{ animationDelay: "1.5s" }}
            ></div>
            <div
              className="absolute top-48 left-0 w-10 h-10 bg-white/15 backdrop-blur-sm rounded-lg transform rotate-90 animate-float"
              style={{ animationDelay: "0.8s" }}
            ></div>

            {/* Product Bottle */}
            <div
              className={`relative z-10 transition-all duration-500 ${
                isAnimating
                  ? "scale-75 opacity-0 rotate-12"
                  : "scale-100 opacity-100 rotate-0"
              }`}
            >
              <img
                src={products[currentSlide].image}
                alt="DayFresh Milk"
                className="h-[500px] w-auto drop-shadow-2xl object-contain"
              />
            </div>
          </div>
        </div>

        {/* Right Side Controls */}
        <div className="absolute right-8 top-1/2 transform -translate-y-1/2 flex flex-col gap-4 z-20">
          <button className="w-12 h-12 bg-black/20 cursor-pointer backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/30 transition">
            <User size={20} />
          </button>
          <button className="w-12 h-12 bg-black/20 cursor-pointer backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/30 transition">
            <ShoppingCart size={20} />
          </button>
          <button className="w-12 h-12 bg-black/20 cursor-pointer backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/30 transition text-sm font-bold">
            EN
          </button>
        </div>

        {/* Arrow Navigation Controls */}
        <div className="absolute bottom-12 right-8 flex items-center gap-4 z-20">
          <button
            onClick={() => handleSlideChange("prev")}
            disabled={isAnimating}
            className="w-12 h-12 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/30 cursor-pointer transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft size={24} />
          </button>
          <span className="text-white text-2xl font-bold w-8 text-center">
            {currentSlide + 1}
          </span>
          <button
            onClick={() => handleSlideChange("next")}
            disabled={isAnimating}
            className="w-12 h-12 bg-black/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-black/30 cursor-pointer transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        {/* Product Thumbnails */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 flex gap-3 z-20">
          {smallproducts.map((smallproducts, index) => (
            <div
              key={index}
              onClick={() => {
                if (!isAnimating) {
                  setIsAnimating(true);
                  setCurrentSlide(index);
                  setTimeout(() => setIsAnimating(false), 500);
                }
              }}
              className={`w-20 h-22 rounded-xl cursor-pointer border-2 duration-300 hover:border-black/20 overflow-hidden relative ${
                currentSlide === index
                  ? "border-2 border-white"
                  : "border-white/20"
              }`}
            >
              {currentSlide === index && (
                <div
                  className={`absolute inset-0 bg-gradient-to ${smallproducts.color} z-0`}
                ></div>
              )}
              <img
                src={smallproducts.images}
                alt={smallproducts.name}
                className={`w-full h-full  hover:scale-110 duration-700 bg-linear-to-br ${smallproducts.color}  `}
              />
            </div>
          ))}
        </div>
      </main>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(10deg);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Mainpage;
