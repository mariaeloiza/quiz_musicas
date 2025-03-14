
import './globals.css'; 

export const metadata = {
  title: 'Quiz Disney',
  description: 'Aplicação Next.js com fonte personalizada',
};

export default function Layout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link href="https://fonts.cdnfonts.com/css/waltograph" rel="stylesheet" />
      </head>
      <body>{children}</body>
    </html>
  );
}

