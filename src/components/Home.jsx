function Home({ name, designation }) {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
      style={{ 
        backgroundImage: 'linear-gradient(rgba(15, 23, 42, 0.9), rgba(15, 23, 42, 0.9)), url("https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80")'
      }}
    >
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 animate-fadeIn text-white">{name}</h1>
        <h2 className="text-3xl text-blue-400">{designation}</h2>
      </div>
    </section>
  );
}

export default Home;