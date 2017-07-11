/**
 * @Author: Anthony Perry
 * @Date:   2017-07-10T16:27:57-05:00
 * @Email:  atperry7@gmail.com
 * @Filename: loginhook.run.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-10T16:28:01-05:00
 */

 export const run =
   ($transitions, loginService) => {
     'ngInject'

     let requiresAuthCriteria = {
       to: (state) => state.data && state.data.requiresAuth
     }

     let redirectToLogin = (transition) => {
       let loginService = transition.injector().get('loginService')
       let $state = transition.router.stateService
       if (!loginService.isAuthenticated()) {
         return $state.target('login', undefined, { location: false })
       }
     }

     $transitions.onBefore(requiresAuthCriteria, redirectToLogin, {priority: 10})
   }