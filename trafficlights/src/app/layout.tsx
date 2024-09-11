import '../styles.css'
export const metadata = {
  title: 'Signals',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='flex justify-center items-center h-screen'>{children}</body>
    </html>
  )
}
