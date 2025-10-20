function Dashboard({ user, onLogout }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 animate-gradient">
      <div className="max-w-2xl w-full p-8 bg-white rounded-2xl shadow-xl transform transition-all duration-500 ease-in-out animate-fade-in">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-4 rounded-t-2xl">
          <h2 className="text-3xl font-bold text-white text-center font-sans">Dashboard</h2>
        </div>
        <div className="p-6">
          <p className="text-lg text-gray-700 mb-4">Welcome, <span className="font-semibold">{user.userId}</span>!</p>
          <p className="text-gray-600 mb-6">Your role: <span className="font-semibold capitalize">{user.role}</span></p>
          {user.role === 'read-write' ? (
            <div>
              <p className="text-gray-600 mb-4">You can edit content below:</p>
              <textarea
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none transition resize-none"
                placeholder="Edit some content..."
                rows="5"
              ></textarea>
              <button className="mt-4 w-full bg-gradient-to-r from-green-600 to-teal-600 text-white p-3 rounded-lg hover:from-green-700 hover:to-teal-700 transition-all duration-300 transform hover:scale-105">
                Save Changes
              </button>
            </div>
          ) : (
            <p className="text-gray-600 mb-6 bg-gray-50 p-3 rounded-lg">You have read-only access.</p>
          )}
          <button
            onClick={onLogout}
            className="mt-6 w-full bg-gradient-to-r from-red-600 to-pink-600 text-white p-3 rounded-lg hover:from-red-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105"
          >
            Logout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;