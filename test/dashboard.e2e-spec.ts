import { expect, test } from '@playwright/test'

test('display day orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('20', { exact: true })).toBeVisible()
  expect(page.getByText('-5% em relação a ontem')).toBeVisible()

  await page.waitForTimeout(2000)
})

test('display month orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('200')).toBeVisible()
  expect(page.getByText('+7% em relação ao mês passado')).toBeVisible()

  await page.waitForTimeout(2000)
})

test('display month canceled orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('5', { exact: true })).toBeVisible()
  expect(page.getByText('-3% em relação ao mês passado')).toBeVisible()

  await page.waitForTimeout(2000)
})

test('display month revenue metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  expect(page.getByText('R$ 0,20')).toBeVisible()
  expect(page.getByText('-5% em relação ao mês passado')).toBeVisible()

  await page.waitForTimeout(2000)
})
