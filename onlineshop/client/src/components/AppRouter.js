import React from 'react';
import {Route, Routes} from 'react-router-dom'
import { authRoutes, publicRoutes } from '../routes';


/*
У кого проблема с клиентской частью, когда не рендерится страница на этапе создания Роута:
В новых версиях React Router немного изменилась документация. Switch (в файле по пути components/AppRoutes из урока) заменить 
на => 'Routes'. Так же 'Components' (в строке Route) заменить на => 'element'. Эта строка должна выглядеть 
так: "<Route key={path} path={path} element={<Component/>} exact/>"
Так же для "Redirect". Его в новой версии не импортируем. Вместо него использовать просто: "<Route path="*" element=(<Shop/>)/>".
*/

const AppRouter = () => {
    const isAuth = false
  return (
    <Routes>
        {isAuth && authRoutes.map(({path, Component}) => 
            <Route key={path} path={path} element={<Component/>} exact/>
        )}
        {publicRoutes.map(({path, Component}) => 
            <Route key={path} path={path} element={<Component/>} exact/>
        )}
    </Routes>
  );
};

export default AppRouter;
