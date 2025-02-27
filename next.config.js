module.exports = {
  async redirects() {
    return [
      {
        source: "/not-found",
        has: [{ type: "query", key: "missingParam" }], // Example: Checks if "missingParam" is present in the URL
        destination: "/not-found",
        permanent: false,
      },
    ];
  },
  images: {
    domains: ["docs.ekaya-spaces.com"],
  },
};
