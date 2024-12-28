import Image from "next/image";

const About = () => {
  return (
    <section className="bg-yellow-50 py-8 md:py-16 px-6 sm:px-12 lg:px-20">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center gap-8 md:gap-28">

        <div className="lg:flex-1 text-center lg:text-left space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 underline">
            About SoundVibe
          </h2>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            At <span className="font-semibold text-yellow-500">SoundVibe</span>, we are committed to bringing you the best in audio technology. Our premium range of headphones is designed to provide crystal-clear sound, immersive experiences, and superior comfort for every music lover.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Our mission is to enhance your audio journey with cutting-edge products that combine performance and style. Whether you&apos;re an audiophile, a casual listener, or someone who loves gaming, we have the perfect pair of headphones for you.
          </p>
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Join us in experiencing the world of sound like never before. With SoundVibe, every note, beat, and sound will feel more vibrant and alive!
          </p>
        </div>

        <div className="lg:flex-1 flex justify-center">
          <Image
            src="/about-head.avif" 
            alt="Premium Headphones"
            width={500}
            height={400}
            className="border-none rounded-3xl"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
