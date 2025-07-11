export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-lg border-b-4 border-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <h1 className="text-2xl font-bold text-blue-900">
                  National Fashionista League
                </h1>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#" className="text-blue-900 hover:text-red-700 px-3 py-2 text-sm font-medium">
                  Home
                </a>
                <a href="#" className="text-blue-900 hover:text-red-700 px-3 py-2 text-sm font-medium">
                  Weekly Analysis
                </a>
                <a href="#" className="text-blue-900 hover:text-red-700 px-3 py-2 text-sm font-medium">
                  Team History
                </a>
                <a href="#" className="text-blue-900 hover:text-red-700 px-3 py-2 text-sm font-medium">
                  About
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="relative bg-blue-900 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-blue-900 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <div className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Where Football</span>
                  <span className="block text-yellow-400 xl:inline"> Meets Fashion</span>
                </h1>
                <p className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Deep dive into the sartorial choices that define NFL teams. From throwback jerseys to 
                  Color Rush decisions, we analyze the strategy behind every uniform choice.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  <div className="rounded-md shadow">
                    <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-900 bg-yellow-400 hover:bg-yellow-300 md:py-4 md:text-lg md:px-10">
                      Latest Analysis
                    </a>
                  </div>
                  <div className="mt-3 sm:mt-0 sm:ml-3">
                    <a href="#" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-yellow-400 bg-blue-800 hover:bg-blue-700 md:py-4 md:text-lg md:px-10">
                      Team Archives
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <div className="h-56 w-full bg-gray-300 sm:h-72 md:h-96 lg:w-full lg:h-full flex items-center justify-center">
            <div className="text-gray-500 text-lg">
              [Hero Image: Dynamic NFL Game Action]
            </div>
          </div>
        </div>
      </div>

      {/* Featured Content */}
      <div className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-red-700 font-semibold tracking-wide uppercase">
              This Week in NFL Fashion
            </h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Uniform Choices That Matter
            </p>
          </div>

          <div className="mt-10">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {/* Feature 1 */}
              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-red-700">
                <div className="w-12 h-12 bg-blue-900 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">🏈</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Weekly Game Analysis
                </h3>
                <p className="text-gray-600">
                  Breaking down each team's uniform choices and the strategy behind their decisions.
                </p>
              </div>

              {/* Feature 2 */}
              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-900">
                <div className="w-12 h-12 bg-red-700 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold">📚</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Historical Archives
                </h3>
                <p className="text-gray-600">
                  Explore the evolution of NFL uniforms from classic designs to modern innovations.
                </p>
              </div>

              {/* Feature 3 */}
              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-yellow-400">
                <div className="w-12 h-12 bg-yellow-400 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-blue-900 font-bold">⭐</span>
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">
                  Eagles Focus
                </h3>
                <p className="text-gray-600">
                  Special coverage of Philadelphia Eagles uniform choices and their impact on the game.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-blue-900">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-white text-lg font-semibold">
              National Fashionista League
            </h3>
            <p className="mt-2 text-gray-300">
              Where every uniform tells a story.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}