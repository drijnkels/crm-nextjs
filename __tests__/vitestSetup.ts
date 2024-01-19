// vitestSetup.ts
import { beforeAll, vi } from "vitest";
beforeAll(() => {
  vi.mock("next/router", () => require("next-router-mock"));
  vi.mock('next/navigation', () => {
    return {
      __esModule: true,
      usePathname: () => ({
        pathname: '',
      }),
      useRouter: () => ({
        push: vi.fn(),
        replace: vi.fn(),
        prefetch: vi.fn(),
      }),
      useSearchParams: () => ({
        get: () => {}
      })
    }
  })
})