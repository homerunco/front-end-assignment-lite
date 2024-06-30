import { baseUrl } from '@/utils/constant.js'

export function generateFetchUrl(options = {}) {
  const url = new URL(baseUrl)
  const searchParameters = url.searchParams

  searchParameters.append('amount', 10)

  if (options.difficulty) {
    searchParameters.append('difficulty', options.difficulty)
  }

  return url
}
