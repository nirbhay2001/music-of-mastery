import {useState} from "react";
import "./TeacherEditProfile.css";
import profileImage from "./profileimage.jpg";
import {useNavigate} from "react-router-dom";
import { useParams } from 'react-router-dom';
import axios from "axios";
import { toast } from 'react-toastify';
import { useSelector } from 'react-redux';
import { backendUrl } from "../../url";

const TeacherEditProfile = () => {

  const teacher  = useSelector((state) => state.auth);

    const [firstName,setFirstName] = useState('');
    const [lastName,setLastName] = useState('');
    const [username,setUserName] = useState("");
    const [instructorType,setInstructorType] = useState("");
    const [aboutme,setAboutMe] = useState("");
    const [websitelink,setWebsiteLink] = useState("");
    const [twitterlink,setTwitterLink] = useState("");
    const [linkedinlink,setLinkedinLink] = useState("");
    const [youtubelink,setYoutubeLink] = useState("");
    // const [file,setFile] = useState("");
    const [avatar, setAvatar] = useState();
    const [avatarPreview, setAvatarPreview] = useState(profileImage);

    const navigate = useNavigate();
    const { id } = useParams();


    const updateProfileDataChange = (e) => {
      const reader = new FileReader();
  
      reader.onload = () => {
        if (reader.readyState === 2) {
          setAvatarPreview(reader.result);
          setAvatar(reader.result);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    };


  const addTeacherData = async(e) =>{
    e.preventDefault();

      // const formData = new FormData();
      // // formData.append("photo",file);
      
      // formData.append("avatar", avatar);
      // formData.append("firstName",firstName);
      // formData.append("lastName",lastName);
      // formData.append("username",username);
      // formData.append("instructorType",instructorType);
      // formData.append("aboutme",aboutme);
      // formData.append("websitelink",websitelink);
      // formData.append("twitterlink",twitterlink);
      // formData.append("linkedinlink",linkedinlink);
      // formData.append("youtubelink",youtubelink);


      const data = {
        avatar: avatar,
        firstName:firstName,
        lastName:lastName,
        username:username,
        instructorType:instructorType,
        aboutme:aboutme,
        websitelink:websitelink,
        twitterlink:twitterlink,
        linkedinlink:linkedinlink,
        youtubelink:youtubelink

      }
      console.log("frontend wala form data")
      console.log(data);


      // const config = {
      //   headers: {
      //     "Content-type": "multipart/form-data",
          
      //   },
      // };

      try{
        console.log(formData);
          const response = await axios.put(`${backendUrl}/api/v1/user/teachereditprofile/${id}`,formData, config);

            console.log("yaha tak code chala hai")
            console.log(response.data);

          if(response.status == 200){
             navigate('/teacher/dashboard');
            toast.success("Your Profile Updated is Successfully");
          }else{
            alert("error");
          }



      }catch(error){
        console.error("Request error:", error);
        alert("An error occurred while sending the request.");
      }

  }

  return (
    <>
      <div className="container-body">
        <div className="min-w-screen min-h-screen flex items-center justify-center px-5 py-5">
          <div
            className="bg-gray-100 text-gray-500 rounded-3xl w-full overflow-hidden"
            style={{ maxWidth: "1000px" }}
          >
            <div
              className="w-full py-10 px-5 md:px-10 mx-auto max-w-screen-md"
              style={{ maxWidth: "70%" }}
            >
              <h2 className="updateProfileHeading">Update Teacher Profile</h2>

              <div className="flex -mx-3 py-5">
                <div className="w-1/2 px-3">
                  <label
                    htmlFor="firstName"
                    className="text-xs font-semibold px-1"
                  >
                    First name
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={firstName}
                      onChange={(e)=>setFirstName(e.target.value)}
                      className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="John"
                      // onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="w-1/2 px-3 mb-3">
                  <label
                    htmlFor="lastName"
                    className="text-xs font-semibold px-1"
                  >
                    Last name
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={lastName}
                      onChange={(e)=>setLastName(e.target.value)}
                      className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="Smith"
                      // onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="flex -mx-3 -my-5">
                <div className="w-full px-3 mb-5">
                  <label htmlFor="email" className="text-xs font-semibold px-1">
                    UserName
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      id="username"
                      name="username"
                      value={username}
                      onChange={(e)=>setUserName(e.target.value)}
                      className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="username9430"
                      // onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="flex -mx-3">
                <div className="w-full px-3 mb-5">
                  <label htmlFor="email" className="text-xs font-semibold px-1">
                    What Type Of Instructor
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      id="instructorType"
                      name="instructorType"
                      value={instructorType}
                      onChange={(e)=>setInstructorType(e.target.value)}
                      className="w-full pl-10 pr-3 py-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500"
                      placeholder="Creative & Engaging Online Courses"
                      // onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              

              <div className="flex -mx-3 -my-5">
                <div className="w-full px-3 mb-5">
                  <label htmlFor="email" className="text-xs font-semibold px-1">
                    About Me
                  </label>
                  <div className="flex">
                    <textarea
                      id="aboutme"
                      name="aboutme"
                      value={aboutme}
                      onChange={(e)=>setAboutMe(e.target.value)}
                      className="w-full pl-3 pr-3 pt-2 pb-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 resize-none"
                      placeholder="About me..."
                      // onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="flex -mx-3 -my-5">
                <div className="w-full px-3 mb-5">
                  <label htmlFor="email" className="text-xs font-semibold px-1">
                      Your WebSite Link
                  </label>
                  <div className="flex">
                    <textarea
                      id="websitelink"
                      name="websitelink"
                      value={websitelink}
                      onChange={(e)=>setWebsiteLink(e.target.value)}
                      className="w-full pl-3 pr-3 pt-2 pb-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 resize-none"
                      placeholder="Write link..."
                      // onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="flex -mx-3 -my-5">
                <div className="w-full px-3 mb-5">
                  <label htmlFor="email" className="text-xs font-semibold px-1">
                    Your Twitter link
                  </label>
                  <div className="flex">
                    <textarea
                      id="twitterlink"
                      name="twitterlink"
                      value={twitterlink}
                      onChange={(e)=>setTwitterLink(e.target.value)}
                      className="w-full pl-3 pr-3 pt-2 pb-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 resize-none"
                      placeholder="Write twitter link..."
                      // onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="flex -mx-3 -my-5">
                <div className="w-full px-3 mb-5">
                  <label htmlFor="email" className="text-xs font-semibold px-1">
                    Your Linkedin Account Link
                  </label>
                  <div className="flex">
                    <textarea
                      id="linkedinlink"
                      name="linkedinlink"
                      value={linkedinlink}
                      onChange={(e)=>setLinkedinLink(e.target.value)}
                      className="w-full pl-3 pr-3 pt-2 pb-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 resize-none"
                      placeholder="Write linkedin link..."
                      // onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
              </div>

              <div className="flex -mx-3 -my-5">
                <div className="w-full px-3 mb-5">
                  <label htmlFor="email" className="text-xs font-semibold px-1">
                    Your YouTube Link
                  </label>
                  <div className="flex">
                    <textarea
                      id="youtubelink"
                      name="youtubelink"
                      value={youtubelink}
                      onChange={(e)=>setYoutubeLink(e.target.value)}
                      className="w-full pl-3 pr-3 pt-2 pb-2 rounded-lg border-2 border-gray-200 outline-none focus:border-indigo-500 resize-none"
                      placeholder="Write youtube link..."
                      // onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
              </div>

              <div id="updateProfileImage" className="flex items-center">
                <img src={avatarPreview} alt="Avatar Preview" className="mr-4" />
                <input
                  type="file"
                  name="avatar"
                  accept="image/*"
                  // onChange={(e)=>setFile(e.target.files[0])}
                  // onChange={updateProfileDataChange}
                  onChange={updateProfileDataChange}
                />
              </div>

              <div className="flex -mx-3 py-5">
                <div className="w-full px-3 ">
                  <button
                    className="block w-full max-w-xs mx-auto bg-indigo-500 hover:bg-indigo-700 focus:bg-indigo-700 text-white rounded-lg px-1 py-1 font-semibold"
                    type="submit"
                    onClick={addTeacherData}
                    // onClick={handleRegister}
                  >
                    Update Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeacherEditProfile;
