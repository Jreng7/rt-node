export function buildRoutePath(path){

  const routeParametersPath = /:([a-zA-Z])+/g
  const pathWithParams = path.replaceAll(routeParametersPath, /[a-z]/g)

}