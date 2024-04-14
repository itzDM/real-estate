export const apiRequest = async (url: string, options?: RequestInit) =>
  await fetch(`http://localhost:8000/api/v1${url}`, {
    ...options,
    credentials: "include",
    headers: {
      ...options?.headers,
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());
