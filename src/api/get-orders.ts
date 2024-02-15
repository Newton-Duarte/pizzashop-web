import { api } from '@/lib/axios'
import { OrderStatus } from '@/types/order-status'

export interface GetOrdersResponse {
  orders: {
    orderId: string
    createdAt: string
    status: OrderStatus
    customerName: string
    total: number
  }[]
  meta: {
    pageIndex: number
    perPage: number
    totalCount: number
  }
}

export async function getOrders() {
  const response = await api.get<GetOrdersResponse>('/orders', {
    params: {
      pageIndex: 0,
    },
  })

  return response.data
}
