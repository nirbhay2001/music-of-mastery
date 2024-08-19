const cloudinary = require('cloudinary').v2; 
const teacherSchema = require('../models/teacher'); 

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET
});

exports.updateTeacherProfile = async (req, res) => {

    const { id } = req.params;
    console.log(req)

    try {
        

        const newTeacherData = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username,
            instructorType: req.body.instructorType,
            aboutme: req.body.aboutme,
            websitelink: req.body.websitelink,
            twitterlink: req.body.twitterlink,
            linkedinlink: req.body.linkedinlink,
            youtubelink: req.body.youtubelink,
        };
        console.log("new teacher data")
        console.log(newTeacherData);

        if (req.body.avatar) {
            const teacher = await teacherSchema.findById(id);
            // if (teacher.avatar && teacher.avatar.public_id) {
            //     await cloudinary.uploader.destroy(teacher.avatar.public_id);
            // }

            if (teacher && teacher.avatar && teacher.avatar.public_id) {
                await cloudinary.uploader.destroy(teacher.avatar.public_id);
            }

            const myCloud = await cloudinary.uploader.upload(req.body.avatar, {
                folder: "avatars",
                width: 150,
                crop: "scale",
            });

            newTeacherData.avatar = {
                public_id: myCloud.public_id,
                url: myCloud.secure_url,
            };
        } else {
            newTeacherData.avatar = null;
        }

        const updatedTeacher = await teacherSchema.findByIdAndUpdate(id, newTeacherData, {
            new: true,
            runValidators: true,
            useFindAndModify: false,
        });
        console.log(updatedTeacher);

        res.status(200).json({
            success: true,
            data: updatedTeacher
        });

    } catch (error) {
        console.error("Error updating teacher profile:", error);
        res.status(400).json({ error: error.message });
    }

};





