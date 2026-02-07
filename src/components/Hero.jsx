import ShinyText from "./../helpers/ShinyText.jsx";

const Hero = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-[40vh] p-6 md:p-12 animate-blurred-fade-in rounded-3xl bg-gradient-to-r from-zinc-800 to-zinc-700 mx-4 my-6 shadow-xl">
      <div className="max-w-4xl w-full text-center flex flex-col items-center gap-8">
        
        <ShinyText
          text="✨ Te haremos brillar 💎"
          speed={2}
          delay={0}
          color="#b5b5b5"
          shineColor="#ffffff"
          spread={120}
          direction="left"
          yoyo={false}
          pauseOnHover={false}
          disabled={false}
        />
        {/*
        <h1 className="text-5xl md:text-7xl font-google-sans font-bold text-w leading-tight text-gray-100">
          Te haremos brillar 💎
        </h1>
        */}

        <p className="font-google-sans text-xl md:text-2xl text-gray-100 max-w-2xl">
          Alquiler de mesas, sillas, inflables y más para tus eventos especiales
        </p>

        <a href="#contact" className="mt-4">
            <button className=" font-google-sans btn-primary border-2 border-slate-100 rounded-full flex items-center justify-center shadow-lg px-8 py-3 text-lg font-poppins text-slate-100 hover:bg-slate-100 hover:text-zinc-800 transition-all duration-300 cursor-pointer">
                Solicita una cotización
            </button>
        </a>
      </div>
    </section>
  )
}

export default Hero