import React from "react";
import { PoliciesDetails } from "@/components";
import { navItems } from "@/constDatas/navItems";

// export async function generateMetadata({ params }){
//   const { slug } = params; 
//    const info = navItems[2]?.Catagories?.find((item) => item?.slug === slug);

//   return {
//     title: info?.metaTitle,
//     description: info?.metaDescription,
    
//     metadataBase: new URL(info?.metaUrl),
//     keywords: info?.metaKeyword,
//     // openGraph: {
//     //   images: "/og-image.png",
//     // },
//   }; 
// }
const Policies = ({ params }) => {
  const { slug } = params;
  return (
    <main className="min-h-[80vh]">
      <PoliciesDetails slug={slug} />
    </main>
  );
};

export default Policies;
