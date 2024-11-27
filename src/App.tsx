import logoImg from "./images/logo.png";
import heroImg from "./images/hero.svg";
import accelerateImg from "./images/accelerate.png";
import engageImg from "./images/engage.png";
import partnerImg from "./images/partner.png";
function App() {
  return (
    <div>
      {/* header section */}
      <div className="flex flex-row justify-center mt-7">
        <img src={logoImg} alt="logo image" />
      </div>
      {/* introduction section */}
      <div className="mt-12">
        <div className="text-center font-bold text-4xl leading-10 mb-3">
          <p className="text-primary">Digital Finance</p>
          <p className="text-secondary">Accelerated</p>
        </div>
        <p className="mb-4 mt-4 px-14 text-center font-light text-primary leading-6">
          We deliver world class digital platforms that enable your business
          growth and customer acquisition
        </p>
        <p>
          <img src={heroImg} alt="img" />
        </p>

        <div className="text-center mt-8">
          <button className="w-72 h-8 px-14 py-2  bg-primary text-white leading-4 font-bold text-sm rounded-md">
            Tell me more
          </button>
        </div>
      </div>
      {/* advantage section */}
      <div className="mt-16 px-2 text-center">
        <div className="text-center">
          <p className="text-primary leading-6 font-light text-lg">
            The 101 Digital Advantage
          </p>
          <p className="mt-3 text-gray-500 leading-6 font-light text-sm">
            Our ready made (as a Service) platform accelerates your product
            launch
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-14">
          <div className="flex flex-col items-center">
            <div className="max-w-48 text-center">
              <img
                className="block mx-auto"
                src={accelerateImg}
                alt="accelerate image"
              />
              <p className="mt-4 leading-5 font-bold text-base">
                Accelerate your product launch
              </p>
            </div>
            <p className="mt-5 text-gray-500 leading-6 font-light text-sm">
              Use our proven platform and expertise to launch successful digital
              products.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="max-w-48 text-center">
              <img
                className="block mx-auto"
                src={engageImg}
                alt="accelerate image"
              />
              <p className="mt-4 leading-5 font-bold text-base">
                Engage with digital platform experts
              </p>
            </div>
            <p className="mt-5 text-gray-500 leading-6 font-light text-sm">
              Collaborate with a team with a proven track record in delivering
              exceptional digital products.
            </p>
          </div>

          <div className="flex flex-col items-center">
            <div className="max-w-48 text-center">
              <img
                className="block mx-auto"
                src={partnerImg}
                alt="accelerate image"
              />
              <p className="mt-4 leading-5 font-bold text-base">
                Invest in a Partnership
              </p>
            </div>
            <p className="mt-5 text-gray-500 leading-6 font-light text-sm">
              Be empowered by a partnership that complements you every step of
              the way - from ideation to product launch.
            </p>
          </div>
        </div>
      </div>
      {/* approach section */}
      <div className="mt-12 px-2 text-center">
        <div className="text-center">
          <p className="text-primary leading-6 font-light text-lg">
            Our Collaborative Approach
          </p>
          <p className="mt-3 text-gray-500 leading-6 font-light text-sm">
            We follow a simple three step process to turn your idea into a great
            product.
          </p>
        </div>
        <div className="mt-8 ">
          <div className="flex flex-col items-center gap-14">
            <div className="relative p-6 w-72 rounded-md shadow-secondary text-center">
              <div className="absolute top-0 -translate-y-1/2 inset-x-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-3xl shadow-primary bg-white">
                <span className="text-sm font-bold text-primary">1</span>
              </div>
              <p className="mt-2 text-secondary leading-6 font-bold text-sm">
                Discover
              </p>
              <p className="mt-3 text-sm font-normal text-primary">
                Understand your vision for your business and products
              </p>
            </div>

            <div className="relative p-6 w-72 rounded-md shadow-secondary text-center">
              <div className="absolute top-0 -translate-y-1/2 inset-x-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-3xl shadow-primary bg-white">
                <span className="text-sm font-bold text-primary">2</span>
              </div>
              <p className="mt-2 text-secondary leading-6 font-bold text-sm">
                Partner and Co-Create
              </p>
              <p className="mt-3 text-sm font-normal text-primary">
                Leverage our platform to rapidly evolve the products
              </p>
            </div>

            <div className="relative p-6 w-72 rounded-md shadow-secondary text-center">
              <div className="absolute top-0 -translate-y-1/2 inset-x-1/2 -translate-x-1/2 flex items-center justify-center w-12 h-12 rounded-3xl shadow-primary bg-white">
                <span className="text-sm font-bold text-primary">3</span>
              </div>
              <p className="mt-2 text-secondary leading-6 font-bold text-sm">
                Launch
              </p>
              <p className="mt-3 text-sm font-normal text-primary">
                Launch the product to market quickly and continue to refine
              </p>
            </div>
          </div>
          <div className="text-center mt-14">
            <button className="w-80 h-8 px-14 py-2 bg-primary text-white leading-4 font-bold text-sm rounded-md">
              Understand our apporach
            </button>
          </div>
        </div>
      </div>
      {/* section */}
      <div className="mt-14 text-center bg-cover bg-circuit-board-gray py-12">
        <div className="w-72 mx-auto">
          <p className="text-lg font-light text-primary">
            Trusted by global organisations{" "}
          </p>
          <p className="mt-3 text-sm font-light text-gray-500">
            Customers choose 101 Digital for our proven experience and
            accelerated time to market.
          </p>
        </div>
        <div className="text-center mt-14">
          <button className="w-80 h-8 px-14 py-2 border-primary border-2 bg-white text-primary leading-4 font-bold text-sm rounded-md">
            See customer results
          </button>
        </div>
      </div>
      {/* section */}
      <div className="text-center bg-secondary bg-circuit-board-yellow bg-contain py-12">
        <div className="w-96 mx-auto text-3xl leading-10 font-light text-primary px-2">
          <p><span className="text-white">Let's build </span> <span>the next</span></p>
          <p>generation Digital platforms</p>
        </div>
        <div className="text-center mt-12">
            <button className="w-80 h-8 px-14 py-2 bg-primary text-white leading-4 font-bold text-sm rounded-md">
              Talk to us
            </button>
          </div>
      </div>
      {/* Footer */}
      <div className="py-3">
        <p className="text-center text-base font-normal text-gray-500">101Digital &copy; 2024 </p>
      </div>
    </div>
  );
}

export default App;
