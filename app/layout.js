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
            <meta property="og:title" content="DRFT Global"/>
            <meta property="og:description" content="Fueling Talent with limitless reach"/>
            <meta property="og:image" content="/Meta.png" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content="https://drftglobal.com" />
        </head>
        <body
            className={`Montserrat antialiased`}
        >
        {children}
        </body>
        </html>
    );
}
