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
import CanvasPage from './components/canvas/CanvasPage';
import BootstrapPage from './components/bootstrap/BootstrapPage';
import MotionPage from './components/motion/MotionPage0';
import StarbucksPage from './components/starbucks/StarbucksPage';
import ManageStarbucksPage from './components/starbucks/ManageStarbucksPage';
import ManagePlayerPage from './components/player/ManagePlayerPage';
import PlayersPage from './components/player/PlayersPage';
import ManageTripPage from './components/trip/ManageTripPage';
import TripsPage from './components/trip/TripsPage';
import ManageWebglPage from './components/webgl/ManageWebglPage';
import List from './components/pagination/List';
import CorrelationCoefficient from './components/CorrelationCoefficient/CorrelationCoefficient';
import ManageMyComponent from './components/MyComponent/ManageMyComponent';
import DropDownMenu from './components/material-ui-DropDownMenu/DropDownMenu';
import javeScriptGametopPage from './components/javeScriptGame/javeScriptGametopPage';
import ManageSchoolPage from './components/school/ManageSchoolPage';
import yourFirstComponent from './components/GettingStarted/yourFirstComponent';
import CardsPage from './components/WorkingWithData/CardsPage';

//WorkshopsPageはrequireAuthを通らないと表示しない
import requireAuth from './utils/requireAuth';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage} />
    <Route path="courses" component={CoursesPage} />
    <Route path="course" component={ManageCoursePage} />
    <Route path="course/:id" component={ManageCoursePage} />
    <Route path="about" component={AboutPage} />
    <Route path="signup" component={SignupPage} />
    <Route path="login" component={LoginPage} />
    <Route path="workshops" component={requireAuth(WorkshopsPage)} />
    <Route path="workshop" component={requireAuth(ManageWorkshopEventPage)} />
    <Route path="/games" component={GamesPage} />
    <Route path="/game" component={ManageGamePage} />
    <Route path="/game/:id" component={ManageGamePage} />
    <Route path="/canvas" component={CanvasPage} />
    <Route path="/bootstrap" component={BootstrapPage} />
    <Route path="/motion" component={MotionPage} />
    <Route path="/starbucksMenus" component={StarbucksPage} />
    <Route path="/starbucks" component={ManageStarbucksPage} />
    <Route path="/starbucks/:id" component={ManageStarbucksPage} />
    <Route path="/player" component={ManagePlayerPage} />
    <Route path="/player/:id" component={ManagePlayerPage} />
    <Route path="/players" component={PlayersPage} />
    <Route path="/trip" component={ManageTripPage} />
    <Route path="/trips" component={TripsPage} />
    <Route path="/trip/:id" component={ManageTripPage} />
    <Route path ="/webgl" component={ManageWebglPage} />
    <Route path ="/list" component={List} />
    <Route path ="/CorrelationCoefficient" component={CorrelationCoefficient} />
    <Route path ="/ManageMyComponent" component={ManageMyComponent} />
    <Route path ="/DropDownMenu" component={DropDownMenu} />
    <Route path ="/javeScriptGametopPage" component={javeScriptGametopPage} />
    <Route path ="/ManageSchoolPage" component={ManageSchoolPage} />
    <Route path ="/yourFirstComponent" component={yourFirstComponent} />
    <Route path ="/CardsPage" component={CardsPage} />
    </Route>

);
