import '../../styles/main.css'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <link rel="icon" href="/Logo.png" />
                <meta
                    name="viewport"
                    content="width=device-width, initial-scale=1.0"
                />
                <meta
                    name="description"
                    content="Web site created using create-react-app"
                />
                <title>Tiff's Portfolio</title>
                <meta name="description" content="Web site created..." />
            </head>
            <body>
                <div id="root">{children}</div>
            </body>
        </html>
    )
}
