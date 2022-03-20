import DevelopmentLogging from "~/utils/logging";
import { Plugin } from '@nuxt/types'
import {AxiosError} from "axios";

const axiosPlugin: Plugin = ({$axios}) => {
  $axios.onRequest(request => {
    DevelopmentLogging(`Starting request with axios to ${request.url}`)
    if (request.headers) DevelopmentLogging(request.headers)
    if (request.data) DevelopmentLogging(request.data)
  })


  $axios.onError((error: AxiosError) => {
    DevelopmentLogging('Error occured on axios')
    DevelopmentLogging(error.message)
  })
}

export default axiosPlugin
