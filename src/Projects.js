import Todo from "./Todo.png";
import Foodzone from "./Foodzone.png";
import TicTacToe from "./TicTacToe.png";
import WeatherApp from "./WeatherApp.png"
import { forwardRef } from "react";

const Projects = forwardRef((props, ref) => {
  return (
    <div ref={ref}>
      <p className="text-center text-2xl underline decoration-purple-700 underline-offset-8">
        Projects
      </p>
      <div className="space-y-8 mt-12">
        {/* Todo List Project */}
        <div className="flex max-tablet:flex-col min-tablet:items-center gap-16">
          <img className="w-72 h-48 rounded-lg" src={Todo} alt="Todo List" />
          <div className="flex-1 space-y-2">
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">
              Todo List
            </h2>
            <h2 className="text-xl font-semibold">
              👉🏻{" "}
              <a
                href="http://todo-list-sand-sigma-15.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
              >
                todo-list-sand-sigma-15.vercel.app
              </a>
            </h2>
            <p>
              Built a responsive and user-friendly <b>Todo List application</b> using <b>JavaScript</b> and <b>Tailwind CSS</b>. 
              The app allows users to efficiently add, delete, and manage daily tasks with a clean and intuitive interface.
            </p>
          </div>
        </div>

        {/* FoodZone Project */}
        <div className="flex max-tablet:flex-col min-tablet:items-center gap-16">
          <img className="w-72 h-48 rounded-lg" src={Foodzone} alt="Food Zone" />
          <div className="flex-1 space-y-2">
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">
              Food Zone
            </h2>
            <h2 className="text-xl font-semibold">
              👉🏻{" "}
              <a
                href="https://food-zone-del.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                food-zone-del.vercel.app
              </a>
            </h2>
            <p>
              Developed a responsive Food Delivery App named <b>FoodZone</b> using <b>React and CSS</b>, 
              featuring dynamic menu rendering, real-time cart updates, and category-based food filtering. 
              The application offers a clean and intuitive user interface with seamless functionality to enhance the user ordering experience.
            </p>
          </div>
        </div>

        {/* Weather App */}
        <div className="flex max-tablet:flex-col min-tablet:items-center gap-16">
          <img className="w-72 h-48 rounded-lg" src={WeatherApp} alt="Food Zone" />
          <div className="flex-1 space-y-2">
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">
              Weather App
            </h2>
            <h2 className="text-xl font-semibold">
              👉🏻{" "}
              <a
                href="https://github.com/Agash2002/Weather-App.git"
                target="_blank"
                rel="noopener noreferrer"
              >
                https://github.com/Agash2002/Weather-App.git
              </a>
            </h2>
            <p>
               Developed a responsive Weather App using <b>React and CSS</b>, 
               featuring real-time weather data fetching, dynamic UI updates based on weather conditions, and a clean, responsive design. 
               The application provides users with accurate, location-based forecasts and a smooth, user-friendly experience.
            </p>
          </div>
        </div>

        {/* Tic Tac Toe Project */}
        <div className="flex max-tablet:flex-col min-tablet:items-center gap-16">
          <img className="w-72 h-48 rounded-lg" src={TicTacToe} alt="Tic Tac Toe" />
          <div className="flex-1 space-y-2">
            <h2 className="text-2xl font-semibold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">
              Tic Tac Toe
            </h2>
            <h2 className="text-xl font-semibold">
              👉🏻{" "}
              <a
                href="https://tic-tac-toe-agashs-projects-71fbf672.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                tic-tac-toe-agashs-projects-71fbf672.vercel.app
              </a>
            </h2>
            <p>
              Developed an interactive game application named <b>Tic Tac Toe</b> using <b>React and CSS</b>, 
              featuring dynamic game state updates, turn-based logic, and win/draw detection. 
              The application provides a clean and responsive user interface with smooth gameplay and real-time visual feedback to enhance the user experience.
            </p>
          </div>
        </div>
      </div>
      <hr className="w-full h-12 mt-20" />
    </div>
  );
});

export default Projects;
