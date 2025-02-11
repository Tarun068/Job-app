import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import fs from "fs";
import { v4 as uuidv4 } from "uuid";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const app = express();
const PORT = process.env.PORT || 5000; // Use dynamic port for deployment

// Middleware
app.use(cors());
app.use(bodyParser.json());

const filePath = "./jobs.json";

// POST route to save job data
app.post("/add-job", async (req, res) => {
  const {
    title,
    type,
    description,
    location,
    salary,
    companyName,
    companyDescription,
    email,
    number,
  } = req.body;

  const newJob = {
    id: Math.floor(Math.random() * 100),
    title,
    type,
    description,
    location,
    salary,
    company: {
      name: companyName,
      description: companyDescription,
      contactEmail: email,
      contactPhone: number,
    },
  };

  try {
    let jobs = [];
    if (fs.existsSync(filePath)) {
      const data = await fs.promises.readFile(filePath, "utf8");
      jobs = data ? JSON.parse(data) : [];
    }

    jobs.push(newJob);

    await fs.promises.writeFile(filePath, JSON.stringify(jobs, null, 2));

    console.log("Job saved successfully! ✅");
    res.status(201).json({ message: "Job added successfully", job: newJob });
  } catch (error) {
    console.error("Error handling job data:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
