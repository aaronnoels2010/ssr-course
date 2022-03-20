export default function DevelopmentLogging (message: string) {
  if (process.env.NODE_ENVIRONMENT === 'development') {
    console.log(message)
  }
}
