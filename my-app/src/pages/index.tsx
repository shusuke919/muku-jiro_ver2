import Image from 'next/image'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
  <span>ムクジロー商品一覧</span>
   
    </main>
  )
}



// // 必要なパッケージをインポートします
// import { GetServerSideProps } from 'next';
// import fetch from 'node-fetch';

// // Storefront APIのエンドポイントとアクセストークンを設定します
// const apiEndpoint = process.env.NEXT_PUBLIC_SHOPIFY_API_ENDPOINT;
// const accessToken = process.env.NEXT_PUBLIC_SHOPIFY_ACCESS_TOKEN;

// // 商品情報を取得するGraphQLクエリを定義します
// const query = `
//   {
//     products(first: 10) {
//       edges {
//         node {
//           id
//           title
//           description
//           handle
//           images(first: 1) {
//             edges {
//               node {
//                 src
//               }
//             }
//           }
//           priceRange {
//             minVariantPrice {
//               amount
//               currencyCode
//             }
//           }
//         }
//       }
//     }
//   }
// `;

// // 商品情報を取得する関数を定義します
// export const getServerSideProps: GetServerSideProps = async () => {
//   const response = await fetch(apiEndpoint, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//       'X-Shopify-Storefront-Access-Token': accessToken,
//     },
//     body: JSON.stringify({ query }),
//   });

//   const jsonResponse = await response.json();

//   if (jsonResponse.errors) {
//     console.error('Error fetching products:', jsonResponse.errors);
//     return { notFound: true };
//   }

//   const products = jsonResponse.data.products.edges.map((edge: any) => edge.node);
//   return { props: { products } };
// };