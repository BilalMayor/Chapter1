import Image from "next/image";

export default function Page() {
  return (
    <div className="font- bg-blue-400 text-white-900">
      {/* NAVBAR */}
      <nav className="flex justify-between items-center px-10 py-3
       shadow-sm">
        <h1 className="text-xl font-bold text-yellow-500">🐪🐫</h1>
        <ul className="hidden md:flex space-x-8"> 
          <li><a href="#">Home</a></li>
          <li><a href="#">Pages</a></li>
          <li><a href="#">Services</a></li>
          <li><a href="#">Portfolio</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
        <button className="bg-red-400 px-5 py-2 rounded-md font-bold">Hire Me</button>
      </nav>

      {/* HERO */}
      <section className="grid md:grid-cols-2 gap-10 items-center px-10 py-20 bg-white">
        <div>
          <h2 className="text-4xl font-bold mb-3 text-black">Hi! I&apos;m <span className="text-red-500">Bilal</span></h2>
          <h3 className="text-2xl text-black mb-6">UI/UX Designer</h3>
          <p className="text-black mb-6">
            I create beautiful and functional user interfaces with modern design principles.
          </p>
          <div className="space-x-4">
            <button className="bg-red-400 px-6 py-3 rounded-md font-bold">Hire Me</button>
            <button className="bg-gray-400-border px-6 py-3 rounded-md font-bold">See My Work</button>
          </div>
        </div>
        <div className="flex justify-center">
          <Image 
  src="/image/Dora.png" width={300}height={400} alt="Hero"className="rounded-md" 
/>

        </div>
      </section>

      {/* CATEGORY BUTTONS */}
      <section className="flex justify-center space-x-6 py-10 bg-blue-400">
        <button className="px-6 py-3 bg-yellow-400 font-bold border rounded-md">UI/UX Design</button>
        <button className="px-6 py-3 border rounded-md">Photography</button>
        <button className="px-6 py-3 border rounded-md">Freelance</button>
      </section>

      {/* ABOUT */}
      <section className="grid md:grid-cols-2 gap-10 px-10 py-20 items-center bg-white">
        <div className="relative">
          <Image src="/image/Dora.png" width={400} height={400} alt="Girl" className="rounded-md"/>
          <span className="absolute top-10 left-10 text-5xl font-bold text-yellow-500"></span>
        </div>
        <div>
          <h3 className="text-2xl font-bold mb-4 text-black">Need Creative Design? <br/> I can Help You!</h3>
          <p className="text-black    mb-6">
            I have experience in UI/UX design, graphic design, branding, and photography. 
            I create designs that are not only visually appealing but also user-friendly.
          </p>
          <div className="flex space-x-4">
            <a href="#"><Image src="/facebook.svg" alt="fb" width={30} height={30}/></a>
            <a href="#"><Image src="/twitter.svg" alt="tw" width={30} height={30}/></a>
            <a href="#"><Image src="/instagram.svg" alt="ig" width={30} height={30}/></a>
            <a href="#"><Image src="/linkedin.svg" alt="in" width={30} height={30}/></a>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="px-10 py-20 bg-gray-50">
        <h3 className="text-2xl font-bold mb-10 text-center text-black">What My Design Skills Included</h3>
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <div className="mb-6">
              <p className="flex justify-between font-semibold text-black">UI/UX Design <span>90%</span></p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-yellow-400 h-2 rounded-full w-[90%]"></div>
              </div>
            </div>
            <div className="mb-6">
              <p className="flex justify-between font-semibold text-black">Graphic Design <span>85%</span></p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-yellow-400 h-2 rounded-full w-[85%]"></div>
              </div>
            </div>
            <div className="mb-6">
              <p className="flex justify-between font-semibold text-black">Motion Design <span>80%</span></p>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-yellow-400 h-2 rounded-full w-[80%]"></div>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6 text-center">
            <div className="p-6 bg-white shadow rounded-lg text-black">
              <h4 className="font-bold">UI/UX Design</h4>
            </div>
            <div className="p-6 bg-white shadow rounded-lg text-black">
              <h4 className="font-bold">Graphic Design</h4>
            </div>
            <div className="p-6 bg-white shadow rounded-lg text-black">
              <h4 className="font-bold">Motion Design</h4>
            </div>
            <div className="p-6 bg-white shadow rounded-lg text-black">
              <h4 className="font-bold">Photo Retouch</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}