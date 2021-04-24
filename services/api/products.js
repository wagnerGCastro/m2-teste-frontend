import service from '@/plugins/axios'

export function getProductsAll() {
  return service.request({
    url: '/products',
    method: 'get'
  })
}
