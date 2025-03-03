export const metadata = {
  title: "One Year Internship in the USA | DRFT Global",
  description:
    "One year paid internship in the hospitality industry - OnSite/USA",
  keywords: [
    "Paid internship in hospitality industry",
    "Hospitality internship USA",
    "Hospitality job openings",
    "Chef positions USA",
    "Food and beverage jobs",
    "Front office hospitality jobs",
    "Hospitality career opportunities",
    "Entry-level hospitality positions",
    "Hospitality industry professionals",
    "Hospitality industry jobs USA",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/drft-web/app/favicon.ico" />

        {/* Primary Meta Tags */}
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords.join(", ")} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="/Meta.png" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://drftglobal.com" />

        {/* Twitter Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={metadata.title} />
        <meta name="twitter:description" content={metadata.description} />
        <meta name="twitter:image" content="/Meta.png" />
      </head>
      <body className={`Montserrat antialiased`}>{children}</body>
    </html>
  );
}
