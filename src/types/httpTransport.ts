export type ApiResponse<ConcreteDTO = Record<any, any>> = {
  result: boolean
  status: number
  data?: ConcreteDTO | null
  headers?: Record<any, any>
}

export type RequestProps = {
  method: string
  path: string
  payload: any
}
