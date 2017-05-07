import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import HomePage from './components/home/HomePage';
import AboutPage from './components/about/AboutPage';
import CoursesPage from './components/course/CoursesPage';
import ManageCoursePage from './components/course/ManageCoursePage';
import SignupPage from './components/signup/SignupPage';
import LoginPage from './components/login/LoginPage';
import WorkshopsPage from './components/workshop/WorkshopsPage';
import ManageWorkshopEventPage from './components/workshop/ManageWorkshopEventPage';
import GamesPage from './components/game/GamesPage';
import ManageGamePage from './components/game/ManageGamePage';

import requireAuth from './utils/requireAuth';

export default (
  <Route path="/" component={App}>
    <IndexRoute
      component={HomePage} />
    <Route path="courses" component={CoursesPage} />
    <Route path="course" component={ManageCoursePage} />
    <Route path="course/:id" component={ManageCoursePage} />
    <Route path="about" component={AboutPage} />
    <Route path="signup" component={SignupPage} />
    <Route path="login" component={LoginPage} />
    <Route path="workshops"
      component={requireAuth(WorkshopsPage)} />
    <Route path="workshop"
      component={requireAuth(ManageWorkshopEventPage)} />
    <Route path="/games" component={GamesPage} />
    <Route path="/game" component={ManageGamePage} />
    <Route path="/game/:id" component={ManageGamePage} />
</Route>
);
