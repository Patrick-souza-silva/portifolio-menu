export const metadata = {
  title: 'Portifólio Menu',
  icons: {
    icon: '/path-to-your-icon.ico', // Substitua pelo caminho da sua imagem
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/path-to-your-icon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
