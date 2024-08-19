import React, { useState, useEffect } from "react";
import "./dashboardteacher.css";
import profileImage from "./profileimage.jpg";
import classicRock from "./classic-rock.jpg";
import contactUsBuy from "./contactUsBg.jpg";
import courseRock from "./course_rock.jpg";
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import XIcon from '@mui/icons-material/X';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import Slidebar from "./Sidebar";
import { useParams } from "react-router";
import { useSelector } from 'react-redux';
import axios from "axios";
import { backendUrl } from "../../url";

const DashboardTeacherProfile = () => {

  const { id } = useParams("");

  const teacher  = useSelector((state) => state.auth);

  const [teacherData, setTeacherData] = useState("");
  const [coursesData, setCoursesData] = useState([]);
  const [numofstudent,setNumOfStudent] = useState("");
  const [numofcourse,setNumOfCourse] = useState("");


  const getData = async () => {
    try {
      const response = await axios.get(
        `${backendUrl}/api/v1/user/dashboardteacherprofile/${id}`,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }

        
      );
      console.log("Response status:", response.status);

      if (response.status !== 200) {
        console.error("Error response:", response);
        throw new Error("No data available");
      }

      const data = response.data;

      console.log("____________________________");
      console.log("Fetched data:", data);
      setTeacherData(data.teacher);
      setCoursesData(data.courses);
      setNumOfStudent(data.noOfStudents);
      setNumOfCourse(data.noofcourses);


    } catch (error) {
      console.error("Fetch error:", error.message);
      alert("Error fetching data");
    }
  };

  useEffect(() => {
    getData();
  }, [id]);


  return (
    <div className="dashboarddiv">
    <Slidebar teacher={teacher}/>

    <div className="body_container dashboardContainer">
    
      <div className=" m-12 grid gap-4 sm:grid-cols-12">
        <div className="mr-4 min-h-[100px] rounded  sm:col-span-8">
          <div className=" ml-12 left_container">
            <div className="ud-heading-sm instructor-profile">Instructor</div>
            <h1 className="ud-heading-name instructor-name k">{teacherData.firstName + " " + teacherData.lastName}</h1>
            <h2 className="ud-heading-md instructor-type">
              Singer and Lead Instructor
            </h2>
            <div className="popper-module--popper--mM5Ie">
              <div
                className="instructor-profile--badge--kSr6x"
                id="u114-popper-trigger--1"
                aria-expanded="false"
                tabIndex="0"
              >
                <div className="ud-badge ud-heading-xs instructor-profile--indigo--yjiAZ">
                  Mastery Music Instructor Partner
                </div>
              </div> 
            </div>
            <div className="instructor-profile--instructor-stats--cMiSc">
                <div className="instructor-profile--stat--zQM9I">
                  <div className="ud-heading-sm instructor-profile-stats-title--nB9RQ">Students</div>
                  <div className="ud-heading-xl" style={{fontWeight:'700', lineHeight: '1.2', fontSize: '1.9rem', color:'black'}}>{numofstudent}</div>
                </div>
                <div className="instructor-profile--stat--zQM9I" style={{ marginLeft: '40px' }}>
                  <div className="ud-heading-sm instructor-profile-stats-title--nB9RQ">Reviews</div>
                  <div className="ud-heading-xl" style={{fontWeight:'700', lineHeight: '1.2', fontSize: '1.9rem', color:'black'}}>0</div>
                </div>
            </div>
            <h2 className="ud-heading-lg instructor-profile--about-me--Bous1">About me</h2>

            <div className="show-more-module--container--teP7C">
            <span data-testid="show-more-checkedstate" id="u114-show-more--3" data-type="checkbox" data-checked="" style={{ display: 'none' }}></span>
            <div className="show-more-module--content--Rw-xr" style={{ maxHeight: '32rem' }}>
                <div tabIndex="-1">
                    <div data-purpose="instructor-description">
                        <p className="about_paragraph">
                        As a passionate music teacher, I am dedicated to nurturing the musical talents and aspirations of my students. With a deep appreciation for various musical genres and styles, I strive to create engaging and enriching learning experiences tailored to each student's unique interests and abilities.

                        My teaching philosophy revolves around fostering a supportive and inspiring environment where students feel empowered to explore their musical creativity while honing their technical skills. Whether it's mastering a new instrument, refining vocal techniques, or delving into music theory, I am committed to guiding my students on their musical journey with patience, encouragement, and enthusiasm.
                        </p>
                    </div>
                </div>
            </div>
        </div>


        <h2 class="ud-heading-lg instructor-courses--my-courses-heading--s6swT">My courses ({numofcourse})</h2>

          <div className="grid gap-6 sm:grid-cols-12">


          {coursesData.map((course,index)=>(
              <div key={index} className="min-h-[100px] rounded  sm:col-span-6">
                <a href="#">
                  <img
                    src={course.imageUrl}
                    alt={course.title}
                    
                  />
                </a>
                <p className="course-title text-center">{course.title}</p>
              </div>

            ))}



              {/* <div className="min-h-[100px] rounded  sm:col-span-6">
              <a href="#">
                  <img
                    src={contactUsBuy}
                    alt="Course Image"
                  />
                </a>
                <p className="course-title text-center">course</p>
              </div> */}
              {/* <div className="min-h-[100px] rounded  sm:col-span-6">
              <a href="#">
                  <img
                    src={courseRock}
                    alt="Course Image"
                  />
                </a>
                <p className="course-title text-center">course</p>
              </div> */}


          </div>


          </div>
        </div>
        <div className=" mr-4 min-h-[100px] rounded  sm:col-span-4">
          <div className=" rounded-full overflow-hidden h-60 w-60">
            <img
              src={profileImage}
              alt="Profile Image"
              className="w-full h-full object-cover"
            />
          </div>
          <a href="#">
            <div className="rectangle_container flex justify-center items-center" >
                <div className="rectangle_icon"> <span style={{color:'black'}}><InsertLinkIcon/> Website</span></div>
            </div>
          </a>

          <a href="#">
            <div className="rectangle_container flex justify-center items-center" >
                <div className="rectangle_icon"><span style={{color:'black'}}><XIcon/> Twitter</span></div>
            </div>
          </a>

          <a href="#">
            <div className="rectangle_container flex justify-center items-center" >
                <div className="rectangle_icon"><span style={{color:'black'}}><LinkedInIcon/> Linkedin</span></div>
            </div>
          </a>

          <a href="#">
            <div className="rectangle_container flex justify-center items-center" >
                <div className="rectangle_icon"><span style={{color:'black'}}><YouTubeIcon/> Youtube</span></div>
            </div>
          </a>
        </div>
              
      </div>
      </div>
    </div>
  );
}

export default DashboardTeacherProfile;
