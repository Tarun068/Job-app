import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "jobs.json");

  if (req.method === "POST") {
    try {
      let jobs = [];

      if (fs.existsSync(filePath)) {
        const fileData = fs.readFileSync(filePath, "utf8");
        jobs = JSON.parse(fileData);
      }

      // Create new job object
      const newJob = {
        id: jobs.length ? String(Number(jobs[jobs.length - 1].id) + 1) : "1",
        title: req.body.title,
        type: req.body.type,
        description: req.body.description,
        location: req.body.location,
        salary: req.body.salary,
        company: {
          name: req.body.companyName,
          description: req.body.companyDescription,
          contactEmail: req.body.email,
          contactPhone: req.body.number,
        },
      };

      jobs.push(newJob);

      fs.writeFileSync(filePath, JSON.stringify(jobs, null, 2), "utf8");

      res.status(201).json({ message: "Job added successfully", job: newJob });
    } catch (error) {
      console.error("Error saving job:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    res.status(405).json({ error: "Method Not Allowed" });
  }
}
