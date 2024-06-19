import bg from "../assets/img/home.png";
const About = () => {
  return (
    <>
      <div style={{ backgroundImage: `url(${bg})` }}>
        <div className="container pt-4">
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                Hostel membership
              </h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Clean and well-maintained rooms, available in various
                configurations (single, double, or shared), to suit
                different.High-speed internet access for academic, professional,
                and personal use. budget requirements.On-site washing machines
                and dryers or laundry services to handle residents laundry
                needs.
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                  What’s included
                </h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 leading-6 text-slate-400 hover:text-sky-400 sm:grid-cols-2 sm:gap-6"
              >
                <li className="flex gap-x-3">
                  <img
                    src="src/assets/img/wifi-signal-icon.png"
                    width={50}
                    height={50}
                  ></img>
                  <b>Free wifi</b>
                </li>
                <li className="flex gap-x-3">
                  <img
                    src="src/assets/img/washing-machine-icon.png"
                    width={50}
                    height={50}
                  ></img>
                  <b>Free washing Machine</b>
                </li>
                <li className="flex gap-x-3">
                  <img
                    src="src/assets/img/water-tap-icon.png"
                    width={50}
                    height={50}
                  ></img>
                  <b>24/7 Water</b>
                </li>
                <li className="flex gap-x-3">
                  <img
                    src="src/assets/img/breakfast-icon.png"
                    width={50}
                    height={50}
                  ></img>
                  <b> 3 Time Food</b>
                </li>
              </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-19">
                <div className="mx-auto max-w-xs ">
                  <img src="src/assets/img/3.jpg"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
