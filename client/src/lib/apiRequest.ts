export const apiRequest = async (url: string, options?: RequestInit) =>
  await fetch(`${import.meta.env.VITE_BACKEND_URL}${url}`, {
    ...options,
    credentials: "include",
    headers: {
      ...options?.headers,
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
