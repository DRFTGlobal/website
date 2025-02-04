import "./globals.css";


export const metadata = {
    title: "DRFT Global",
    description: "Generated by create next app",
};

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <head>
            <link rel="icon" href="/drft-web/app/favicon.ico"/>
        </head>
        <body
            className={`Montserrat antialiased`}
        >
        {children}
        </body>
        </html>
    );
}
