// Tambahkan basePath ke path file di /public (dibutuhkan saat di-host di subfolder, mis. GitHub Pages)
export const asset = (path: string) => `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
