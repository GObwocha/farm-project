import { createRouter, createWebHistory } from 'vue-router'
import Admin from '@/components/Admin.vue'
import Home from '@/components/Home.vue'
import Login from '@/components/Login.vue'
import Product from '@/components/Product.vue'
import ProductDetail from '@/components/ProductDetail.vue'
import Profile from '@/components/Profile.vue'
import SellerView from '@/components/SellerView.vue'
import SignUp from '@/components/SignUp.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/admin",
      component: Admin
    },
    {
      path: "/",
      component: Home
    },
    {
      path: "/login",
      component: Login
    },
    {
      path: "/product",
      component: Product
    },
    {
      path: "/product-detail",
      component: ProductDetail
    },
    {
      path: "/profile",
      component: Profile
    },
    {
      path: "/sign-up",
      component: SignUp
    },
    {
      path: "/seller-view",
      component: SellerView
    },
  ],
})

export default router
