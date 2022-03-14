export type ApiResponse<ConcreteDTO = Record<any, any>> = {
  result: boolean
  status: number
  response?: ConcreteDTO | null
  headers?: Record<any, any>
}

export type AbstractRequestProps = {
  method: string
  path: string
  payload: any
}
