// filepath: /home/lokesh/Desktop/React-App/ai-resume-builder/strapi-backend/ai-resume-admin/config/database.js
module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      connectionString:
        "postgresql://lokesh:npg_U6surhAm5jeo@ep-crimson-fog-a4td99if-pooler.us-east-1.aws.neon.tech/ai-resume-builder?sslmode=require",
      ssl: {
        rejectUnauthorized: false,
      },
    },
  },
});
