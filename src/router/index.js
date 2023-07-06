import { createRouter, createWebHistory } from 'vue-router'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import EventList from '@/components/EventList.vue'
import EventRegistration from '@/components/EventRegistration.vue'
import AdminPage from '@/components/AdminPage.vue'
import HomePage from '@/components/HomePage.vue'
import GalleryPage from '@/components/GalleryPage.vue'

const routes = [
  { path: '/events', component: EventList },
  { path: '/register', component: EventRegistration },
  { path: '/admin', component: AdminPage, meta: { requiresAdmin: true } },
  { path: '/home', component:HomePage },
  { path: '/gallery', component:GalleryPage } 
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const auth = getAuth()
  const requiresAdmin = to.matched.some((record) => record.meta.requiresAdmin)

  onAuthStateChanged(auth, (user) => {
    if (requiresAdmin) {
      if (user) {
        // Check if the user has the admin custom claim
        user.getIdTokenResult()
          .then((idTokenResult) => {
            if (idTokenResult.claims.admin === true) {
              // User is an admin, allow access to the route
              next()
            } else {
              // User is not an admin, redirect to a restricted page or show an error message
              next('/restricted')
            }
          })
          .catch((error) => {
            // Error retrieving custom claims, handle it appropriately
            console.error('Error retrieving custom claims:', error)
            next('/restricted')
          })
      } else {
        // User is not authenticated, redirect to a login page
        next('/login')
      }
    } else {
      // Allow access to routes that don't require admin access
      next()
    }
  })
})

export default router
