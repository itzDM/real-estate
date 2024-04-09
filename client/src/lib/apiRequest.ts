export const apiRequest = async (url: string, options?: RequestInit) =>
  await fetch(`http://localhost:8000/api/v1${url}`, {
    ...options,
    credentials: "include",
  }).then((res) => res.json());
