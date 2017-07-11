/**
 * @Author: Christian Schmitt
 * @Date:   2017-07-11T12:37:53-05:00
 * @Email:  crschmit@gmail.com
 * @Filename: post.component.js
 * @Last modified by:   Anthony Perry
 * @Last modified time: 2017-07-11T18:13:57-05:00
 */

import 'post/post.styles'
import templateUrl from 'post/post.template'

const controller =
  class TwtrPostController {
    constructor ($log, postService, $state, loginService) {
      'ngInject'
      this.username = undefined
      this.password = undefined
      this.postService = postService
      this.state = $state
      this.loginService = loginService
      $log.log('twtr-post ...')
    }

    post () {
      this.postService.post(this.username, this.password, this.content)
      this.state.go('post',
                    { username: this.username, password: this.password },
                    { reload: true })
    }
  }

export const twtrPost = {
  controller,
  templateUrl,
  controllerAs: 'post'
}
