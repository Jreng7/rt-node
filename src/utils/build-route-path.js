export function buildRoutePath(path){

  const routeParametersPath = /:([a-zA-Z]+)/g
  const pathWithParams = path.replaceAll(routeParametersPath, /([a-z0-9\-_]+)/g)

  const regexParams = new RegExp(`^${pathWithParams}`)

  return regexParams;

}