import React from "react";
import { BrowserRouter as HashRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import CoursesPage from "./pages/CoursesPage";
import MentorsPage from "./pages/MentorsPage";
import BootcampPage from "./pages/BootcampPage";
import PortfolioPage from "./pages/PortfolioPage";
import AdmissionsPage from "./pages/AdmissionsPage";
import AlumniSuccessPage from "./pages/AlumniSuccessPage";
import CareerSupportPage from "./pages/CareerSupportPage";
import VisionPhilosophyPage from "./pages/VisionPhilosophyPage";
import WhyChooseUsPage from "./pages/WhyChooseUsPage";
import VisualCommunicationPage from "./pages/courses/VisualCommunicationPage";
import UiUxPage from "./pages/courses/UiUxPage";
import AnimationVfxPage from "./pages/courses/AnimationVfxPage";
import VideoEditingPage from "./pages/courses/VideoEditingPage";
import GraphicDesignCareer from "./pages/careers/GraphicDesignCareer";
import AnimationCareer from "./pages/careers/AnimationCareer";
import VideoEditingCareer from "./pages/careers/VideoEditingCareer";
import UiUxCareer from "./pages/careers/UiUxCareer";
import Brochure from "./components/Brochure";
import ProjectDetails from "./pages/ProjectDetails";
import NotFound from "./pages/NotFound";

const App: React.FC = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="vision-philosophy" element={<VisionPhilosophyPage />} />
          <Route path="why-choose-us" element={<WhyChooseUsPage />} />
          <Route path="portfolio" element={<PortfolioPage />} />
          <Route path="programs" element={<CoursesPage />} />
          <Route
            path="programs/visual-communication"
            element={<VisualCommunicationPage />}
          />
          <Route path="programs/ui-ux-design" element={<UiUxPage />} />
          <Route path="programs/animation-vfx" element={<AnimationVfxPage />} />
          <Route path="programs/video-editing" element={<VideoEditingPage />} />
          <Route
            path="careers/graphic-design"
            element={<GraphicDesignCareer />}
          />
          <Route path="careers/animation" element={<AnimationCareer />} />
          <Route
            path="careers/video-editing"
            element={<VideoEditingCareer />}
          />
          <Route path="careers/ui-ux" element={<UiUxCareer />} />
          <Route path="mentors" element={<MentorsPage />} />
          <Route path="bootcamp" element={<BootcampPage />} />
          <Route path="admissions" element={<AdmissionsPage />} />
          <Route path="alumni" element={<AlumniSuccessPage />} />
          <Route path="career-support" element={<CareerSupportPage />} />
          <Route path="*" element={<Home />} />
          <Route path="brochure" element={<Brochure />} />
          <Route path="portfolio/:projectId" element={<ProjectDetails />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;
