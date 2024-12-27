const cloudinary = require("../storage/Cloudinary");

const createController = (model) => {
  return async (req, res) => {
    const {
      name,
      email,
      phone,
      department,
      experience,
      declaration,
      joiningDate,
      position,
      designation,
      status,
      date,
      task,
      reason,
    } = req.body;

    console.log("Incoming data:", req.body);
    console.log("Model name:", model.modelName);

    const formatDate = (date) => {
      if (!date) return null;
      const d = new Date(date);
      const day = String(d.getDate()).padStart(2, "0");
      const month = String(d.getMonth() + 1).padStart(2, "0");
      const year = d.getFullYear();
      return `${day}/${month}/${year}`;
    };

    const uploadFile = async (filePath, folder) => {
      try {
        if (!filePath) throw new Error("File not provided");
        const result = await cloudinary.uploader.upload(filePath, {
          resource_type: "auto",
          folder,
        });
        return result.url;
      } catch (error) {
        console.error("Error uploading file:", error);
        throw new Error("Failed to upload file");
      }
    };

    try {
      let newData;

      switch (model.modelName) {
        case "Candidate":
          console.log("Creating Candidate...");
          if (!req.file) {
            return res.status(400).json({ success: false, message: "Resume file is required" });
          }

          const resumeUrl = await uploadFile(req.file.path, "resumes");

          newData = await model.create({
            name,
            email,
            phone,
            department,
            experience,
            resume: resumeUrl,
            declaration,
          });
          break;

        case "Employee":
          console.log("Creating Employee...");
          newData = await model.create({
            department,
            email,
            joiningDate: formatDate(joiningDate),
            name,
            phone,
            position,
          });
          break;

        case "Attendance":
          console.log("Creating Attendance...");
          newData = await model.create({
            name,
            designation,
            department,
            task,
            status,
          });
          break;

        case "Leave":
          console.log("Creating Leave...");
          const docsUrl = req.file
            ? await uploadFile(req.file.path, "leave-documents")
            : null;

          newData = await model.create({
            name,
            date: formatDate(date),
            reason,
            status,
            docs: docsUrl,
          });
          break;

        default:
          console.error("Invalid model type");
          return res.status(400).json({ success: false, message: "Invalid model type" });
      }

      res.status(201).json({ success: true, data: newData });
    } catch (error) {
      console.error("Error creating data:", error);
      res.status(500).json({
        success: false,
        message: error.message,
      });
    }
  };
};

module.exports = createController;
