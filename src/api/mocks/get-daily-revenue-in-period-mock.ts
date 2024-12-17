import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    {
      date: '01/01/2024',
      receipt: 2000,
    },
    {
      date: '02/01/2024',
      receipt: 300,
    },
    {
      date: '03/01/2024',
      receipt: 700,
    },
    {
      date: '04/01/2024',
      receipt: 178,
    },
    {
      date: '05/01/2024',
      receipt: 900,
    },
    {
      date: '06/01/2024',
      receipt: 1750,
    },
    {
      date: '07/01/2024',
      receipt: 1300,
    },
  ])
})
