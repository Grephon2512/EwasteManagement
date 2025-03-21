export default {
  dialect: "postgresql",
  schema: "<source />utils/db/schema.ts",
  out: "./drizzle",
  dbCredentials: {
    //url: "postgresql://zerotohero_owner:SPVe2rokvBf6@ep-bitter-shadow-a5lbwa60.us-east-2.aws.neon.tech/zerotohero?sslmode=require",

    url: process.env.DATABSE_URL,
    // connectionString:
    //   "postgresql://zerotohero_owner:SPVe2rokvBf6@ep-bitter-shadow-a5lbwa60.us-east-2.aws.neon.tech/zerotohero?sslmode=require",

    connectionString: process.env.DATABSE_URL,
  },
};
