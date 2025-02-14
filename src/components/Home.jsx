function Home({ name, designation }) {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed relative overflow-hidden"
      style={{ 
        backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9)), url("https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")'
      }}
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 z-0">
        <div className="animate-float absolute top-20 left-20 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="animate-float absolute bottom-20 right-20 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl" style={{animationDelay: '1s'}}></div>
      </div>

      <div className="text-center z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-slideLeft">
          {name}
        </h1>
        <h2 className="text-2xl md:text-3xl text-blue-400 animate-slideRight" style={{animationDelay: '0.5s'}}>
          {designation}
        </h2>
      </div>
    </section>
  );
}

export default Home;