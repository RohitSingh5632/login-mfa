function Dashboard({ user, onLogout }) {
  return (
    <div className="min-h-screen relative flex items-center justify-center overflow-hidden">
      {/* Artistic Background with Multiple Layers */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-900 via-purple-900 to-fuchsia-900"></div>
      
      {/* Animated Geometric Shapes */}
      <div className="absolute inset-0">
        {/* Floating Circles */}
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-violet-400 to-purple-500 rounded-full opacity-20 animate-float-slow"></div>
        <div className="absolute top-40 right-32 w-24 h-24 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-25 animate-float-medium"></div>
        <div className="absolute bottom-32 left-40 w-40 h-40 bg-gradient-to-r from-fuchsia-400 to-rose-500 rounded-full opacity-15 animate-float-fast"></div>
        <div className="absolute bottom-20 right-20 w-28 h-28 bg-gradient-to-r from-pink-400 to-violet-500 rounded-full opacity-20 animate-float-slow"></div>
        
        {/* Floating Triangles */}
        <div className="absolute top-32 left-1/3 w-0 h-0 border-l-8 border-r-8 border-b-16 border-l-transparent border-r-transparent border-b-violet-400 opacity-30 animate-rotate-slow"></div>
        <div className="absolute bottom-40 right-1/3 w-0 h-0 border-l-12 border-r-12 border-b-24 border-l-transparent border-r-transparent border-b-purple-400 opacity-25 animate-rotate-medium"></div>
        
        {/* Floating Squares */}
        <div className="absolute top-1/2 left-16 w-16 h-16 bg-gradient-to-r from-fuchsia-500 to-pink-500 opacity-20 transform rotate-45 animate-pulse-slow"></div>
        <div className="absolute top-1/3 right-16 w-20 h-20 bg-gradient-to-r from-violet-500 to-purple-500 opacity-15 transform rotate-12 animate-pulse-medium"></div>
        
        {/* Particle Effects */}
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-40 animate-twinkle"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-violet-300 rounded-full opacity-50 animate-twinkle-delayed"></div>
        <div className="absolute top-1/2 right-1/2 w-3 h-3 bg-purple-300 rounded-full opacity-30 animate-twinkle-slow"></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-pink-300 rounded-full opacity-45 animate-twinkle-medium"></div>
        
        {/* Wave Patterns */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-purple-800/30 to-transparent animate-wave"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-violet-600/20 to-transparent rounded-full animate-wave-reverse"></div>
      </div>
      
      {/* Main Dashboard Card */}
      <div className="relative z-10 max-w-2xl w-full p-8 bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/20 transform transition-all duration-500 ease-in-out animate-fade-in">
        <div className="bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-lg p-4 rounded-t-2xl border-b border-white/20">
          <h2 className="text-3xl font-bold text-white text-center font-sans drop-shadow-lg">Dashboard</h2>
        </div>
        <div className="p-6">
          <p className="text-lg text-white/90 mb-4 drop-shadow-sm">Welcome, <span className="font-semibold text-white">{user.userId}</span>!</p>
          <p className="text-white/80 mb-6 drop-shadow-sm">Your role: <span className="font-semibold capitalize text-white">{user.role}</span></p>
          {user.role === 'read-write' ? (
            <div>
              <p className="text-white/80 mb-4 drop-shadow-sm">You can edit content below:</p>
              <textarea
                className="w-full p-4 bg-white/20 border border-white/30 rounded-lg focus:ring-2 focus:ring-white/50 focus:outline-none transition resize-none text-white placeholder-white/60 backdrop-blur-sm"
                placeholder="Edit some content..."
                rows="5"
              ></textarea>
              <button className="mt-4 w-full bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-lg text-white p-3 rounded-lg border border-white/30 hover:from-white/30 hover:to-white/20 transition-all duration-300 transform hover:scale-105 shadow-lg">
                Save Changes
              </button>
            </div>
          ) : (
            <p className="text-white/80 mb-6 bg-white/10 backdrop-blur-sm border border-white/20 p-3 rounded-lg drop-shadow-sm">You have read-only access.</p>
          )}
          <button
            onClick={onLogout}
            className="mt-6 w-full bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-lg text-white p-3 rounded-lg border border-white/30 hover:from-white/30 hover:to-white/20 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;