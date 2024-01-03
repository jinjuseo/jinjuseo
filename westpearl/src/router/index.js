import { createBrowserRouter, createRoutesFromElements,Route } from "react-router-dom";
import { IntroPage,HomePage,MyInfoPage,ContactPage,ProjectsPage } from "../pages";
import {Layout} from "../components";
const router = (
     <Route path ="/">
        <Route index element={<IntroPage/>}/>
        <Route path="westpearl" element={<Layout/>}>
            <Route index element={<HomePage/>}/>
            <Route path="myInfo" element={<MyInfoPage/>}/>
            <Route path="projects" element={<ProjectsPage/>}/>
            <Route path="contact" element={<ContactPage/>}/>
        </Route>
     </Route>
)

const rootRouter = createBrowserRouter(createRoutesFromElements(router));
export default rootRouter;
