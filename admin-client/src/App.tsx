import React from 'react'
import { Loader } from '@mantine/core'
import { Navigate, Route, Routes } from 'react-router-dom'

const Home = React.lazy(() => import('./pages/home'))
const Achievements = React.lazy(() => import('./pages/aboutUs/achievements'))
const Events = React.lazy(() => import('./pages/aboutUs/events'))
const Testimonials = React.lazy(() => import('./pages/aboutUs/testimonials'))
const Notices = React.lazy(() => import('./pages/academic/notices'))
const PhdScholars = React.lazy(() => import('./pages/academic/phdScholars'))
const Students = React.lazy(() => import('./pages/academic/students'))
const Placements = React.lazy(() => import('./pages/placement'))
const Projects = React.lazy(() => import('./pages/research/projects'))
const Publications = React.lazy(() => import('./pages/research/publications'))
const ResearchArea = React.lazy(() => import('./pages/research/researchArea'))

export const userLoggedIn = false

const App = () => {
  if (userLoggedIn) {
    return (
      <React.Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/about-us/achievements" element={<Achievements />} />
          <Route path="/about-us/events" element={<Events />} />
          <Route path="/about-us/testimonials" element={<Testimonials />} />

          <Route path="/academic/notices" element={<Notices />} />
          <Route path="/academic/phd-scholars" element={<PhdScholars />} />
          <Route path="/academic/students" element={<Students />} />

          <Route path="/placements" element={<Placements />} />

          <Route path="/research/projects" element={<Projects />} />
          <Route path="/research/publications" element={<Publications />} />
          <Route path="/research/research-area" element={<ResearchArea />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </React.Suspense>
    )
  } else {
    return (
      <React.Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </React.Suspense>
    )
  }
}

export default App