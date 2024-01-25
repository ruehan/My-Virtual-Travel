import Navbar from "../navigation/layout"

export default function NavLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
        <>
            <Navbar />
            <div>{children}</div>
        </>
    )
  }