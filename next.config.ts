import type { NextConfig } from "next";

const HIPAA =
  "https://patientviewer.com/WebFormsGWT/GWT/WebForms/WebForms.html?DOID=35361&RKID=13139&WSDID=179180";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        source: "/privacy",
        destination: HIPAA,
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
