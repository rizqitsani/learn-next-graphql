export const DEFAULT_TOAST_MESSAGE = {
  loading: 'Loading...',
  success: 'Success',
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: (err: any) =>
    err?.message || 'Terjadi kesalahan, mohon coba beberapa saat lagi',
};
