//import { registration } from "../../server/controllers/userController"
import Cart from "./pages/Cart"
import Shop from "./pages/Shop";
import Auth from "./pages/Auth";
import ItemPage from "./pages/ItemPage";
import Admin from "./pages/Admin";
import { ADMIN_ROUTE, CART_ROUTE, ITEM_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from "./utils/consts"

export const authRoutes = [ //страницы только для авторизованных пользователей
    {
       path: ADMIN_ROUTE, //ссылка по которой будет отработка
       Component: Admin  //и сама страница
    },
    {
        path: CART_ROUTE, //ссылка по которой будет отработка
        Component: Cart  //и сама страница
     },
]

export const publicRoutes = [
    {
        path: SHOP_ROUTE, //ссылка по которой будет отработка
        Component: Shop  //и сама страница
     },
     {
         path: LOGIN_ROUTE, //ссылка по которой будет отработка
         Component: Auth //и сама страница
      },
      {
        path: REGISTRATION_ROUTE, //ссылка по которой будет отработка
        Component: Auth  //и сама страница
     },
     {
         path: ITEM_ROUTE + '/:id', //ссылка по которой будет отработка
         Component: ItemPage  //и сама страница
      },
]