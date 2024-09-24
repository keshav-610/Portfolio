import { Box, Typography, } from "@mui/material";
import ProjectCard from "./components/ProjectCard";
import Bank_Mgmt from "../assets/Bank_Mgmt.jpg";
import emplyoyee_tt_logo from "../assets/employee_tt_logo.png"
import connect_4 from "../assets/connect__4.jpeg"
import CGPA_Calculator from "../assets/CGPA_Calculator.jpg"
import chatbot from "../assets/chatbot.png"
import hand_detection from "../assets/hand_detection.png"

const Projects = () => {


  return (
    <section id="projects">
      <Box sx={{
        backgroundColor: "#001f3f",
        height: "auto",
        paddingBottom: "40px",
      }}>
        <Box
          sx={{
            paddingTop: "20px"
          }}>
          <Typography variant="h4" sx={{
            fontFamily: "SF Pro Display Heavy, sans-serif",
            fontStyle: "italic",
            fontWeight: "900",
            textAlign: "center",
            textDecoration: "underline",
            textDecorationColor: "#1f53c2",
            textUnderlineOffset: "15px",
            marginBottom: "35px",
            color: "#ffffff",
            fontSize: { xs: "32px", md: "50px" },
          }}>Projects</Typography>
        </Box>
        <Box sx={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 2, 
          justifyItems: "center",
          alignItems: "center"
        }}>
          <ProjectCard
            image={Bank_Mgmt}
            link="https://github.com/keshav-610/bank_management11-7"
            header="Bank Management System"
            description="Simulated bank functions like balance check, withdrawals, deposits, and transaction history (PDF). Admins manage accounts, customers handle banking."
            tools_used="Java Servlets, MySQL, Apache Tomcat." />
          <ProjectCard
            image={emplyoyee_tt_logo}
            link="https://github.com/keshav-610/employee-time-tracker"
            header="Employee Time Tracker"
            description="This project is used for employees who tracks their work status by checking the assigned tasks by them. The tasks are created by them or their managers. The employee can edit the tasks or delete the tasks if they done."
            tools_used="Java Servlets, MySQL, Apache Tomcat, Chart.js." />
          <ProjectCard
            image={connect_4}
            link="https://github.com/keshav-610/interpe_connect4"
            header="Connect 4"
            description="Connect 4 is a classic two-player game implemented in a web application, allowing users to play against each other in a vibrant and interactive interface using HTML, CSS, and JavaScript."
            tools_used="HTML, CSS, JavaScript"
          />
          <ProjectCard
            image={CGPA_Calculator}
            link="https://github.com/keshav-610/cgpacalculator"
            header="CGPA Calculator through React Native"
            description="This project is done through React Native to calculate the CGPA of a student, and GPA of a semester."
            tools_used="React Native"
          />
          <ProjectCard
            image={chatbot}
            link="https://github.com/keshav-610/chatbot"
            header="Chatbot using AI and NLP"
            description="The chatbot project uses a neural network for NLP, classifies intents from user input, and interacts using speech recognition and text-to-speech to perform tasks like fetching time or web searches."
            tools_used="Python, Pyttorch, Pyttsx3, Neural Network"
          />
          <ProjectCard
            image={hand_detection}
            link="https://github.com/keshav-610/hand-detection"
            header="Hand Detection using Mediapipe"
            description="The project tracks and displays hand landmarks in real-time using OpenCV and MediaPipe, highlighting fingertips, calculating FPS, and visualizing the hand structure with landmarks and connections."
            tools_used="Python, Open CV, Mediapipe"
          />
        </Box>
      </Box>
    </section>
  );
}

export default Projects;
