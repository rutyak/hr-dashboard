const cloudinary = require("../storage/Cloudinary");

const createController = (model) => {
  return async (req, res) => {
    const {
      name,
      email,
      phone,
      department,
      experience,
      resume,
      declaration,
      joiningDate,
      position,
    } = req.body;

    console.log(department, email, joiningDate, name, phone, position);
    console.log(model.modelName);

    // Function to format date to dd/mm/yyyy
    const formatDate = (date) => {
      if (!date) return null; // Handle undefined or null dates
      const d = new Date(date);
      const day = String(d.getDate()).padStart(2, "0");
      const month = String(d.getMonth() + 1).padStart(2, "0");
      const year = d.getFullYear();
      return `${day}/${month}/${year}`;
    };

    try {
      let newData;
      switch (model.modelName) {
        case "Candidate":
          console.log("Candidate clicked !!");
          const result = await cloudinary.uploader.upload(req.file.path, {
            resource_type: "auto",
            folder: "files",
          });

          newData = await model.create({
            name,
            email,
            phone,
            department,
            experience,
            resume: result.url,
            declaration,
          });
          break;
        case "Employee":
          console.log("Employee in backend working as expected::");
          newData = await model.create({
            department,
            email,
            joiningDate: formatDate(joiningDate), // Format the joiningDate field
            name,
            phone,
            position,
          });
          break;
        case "Attendance":
          newData = await model.create({});
          break;
        case "Leave":
          newData = await model.create({});
          break;
        default:
          return res.status(400).json({ message: "Invalid model type" });
      }

      res.status(201).json(newData);
    } catch (error) {
      console.error("Error creating data:", error);
      res.status(500).json({ message: error.message });
    }
  };
};

module.exports = createController;
