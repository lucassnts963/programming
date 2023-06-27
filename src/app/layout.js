import './global.css'

export default function RootLayout({ children }) {
  return (
    <html>
      <body className='bg-zinc-900 text-zinc-50'>{children}</body>
    </html>
  )
}