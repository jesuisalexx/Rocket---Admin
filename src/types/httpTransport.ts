export type ApiResponse = {
  result: boolean,
  status: number,
  data?: any,
  meta?: any,
  headers?: Record<any, any>,
}

export type RequestProps = {
  method: string
  path: string
  payload: any
}
