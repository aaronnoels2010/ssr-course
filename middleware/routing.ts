import { Middleware } from '@nuxt/types'
import DevelopmentLogging from "~/utils/logging";

const RoutingMiddleware: Middleware = ({route, store}) => {
  let firstPartOfNewPath = route.fullPath.split('/');
  firstPartOfNewPath[1] = firstPartOfNewPath[1] !== '' ? firstPartOfNewPath[1] : 'home'
  store.commit('navbar/setNewActivatedRoute', firstPartOfNewPath[1])
  DevelopmentLogging(`Routing to ${route.fullPath}`)
}

export default RoutingMiddleware
